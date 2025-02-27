<template>
  <div class="tabbar">
    <Breadcrumb></Breadcrumb>
    <Setting></Setting>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "./breadcrumb/index.vue";
import Setting from "./setting/index.vue";
</script>
<script lang="ts">
export default {
  name: "Tabbar",
};
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar_left {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    .user_img {
      margin-left: 10px;
      margin-right: 5px;
      height: 24px;
      width: 24px;
    }
  }
}
</style>
