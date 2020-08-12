export default {
    name: 'App',
    data: () => ({
        groups: [],
        course: null,
        debounce: null,
    }),
    async created() {
        try {
            const data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').json()
            this.course = data.Valute.USD.Value
        } catch (err) {
            this.course = 73.2351
        }
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

            const mapProduct = (item) => ({
                id: item.T,
                name: names[item.G].B[item.T].N,
                price: +(item.C * course).toFixed(2),
                count: item.P
            })

            this.groups = Goods.reduce((acum, item) => {
                if (!acum[item.G]) {
                    return {
                        ...acum,
                        [item.G]: {
                            name: names[item.G].G,
                            products: [mapProduct(item)]
                        }
                    }
                }
                acum[item.G].products.push(mapProduct(item))
                return acum
            }, [])
        }
    },
}
