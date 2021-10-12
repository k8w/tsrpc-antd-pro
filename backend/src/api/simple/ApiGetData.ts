import { ApiCall } from "tsrpc";
import { ReqGetData, ResGetData } from "../../shared/protocols/simple/PtlGetData";

// This is a demo code file
// Feel free to delete it

export async function ApiGetData(call: ApiCall<ReqGetData, ResGetData>) {
    // 延迟 1 秒
    await new Promise(rs => { setTimeout(rs, 1000) });

    call.succ({
        data: AllData
    })
}

export const AllData: { id: number, content: string, time: Date }[] = [
    // 默认，初始 1 条消息
    {
        id: 1,
        content: '服务启动啦~',
        time: new Date()
    }
];