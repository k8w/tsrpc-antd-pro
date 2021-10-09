import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqDelUsers extends BaseRequest {
    
}

export interface ResDelUsers extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};