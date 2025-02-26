<template>
  <div class="common-layout">
    <div>
      <!-- 左侧菜单 -->
      <div class="layout_aside">
        <Logo></Logo>
        <!-- 滚动组件 -->
        <el-scrollbar class="scrollbar">
          <!-- 菜单组件 -->
          <el-menu>
            <!-- 根据路由动态生成菜单 -->
            <AsideMenu :menuList="routerStore.routes"></AsideMenu>
          </el-menu>
        </el-scrollbar>
      </div>
      <div>
        <!-- 顶部导航栏 -->
        <div class="layout_tabbar">Header</div>
        <!-- 内容展示区 -->
        <div class="layout_main">
          <TheMain></TheMain>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue";
import AsideMenu from "./menu/index.vue";
import useRouterStore from "@/store/modules/router";
import TheMain from "@/layout/main/index.vue";
let routerStore = useRouterStore();
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;
  .layout_aside {
    background-color: $base-aside-background-color;
    width: $base-aside-width;
    height: 100vh;
    .scrollbar {
      height: calc(100vh - $logo-height);
      width: 100%;
      --el-menu-bg-color: $base-aside-background-color;
      --el-menu-text-color: white;
      // --el-menu-hover-bg-color: none;
    }
    .el-menu {
      border-right: none;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-aside-width;
    background-color: $base-header-background-color;
    height: $base-header-height;
    width: calc(100% - $base-aside-width);
  }
  .layout_main {
    position: fixed;
    top: $base-header-height;
    left: $base-aside-width;
    background-color: $base-main-background-color;
    height: calc(100vh - $base-header-height - 10px);
    width: calc(100% - $base-aside-width);
    padding: 20px;
    overflow: auto;
  }
}
</style>
