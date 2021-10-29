import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqAdd, ResAdd } from "../../../shared/protocols/mongo/order/PtlAdd";

export async function ApiAdd(call: ApiCall<ReqAdd, ResAdd>) {
    // 创建订单
    let opInsert = await Global.collection('Order').insertOne({
        ...call.req.order,
        create: {
            time: new Date(),
            uid: call.currentUid
        }
    });

    call.succ({ insertedId: opInsert.insertedId });
}