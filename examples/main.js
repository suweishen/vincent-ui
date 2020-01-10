import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UI from './../packages'

Vue.use(UI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
