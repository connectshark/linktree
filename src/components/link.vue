<template>
<ul class="link">
  <li v-for="(item, index) in links" :key="index" class="link-item">
    <a :href="item.url" target="_blank">{{item.name}}</a>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.link{
  padding: 0 0 20px;
  .link-item{
    width: 90%;
    margin: auto;
    border: 2px solid #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    transition: background .3s;
    &:hover{
      background-color: #fff;
      a{
        color: var(--color);
      }
    }
    a{
      transition: color .3s;
      text-decoration: none;
      color: #fff;
      display: block;
      font-size: 1.3rem;
      text-align: center;
      line-height: 2;
    }
  }
}
</style>