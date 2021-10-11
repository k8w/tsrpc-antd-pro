import { ApiCall } from "tsrpc";
import { ReqAggregate, ResAggregate } from "../../../shared/protocols/mongo/advanced/PtlAggregate";

export async function ApiAggregate(call: ApiCall<ReqAggregate, ResAggregate>) {
    // TODO
    call.error('API Not Implemented');
}