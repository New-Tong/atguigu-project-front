import request from "@/utils/request";
import type { loginReqData, LoginResponse, userInfoRespData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USER_INFO_URL = "/user/info",
}
export const reqLogin = (user: loginReqData) =>
  request.post<any, LoginResponse>(API.LOGIN_URL, user);
export const reqUserInfo = (token: string) =>
  request.get<any, userInfoRespData>(API.USER_INFO_URL, { headers: { token } });
