import { ApiCall } from "tsrpc";
import { ReqGetCurrentUser, ResGetCurrentUser } from "../../shared/protocols/user/PtlGetCurrentUser";

export async function ApiGetCurrentUser(call: ApiCall<ReqGetCurrentUser, ResGetCurrentUser>) {
    call.succ({
        currentUser: call.currentUser!
    })
}