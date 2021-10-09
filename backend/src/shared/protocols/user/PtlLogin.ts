import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqLogin extends BaseRequest {
    
}

export interface ResLogin extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: false
};