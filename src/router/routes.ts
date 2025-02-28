import Login from "@/views/login/index.vue";
import Home from "@/views/home/index.vue";
import Layout from "@/layout/index.vue";
import NotFound from "@/views/notFound/index.vue";
import Screen from "@/views/screen/index.vue";
import Menu from "@/views/acl/menu/index.vue";
import User from "@/views/acl/user/index.vue";
import Role from "@/views/acl/role/index.vue";
import Attribute from "@/views/product/attribute/index.vue";
import SKU from "@/views/product/sku/index.vue";
import SPU from "@/views/product/spu/index.vue";
import Trademark from "@/views/product/trademark/index.vue";

export const constantRoutes = [
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: Layout,
    name: "layout",
    meta: {
      title: "",
      show: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Home,
        name: "home",
        meta: {
          title: "首页",
          show: true,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      show: false,
      title: "登录",
      icon: "",
    },
  },
  {
    path: "/register",
    component: Login,
    name: "register",
    meta: {
      show: false,
      title: "注册",
      icon: "",
    },
  },
  {
    path: "/dataShow",
    component: Screen,
    name: "dataShow",
    meta: {
      show: true,
      title: "数据大屏",
      icon: "DataBoard",
    },
  },
  {
    path: "/acl",
    component: Layout,
    name: "acl",
    redirect: "/acl/user",
    meta: {
      show: true,
      title: "权限管理",
      icon: "Lock",
    },
    children: [
      {
        path: "/acl/user",
        component: User,
        name: "user",
        meta: {
          show: true,
          title: "用户管理",
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        component: Role,
        name: "role",
        meta: {
          show: true,
          title: "角色管理",
          icon: "UserFilled",
        },
      },
      {
        path: "/acl/menu",
        component: Menu,
        name: "menu",
        meta: {
          show: true,
          title: "菜单管理",
          icon: "Monitor",
        },
      },
    ],
  },
  {
    path: "/product",
    component: Layout,
    redirect: "/product/trademark",
    name: "product",
    meta: {
      show: true,
      title: "商品管理",
      icon: "Goods",
    },
    children: [
      {
        path: "/product/trademark",
        component: Trademark,
        name: "trademark",
        meta: {
          show: true,
          title: "品牌管理",
          icon: "ShoppingCart",
        },
      },
      {
        path: "/product/attribute",
        component: Attribute,
        name: "attribute",
        meta: {
          show: true,
          title: "属性管理",
          icon: "ShoppingTrolley",
        },
      },
      {
        path: "/product/spu",
        component: SPU,
        name: "spu",
        meta: {
          show: true,
          title: "SPU管理",
          icon: "Watch",
        },
      },
      {
        path: "/product/sku",
        component: SKU,
        name: "sku",
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
    component: NotFound,
    name: "notFound",
    meta: {
      show: false,
      title: "404",
      icon: "CloseBold",
      // 面包屑显示标志
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
    name: "other",
    meta: {
      show: false,
      title: "其他路由",
      icon: "CloseBold",
      // 面包屑显示标志
    },
  },
];
