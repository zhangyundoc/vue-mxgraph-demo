import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as R from 'ramda'
Vue.prototype.R = R

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
