<template>
    <header>
        <div class="wrapper">
            <h2>{{ caption }}</h2>
        </div>
        <br/>
    </header>
</template>

<script>
export default {
    name: 'CostHeader',
    data() {
        return {
            caption: 'My Personal Costs'
        }
    }
}
</script>


<style lang="scss" scoped>
.wrapper {
    color: red;
}
</style>
