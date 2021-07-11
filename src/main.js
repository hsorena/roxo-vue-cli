import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase' , function (value) {
  return value.toLowerCase()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
