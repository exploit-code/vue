<template>
    <div>
        <button
            class="my-btn"
            :disabled="numPage === 1"
            @click="changeAtOne('back')">&laquo;</button>
        <button
            v-for="n in buttonsCount"
            :class="{'my-btn': true, 'active-btn': n === numPage}"
            :key="n"
            @click="changePage(n)">{{ n }}</button>
        <button
            class="my-btn"
            :disabled="numPage === buttonsCount"
            @click="changeAtOne('forward')">&raquo;</button>
    </div>
</template>

<script>
export default {
    name: 'CostPagination',
    props: {
        numPage: {
            type: Number,
            required: true
        },
        recordCount: {
            type: Number,
            required: true
        },
        itemsCount: {
            type: Number,
            required: true
        }
    },
    computed: {
        buttonsCount() {
            let count = Math.floor(this.itemsCount / this.recordCount)
            const extra = this.itemsCount % this.recordCount
            if (extra > 0) {
                count = count + 1
            }
            return count
        }
    },
    methods: {
        changePage(n) {
            this.$emit('selectPage', n)
        },
        changeAtOne(direction) {
            if ((direction === 'back') && (this.numPage > 1)) {
                this.$emit('selectPage', this.numPage-1)
                return
            }
            if ((direction === 'forward') && (this.numPage < this.buttonsCount)) {
                this.$emit('selectPage', this.numPage+1)
                return
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.my-btn {
    margin: 0 5px;
    padding: 5px 10px;
}
.active-btn {
    color: #2c3e50;
    text-decoration: underline;
}
</style>