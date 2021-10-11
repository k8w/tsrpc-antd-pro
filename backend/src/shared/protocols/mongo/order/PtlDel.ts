import { BaseRequest, BaseResponse, BaseConf } from '../../base'

export interface ReqDel extends BaseRequest {
    
}

export interface ResDel extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};