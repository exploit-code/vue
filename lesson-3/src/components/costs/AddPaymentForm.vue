<template>
    <div class="form">
        <input type="number" placeholder="Value" v-model.number="value" />
        <input type="text" placeholder="Category" v-model="category" />
        <input type="date" placeholder="Date" v-model="date" />
        <button @click="onSave">Save</button>
        <br/><br/>
    </div>
</template>

<script>
export default {
    name: 'CostAddPaymentForm',

    //
    data() {
        return {
            value: 0,
            category: '',
            date: ''
        }
    },

    //
    computed: {
        getCurrentDate() {
            const now = new Date();
            const d = now.getDate(), m = now.getMonth() + 1, y = now.getFullYear();
            return `${d}.${m}.${y}`;
        }
    },

    //
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