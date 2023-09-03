<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 11:58:15 -->
<!-- 模块主要作用:  -->

<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefsh"
  ></el-button>

  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>

  <el-button size="small" icon="Setting" circle></el-button>

  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />

  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'
import handleFullScreen from '@/utils/fullScreen'

import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

const userStore = useUserStore()

const $router = useRouter()

const $route = useRoute()

// 刷新单个组件
let layOutSettingStore = useLayOutSettingStore()
const updateRefsh = () => {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}

// 全屏事件
const fullScreen = () => {
  // 用来判断是否是全屏
  handleFullScreen()
}

/**
 * ①退出登录，向服务器发请求，标识本次token无效，服务器处理掉
 * ②仓库中关于用户数据清空（username、token、avator）
 * ③跳转到登录页
 */
const logout = () => {
  userStore.userLogout()

  $router.push({
    path: '/login',
    query: {
      redirect: $route.path,
    },
  })
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped></style>
