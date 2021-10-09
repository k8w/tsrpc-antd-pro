import { ApiCall } from "tsrpc";
import { ReqDelUsers, ResDelUsers } from "../../shared/protocols/user/PtlDelUsers";

export async function ApiDelUsers(call: ApiCall<ReqDelUsers, ResDelUsers>) {
    // TODO
    call.error('API Not Implemented');
}