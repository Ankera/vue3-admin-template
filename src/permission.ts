/**
 * 路由鉴权：项目中路由能不能
 */

import router from '@/router/index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from './setting'
import pinia from './store'
import useUserStore from './store/modules/user'

nprogress.configure({ showSpinner: false })

const userStore = useUserStore(pinia)

// 全局的前缀守卫
/**
 * to 将要访问的路由
 * from 从那个路由过来
 * next 路由的放行函数
 */
router.beforeEach(async (to: any, _: unknown, next: any) => {
  document.title = to.meta.title + ` | ${setting.title}`

  nprogress.start()

  const token = userStore.token
  const username = userStore.username
  // 用户登录
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next({ ...to })
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    // 用户未登录
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

// 全局的后缀守卫
router.afterEach(() => {
  nprogress.done()
})

//第一个问题:任意路由切换实现进度条业务 ---nprogress//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理理(三个子路由)|商品管理(四个子路由)

// 用户未登录:可以访问login,其余六个路由不能访问(指向lo gin)
//用户登录成功:不可以访问login[指向首页],其余的路由可以以访问
