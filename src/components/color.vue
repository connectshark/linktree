<template>
<div class="color-group">
  <div
    v-for="item in colors"
    :key="item"
    @click="changeColor(item)"
    class="color-item"
    :style="{ backgroundColor: item }"
  ></div>
</div>
</template>

<script>
import LS from '../lib/LS'
export default {
  setup () {
    const colors = ['#a2d5d1', '#f78686']
    const changeColor = color => {
      document.querySelector(':root').style.setProperty(`--color`, color)
      LS.save('color', color)
    }
    return {
      colors,
      changeColor
    }
  }
}
</script>

<style lang="scss" scoped>
.color-group{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  margin: auto;
  .color-item{
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(1);
    transition: transform .3s ;

    &:hover{
      transform: scale(1.2);
    }
  }
}
</style>