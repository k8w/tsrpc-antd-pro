import { DbProduct } from '../../../data/db/DbProduct';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

export interface ReqUpdate extends BaseRequest {
    /** 限定只允许更新有限个字段（可选），但 _id 必填 */
    product: Pick<DbProduct, '_id'> & Partial<Pick<DbProduct, 'name' | 'desc' | 'price'>>;
}

export interface ResUpdate extends BaseResponse {
    matchedCount: number
}

export const conf: BaseConf = {
    needLogin: true
};