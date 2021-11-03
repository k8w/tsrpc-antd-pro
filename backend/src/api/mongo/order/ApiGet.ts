import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqGet, ResGet } from "../../../shared/protocols/mongo/order/PtlGet";

export async function ApiGet(call: ApiCall<ReqGet, ResGet>) {
    const current = call.req.current ?? 1;
    const pageSize = call.req.pageSize ?? 100;

    // 并行查询提高效率
    let [total, data] = await Promise.all([
        Global.collection('Order').countDocuments(),
        Global.collection('Order').find({}).sort({ _id: -1 }).skip((current - 1) * pageSize).limit(pageSize).toArray()
    ]);

    call.succ({
        data: data,
        total: total
    });
}