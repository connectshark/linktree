<template>
<div class="loader">
  <div class="loader-inner ball-scale-multiple">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.loader{
  width: 0;
  margin: auto;
  height: 60px;
  .loader-inner{
    transform: translateY(0);
  }
}
</style>