import { ref } from 'vue'
import api from '../api'

const request = {
  getGithubData (path) {
    const data = ref({})
    const loading = ref(true)
    api({
      method: 'GET',
      url: 'github',
      params: {
        user: 'connectshark',
        repo: 'linktree-data',
        path: path
      }
    }).then(res => {
      data.value = res.data
      loading.value = false
    })

    return {
      data,
      loading
    }
  }
}

export default request