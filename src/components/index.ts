import SvgIcon from "./SvgIcon/index.vue";
import type { App, Component } from "vue";
import Pagination from "./Pagination/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const components: { [key: string]: Component } = {
  SvgIcon,
  Pagination,
};
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
