import { ApiCall } from "tsrpc";
import { ReqAdd, ResAdd } from "../../../shared/protocols/mongo/seller/PtlAdd";

export async function ApiAdd(call: ApiCall<ReqAdd, ResAdd>) {
    // TODO
    call.error('API Not Implemented');
}