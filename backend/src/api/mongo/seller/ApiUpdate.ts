import { ApiCall } from "tsrpc";
import { ReqUpdate, ResUpdate } from "../../../shared/protocols/mongo/seller/PtlUpdate";

export async function ApiUpdate(call: ApiCall<ReqUpdate, ResUpdate>) {
    // TODO
    call.error('API Not Implemented');
}