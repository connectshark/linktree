<template>
<div class="banner">
  <div class="content">
    <div class="hero"></div>
    <h1>Nosegates</h1>
    <div class="social-group">
      <div class="social-btn">
        <i class='bx bxl-facebook'></i>
      </div>
      <div class="social-btn">
        <i class='bx bxl-instagram'></i>
      </div>
      <div class="social-btn">
        <i class="fab fa-line"></i>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  setup () {
    axios({
      method: 'GET',
      baseURL: 'https://fierce-badlands-64435.herokuapp.com/',
      url: 'github',
      params: {
        user: 'connectshark',
        repo: 'linktree-data',
        path: 'index.json'
      }
    }).then(res => {
      console.log(res.data)
    })
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
.banner{
  padding: 4rem 0;
  .content{
    width: 60%;
    margin: auto;
    .hero{
      width: 8rem;
      height: 8rem;
      background-image: url('../assets/img/hero.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 50%;
      margin: auto;
    }
    h1{
      text-align: center;
      font-size: 28px;
      line-height: 1.9;
    }
    .social-group{
      .social-btn{
        display: inline-block;
        width: 33%;
        text-align: center;
        i{
          font-size: 1.5rem;
        }
      }
    }
  }
  
}
</style>