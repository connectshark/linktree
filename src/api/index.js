import axios from 'axios'

const api = axios.create({
  timeout: 60000,
  baseURL: import.meta.env.VITE_APP_URL
})


export default api