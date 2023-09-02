<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 22:22:48 -->
<!-- 模块主要作用:  -->

<template>
  <!-- 测试SVG图标 -->
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
