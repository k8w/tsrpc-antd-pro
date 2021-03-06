import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqUpdate, ResUpdate } from "../../../shared/protocols/mongo/product/PtlUpdate";

export async function ApiUpdate(call: ApiCall<ReqUpdate, ResUpdate>) {
    const { _id, ...update } = call.req.update;

    // 由于 TSRPC 确保类型和字段安全，所以可以放心的将请求参数传递给数据库接口
    let op = await Global.collection('Product').updateOne({ _id: _id }, {
        $set: {
            ...update,
            // 更新时间、更新人
            update: {
                time: new Date(),
                uid: call.currentUser!._id
            }
        }
    });

    call.succ({
        matchedCount: op.matchedCount
    })
}