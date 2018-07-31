import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login'
import home from '../components/home'


Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   // console.log('to:' + to.path)
//   if (to.path.startsWith('/login')) {
//     window.sessionStorage.removeItem('access-user')
//     next()
//   } else {  //如果不是跳转的登录页面，就需要验证是否存在storage,不存在就需要重新去登陆
//     let user = JSON.parse(window.sessionStorage.getItem('access-user'))
//     if (!user) {
//       next({path: '/login'})
//     } else {
//       next()
//     }
//   }
// });

export default router