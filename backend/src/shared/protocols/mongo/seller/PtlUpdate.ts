import { BaseRequest, BaseResponse, BaseConf } from '../../base'

export interface ReqUpdate extends BaseRequest {
    
}

export interface ResUpdate extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
};