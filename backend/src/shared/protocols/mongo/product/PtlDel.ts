import { BaseRequest, BaseResponse, BaseConf } from '../../base'
import { ObjectId } from 'mongodb';

/** 批量删除产品 */
export interface ReqDel extends BaseRequest {
    _ids: ObjectId[]
}

export interface ResDel extends BaseResponse {
    deletedCount: number
}

export const conf: BaseConf = {
    needLogin: true
};