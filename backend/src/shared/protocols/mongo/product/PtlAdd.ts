import { ObjectId } from 'mongodb';
import { DbProduct } from '../../../data/db/DbProduct';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

export interface ReqAdd extends BaseRequest {
    product: Omit<DbProduct, '_id' | 'create' | 'update'>;
}

export interface ResAdd extends BaseResponse {
    insertedId: ObjectId;
}

export const conf: BaseConf = {
    needLogin: true
};