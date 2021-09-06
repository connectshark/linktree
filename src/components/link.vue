<template>
  <li class="link-item">
    <a :href="url" target="_blank">{{name}}</a>
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
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