import { BaseConf, BaseRequest, BaseResponse } from '../../base';

export interface ReqAggregate extends BaseRequest {

}

export interface ResAggregate extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
};