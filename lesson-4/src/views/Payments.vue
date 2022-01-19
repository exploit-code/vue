<template>
    <div class="wrapper">
        <cost-header />
        <main>
            <div class="wrapper">
                <button class="my-btn" @click="showForm = !showForm">ADD NEW COST +</button>
                <br/>
                <cost-add-payment-form @addPayment="addToPaymentList" v-if="showForm" :categoryList="categoryList"/>
                <cost-payments-display :items="paymentList"/>
            </div>
        </main>
    </div>
</template>

<script>
import CostHeader from '@/components/costs/Header.vue';
import CostAddPaymentForm from '@/components/costs/AddPaymentForm.vue';
import CostPaymentsDisplay from '@/components/costs/PaymentsDisplay.vue';
import { mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    name: 'GeekPayments',
    data() {
        return {
            showForm: false,
        };
    },
    methods: {
        ...mapMutations(['ADD_PAYMENT_DATA']),
        ...mapActions(['fetchData', 'fetchCategoryList']),
        addToPaymentList(data) {
            this.ADD_PAYMENT_DATA(data);
        }
    },
    computed: {
        ...mapGetters(['paymentList', 'categoryList'])
    },
    components: {
        CostHeader,
        CostAddPaymentForm,
        CostPaymentsDisplay
    },

    created() {
        this.fetchData(),
        this.fetchCategoryList()
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
