import { ObjectId } from "bson";
import { UserRole } from "../UserRole";

export interface DbUser {
    _id: ObjectId,

    /** 用户名 */
    username?: string,
    /** 密码 */
    password?: string,

    /** 手机号 */
    mobile?: string,

    /** 昵称 */
    nickname: string,
    /** 用户角色 */
    roles: UserRole[],
    /** 用户创建时间 */
    createTime: Date
}