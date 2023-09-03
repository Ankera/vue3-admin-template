<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 01:49:54 -->
<!-- 模块主要作用:  -->

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div
      class="layout_slider"
      :class="{ isCollapse: LayOutSettingStore.isCollapse ? true : false }"
    >
      <Logo />

      <!-- 展示菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="#ffffff"
          active-text-color="yellowgreen"
          :collapse="LayOutSettingStore.isCollapse"
        >
          <!-- 动态菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 顶部导航 -->
    <div
      class="layout_tabbar"
      :class="{ isCollapse: LayOutSettingStore.isCollapse ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>

    <!-- 内容展示区域 -->
    <div
      class="layout_main"
      :class="{ isCollapse: LayOutSettingStore.isCollapse ? true : false }"
    >
      <!-- <router-view></router-view> -->
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting'

import { useRoute } from 'vue-router'

const userStore = useUserStore()
const $route = useRoute()
let LayOutSettingStore = useLayOutSettingStore()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: #ffffff;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;

    &.isCollapse {
      width: $base-menu-min-width;
    }
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      // 右侧边框
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;
    &.isCollapse {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 12px 16px;
    overflow: auto;
    transition: all 0.3s;
    &.isCollapse {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
