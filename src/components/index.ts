import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App, Component } from 'vue'

const allGlobalComponent: Component = { SvgIcon }

export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key: string) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })

    // 将 element-plus/icons-vue 注册成全局图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component as any)
    }
  },
}
