import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'

Vue.use(vueResource)
//افزودن url به روت http
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/'

//پیش پردازش رو رکوئست ها
// Vue.http.interceptors.push((request , next) => {
//   if (request.method == 'POST'){
//     request.method = 'PUT'
//   }
//   next(response => {
//     response.json = () => {return {message:response.body}}
//   })
// })



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
