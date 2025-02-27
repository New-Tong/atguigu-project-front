<template>
  <div class="tabbar_right">
    <el-button icon="Refresh" circle></el-button>
    <el-button icon="FullScreen" circle></el-button>
    <el-button icon="Setting" circle></el-button>
    <!-- 用户头像 -->
    <img class="user_img" src="../../../../public/atguigu.png" />
    <el-dropdown>
      <span class="el-dropdown-link">
        Admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: "Setting",
};
</script>
<style scoped>
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
</style>
