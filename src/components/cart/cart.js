export default {
    name: 'Cart',
    props: {
        groups: {
            type: Object,
            requited: true
        },
    },
    computed: {
        cart() {
            return this.$store.getters.getCart(this.groups)
        },
        productCost() {
            return this.cart.reduce((acum, item) => acum + item.price * item.count, 0).toFixed(2)
        }
    },
    methods: {
        removeProduct(id) {
            this.$store.commit('removeProductInCart', id)
        },
        changeCount(id, count) {
            this.$store.commit('changeCountInCart', { id, count })
        }
    }
}
