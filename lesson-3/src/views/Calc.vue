<template>
    <div class="home">
        <!--
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        -->
        <geek-calculator />
    </div>
</template>

<script>
import GeekCalculator from '@/components/Calculator.vue';

export default {
    name: 'GeekCalc',
  
    //
    components: {
        GeekCalculator
    }
}
</script>

<style scoped lang="scss">
.home{
    display: flex;
    justify-content: center;
}
</style>
