import axios from 'axios'

const instance = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    timeout : 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
})


export default instance;