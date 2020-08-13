export default {
    name: 'ProductItem',
    props: {
        value: {
            type: Object,
            required: true,
        }
    },
    data: () => ({
        edit: false
    }),
    methods: {
        editProduct() {
            this.$emit('input', {
                ...this.value,
                edited: true,
                price: 1,
                priceChange: 'up'
            })
            this.edit = false;
        },
        toogle() {
            this.edit = !this.edit
        }
    }
}
