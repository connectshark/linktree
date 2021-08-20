<template>
  <router-view></router-view>
</template>

<script>
import LS from './lib/LS'
export default {
  name: 'App',
  setup () {
    const color = LS.load('color')
    if (color) {
      document.querySelector(':root').style.setProperty(`--color`, color)
    }
  }
}
</script>

<style>
@import 'assets/scss/font.scss';
:root{
  --color: #a2d5d1;
}

#app {
  font-family: 'openhuninn', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6e6e6e;
  background-color: var(--color);
  min-height: 100vh;
  transition: background .3s;
}
img{
  vertical-align: middle;
  width: 100%;
}
</style>
