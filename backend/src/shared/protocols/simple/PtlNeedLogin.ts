import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqNeedLogin extends BaseRequest {
    
}

export interface ResNeedLogin extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};