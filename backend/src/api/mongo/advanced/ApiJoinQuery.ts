import { ApiCall } from "tsrpc";
import { ReqJoinQuery, ResJoinQuery } from "../../../shared/protocols/mongo/advanced/PtlJoinQuery";

export async function ApiJoinQuery(call: ApiCall<ReqJoinQuery, ResJoinQuery>) {
    // TODO
    call.error('API Not Implemented');
}