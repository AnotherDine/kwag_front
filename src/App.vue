<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="통신을 시작합니다.<br>아래 문구가 나온다면 뒷단과 정상적인 통신을 한 것 입니다." />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
