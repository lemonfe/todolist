import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)

const router = createRouter()

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
  router,
  render: (h) => h(App)
}).$mount(root)
