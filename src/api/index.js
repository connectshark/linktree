import axios from 'axios'

const api = axios.create({
  timeout: 60000,
  baseURL: process.env.VUE_APP_URL
})


export default api