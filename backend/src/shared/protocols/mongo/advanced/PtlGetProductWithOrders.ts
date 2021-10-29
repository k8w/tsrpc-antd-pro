import { DbOrder } from "../../../data/db/DbOrder";
import { DbProduct } from "../../../data/db/DbProduct";
import { ReqAntdTable } from "../../../data/ReqAntdTable";
import { BaseRequest, BaseResponse } from "./../../base";

/**
 * 一对多，联合查询示例（一个产品对应多个订单）
 */
export interface ReqGetProductWithOrders extends BaseRequest, ReqAntdTable {

}

export interface ResGetProductWithOrders extends BaseResponse {
    data: (DbProduct & { orders: DbOrder[] })[],
    total: number
}