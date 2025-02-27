<template>
  <div class="logo" v-if="setting.logoShow">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from "@/setting.ts";
</script>
<script lang="ts">
export default {
  name: "Logo",
};
</script>
<style scoped lang="scss">
.logo {
  width: $logo-weight;
  height: $logo-height;
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
