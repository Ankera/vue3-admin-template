import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

import globalComponent from './components/index'

// svg插件需要配置代码
import 'virtual:svg-icons-register'

// 公共 scss 文件
import '@/styles/index.scss'

import router from '@/router/index'

import pinia from '@/store/index'

import { isHasButton } from '@/directive/has'

// 路由守卫
import './permission'

// 测试mock数据
// import axios from 'axios'

// axios({
//   url: '/dev-api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// })

const app = createApp(App)

// 配置国际化
app.use(ElementPlus, {
  locale: zhCn,
})

// 注册全局组件
app.use(globalComponent)

// 注册路由
app.use(router)

// 安装仓库
app.use(pinia)

// 注册指令
isHasButton(app)

app.mount('#app')

// console.log(111, import.meta.env)

/**
 * 官方接口地址
 * http://sph-api.atguigu.cn/
 *
 * swagger 文档地址
 * http://39.98.123.211:8510/swagger-ui.html
 * http://139.198.104.58:8212/swagger-ui.html
 *
 * demo 地址
 * http://8.222.176.28/#/acl/user
 *
 * 源码地址
 * https://github.com/huccct/vue-admin/blob/main/src/api/product/trademark/index.ts
 *
 * 059 - 101 未看，先看权限相关的课程
 */
