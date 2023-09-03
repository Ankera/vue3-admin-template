/**
 * 路由鉴权：项目中路由能不能
 */

import router from '@/router/index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局的前缀守卫

/**
 * to 将要访问的路由
 * from 从那个路由过来
 * next 路由的放行函数
 */
router.beforeEach((to: any, from: any, next: any) => {
  nprogress.start()
  console.log(to, from)
  next()
})

// 全局的后缀守卫
router.afterEach((to: any, from: any) => {
  console.log(to, from)
  nprogress.done()
})
