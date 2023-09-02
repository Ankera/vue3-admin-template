<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 15:54:35 -->
<!-- 模块主要作用:  -->

<template>
  <div class="box">
    <h1>hello</h1>
    <el-button type="primary" :icon="Edit">Primary</el-button>

    <Test />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import Test from '@/components/Test.vue'

const num = ref(0)

console.log(num.value)
</script>

<style scoped lang="scss">
.box {
  width: 100px;
}
</style>
