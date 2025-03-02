import router from "@/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import useUserStore from "@/store/modules/user";
import setting from "@/setting";
nprogress.configure({ showSpinner: false });
router.beforeEach(async (to, from, next) => {
  nprogress.start();

  const userStore = useUserStore();
  // 如果目标路径不是登录页，尝试获取用户信息
  if (to.path !== "/login") {
    // 检查是否有token
    if (!userStore.token) {
      // 如果没有token，重定向到登录页并携带当前路径作为重定向参数
      next({ path: "/login", query: { redirect: to.path } });
    }
    const username = userStore.username;
    if (username) {
      next();
    } else {
      try {
        // 异步获取用户信息
        await userStore.userInfo();
        next(); // 获取成功后继续导航
      } catch (error) {
        await userStore.userLogout();
        next({ path: "/login", query: { redirect: to.path } }); // 获取失败则重定向到登录页
      }
    }
  }
  // 如果目标路径是登录页
  if (userStore.token) {
    next({ path: "/" }); // 已登录用户尝试访问登录页，则重定向到首页
  } else {
    next(); // 未登录用户正常进入登录页
  }
  nprogress.done(); // 不论如何都要结束进度条
});

router.afterEach((to, from, next) => {
  document.title = `${setting.title}-${to.meta.title}`;
  // 完成进度条
  nprogress.done();
});
