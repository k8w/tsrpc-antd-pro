import { BaseRequest, BaseResponse, BaseConf } from '../../base'

export interface ReqJoinQuery extends BaseRequest {
    
}

export interface ResJoinQuery extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};