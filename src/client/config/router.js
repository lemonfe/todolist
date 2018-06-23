import Router from 'vue-router'

import routes from './routes'

// 因为后期要使用到ssr
export default () => {
  return new Router({
    mode: 'history',
    routes,
    // base: '/base/',
    // 不完全匹配，如： /login/exact 就是对 /login的不完全匹配
    linkActiveClass: 'active-link',
    // 完全匹配路由
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // fallback: true
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
