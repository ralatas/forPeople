export default {
    name: 'ProductItem',
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        edit: false,
        form: {
            name: '',
            price: '',
            count: ''
        }
    }),
    watch: {
        value: {
            immediate: true,
            handler(product) {
                Object.keys(this.form).forEach(field => {
                    if (product[field]) {
                        this.form[field] = product[field]
                    }
                })
            }
        }
    },
    methods: {
        editProduct(evt) {
            evt.preventDefault();
            let priceChange = 'none'
            if (+this.form.price < this.value.originalPrice) {
                priceChange = 'down'
            } else if (+this.form.price > this.value.originalPrice) {
                priceChange = 'up'
            }

            const tempForm = {
                name: this.form.name,
                price: +this.form.price,
                count: +this.form.count
            }

            this.$emit('input', {
                ...this.value,
                ...tempForm,
                edited: true,
                priceChange
            })
            this.edit = false;
        },
        toogle() {
            this.edit = !this.edit
        },
        addInCart() {
            this.$emit('addInCart')
        }
    }
}
