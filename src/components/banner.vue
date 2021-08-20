<template>
<div class="banner">
  <div class="content">
    <div class="hero"></div>
    <h1>{{data.name}}</h1>
    <p class="description">{{data.description}}</p>
    <div class="social-group">
      <a class="social-btn"
        v-for="item in data.social"
        :key="item.url"
        :href="item.url"
        target="_blank"
      >
        <i :class="item.icon"></i>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { watch } from 'vue'
import request from '../hook/request'

export default {
  setup () {
    return new Promise((resolve) => {
      const { data, loading } = request.getGithubData('index.json')
      watch(loading, () => {
        resolve({
          data
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
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
      border-radius: 20px;
      margin: auto;
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
      .social-btn{
        width: 33%;
        text-align: center;
        color: #fff;
        transition: transform .3s;
        transform: scale(1);
        &:hover{
          transform: scale(1.2);
        }
        i{
          font-size: 2rem;
          line-height: 30px;
        }
      }
    }
  }
  
}
</style>