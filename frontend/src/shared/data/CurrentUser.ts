import { uint } from "tsbuffer-schema";
import { UserRole } from "./UserRole";

export interface CurrentUser {
    name: string,
    avatar: string,
    userid: string,
    email: string,
    signature: string,
    title: string,
    group: string,
    tags: {
        key: string,
        label: string,
    }[],
    notifyCount: uint,
    unreadCount: uint,
    country: string,
    role: UserRole,
    geographic: {
        province: {
            label: string,
            key: string,
        },
        city: {
            label: string,
            key: string,
        },
    },
    address: string,
    phone: string,
}
