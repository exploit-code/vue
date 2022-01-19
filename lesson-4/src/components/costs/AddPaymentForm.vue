<template>
    <div class="form">
        <input class="panel-item" type="number" placeholder="Value" v-model.number="value" />
        <select class="panel-item" v-model="category">
            <option v-for="category of categoryList" :key="category" :value="category">{{ category }}</option>
        </select>
        <input class="panel-item" type="date" placeholder="Date" v-model="date" />
        <button class="panel-item" @click="onSave">Save</button>
        <br/><br/>
    </div>
</template>

<script>
export default {
    name: 'CostAddPaymentForm',
    props: {
        categoryList: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            value: 0,
            category: '',
            date: ''
        }
    },
    computed: {
        getCurrentDate() {
            const now = new Date();
            const d = now.getDate(), m = now.getMonth() + 1, y = now.getFullYear();
            return `${d}.${m}.${y}`;
        }
    },
    methods: {
        onSave() {
            let rusDate = false;
            if (this.date) {
                const  tmp = this.date.split('-');
                rusDate = `${tmp[2]}.${tmp[1]}.${tmp[0]}`;
            }
            const newPayment = {
                value: this.value,
                category: this.category,
                date: rusDate || this.getCurrentDate
            };

            this.$emit('addPayment', newPayment);
        }
    }
}
</script>

<style scoped lang="scss">
.panel-item{
    height: 25px;
    box-sizing: border-box;
}
</style>
