import { DbOrder } from '../../../data/db/DbOrder';
import { ReqAntdTable } from '../../../data/ReqAntdTable';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

/** 获取订单列表 */
export interface ReqGet extends BaseRequest, ReqAntdTable {

}

export interface ResGet extends BaseResponse {
    data: DbOrder[],
    total: number
}

export const conf: BaseConf = {
    needLogin: true
};