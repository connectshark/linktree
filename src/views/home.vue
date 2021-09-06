<template>
<div class="home">
  <div class="banner">
    <div class="content">
      <div class="hero"></div>
      <h1>Nosegates</h1>
      <p class="description">本名鼻子</p>
      <div class="social-group">
        <Social
          v-for="(item, index) in data.social"
          :key="index"
          :url="item.url"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
  <ul class="link">
    <Loading v-if="loading"/>
    <Link
      v-for="(item, index) in data.links" :key="index"
      :url="item.url"
      :name="item.name"
    />
    <Link
      :url="'https://www.jkos.com/contact-person?j=ContactPerson:900387796'"
      :name="'覺得慢嗎?贊助我讓速度加快'"
    />
  </ul>
  <Color/>
</div>
</template>

<script>
import Social from '../components/social.vue'
import Link from '../components/link.vue'
import Loading from '../components/loading.vue'
import Color from '../components/color.vue'
import request from '../hook/request'
import { reactive, ref } from 'vue'

export default {
  components: {
    Social,
    Link,
    Loading,
    Color
  },
  setup () {
    const data = reactive({
      links: [],
      social: []
    })
    const loading = ref(true)
    request.getGithubData('index.json')
      .then(res => {
        data.links = res.links
        data.social = res.social
        loading.value = false
      })
      .catch(() => {
        alert('請稍候再嘗試')
        loading.value = false
      })
    return{
      data,
      loading
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
.banner{
  padding: 3rem 0;
  .content{
    width: 60%;
    margin: auto;
    text-align: center;
    .hero{
      width: 8rem;
      height: 8rem;
      background-image: url('../assets/img/hero.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 3vw;
      margin: auto;
      transition: border-radius .3s;
    }
    h1{
      font-size: 28px;
      line-height: 1.9;
      font-weight: 600;
      color: #fff;
    }
    .description{
      font-size: 16px;
      color: #fff;
      margin-bottom: 20px;
    }
    .social-group{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
    }
  }
}
}
</style>