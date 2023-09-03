import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { constantRoutes } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      // 仓库生产路由菜单
      menuRoutes: constantRoutes,
    }
  },
  // 异步或者逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data!.token as string
        SET_TOKEN(result.data.token as string)

        return 'ok'
      } else {
        REMOVE_TOKEN()
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

// 对外暴露小仓库
export default useUserStore
