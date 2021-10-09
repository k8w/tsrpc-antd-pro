import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqAddUser extends BaseRequest {
    
}

export interface ResAddUser extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};