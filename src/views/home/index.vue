<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 00:03:44 -->
<!-- 模块主要作用:  -->

<template>
  <div>我是一级路由----展示数据部分 {{ userStore.username }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})
</script>

<style scoped></style>
