import api from '../api'

const request = {
  getGithubData (path) {
    return new Promise((resolve, reject) => {
      api({
        method: 'GET',
        url: 'github',
        params: {
          user: 'connectshark',
          repo: 'linktree-data',
          path: path
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
    
  }
}

export default request