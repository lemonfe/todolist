// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    // path: '/todo/:id',
    path: '/todo',
    props: true,
    // props: (route) => ({id: route.query.b}),
    component: () => import('../views/todo/todo.vue'),
    beforeEnter (to, from, next) {
      console.log('app route enter')
      next()
    },
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'todo',
    meta: {
      title: 'this is a todolist',
      description: '描述'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
