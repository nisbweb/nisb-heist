import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import titleMixin from './mixins/titleMixin'

import 'tailwindcss/tailwind.css'

Vue.mixin(titleMixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
