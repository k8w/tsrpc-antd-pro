import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { ReqGetUsers, ResGetUsers } from "../../shared/protocols/user/PtlGetUsers";

export async function ApiGetUsers(call: ApiCall<ReqGetUsers, ResGetUsers>) {
    let users = await Global.collection('User').find({}).toArray()

    call.succ({
        users: users
    })
}