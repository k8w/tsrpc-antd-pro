import { ApiCall } from "tsrpc";
import { ReqLogout, ResLogout } from "../../shared/protocols/user/PtlLogout";

export async function ApiLogout(call: ApiCall<ReqLogout, ResLogout>) {
    call.succ({})
}