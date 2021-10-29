import { ObjectId } from 'mongodb';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

/** 批量删除订单 */
export interface ReqDel extends BaseRequest {
    _ids: ObjectId[]
}

export interface ResDel extends BaseResponse {
    deletedCount: number
}

export const conf: BaseConf = {
    needLogin: true
};