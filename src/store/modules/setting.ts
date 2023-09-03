import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      // 用户控制菜单折叠或收起
      isCollapse: false,
      // 控制刷新
      refsh: false,
    }
  },
})

export default useLayOutSettingStore
