<template>
  <div class="tabbar_left">
    <el-icon style="margin-right: 10px" size="20px" @click="toggleIcon">
      <component :is="isFolded ? Expand : Fold" />
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";

// 定义一个响应式变量来存储图标状态
const isFolded = ref(true);

// 切换图标的函数
const toggleIcon = () => {
  // 这里添加折叠侧边栏的逻辑
  isFolded.value = !isFolded.value;
};
</script>

<style scoped>
.tabbar_left {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 20px;
}

/* 可选：为图标添加一些样式 */
.el-icon {
  cursor: pointer; /* 让图标可以点击 */
}
</style>
