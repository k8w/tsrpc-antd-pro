import { DbOrder } from "./DbOrder";
import { DbProduct } from "./DbProduct";

/**
 * Collection名: 数据类型
 */
export interface CollectionType {
    Product: DbProduct,
    Order: DbOrder
}