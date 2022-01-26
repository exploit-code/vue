<template>
    <div class="home">
        <geek-calculator />
    </div>
</template>

<script>
import GeekCalculator from '@/components/Calculator.vue'

export default {
    name: 'GeekCalc',
    components: {
        GeekCalculator
    }
}
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
}
</style>