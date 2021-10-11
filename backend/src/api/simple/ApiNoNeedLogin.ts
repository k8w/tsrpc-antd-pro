import { ApiCall } from "tsrpc";
import { ReqNoNeedLogin, ResNoNeedLogin } from "../../shared/protocols/simple/PtlNoNeedLogin";

export async function ApiNoNeedLogin(call: ApiCall<ReqNoNeedLogin, ResNoNeedLogin>) {
    // TODO
    call.error('API Not Implemented');
}