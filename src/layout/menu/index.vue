<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 09:35:10 -->
<!-- 模块主要作用:  -->

<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component v-if="!!item.meta.icon" :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有且只有一个子路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
      >
        <el-icon>
          <component
            v-if="!!item.children[0].meta.icon"
            :is="item.children[0].meta.icon"
          ></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 多个字路由 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component v-if="!!item.meta.icon" :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuList :menuList="item.children"></MenuList>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
// import type { RouteRecordRaw } from 'vue-router'
// // 获取父组件传递过来的全部路由数据
// defineProps({
//   menuList: {
//     type: RouteRecordRaw[]
//     default: []
//   }
// })

defineProps(['menuList'])

// 点击菜单的回调
const goRoute = (vc: any) => {
  console.log('vc', vc)
}
</script>

<script lang="ts">
export default {
  name: 'MenuList',
}
</script>

<style scoped></style>
