import { defineStore } from "pinia";
import { constantRoutes } from "@/router/routes";

const useRouterStore = defineStore("Router", () => {
  const routes = constantRoutes;
  return { routes };
});

export default useRouterStore;
