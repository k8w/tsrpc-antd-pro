import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqAdd, ResAdd } from "../../../shared/protocols/mongo/product/PtlAdd";

export async function ApiAdd(call: ApiCall<ReqAdd, ResAdd>) {
    let op = await Global.collection('Product').insertOne({
        ...call.req.product,
        create: {
            time: new Date,
            uid: call.currentUid
        }
    });
    call.succ({
        insertedId: op.insertedId
    })
}