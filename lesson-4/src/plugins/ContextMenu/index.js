export default {
    install(Vue) {
        if (this.instance) {
            return;
        }
        this.instance = true;
        Vue.prototype.$menu = {
            EventBus: new Vue(),
            show(name, params) {
                this.EventBus.$emit('shown', { name, params })
            },
            hide() {
                this.EventBus.$emit('hiden')
            }
        }
    }
}
