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

<style scoped lang="scss">
@import '../assets/scss/media.scss';
.home{
  width: 100%;
  max-width: 768px;
  margin: auto;
}
</style>