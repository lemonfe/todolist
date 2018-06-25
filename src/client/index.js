import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import createRouter from './config/router'
import createStore from './store/store.js'

import './assets/styles/global.styl'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = createStore()
const router = createRouter()

store.registerModule('c', {
  state: {
    comment: 'lemon'
  }
})

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('state.count change to newCount')
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

router.beforeEach((to, from, next) => {
  // 数据的校验，比如验证登陆状态, next('./login')
  console.log('before each invoked')
  next()
  // next('./login')
  // next({path: 'login'})
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from, next) => {
  console.log('after each invoked')
})

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount(root)
