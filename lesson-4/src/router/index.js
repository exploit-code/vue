import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'payments',
        component: () => import('@/views/Payments.vue')
    },
    {
        path: '/calc',
        name: 'calc',
        component: () => import('@/views/Calc.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/add/payment',
        name: 'addPayment',
        component: () => import('@/views/AddPaymentForm.vue')
    },
    {
        path: '/add/payment/:cat',
        name: 'addPaymentWithCat',
        component: () => import('@/views/AddPaymentForm.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
