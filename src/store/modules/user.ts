import { defineStore } from "pinia";
import { reqLogin, reqUserInfo, reqLogout } from "@/api/user/index";
import type {
  loginReqData,
  LoginResponse,
  userInfoData,
} from "@/api/user/type";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
import type { UserState } from "./types/types";

export const useUserStore = defineStore("User", {
  // 定义 state
  state: (): UserState => ({
    token: GET_TOKEN(),
    username: "",
    avatar: "",
  }),
  // 定义 actions
  actions: {
    async userLogin(user: loginReqData) {
      const result: LoginResponse = await reqLogin(user);
      if (result.code === 200) {
        // 成功登录
        this.token = result.data.token as string;
        SET_TOKEN(this.token);
        return "ok";
      } else {
        // 登录失败
        return Promise.reject(new Error(result.data.message));
      }
    },
    async userInfo() {
      const result = await reqUserInfo();
      console.log("userInfo");
      if (result.code === 200) {
        const info = result.data.info as userInfoData;
        this.username = info.username;
        this.avatar = info.avatar;
        return result;
      } else {
        // 登录失败
        return Promise.reject(new Error(result.data.message));
      }
    },
    async userLogout() {
      const result: any = await reqLogout();
      if (result.code == 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = "";
        this.username = "";
        this.avatar = "";
        REMOVE_TOKEN();
        return "ok";
      } else {
        return new Error(result.message);
      }
    },
  },
  // 如果需要，可以定义 getters 来计算派生状态
  getters: {},
});

export default useUserStore;
