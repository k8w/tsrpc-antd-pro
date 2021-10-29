import { DbProduct } from '../../../data/db/DbProduct';
import { ReqAntdTable } from '../../../data/ReqAntdTable';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

/** 获得产品列表 */
export interface ReqGet extends BaseRequest, ReqAntdTable {

}

export interface ResGet extends BaseResponse {
    data: DbProduct[],
    total: number
}

export const conf: BaseConf = {
    needLogin: true
};