<template>
  <div class="tabbar_right">
    <el-button icon="Refresh" circle @click="refresh"></el-button>
    <el-button icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button icon="Setting" circle></el-button>
    <!-- 用户头像 -->
    <img class="user_img" :src="userStore.avatar ?? undefined" />
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userStore.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import useLayoutStore from "@/store/modules/layout";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
let layoutStore = useLayoutStore();
const router = useRouter();
let userStore = useUserStore();
const fullScreen = () => {
  let full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
const refresh = () => {
  layoutStore.isRefresh = !layoutStore.isRefresh;
};

async function logout() {
  // 向服务器发送退出登录请求。
  try {
    await userStore.userLogout();
    router.push("/login");
  } catch (error) {
    // 确保 error.message 是字符串
    let errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? error.message
        : String(error);
    ElMessage({
      type: "error",
      message: errorMessage as string,
    });
  }
}
</script>
<script lang="ts">
export default {
  name: "Setting",
};
</script>
<style scoped>
.tabbar_right {
  display: flex;
  align-items: center;
  margin-right: 10px;
  .user_img {
    margin-left: 10px;
    margin-right: 5px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
}
</style>
