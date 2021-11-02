import { ObjectId } from "bson";

/** 登录态 */
export interface DbSSO {
    _id: ObjectId,
    uid: ObjectId,
    createTime: Date
}