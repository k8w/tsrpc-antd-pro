import { DbOrder } from '../../../data/db/DbOrder';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';
import { ObjectId } from 'mongodb';

export interface ReqAdd extends BaseRequest {
    order: Omit<DbOrder, '_id' | 'create' | 'update'>;
}

export interface ResAdd extends BaseResponse {
    insertedId: ObjectId;
}

export const conf: BaseConf = {
    needLogin: true
};