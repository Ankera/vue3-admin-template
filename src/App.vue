<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 15:54:35 -->
<!-- 模块主要作用:  -->

<template>
  <div class="box">
    <h1>hello 1</h1>
    <el-button type="primary" :icon="Edit">Primary</el-button>

    <svg-icon name="floor" color="red"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'

const num = ref(0)

console.log(num.value)
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  h1 {
    color: red;
    width: $base-menu-width;
    height: $base-menu-width;
    background-color: #f2f2f2;
  }
}
</style>
