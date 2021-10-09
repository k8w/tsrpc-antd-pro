import { UserRole } from "./UserRole";

export interface CurrentUser {
    _id: string,
    nickname: string,
    roles: UserRole[]
}