<template>
  <div class="layout_container">
    <div>
      <!-- 左侧菜单 -->
      <div class="layout_aside" :class="{ fold: layoutStore.isFold }">
        <Logo></Logo>
        <!-- 滚动组件 -->
        <el-scrollbar class="scrollbar">
          <!-- 菜单组件 -->
          <el-menu
            :default-active="route.path"
            unique-opened
            :collapse="layoutStore.isFold"
            class="layout-aside-menu"
          >
            <!-- 根据路由动态生成菜单 -->
            <AsideMenu :menuList="routerStore.routes"></AsideMenu>
          </el-menu>
        </el-scrollbar>
      </div>
      <div>
        <!-- 顶部导航栏 -->
        <div class="layout_tabbar" :class="{ fold: layoutStore.isFold }">
          <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区 -->
        <div class="layout_main" :class="{ fold: layoutStore.isFold }">
          <LayoutMain></LayoutMain>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue";
import AsideMenu from "./menu/index.vue";
import useRouterStore from "@/store/modules/router";
import LayoutMain from "@/layout/main/index.vue";
import Tabbar from "@/layout/tabbar/index.vue";
import useLayoutStore from "@/store/modules/layout";
import { useRoute } from "vue-router";
let layoutStore = useLayoutStore();
let routerStore = useRouterStore();
let route = useRoute();
</script>
<script lang="ts">
export default {
  name: "Layout",
};
</script>
<style scoped lang="scss">
/* 覆盖 Element Plus 的 CSS 变量 */
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_aside {
    color: white;
    background-color: $base-aside-background-color;
    width: $base-aside-width;
    height: 100vh;
    transition: all 0.3s;
    .scrollbar {
      height: calc(100vh - $logo-height);
      width: 100%;
    }
    .el-menu {
      border-right: none;
    }
    &.fold {
      width: $base-aside-folded-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-aside-width;
    background-color: $base-header-background-color;
    height: $base-header-height;
    width: calc(100% - $base-aside-width);
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-aside-folded-width);
      left: $base-aside-folded-width;
    }
  }
  .layout_main {
    position: fixed;
    top: $base-header-height;
    left: $base-aside-width;
    background-color: $base-main-background-color;
    height: calc(100vh - $base-header-height);
    width: calc(100% - $base-aside-width);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-aside-folded-width);
      left: $base-aside-folded-width;
    }
  }
}
</style>
