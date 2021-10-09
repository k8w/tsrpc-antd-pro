import { ApiCall } from "tsrpc";
import { ReqUpdateUser, ResUpdateUser } from "../../shared/protocols/user/PtlUpdateUser";

export async function ApiUpdateUser(call: ApiCall<ReqUpdateUser, ResUpdateUser>) {
    // TODO
    call.error('API Not Implemented');
}