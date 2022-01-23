<template>
    <div class="wrapper">
        <cost-header />
        <main>
            <div class="wrapper">
                <p>Total spent: {{ fullPaymentValue }}</p>
                <div>Fast payment:
                    <router-link :to="{name: 'addPaymentWithCat', params: {cat: 'Food'}, query: {value: 200}}">Food 200</router-link> |
                    <router-link :to="{name: 'addPaymentWithCat', params: {cat: 'Transport'}, query: {value: 50}}">Transport 50
                    </router-link> |
                    <router-link :to="{name: 'addPaymentWithCat', params: {cat: 'Entertainment'}, query: {value: 2000}}">Entertainment 2000</router-link>
                </div>
                <button class="my-btn" @click="onShowForm">ADD NEW COST</button>
                <cost-payments-display :items="paymentsList"/>
            </div>
        </main>
    </div>
</template>

<script>
import CostHeader from '@/components/costs/Header.vue'
import CostPaymentsDisplay from '@/components/costs/PaymentsDisplay.vue'

export default {
    name: 'GeekPayments',
    computed: {
        paymentsList() {
            const list = this.$store.state.costs.paymentsList;
            return list;
        },
        fullPaymentValue() {
            return this.$store.getters.costsGetFullPaymentValue
        }
    },
    methods: {
        onShowForm() {
            this.$router.push({name: 'addPayment'})
        },
        initData() {
            return [
                { id: 1, date: "23.03.2020", category: "Travel", value: 169 },
                { id: 2, date: "24.03.2020", category: "Transport", value: 360 },
                { id: 3, date: "25.03.2020", category: "Food", value: 532 },
                { id: 4, date: "24.04.2020", category: "Travel", value: 180 },
                { id: 5, date: "25.04.2020", category: "Transport", value: 371 },
                { id: 6, date: "26.04.2020", category: "Food", value: 543 },
                { id: 7, date: "25.05.2020", category: "Travel", value: 191 },
                { id: 8, date: "26.05.2020", category: "Transport", value: 382 },
                { id: 9, date: "27.05.2020", category: "Food", value: 554 },
                { id: 10, date: "26.06.2020", category: "Travel", value: 202 },
                { id: 11, date: "27.06.2020", category: "Transport", value: 393 },
                { id: 12, date: "28.06.2020", category: "Food", value: 565 },
                { id: 13, date: "27.07.2020", category: "Travel", value: 213 },
                { id: 14, date: "28.07.2020", category: "Transport", value: 404 },
                { id: 15, date: "29.07.2020", category: "Food", value: 576 },
            ];
        }
    },
    components: {
        CostHeader,
        CostPaymentsDisplay
    },
    mounted() {
        if (this.paymentsList.length === 0) {
            this.$store.dispatch('costsFetchPaymentsList', this.initData())
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.my-btn {
    padding: 10px;
    background-color: #2c3e50;
    color: #ffffff;
    margin: 20px 0 20px 0;
}
</style>
