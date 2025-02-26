<template>
  <div class="common-layout">
    <div>
      <div class="Aside">
        <Logo></Logo>
        <el-scrollbar class="scrollbar">
          <el-menu>
            <AsideMenu :menuList="routerStore.routes"></AsideMenu>
          </el-menu>
        </el-scrollbar>
      </div>
      <div>
        <div class="Header">Header</div>
        <div class="Main">Main</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue";
import AsideMenu from "./menu/index.vue";
import useRouterStore from "@/store/modules/router";
let routerStore = useRouterStore();
console.log(routerStore.routes);
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;
  .Aside {
    background-color: $base-aside-background-color;
    width: $base-aside-width;
    height: 100vh;
    .scrollbar {
      height: calc(100vh - $logo-height);
      width: 100%;
      --el-menu-bg-color: $base-aside-background-color;
      --el-menu-text-color: white;
    }
    .el-menu {
      border-right: none;
    }
  }
  .Header {
    position: fixed;
    top: 0px;
    left: $base-aside-width;
    background-color: $base-header-background-color;
    height: $base-header-height;
    width: calc(100% - $base-aside-width);
  }
  .Main {
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
