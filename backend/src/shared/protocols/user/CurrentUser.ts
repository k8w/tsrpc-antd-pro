import { UserRole } from "../../models/UserRole";

export interface CurrentUser {
    _id: string,
    nickname: string,
    roles: UserRole[]
}