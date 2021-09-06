<template>
<div class="home">
  <Banner :socials="data.socials"/>
  <Link :links="data.links"/>
  <Color/>
</div>
</template>

<script>
import Banner from '../components/banner.vue'
import Link from '../components/link.vue'
import Loading from '../components/loading.vue'
import Color from '../components/color.vue'
import request from '../hook/request'
import { reactive } from 'vue'

export default {
  components: {
    Banner,
    Link,
    Loading,
    Color
  },
  setup () {
    const data = reactive({
      links: [],
      socials: []
    })
    request.getGithubData('index.json')
      .then(res => {
        data.links = res.links
        data.socials = res.social
      })
      .catch(() => {
        alert('請稍候再嘗試')
      })
    return{
      data
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/media.scss';
.home{
  width: 100%;
  max-width: 768px;
  margin: auto;
}
</style>