import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './app/app.vue'
import store from './store'
import 'normalize.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
