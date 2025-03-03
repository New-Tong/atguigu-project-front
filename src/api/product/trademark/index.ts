import request from "@/utils/request";
import type { trademarkReqData, trademarkRespData } from "./type";
enum API {
  TRADEMARK_URL = "/admin/product/baseTrademark/",
}

export const reqTrademark = (data: trademarkReqData) =>
  request.get<any, trademarkRespData>(
    API.TRADEMARK_URL + `${data.page}/${data.limit}`,
  );
