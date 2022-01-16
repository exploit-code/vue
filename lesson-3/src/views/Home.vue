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
    name: 'GeekHome',
  
    components: {
        GeekCalculator
    }
}
</script>