import ProductItem from '@/components/product-item/product-item.vue'
import Cart from '@/components/cart/cart.vue'

export default {
    name: 'App',
    data: () => ({
        groups: {},
        course: null,
        debounce: null,
        timer: null,
    }),
    async created() {
        try {
            const data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').json()
            this.course = data.Valute.USD.Value
        } catch (err) {
            this.course = 73.2351
        }
    },
    mounted() {
        const timer = () => {
            this.timer = setTimeout(() => {
                this.consructListing(+this.course)
                timer()
            }, 15000)
        }
        timer()
    },
    beforeDestroy() {
        clearTimeout(this.timer)
    },
    watch: {
        course: {
            immediate: false,
            handler(course) {
                if (!this.debounce) {
                    this.debounce = true
                    this.consructListing(+course)
                } else {
                    clearTimeout(this.debounce)
                    this.debounce = setTimeout(() => {
                        this.consructListing(+course)
                    }, 400)
                }
            }
        }
    },
    methods: {
        async consructListing(course) {
            const { Value: { Goods } } = await import('@/assets/jsons/data.json')
            const names = await import('@/assets/jsons/names.json')

            const mapProduct = (item) => {
                const product = {}
                if (
                    this.groups[item.G]
                    && this.groups[item.G].products[item.T].value.edited
                ) {
                    product.value = this.groups[item.G].products[item.T].value
                } else {
                    product.value = {
                        id: item.T,
                        name: names[item.G].B[item.T].N,
                        price: +(item.C * course).toFixed(2),
                        originalPrice: +(item.C * course).toFixed(2),
                        edited: false,
                        count: item.P
                    }
                }
                return product
            }

            this.groups = Goods.reduce((acum, item) => {
                if (!acum[item.G]) {
                    return {
                        ...acum,
                        [item.G]: {
                            name: names[item.G].G,
                            products: { [item.T]: mapProduct(item) }
                        }
                    }
                }
                return {
                    ...acum,
                    [item.G]: {
                        ...acum[item.G],
                        products: {
                            ...acum[item.G].products,
                            [item.T]: mapProduct(item)
                        }
                    }
                }
            }, {})
        },
        addProductInCart(group, product) {
            this.$store.commit('addProductInCart', { group, product })
        }
    },
    components: {
        ProductItem,
        Cart
    }
}
