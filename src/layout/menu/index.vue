<template>
  <template v-for="item of menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="item.meta.show" :index="item.path" @click="goRoute">
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-else-if="item.children && item.children.length === 1">
      <!-- 只有一个子路由，直接展示 -->
      <el-menu-item
        v-if="item.children[0].meta.show"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon><component :is="item.children[0].meta.icon" /></el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有多个子路由，递归展示 -->
    <template v-else-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="item.meta.show" :index="item.path">
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
import { useRouter } from "vue-router";
//获取父组件传递过来的全部路由数组
defineProps(["menuList"]);
//点击菜单的回调
let router = useRouter();
const goRoute = (vc: any) => {
  router.push(vc.index);
};
</script>

<script lang="ts">
export default {
  name: "AsideMenu",
};
</script>

<style scoped lang="scss">
.el-sub-menu.is-opened .el-menu.el-menu--inline .el-menu-item:hover {
  background-color: $base-aside-sub-menu-hover-color;
}
.el-sub-menu .el-menu {
  color: $base-aside-sub-menu-color;
  background-color: $base-aside-sub-menu-color;
}
.el-menu.el-menu--vertical .el-menu-item:hover {
  background-color: $base-aside-menu-hover-color;
}

.el-menu-item.is-active,
.el-sub-menu.is-active
  .el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger
  .el-icon {
  color: $base-aside-menu-active-color;
}
</style>
