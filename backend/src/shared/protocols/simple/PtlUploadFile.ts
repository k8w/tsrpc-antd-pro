import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqUploadFile extends BaseRequest {
    fileName: string,
    fileData: Uint8Array
}

export interface ResUploadFile extends BaseResponse {
    url: string
}

export const conf: BaseConf = {
    needLogin: true
};