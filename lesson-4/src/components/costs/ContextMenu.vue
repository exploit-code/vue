<template>
    <div class="wrapper"
        v-if="params.header"
        v-bind:style="{top: this.coorY, left: this.coorX}">
        <div class="modal-box">
            <div class="header">{{ params.header }} {{ params.item.id }}</div>
            <button class="modal-btn" @click="onEdit">Edit</button>
            <button class="modal-btn" :disabled="isDisabledDel" @click="onDelete">Del</button>
            <button class="modal-btn" @click="onClose">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContextMenu',
    data() {
        return {
            isDisabledDel: false
        }
    },
    props: {
        params: {
            type: Object,
            required: true
        }
    },
    computed: {
        coorX() {
            return (+this.params.left - 70) + 'px'
        },
        coorY() {
            return (+this.params.top + 20) + 'px'
        }
    },
    methods: {
        onClose() {
            this.$menu.hide()
        },
        onEdit() {
            this.$menu.hide()
            this.$router.push({name: 'addPayment', query: {id: this.params.item.id}})
        },
        onDelete() {
            this.isDisabledDel = true
            this.$store.dispatch('costsDelFromPaymentsList', this.params.item)
                .then((/*data*/) => {
                    this.$menu.hide()
                })
                .catch((/*error*/) => {
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    width: 150px;
    background: #2c3e50;
    &.content {
        position: relative;
        z-index: 100;
    }
}
.header{
    color: aliceblue;
}
.modal-box{
    display: flex;
    flex-direction: column;
}
</style>
