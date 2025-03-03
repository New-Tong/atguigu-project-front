import axios from "axios";
import { ElMessage } from "element-plus";
import useUserStore from "@/store/modules/user";
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
request.interceptors.request.use((config) => {
  const userStore = useUserStore();

  const token = userStore.token;
  if (token) {
    config.headers.token = token; // JWT 标准格式
  }
  return config;
});

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let message = "";
    const status = error.code;
    switch (status) {
      case 401:
        message = "Token 已过期";
        break;
      case 403:
        message = "访问权限不足";
        break;
      case 404:
        message = "页面不存在";
        break;
      case 500:
        message = "服务器出错";
        break;
      default:
        message = "网络出错";
        break;
    }
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(new Error(message));
  },
);

export default request;
