<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="loginRules"
          ref="loginFormRef"
        >
          <h1>用户登录</h1>
          <h2>欢迎使用该系统</h2>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              :disabled="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
// import { ElMessage } from 'element-plus';
import useUserStore from "@/store/modules/user";
import { ElNotification } from "element-plus";
import { getTime } from "@/utils/time";
let loginForm = reactive({ username: "admin", password: "111111" });
const userStore = useUserStore();
let loginFormRef = ref();
let loading = ref(false);
const router = useRouter();
// const loginRules = {
//   username: [
//     { required: true, message: "用户名不能为空", trigger: "blur" },
//     { min: 5, max: 10, message: "用户名长度应为5到10位", trigger: "blur" },
//   ],
//   password: [
//     { required: true, message: "密码不能为空", trigger: "blur" },
//     { min: 6, max: 12, message: "密码最小为6位，最长为12位", trigger: "blur" },
//   ],
// };

const validatePass = (_: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("密码不能为空！"));
  } else {
    if (value.length < 6) {
      callback(new Error("密码长度最小为6位！"));
    } else if (value.length > 12) {
      callback(new Error("密码长度最大为12位！"));
    }
    callback();
  }
};

const validateUsername = (_: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("用户名不能为空！"));
  } else {
    if (value.length < 5) {
      callback(new Error("用户名长度最小为5位！"));
    } else if (value.length > 10) {
      callback(new Error("用户名长度最大为10位！"));
    }
    callback();
  }
};

const loginRules = {
  password: [{ validator: validatePass, trigger: "change" }],
  username: [{ validator: validateUsername, trigger: "change" }],
};

const login = async () => {
  await loginFormRef.value.validate();

  loading.value = true;
  try {
    await userStore.userLogin(loginForm);
    router.push("/");
    const time = getTime();
    ElNotification({
      type: "success",
      message: "欢迎回来",
      title: "Hi," + time + "好",
    });
    loading.value = false;
  } catch (error) {
    loading.value = false;
    ElNotification({
      type: "error",
      message: (error as Error).message,
    });
  }
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
