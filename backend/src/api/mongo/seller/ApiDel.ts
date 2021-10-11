import { ApiCall } from "tsrpc";
import { ReqDel, ResDel } from "../../../shared/protocols/mongo/seller/PtlDel";

export async function ApiDel(call: ApiCall<ReqDel, ResDel>) {
    // TODO
    call.error('API Not Implemented');
}