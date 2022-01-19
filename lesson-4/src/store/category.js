export default {
    state: {
        categoryList: []
    },
    mutations: {
        SET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        }
    },
    getters: {
        categoryList: ({ categoryList }) => categoryList
    },
    actions: {
        fetchCategoryList({ commit }) {
            setTimeout(() => {
                const categoryList = ['Food', 'Transport', 'Educattion', 'Sport']
                commit('SET_CATEGORY_LIST', categoryList)
            }, 1000)
        }
    },
    modules: {
    }
}
