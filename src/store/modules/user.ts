import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
import { constantRoutes } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      // 仓库生产路由菜单
      menuRoutes: constantRoutes,
      username: '',
      avatar: '',
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
