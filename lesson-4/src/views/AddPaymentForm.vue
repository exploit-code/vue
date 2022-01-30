<template>
    <div class="form">
        <input type="number" placeholder="Value" v-model.number="value" />
        <select v-if="categoryList.length > 0" v-model="category">
            <option
                v-for="(option, ind) in categoryList"
                :selected="option === category"
                :value="option"
                :key="ind+option">
                {{ option }}
            </option>
        </select>
        <input type="date" placeholder="Date" v-model="date" />
        <button @click="onSave">{{itemId !== -1 ? 'Save' : 'Add'}}</button>
        <br/><br/>
        <cost-add-category-form v-if="categoryList.length > 0" />
        <br/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CostAddCategoryForm from '@/components/costs/AddCategoryForm.vue'

export default {
    name: 'CostAddPaymentForm',

    data() {
        return {
            value: 0,
            category: 'Travel',
            date: '',
            itemId: -1
        }
    },
    computed: {
        ...mapGetters({
            categoryList: 'costsGetCategoryList'
        }),
        getCurrentDate() {
            const now = new Date()
            const d = now.getDate(), m = now.getMonth() + 1, y = now.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods: {
        ...mapActions({
            loadCategories: 'costsFetchCategoryList'
        }),
        onSave() {
            let rusDate = false
            if (this.date) {
                const tmp = this.date.split('-')
                rusDate = `${tmp[2]}.${tmp[1]}.${tmp[0]}`;
            }
            const newPayment = {
                value: this.value,
                category: this.category,
                date: rusDate || this.getCurrentDate
            };
            if (this.itemId < 0) {
                this.$store.dispatch('costsAddToPaymentsList', newPayment)
                    .then((/*data*/) => {
                        this.$router.push({name: 'payments'})
                    })
                    .catch((/*error*/) => {
                    })
            }
            else {
                newPayment.id = this.itemId
                this.$store.dispatch('costsUpdatePaymentsItem', newPayment)
                    .then((/*data*/) => {
                        this.$router.push({name: 'payments'})
                    })
                    .catch((/*error*/) => {
                    })
            }

        }
    },
    components: {
        CostAddCategoryForm
    },
    mounted() {
        if (this.categoryList.length === 0) {
            this.loadCategories()
        }
        const cat = this.$route.params.cat
        const val = +this.$route.query.value
        if (cat && (val > 0)) {
            this.category = cat
            this.value = val
            this.onSave()
        }
        const id = +this.$route.query.id
        if (!isNaN(id)) {
            this.itemId = id
            this.$store.dispatch('costsGetPaymentsItem', this.itemId)
                .then((data) => {
                    this.category = data.category
                    this.value = data.value
                    const tmp = data.date.split('.')
                    this.date = `${tmp[2]}-${tmp[1]}-${tmp[0]}`
                })
                .catch((error) => {
                    console.log(error)
                    this.itemId = -1
                })
        }
    }
}
</script>