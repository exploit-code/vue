<template>
    <div id="app">
        <div id="nav">
            <router-link :to="{name: 'payments'}">Payments</router-link> |
            <router-link :to="{name: 'calc'}">Calculator</router-link> |
            <router-link :to="{name: 'about'}">About</router-link>
        </div>
        <router-view/>
        <transition name="fade">
            <context-menu v-if="menuName" :params="menuParams" />
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            menuName: '',
            menuParams: {}
        }
    },
    methods: {
        onShown(args) {
            this.menuName = args.name;
            this.menuParams = args.params;
        },
        onHide() {
            this.menuName = '';
            this.menuParams = {};
        }
    },
    components: {
        ContextMenu: () => import('./components/costs/ContextMenu.vue')
    },
    mounted() {
        this.$menu.EventBus.$on("shown", this.onShown);
        this.$menu.EventBus.$on("hiden", this.onHide);
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
