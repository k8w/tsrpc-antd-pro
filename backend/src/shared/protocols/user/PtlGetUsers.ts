import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetUsers extends BaseRequest {
    
}

export interface ResGetUsers extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};