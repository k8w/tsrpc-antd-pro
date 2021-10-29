import { ApiCall } from "tsrpc";
import { Global } from "../../../models/Global";
import { ReqGetOrderWithProducts, ResGetOrderWithProducts } from "../../../shared/protocols/mongo/advanced/PtlGetOrderWithProducts";

export async function ApiGetOrderWithProducts(call: ApiCall<ReqGetOrderWithProducts, ResGetOrderWithProducts>) {
    const current = call.req.current ?? 1;
    const pageSize = call.req.pageSize ?? 100;

    // 先查 Order
    // 并行查询提高效率
    let [total, orders] = await Promise.all([
        Global.collection('Order').countDocuments(),
        Global.collection('Order').find({}).skip((current - 1) * pageSize).limit(current).toArray()
    ]);

    // 再查Product
    let productIds = orders.map(v => v.products.map(v => v._id)).reduce((prev, cur) => prev.concat(cur));
    let products = await Global.collection('Product').find({ _id: { $in: productIds } }).toArray();

    // 联合返回
    call.succ({
        data: orders.map(order => ({
            ...order,
            products: order.products.map(p => ({
                ...products.find(p2 => p2._id.equals(p._id))!,  // 方便起见，假设 productId 一定能查到对应产品
                amount: p.amount
            }))
        })),
        total: total
    })
}