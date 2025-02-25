export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "home",
  },
  {
    path: "/notFound",
    component: () => import("@/views/notFound/index.vue"),
    name: "notFound",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
    name: "other",
  },
];
