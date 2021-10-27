import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqDel, ResDel } from "../../../shared/protocols/mongo/product/PtlDel";

export async function ApiDel(call: ApiCall<ReqDel, ResDel>) {
    let op = await Global.collection('Product').deleteMany({
        _id: { $in: call.req._ids }
    });
    call.succ({
        deletedCount: op.deletedCount
    })
}