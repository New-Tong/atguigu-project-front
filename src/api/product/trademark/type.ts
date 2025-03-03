export interface trademarkReqData {
  page: number;
  limit: number;
}
interface responseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface trademarkRespData extends responseData {
  data: trademarkData;
}

interface trademarkData {
  records: trademark[];
  total: number;
  size: number;
  current: number;
  searchCount: boolean;
  pages: number;
}

export interface trademark {
  id?: number;
  tmName: string;
  logoUrl: string;
}
