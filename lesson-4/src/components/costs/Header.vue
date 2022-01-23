<template>
    <header>
        <div class="wrapper">
            <h2>{{ caption }}</h2>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CostHeader',
    data() {
        return {
            caption: 'My App'
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    color: #2c3e50;
}
</style>
