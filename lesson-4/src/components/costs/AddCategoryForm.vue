<template>
    <div class="form">
        <input type="text" placeholder="New Category" v-model="newCategory" />
        <button :disabled="isDisabled" @click="onAdd">Add</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CostAddCategoryForm',
    data() {
        return {
            newCategory: ''
        }
    },
    computed: {
        ...mapGetters({
            categoryList: 'costsGetCategoryList'
        }),
        isDisabled() {
            let result = false;
            if (this.newCategory == '') {
                return true;
            }
            if (this.categoryList.length === 0) {
                return true;
            }
            for (let i=0; i < this.categoryList.length;  i++) {
                if (this.newCategory.trim().toLowerCase() === this.categoryList[i].trim().toLowerCase()) {
                    result = true;
                    break;
                }
            }
            return result;
        }
    },
    methods: {
        onAdd() {
            this.$store.dispatch('costsAddToCategoryList', this.newCategory.trim())
            this.newCategory = ''
        }
    },
}
</script>
