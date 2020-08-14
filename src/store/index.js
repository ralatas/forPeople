import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        addProductInCart(state, { group, product }) {
            const id = `${group}/${product}`
            if (state.cart.length > 0 && state.cart.find(p => p.id === id)) {
                const index = state.cart.findIndex(p => p.id === id)
                state.cart = [
                    ...state.cart.slice(0, index),
                    { ...state.cart[index], count: state.cart[index].count + 1 },
                    ...state.cart.slice(index + 1),
                ]
            } else {
                state.cart.push({
                    id: `${group}/${product}`,
                    pointer: {
                        group,
                        product,
                    },
                    count: 1
                })
            }
        },
        changeCountInCart(state, { id, count }) {
            const index = state.cart.findIndex(p => p.id === id);
            state.cart = [
                ...state.cart.slice(0, index),
                { ...state.cart[index], count },
                ...state.cart.slice(index + 1),
            ]
        },
        removeProductInCart(state, id) {
            const index = state.cart.findIndex(p => p.id === id);
            state.cart = [
                ...state.cart.slice(0, index),
                ...state.cart.slice(index + 1),
            ]
        }
    },
    getters: {
        getCart: (state) => (groups) => {
            const cart = state.cart.map(pc => {
                const product = groups[pc.pointer.group].products[pc.pointer.product].value
                return {
                    ...pc,
                    name: product.name,
                    maxCount: product.count,
                    price: product.price,
                }
            })
            return cart
        },
    }
})
