import { ApiCall } from "tsrpc";
import { ReqGetList, ResGetList } from "../../../shared/protocols/mongo/order/PtlGetList";

export async function ApiGetList(call: ApiCall<ReqGetList, ResGetList>) {
    // TODO
    call.error('API Not Implemented');
}