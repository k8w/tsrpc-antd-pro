import { ApiCall } from "tsrpc";
import { ReqNeedLogin, ResNeedLogin } from "../../shared/protocols/simple/PtlNeedLogin";

export async function ApiNeedLogin(call: ApiCall<ReqNeedLogin, ResNeedLogin>) {
    // TODO
    call.error('API Not Implemented');
}