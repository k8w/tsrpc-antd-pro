import { DbOrder } from "./DbOrder";
import { DbProduct } from "./DbProduct";
import { DbSSO } from "./DbSSO";
import { DbUser } from "./DbUser";

/**
 * Collection名: 数据类型
 */
export interface CollectionType {
    Product: DbProduct,
    Order: DbOrder,
    SSO: DbSSO,
    User: DbUser
}