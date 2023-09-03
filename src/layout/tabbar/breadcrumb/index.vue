<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 11:57:13 -->
<!-- 模块主要作用:  -->

<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayOutSettingStore.isCollapse ? Expand : Fold"></component>
  </el-icon>

  <!-- 左侧面包屑 -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.isCollapse = !LayOutSettingStore.isCollapse
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
