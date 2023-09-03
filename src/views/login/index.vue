<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 00:03:44 -->
<!-- 模块主要作用:  -->

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-card class="login_form">
          <h1>Vue-Admin</h1>
          <el-form :model="loginForm" :rules="rules" ref="loginForms">
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
                clearable
                placeholder="Username"
                size="large"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :prefix-icon="Lock"
                show-password
                v-model="loginForm.password"
                size="large"
                placeholder="Password"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <el-input
                :prefix-icon="Warning"
                show-password
                v-model="loginForm.verifyCode"
                placeholder="VerifyCode"
                size="large"
                maxlength="4"
              >
                <!-- <template #append>
                  <Identify :identifyCode="identifyCode" @click="refreshCode" />
                </template> -->
              </el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock, Warning } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getTime } from '@/utils/time'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
// 获取路由
const $router = useRouter()

const $route = useRoute()

let loading = ref(false)

const identifyCode = ref('1234')

const userStore = useUserStore()

let loginForms = ref()

const loginForm = reactive({
  username: 'admin',
  password: '111111',
  verifyCode: '1234',
})

const login = async () => {
  // 等所有表单检验成功才可以通过
  await loginForms.value.validate()

  loading.value = true
  try {
    const result = await userStore.userLogin(loginForm)

    console.log('result ===', result)
    if (result === 'ok') {
      // 如果退出登录时，判断是否回到原地址
      const redirect = $route.query.redirect
      if (redirect) {
        $router.push(redirect)
      } else {
        $router.push('/')
      }

      loading.value = false
      ElNotification({
        type: 'success',
        message: '登录成功',
        title: `Hi, ${getTime()}好`,
      })
    }
  } catch (error: any) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: error.message,
    })
  }
}

const validatorUsername = (_: unknown, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatorPassword = (_: unknown, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

const validatorVerifyCode = (_: unknown, value: any, callback: any) => {
  console.log(value, identifyCode.value)

  if (value.length === 0) {
    callback(new Error('请输入验证码'))
  } else if (value.length < 4) {
    callback(new Error('请输入正确的验证码'))
  } else if (identifyCode.value !== value) {
    callback(new Error('请输入正确的验证码'))
  } else if (identifyCode.value === value) {
    callback()
  }
}

const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
  verifyCode: [
    {
      trigger: 'blur',
      validator: validatorVerifyCode,
    },
  ],
}
</script>

<style scoped>
@import './index.scss';
</style>
