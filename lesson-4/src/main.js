import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import menu from './plugins/ContextMenu';

Vue.config.productionTip = false
Vue.use(menu)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
