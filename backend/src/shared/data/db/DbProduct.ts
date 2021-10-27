import { ObjectId } from 'mongodb';

/**
 * 商品
 */
export interface DbProduct {
    _id: ObjectId;

    /** 商品名 */
    name: string;
    /** 商品描述 */
    desc: string;
    /** 商品单价 */
    price: number;

    // 通过嵌套结构，约束 time 和 uid
    /** 创建时间、创建人 */
    create: {
        /** 创建时间 */
        time: Date,
        /** 创建人 */
        uid: string
    },
    /** 更新时间、更新人 */
    update?: {
        /** 最后更新时间 */
        time: Date,
        /** 最后更新人 */
        uid: string
    },
}