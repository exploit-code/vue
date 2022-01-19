import Vue from 'vue'
import Vuex from 'vuex'
import category from '@/store/category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
  },
  mutations: {
    SET_PAYMENT_LIST(state, paymentList) {
      state.paymentList = paymentList
    },
    ADD_PAYMENT_DATA(state, payment) {
      state.paymentList.push(payment)
    }
  },
  getters: {
    paymentList: (state) => state.paymentList
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentList = [
          { date: "23.03.2020", category: "Sport", value: 169 },
          { date: "24.03.2020", category: "Transport", value: 360 },
          { date: "25.03.2020", category: "Food", value: 532 },
          { date: "26.04.2020", category: "Sport", value: 180 },
          { date: "27.04.2020", category: "Transport", value: 371 },
          { date: "28.04.2020", category: "Food", value: 543 },
          { date: "29.05.2020", category: "Sport", value: 191 },
          { date: "30.05.2020", category: "Transport", value: 382 },
          { date: "31.05.2020", category: "Food", value: 554 },
          { date: "01.06.2020", category: "Sport", value: 202 },
          { date: "27.05.2020", category: "Food", value: 554 },
          { date: "26.06.2020", category: "Sport", value: 202 },
        ]
        commit('SET_PAYMENT_LIST', paymentList)
      }, 1000)
    },
  },
  modules: {
    category,
  }
})
