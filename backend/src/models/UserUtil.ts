import { ObjectId } from "bson";
import { DbUser } from "../shared/data/db/DbUser";
import { Global } from "./Global";

export class UserUtil {

    /** 
     * 创建登录态
     * 你可以根据自己的需要，采取适合的方式（这里方便起见使用 MongoDB 存储登录态）
     */
    static async createSso(uid: ObjectId): Promise<string> {
        let op = await Global.collection('SSO').insertOne({
            uid: uid,
            createTime: new Date()
        });
        return `${uid}|${op.insertedId.toHexString()}`;
    }

    /**
     * 安全起见，密码应该加密存储而非明文
     * @param password 
     */
    static encodePassword(password: string): string {
        // 测试期间，暂未实现
        return password;
    }

    /** 
     * 解析登录态
     * 上面怎么创建，这里就怎么解析
     */
    static async parseSso(sso: string | undefined): Promise<{ uid: ObjectId | undefined }> {
        if (!sso) {
            return { uid: undefined };
        }

        // 解析 SSO 字符串
        let [uid, ssoId] = sso.split('|');
        if (!uid || !ssoId) {
            return { uid: undefined };
        }

        // 从数据库验证 SSO 有效性
        let uidObjId = new ObjectId(uid);
        if (!await Global.collection('SSO').find({ uid: uidObjId, _id: new ObjectId(ssoId) }).hasNext()) {
            return { uid: undefined };
        }

        return { uid: uidObjId };
    }

    static async getUser(uid: ObjectId): Promise<DbUser | undefined> {
        return await Global.collection('User').findOne({ _id: uid }) ?? undefined;
    }

}