<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="item.meta.show">
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length === 1">
      <!-- 只有一个子路由，直接展示 -->
      <el-menu-item
        v-if="item.children[0].meta.show"
        :index="`${item.children[0].path}`"
      >
        <el-icon><component :is="item.children[0].meta.icon" /></el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 有多个子路由，递归展示 -->
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="item.meta.show" :index="`${item.path}`">
        <template #title>
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <AsideMenu :menuList="item.children"></AsideMenu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
defineProps(["menuList"]);
</script>

<script lang="ts">
export default {
  name: "AsideMenu",
};
</script>

<style scoped lang="scss"></style>
