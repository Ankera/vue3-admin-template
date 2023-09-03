<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 11:57:13 -->
<!-- 模块主要作用:  -->

<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layOutSettingStore.isCollapse ? Expand : Fold"></component>
  </el-icon>

  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 动态展示面包屑 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon v-if="!!item.meta" style="vertical-align: middle">
        <component :is="item.meta.icon"></component>
      </el-icon>

      <!-- 面包屑展示匹配到的路由标题 -->
      <span style="margin: 0 5px; vertical-align: middle">
        {{ item?.meta?.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'

import useLayOutSettingStore from '@/store/modules/setting'

import { useRoute } from 'vue-router'

const $route = useRoute()

let layOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  layOutSettingStore.isCollapse = !layOutSettingStore.isCollapse
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
