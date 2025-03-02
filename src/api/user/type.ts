export interface loginRespData extends responseData {
  data: string;
}

export interface loginReqData {
  username: string;
  password: string;
}

interface responseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface userInfoRespData extends responseData {
  data: userInfoDataType;
}

interface userInfoDataType {
  avatar: string;
  buttons: string[];
  name: string;
  roles: string[];
  routes: string[];
}
