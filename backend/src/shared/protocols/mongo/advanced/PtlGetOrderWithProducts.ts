import { Overwrite } from "tsbuffer-schema";
import { DbOrder } from "../../../data/db/DbOrder";
import { DbProduct } from "../../../data/db/DbProduct";
import { ReqAntdTable } from "../../../data/ReqAntdTable";
import { BaseRequest, BaseResponse } from "./../../base";

/**
 * 多对多，联合查询示例（一个订单对应多个产品，一个产品也对应多个订单）
 */
export interface ReqGetOrderWithProducts extends BaseRequest, ReqAntdTable {

}

export interface ResGetOrderWithProducts extends BaseResponse {
    data: Overwrite<DbOrder, {
        products: (DbProduct & { amount: number })[]
    }>[],
    total: number
}