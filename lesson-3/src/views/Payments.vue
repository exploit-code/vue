<template>
    <div class="wrapper">
        <!--
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        -->
        <cost-header />
        <main>
            <div class="wrapper">
                <button
                    class="my-btn"
                    @click="showForm = !showForm"
                >
                    ADD NEW COST +
                </button>
                <br/>
                <cost-add-payment-form
                    @addPayment="addToPaymentList"
                    v-if="showForm"
                />
                <cost-payments-display
                    :items="paymentList"
                />
            </div>
        </main>
    </div>
</template>

<script>
import CostHeader from '@/components/costs/Header.vue';
import CostAddPaymentForm from '@/components/costs/AddPaymentForm.vue';
import CostPaymentsDisplay from '@/components/costs/PaymentsDisplay.vue';

export default {
    name: 'GeekPayments',

    //
    data() {
        return {
            showForm: false,
            paymentList: []
        };
    },

    //
    methods: {
        fetchData() {
            return [
                { date: "23.03.2020", category: "Clothes", value: 169 },
                { date: "24.03.2020", category: "Transport", value: 360 },
                { date: "25.03.2020", category: "Food", value: 532 },
                { date: "24.04.2020", category: "Clothes", value: 180 },
                { date: "25.04.2020", category: "Transport", value: 371 },
                { date: "26.04.2020", category: "Food", value: 543 },
                { date: "25.05.2020", category: "Clothes", value: 191 },
                { date: "26.05.2020", category: "Transport", value: 382 },
                { date: "27.05.2020", category: "Food", value: 554 },
                { date: "26.06.2020", category: "Clothes", value: 202 },
                { date: "27.06.2020", category: "Transport", value: 393 },
                { date: "28.06.2020", category: "Food", value: 565 },
                { date: "27.07.2020", category: "Clothes", value: 213 },
                { date: "28.07.2020", category: "Transport", value: 404 },
                { date: "29.07.2020", category: "Food", value: 576 },
                { date: "03.08.2012", category: "Clothes", value: 999 },
            ];
        },

        addToPaymentList(item) {
            this.paymentList.push(item);
        }
    },
    
    //
    components: {
        CostHeader,
        CostAddPaymentForm,
        CostPaymentsDisplay
    },

    mounted() {
        this.paymentList = this.fetchData();
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
    background-color: darkslategray;
    color: #ffffff;
}
</style>
