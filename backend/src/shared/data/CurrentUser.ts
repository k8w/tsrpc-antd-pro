import { DbUser } from "./db/DbUser";

export type CurrentUser = Pick<DbUser, '_id' | 'nickname' | 'roles' | 'createTime'>;