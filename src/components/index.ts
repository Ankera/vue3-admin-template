import SvgIcon from './SvgIcon/index.vue'

import type { App, Component } from 'vue'

const allGlobalComponent: Component = { SvgIcon }

export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key: string) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
  },
}
