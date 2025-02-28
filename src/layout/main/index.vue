<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="isShow" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useLayoutStore from "@/store/modules/layout";
import { watch, ref, nextTick } from "vue";
let layoutStore = useLayoutStore();
const isShow = ref(true);
const refreshMain = () => {
  isShow.value = false;
};
watch(
  () => layoutStore.isRefresh,
  () => {
    refreshMain();
    nextTick(() => {
      isShow.value = true;
    });
  },
);
</script>
<script lang="ts">
export default {
  name: "LayoutMain",
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
