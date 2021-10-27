import { Collection, Logger, MongoClient } from "mongodb";
import { CollectionType } from "../shared/data/db/CollectionType";
import { backConfig } from "./backConfig";

/** 全局变量都放在这里，方便管理 */
export class Global {

    static mongo: MongoClient;

    /** 全局依赖初始化 */
    static async init(logger?: Logger) {
        // 初始化 MongoDB 连接
        this.mongo = new MongoClient(backConfig.mongoUri);
    }

    /** 
     * 获取 MongoDB Collection
     * 自动关联表名，约束表类型
     */
    static collection<T extends keyof CollectionType>(col: T): Collection<CollectionType[T]> {
        return this.mongo.db().collection(col);
    }

}