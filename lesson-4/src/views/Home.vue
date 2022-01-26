<template>
    <div class="home">
        <geek-calculator />
    </div>
</template>

<script>
import GeekCalculator from '@/components/Calculator.vue'

export default {
    name: 'GeekHome',
    components: {
        GeekCalculator
    }
}
</script>