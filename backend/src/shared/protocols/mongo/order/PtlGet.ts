import { DbOrder } from '../../../data/db/DbOrder';
import { BaseConf, BaseRequest, BaseResponse } from '../../base';

export interface ReqGet extends BaseRequest {
    /**
     * 页码，从 1 开始
     * @defaultValue 1
     */
    current?: number;
    /**
     * 分页大小
     * @defaultValue 20
     */
    pageSize?: number;
}

export interface ResGet extends BaseResponse {
    data: DbOrder[],
    total: number
}

export const conf: BaseConf = {
    needLogin: true
};