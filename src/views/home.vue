<template>
<div class="home">
  <Suspense>
    <template #default>
      <Banner />
    </template>
    <template #fallback>
      <Loading/>
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <Link />
    </template>
    <template #fallback>
      <Loading/>
    </template>
  </Suspense>
  <Color/>
</div>
</template>

<script>
import Banner from '../components/banner'
import Link from '../components/link'
import Loading from '../components/loading'
import Color from '../components/color'
export default {
  components: {
    Banner,
    Link,
    Loading,
    Color
  }
}
</script>

<style lang="scss" scoped>
.home{
  transition: background .3s;
}
</style>