import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

import globalComponent from './components/index'

// svg插件需要配置代码
import 'virtual:svg-icons-register'

// 公共 scss 文件
import '@/styles/index.scss'

import axios from 'axios'

axios({
  url: '/dev-api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})

const app = createApp(App)

// 配置国际化
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(globalComponent)

app.mount('#app')

// console.log(111, import.meta.env)
