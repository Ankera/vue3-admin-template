<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 15:54:35 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <h1>hello</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)

console.log(num.value)
</script>

<style scoped></style>
