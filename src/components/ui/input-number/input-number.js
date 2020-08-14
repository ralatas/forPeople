export default {
    name: 'InputNumber',
    props: {
        value: {
            type: Number,
            required: true,
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 0
        },
        integer: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: 'Кол-во'
        }
    },
    data() {
        return {
            timer: null,
            count: null,
            error: null
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                this.count = value
            },
        },
        max() {
            this.changeQuantity(this.count.toString())
        },
        min() {
            this.changeQuantity(this.count.toString())
        }
    },
    methods: {
        changeQuantity(value) {
            const temp = value.replace(/,/g, '.')
            if (temp.slice(-1) === '.') {
                this.count = +temp.slice(0, -1)
            } else if (temp[0] === '.') {
                this.count = +temp.slice(1, 0)
            } else {
                this.count = +temp
            }

            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (this.min !== 0 && (!this.count || +this.count === 0)) {
                    this.error = false
                } else if (this.min !== 0 && this.count < this.min) {
                    this.error = false
                } else if (this.max !== 0 && this.count > this.max) {
                    this.error = false
                } else {
                    this.error = null
                    this.$emit('input', this.count)
                }
            }, 500)
        },
        onBlur() {
            if (this.min !== 0 && (this.count === '' || +this.count === 0)) {
                this.error = null;
                this.count = this.value
            } else if (this.min < this.count && this.count < this.max) {
                this.error = null;
                this.$emit('input', this.count)
            }
        },
        filterInput(event) {
            if (!event.key.match(/^\d+$/)
                && ((event.key !== ',' && event.key !== '.') || ((event.key === ',' || event.key === '.') && this.count.toString().includes('.')))
            ) {
                event.preventDefault()
            }
        },
    },
}
