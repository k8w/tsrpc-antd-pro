import { BaseRequest, BaseResponse, BaseConf } from '../../base'

export interface ReqGet extends BaseRequest {
    
}

export interface ResGet extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};