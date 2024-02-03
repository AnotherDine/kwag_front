<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <h2 v-html = msg></h2>
  <button @click="doAxios">통신</button>
  <h3>{{ responseData??"통신 안됨" }}</h3>

</template>

<script>
export default {
  data() {
    return {
      responseData : null,
    };
  },
  methods : {
    doAxios : function() {
      this.$defaultAxios.get("/")
      .then(res => {
        this.responseData = res.data;
      })
      .catch(error => {
        alert(error);
      })
    }
  }

}
</script>

<style scoped>

</style>
