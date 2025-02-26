export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "home",
    meta: {
      show: true,
      title: "首页",
      icon: "HomeFilled",
    },
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      show: false,
      title: "登录",
      icon: "",
    },
    children: [
      {
        path: "/register",
        component: () => import("@/views/login/index.vue"),
        name: "register",
        meta: {
          show: false,
          title: "注册",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/dataShow",
    component: () => import("@/views/home/index.vue"),
    name: "dataShow",
    meta: {
      show: true,
      title: "数据大屏",
      icon: "DataBoard",
    },
  },
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "acl",
    meta: {
      show: true,
      title: "权限管理",
      icon: "Lock",
    },
    children: [
      {
        path: "/userAcl",
        component: () => import("@/views/home/index.vue"),
        name: "userAcl",
        meta: {
          show: true,
          title: "用户管理",
          icon: "User",
        },
      },
      {
        path: "/roleAcl",
        component: () => import("@/views/home/index.vue"),
        name: "roleAcl",
        meta: {
          show: true,
          title: "角色管理",
          icon: "UserFilled",
        },
      },
      {
        path: "/menuAcl",
        component: () => import("@/views/home/index.vue"),
        name: "menuAcl",
        meta: {
          show: true,
          title: "菜单管理",
          icon: "Menu",
        },
      },
    ],
  },
  {
    path: "/ccl",
    component: () => import("@/layout/index.vue"),
    name: "ccl",
    meta: {
      show: true,
      title: "商品管理",
      icon: "Goods",
    },
    children: [
      {
        path: "/brandCcl",
        component: () => import("@/views/home/index.vue"),
        name: "brandCcl",
        meta: {
          show: true,
          title: "品牌管理",
          icon: "ShoppingCart",
        },
      },
      {
        path: "/propertyCcl",
        component: () => import("@/views/home/index.vue"),
        name: "propertyCcl",
        meta: {
          show: true,
          title: "属性管理",
          icon: "ShoppingTrolley",
        },
      },
      {
        path: "/spuCcl",
        component: () => import("@/views/home/index.vue"),
        name: "spuCcl",
        meta: {
          show: true,
          title: "SPU管理",
          icon: "Watch",
        },
      },
      {
        path: "/skuCcl",
        component: () => import("@/views/home/index.vue"),
        name: "skuCcl",
        meta: {
          show: true,
          title: "SKU管理",
          icon: "QuartzWatch",
        },
      },
    ],
  },
  {
    path: "/notFound",
    component: () => import("@/views/notFound/index.vue"),
    name: "notFound",
    meta: {
      show: false,
      title: "404",
      icon: "",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
    name: "other",
    meta: {
      show: false,
      title: "其他路由",
      icon: "",
    },
  },
];
