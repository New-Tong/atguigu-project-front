<template>
  <div class="logo" v-if="setting.logoShow">
    <!-- 使用 @click 事件绑定 -->
    <span @click="goToHome">
      <img :src="setting.logo" />
      <p>{{ setting.title }}</p>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import setting from "@/setting.ts";

const router = useRouter();

// 定义导航函数
const goToHome = () => {
  router.push("/home");
};
</script>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<style scoped lang="scss">
.logo {
  span {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: $logo-padding-left;

    img {
      margin-top: 5px;
      margin-bottom: 5px;

      border-radius: 20%;
      width: $logo-img-width;
      height: $logo-img-height;
    }

    p {
      font-size: $title-font-size;
      margin-left: $title-padding-left;
      white-space: nowrap;
    }
  }
}
</style>
