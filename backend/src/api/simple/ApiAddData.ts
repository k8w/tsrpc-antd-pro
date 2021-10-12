import { ApiCall } from "tsrpc";
import { ReqAddData, ResAddData } from "../../shared/protocols/simple/PtlAddData";
import { AllData } from "./ApiGetData";

// This is a demo code file
// Feel free to delete it

export async function ApiAddData(call: ApiCall<ReqAddData, ResAddData>) {
    // Error
    if (call.req.content === '') {
        call.error('Content is empty');
        return;
    }

    // 延迟 1 秒
    await new Promise(rs => { setTimeout(rs, 1000) });

    // 测试：随机报错
    if (Math.random() < 0.2) {
        call.error('20% 概率的模拟报错，这都让你碰到了~');
        return;
    }

    let time = new Date();
    let id = (AllData.max(v => v.id) ?? 0) + 1;
    AllData.unshift({
        id: id,
        content: call.req.content,
        time: time
    });

    // 最多保留 100 条数据
    if (AllData.length > 100) {
        AllData.splice(0, AllData.length - 100);
    }

    // Success
    call.succ({
        id: id,
        time: time
    });
}