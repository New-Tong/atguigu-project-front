export interface loginReqData {
  username: string;
  password: string;
}

// 成功和失败响应数据的类型定义
export interface LoginRespDataType {
  token?: string;
  message?: string;
}

// 定义一个泛型接口来统一处理不同的data类型
export interface LoginResponse {
  code: number;
  data: LoginRespDataType;
}

export interface userInfoData {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

export interface userInfoRespData {
  code: number;
  data: userInfoRespDataType;
}

interface userInfoRespDataType {
  info?: userInfoData;
  message?: string;
}
