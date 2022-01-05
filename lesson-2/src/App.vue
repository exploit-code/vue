<template>
  <div id="app">
    <Calc/>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'App',
  components: {
    Calc
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
