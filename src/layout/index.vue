<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-03 01:49:54 -->
<!-- 模块主要作用:  -->

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo />
    </div>

    <!-- 顶部导航 -->
    <div class="layout_tabbar">222</div>

    <!-- 内容展示区域 -->
    <div class="layout_main">
      <p v-for="(item, i) in 1000" :key="i">我是一个锻炼{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    background-color: cyan;
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
  }
}
</style>
