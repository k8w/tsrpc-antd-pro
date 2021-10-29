import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqGetProductWithOrders, ResGetProductWithOrders } from "../../../shared/protocols/mongo/advanced/PtlGetProductWithOrders";

export async function ApiGetProductWithOrders(call: ApiCall<ReqGetProductWithOrders, ResGetProductWithOrders>) {
    const current = call.req.current ?? 1;
    const pageSize = call.req.pageSize ?? 100;

    // 先查 Product
    // 并行查询提高效率
    let [total, products] = await Promise.all([
        Global.collection('Product').countDocuments(),
        Global.collection('Product').find({}).skip((current - 1) * pageSize).limit(current).toArray()
    ]);

    // 再查 Order （通常在 MongoDB 中，可以不需要复杂的 JOIN 查询，分两次查就好了）
    let orders = await Global.collection('Order').find({
        'products._id': { $in: products.map(v => v._id) }
    }).toArray();

    // 合并返回
    call.succ({
        data: products.map(p1 => ({
            ...p1,
            orders: orders.filter(o => o.products.some(p2 => p2._id.equals(p1._id)))
        })),
        total: total
    })
}