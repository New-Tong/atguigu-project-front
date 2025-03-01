<template>
  <div class="tabbar_left">
    <el-icon style="margin-right: 10px" size="24px" @click="changeIcon">
      <component :is="layoutStore.isFold ? Expand : Fold" />
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/home' }" class="breadcrumb">
        <span>首页</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        class="breadcrumb"
        v-for="(item, index) in levelList"
        :key="index"
        :to="{ path: item.path }"
      >
        <span v-if="item.meta.title !== '首页'">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { Fold, Expand } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import useLayoutStore from "@/store/modules/layout";
let layoutStore = useLayoutStore();
// 定义一个响应式变量来存储图标状态

// 切换图标的函数
const changeIcon = () => {
  layoutStore.isFold = !layoutStore.isFold;
};
let route = useRoute();

// 定义响应式变量来存储面包屑层级列表
let levelList = ref();
// 更新面包屑层级列表
const updateBreadcrumb = () => {
  levelList.value = route.matched.filter(
    (item) =>
      item.meta && item.meta.show !== false && item.meta.title !== "首页",
  );
};
// 监听路由变化以更新面包屑
watch(
  () => route.path,
  () => {
    updateBreadcrumb();
  },
);
// 初始化时获取面包屑
updateBreadcrumb();
</script>
<script lang="ts">
export default {
  name: "Breadcrumb",
};
</script>
<style scoped>
.tabbar_left {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-left: 24px;
}

/* 可选：为图标添加一些样式 */
.el-icon {
  cursor: pointer; /* 让图标可以点击 */
}

.breadcrumb {
  font-size: 16px; /* 设置字体大小为16像素 */
}
</style>
