//
const state = {
    paymentsList: [],
    categoryList: [],
    nextId: 0,
};

//
const getters = {
    costsGetPaymentsList: (state) => {
        return state.paymentsList
    },
    costsGetFullPaymentValue: (state) => {
        return state.paymentsList.reduce((total, item) => total + item.value, 0)
    },
    costsGetCategoryList: (state) => {
        return state.categoryList
    },
};

const mutations = {
    costsSetPaymentsList(state, payload) {
        state.paymentsList = payload
        state.nextId = 17
    },
    costsAddToPaymentsList(state, payload) {
        payload.id = state.nextId++
        state.paymentsList.push(payload)
    },
    costsUpdatePaymentsItem(state, payload) {
        state.paymentsList = [
            ...state.paymentsList.slice(0, payload.index),
            payload.item,
            ...state.paymentsList.slice(payload.index + 1)
        ];
    },
    costsDelFromPaymentsList(state, payload) {
        state.paymentsList = payload
    },
    costSetCategoryList(state, payload) {
        if (!Array.isArray(payload)) {
            payload = [payload]
        }

        state.categoryList.push(...payload)
    },
}

const actions = {
    costsFetchPaymentsList(context, items) {

        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(items)
            }, 1000);
        })
            .then(response => {
                context.commit('costsSetPaymentsList', response);
            })
            .catch(error => {
                console.log(error)
            });
    },

    costsGetPaymentsItem(context, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const find = state.paymentsList.find(item => item.id === id);
                if (find) {
                    resolve(find)
                }
                reject('Error: not found')
            }, 1000)
        })
            .then(response => {
                return response
            })
    },

    costsAddToPaymentsList(context, item) {
        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(item)
            }, 1000)
        })
            .then(response => {
                context.commit('costsAddToPaymentsList', response)
            })
            .catch(error => {
                console.log(error)
            });
    },

    costsUpdatePaymentsItem(context, item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = state.paymentsList.findIndex(elem => elem.id === item.id)
                if (index < 0) {
                    reject('Error: not found')
                }

                const payload = { index, item }
                resolve(payload)
            }, 1000)
        })
            .then(response => {
                context.commit('costsUpdatePaymentsItem', response)
            })
    },
    costsDelFromPaymentsList(context, item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = state.paymentsList.findIndex(elem => elem.id === item.id)
                if (index < 0) {
                    reject('Error: not found')
                }
                const newList = [...state.paymentsList.slice(0, index), ...state.paymentsList.slice(index + 1)]
                resolve(newList)
            }, 1000)
        })
            .then(response => {
                context.commit('costsDelFromPaymentsList', response)
            })
            .catch(error => {
                console.log(error)
            })
    },
    costsFetchCategoryList(context) {
        const items = ['Travel', 'Transport', 'Food', 'Education']

        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(items)
            }, 1000);
        })
            .then(response => {
                context.commit('costSetCategoryList', response)
            })
            .catch(error => {
                console.log(error)
            })
    },

    costsAddToCategoryList(context, item) {
        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(item)
            }, 1000)
        })
            .then(response => {
                context.commit('costSetCategoryList', response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
