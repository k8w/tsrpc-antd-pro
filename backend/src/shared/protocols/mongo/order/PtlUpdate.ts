import { DbOrder } from '../../../data/db/DbOrder';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

export interface ReqUpdate extends BaseRequest {
    /** 
     * 下单之后，只允许更新 seller 和 remark，不允许修改产品和价格
     */
    product: Pick<DbOrder, '_id'> & Partial<Pick<DbOrder, 'seller' | 'remark'>>;
}

export interface ResUpdate extends BaseResponse {
    matchedCount: number,
    modifiedCount: number
}

export const conf: BaseConf = {
    needLogin: true
};