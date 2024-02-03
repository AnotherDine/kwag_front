import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import defaultAxios from './axios/defaultAxios.js'

const app = createApp(App).use(defaultAxios);
app.mount("#app");
app.config.globalProperties.$defaultAxios = defaultAxios;
