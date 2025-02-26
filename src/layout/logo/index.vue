<template>
  <div class="logo" v-if="setting.logoShow">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from "@/setting.ts";
</script>
<style scoped lang="scss">
.logo {
  width: $logo-weight;
  height: $logo-height;
  color: $loge-font-color;
  display: flex;
  align-items: center;
  padding-left: $logo-padding-left;
  img {
    width: $logo-img-width;
    height: $logo-img-height;
  }
  p {
    font-size: $title-font-size;
    margin-left: $title-padding-left;
  }
}
</style>
