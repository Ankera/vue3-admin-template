import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
import router from '@/router'
import { constantRoutes, asyncRoute, anyRoute } from '@/router/routes'

function deepClone(params: any) {
  // 如果数组类型数据
  if (Array.isArray(params)) {
    const newnew: any = []
    for (let i = 0; i < params.length; i++) {
      newnew[i] = deepClone(params[i]) // 递归调用克隆
    }
    return newnew // 克隆完以后，再返回出结果
  }
  // 如果是对象类型数据
  if (Object.prototype.toString.call(params) === '[object Object]') {
    const newnew: any = []
    for (const key in params) {
      newnew[key] = deepClone(params[key]) // 递归调用克隆
    }
    return newnew // 克隆完以后，再返回出结果
  }
  // 如果是普通数据类型
  return params
}

function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      // 仓库生产路由菜单
      menuRoutes: constantRoutes,
      username: '',
      avatar: '',
      buttons: [], // 按钮权限
    }
  },
  // 异步或者逻辑的地方
  actions: {
    async userLogin(data: LoginFormData) {
      const result: LoginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result?.data as string
        SET_TOKEN(result?.data as string)

        return 'ok'
      } else {
        REMOVE_TOKEN()
        return Promise.reject(new Error(result.message))
      }
    },

    async userInfo() {
      const result: UserInfoResponseData = await reqUserInfo()
      if (result.code === 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        this.buttons = result.data.buttons
        const userAsyncRoute: any = filterAsyncRoute(
          deepClone(asyncRoute),
          result.data.routes,
        )
        // 路由集合
        this.menuRoutes = [...constantRoutes, ...userAsyncRoute, anyRoute]
        ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })

        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    async userLogout() {
      const result: any = await reqLogOut()
      if (result.code === 200) {
        // 退出登录接口，标识本地token无效， 服务器处理
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()

        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})

// 对外暴露小仓库
export default useUserStore
