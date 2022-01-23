<template>
    <div class="form">
        <input class="control-panel" type="number" placeholder="Value" v-model.number="value" />
        <select class="control-panel"
            v-if="categoryList.length > 0"
            v-model="category">
            <option class="control-panel"
                v-for="(option, ind) in categoryList"
                :selected="option === category"
                :value="option"
                :key="ind+option">
                {{ option }}
            </option>
        </select>
        <input class="control-panel" type="date" placeholder="Date" v-model="date" />
        <button class="control-panel" @click="onSave">Save</button>
        <cost-add-category-form v-if="categoryList.length > 0" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CostAddCategoryForm from '@/components/costs/AddCategoryForm.vue'

export default {
    name: 'CostAddPaymentForm',
    data() {
        return {
            value: 0,
            category: 'Travel',
            date: ''
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
            let rusDate = false;
            if (this.date) {
                const  tmp = this.date.split('-');
                rusDate = `${tmp[2]}.${tmp[1]}.${tmp[0]}`
            }
            const newPayment = {
                value: this.value,
                category: this.category,
                date: rusDate || this.getCurrentDate
            }
            this.$store.dispatch('costsAddToPaymentsList', newPayment)
                .then((/*data*/) => {
                    this.$router.push({name: 'payments'})
                })
                .catch((/*error*/) => {
                    console.log('error')
                });
        }
    },
    components: {
        CostAddCategoryForm
    },
    mounted() {
        if (this.categoryList.length === 0) {
            this.loadCategories();
        }
        const cat = this.$route.params.cat
        const val = +this.$route.query.value
        if (cat && (val > 0)) {
            this.category = cat
            this.value = val;
            this.onSave()
        }
    }
}
</script>

<style scoped>
.control-panel{
    padding: 0;
    height: 20px;
    box-sizing: border-box;
}
</style>