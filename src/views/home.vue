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
</div>
</template>

<script>
import Banner from '../components/banner'
import Link from '../components/link'
import Loading from '../components/loading'
export default {
  components: {
    Banner,
    Link,
    Loading
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #a2d5d1;
  min-height: 100vh;
}
</style>