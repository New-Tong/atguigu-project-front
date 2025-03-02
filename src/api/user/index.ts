import request from "@/utils/request";
import type { loginRespData, loginReqData, userInfoRespData } from "./type";
enum API {
  LOGIN_URL = "/admin/acl/index/login",
  USERINFO_URL = "/admin/acl/index/info",
  LOGOUT_URL = "/admin/acl/index/logout",
}

export const reqLogin = (data: loginReqData) =>
  request.post<any, loginRespData>(API.LOGIN_URL, data);

export const reqUserInfo = () => request.get<any, userInfoRespData>(API.USERINFO_URL);

export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
