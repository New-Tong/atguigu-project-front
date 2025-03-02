export interface loginRespData {
  code: number;
  message: string;
  data: string;
  ok: boolean;
}

export interface loginReqData {
  username: string;
  password: string;
}

export interface userInfoRespData {
  code: number;
  data: userInfoDataType;
  message: string;
  ok: boolean;
}

interface userInfoDataType {
  avatar: string;
  buttons: string[];
  name: string;
  roles: string[];
  routes: string[];
}
