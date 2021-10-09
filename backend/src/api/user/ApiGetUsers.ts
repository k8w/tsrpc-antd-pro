import { ApiCall } from "tsrpc";
import { ReqGetUsers, ResGetUsers } from "../../shared/protocols/user/PtlGetUsers";

export async function ApiGetUsers(call: ApiCall<ReqGetUsers, ResGetUsers>) {
    // TODO
    call.error('API Not Implemented');
}