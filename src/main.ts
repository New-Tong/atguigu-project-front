import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import globalComponent from "./components";
import "virtual:svg-icons-register";
import router from "./router";
import pinia from "./store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponent);

app.mount("#app");
