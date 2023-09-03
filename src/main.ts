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

app.mount('#app')

// console.log(111, import.meta.env)
