import { ApiCall } from "tsrpc";
import { ReqGet, ResGet } from "../../../shared/protocols/mongo/seller/PtlGet";

export async function ApiGet(call: ApiCall<ReqGet, ResGet>) {
    // TODO
    call.error('API Not Implemented');
}