import { ObjectId } from 'mongodb';

/**
 * 订单
 */
export interface DbOrder {
    _id: ObjectId;

    /** 订单内的产品 */
    products: {
        /** 产品 ID */
        _id: ObjectId,
        /** 下单时的单价 */
        price: number,
        /** 数量 */
        amount: number,
    }[];
    /** 总价 */
    totalPrice: number;

    /** 销售姓名 */
    seller: string;
    /** 备注 */
    remark: string;

    // 通过嵌套结构，约束 time 和 adminUid，必须成对出现；防止低级错误
    /** 创建时间、创建人 */
    create: {
        /** 创建时间 */
        time: Date,
        /** 创建的管理员 uid */
        adminUid: string
    },
    /** 更新时间、更新人 */
    update?: {
        /** 最后更新时间 */
        time: Date,
        /** 最后更新的管理员 uid */
        adminUid: string
    },
}