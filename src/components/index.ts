import SvgIcon from "./SvgIcon/index.vue";
import type { App, Component } from "vue";
import Pagination from "./Pagination/index.vue";
const components: { [key: string]: Component } = {
  SvgIcon,
  Pagination,
};
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
