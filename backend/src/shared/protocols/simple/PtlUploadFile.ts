import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqUploadFile extends BaseRequest {

}

export interface ResUploadFile extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
};