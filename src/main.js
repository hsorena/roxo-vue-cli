import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import {routes} from "@/routes";

Vue.use(vueRouter)

const router = new vueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to){
    if (to.hash){
      return {selector : to.hash}
    }
  }
})

// router.beforeEach((to, from, next)=>{
//
// })

router.beforeEach((to , from ,next)=>{
  console.log('global gurd')
  next()
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
