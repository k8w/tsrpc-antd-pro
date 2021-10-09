import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqUpdateUser extends BaseRequest {
    
}

export interface ResUpdateUser extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};