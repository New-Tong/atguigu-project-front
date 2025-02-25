import { defineStore } from "pinia";
import { reqLogin } from "@/api/user/index";
import type { loginReqData, LoginResponse } from "@/api/user/type";
import { ref } from "vue";
import { GET_TOKEN, SET_TOKEN } from "@/utils/token";

const useUserStore = defineStore("User", () => {
  console.log(localStorage.getItem("TOKEN"));
  const token = ref<string | null>(GET_TOKEN());

  async function userLogin(user: loginReqData) {
    const result: LoginResponse = await reqLogin(user);
    if (result.code === 200) {
      // 成功登录
      token.value = result.data.token as string;
      SET_TOKEN(token.value);
      return "ok";
    } else {
      // 登录失败
      return Promise.reject(new Error(result.data.message));
    }
  }

  return { userLogin, token };
});

export default useUserStore;
