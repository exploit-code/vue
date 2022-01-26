<template>
    <div>
        <table class="main-table">
            <thead>
                <tr>
                    <th>#</th><th>Date</th><th>Category</th><th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, ind) in displayItems" :key="ind">
                    <td>{{ item.id }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.value }}</td>
                    <td><span class="span-link" @click="showContextMenu($event, item)">...</span></td>
                </tr>
            </tbody>
        </table>
        <br/>
        <cost-pagination
            :numPage="numPage"
            :recordCount="displayRecordCount"
            :itemsCount="itemsLength"
            @selectPage="changeNumPage"/>
    </div>
</template>

<script>
import CostPagination from '@/components/costs/Pagination.vue'

export default {
    name: 'CostPaymentsDisplay',
    data() {
        return {
            numPage: 1,
            displayRecordCount: 5
        }
    },
    props: {
        items: {
            type: Array,
            default: () => [],
            required: true
        }
    },
    computed: {
        itemsLength() {
            return this.items.length;
        },
        displayItems() {
            const start = (this.numPage-1) * this.displayRecordCount
            const end = start + this.displayRecordCount;
            const displayRecords = this.items.slice(start, end)
            return displayRecords
        }
    },
    methods: {
        changeNumPage(n) {
            this.numPage = n
        },
        showContextMenu(ev, record) {
            this.$menu.show('contextMenu', {
                header: 'RecordID:',
                item: record,
                left: ev.target.getBoundingClientRect().left,
                top: ev.target.getBoundingClientRect().top
            });
        }
    },
    components: {
        CostPagination
    }
}
</script>

<style lang="scss" scoped>
.main-table {
  border-collapse: collapse;
}
td { 
    padding: 10px 20px;
    border: 1px solid black;
}
.span-link{
    cursor: pointer;
}
</style>