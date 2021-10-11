import { ApiCall } from "tsrpc";
import { ReqUpdate, ResUpdate } from "../../../shared/protocols/mongo/order/PtlUpdate";

export async function ApiUpdate(call: ApiCall<ReqUpdate, ResUpdate>) {
    // TODO
    call.error('API Not Implemented');
}