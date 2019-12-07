<template>
  <div id="page">
    <Timer />
  </div>
</template>

<script>
import Timer from '~/components/Timer.vue'

export default {
  components: {
    Timer
  }
}
</script>

<style>
#page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
