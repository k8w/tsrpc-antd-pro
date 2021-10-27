import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqGet, ResGet } from "../../../shared/protocols/mongo/product/PtlGet";

export async function ApiGet(call: ApiCall<ReqGet, ResGet>) {
    const current = call.req.current ?? 1;
    const pageSize = call.req.pageSize ?? 100;

    // 并行查询提高效率
    let [total, data] = await Promise.all([
        Global.collection('Product').countDocuments(),
        Global.collection('Product').find({}).skip((current - 1) * pageSize).limit(current).toArray()
    ]);

    call.succ({
        data: data,
        total: total
    });
}