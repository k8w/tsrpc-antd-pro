import { ApiCall, HttpServer, TsrpcError } from "tsrpc";
import { DbUser } from "../../shared/data/db/DbUser";
import { UserRole } from "../../shared/data/UserRole";
import { ErrorCode } from "../../shared/protocols/ErrorCode";
import { UserUtil } from "../UserUtil";

// 扩展 Call 自定义字段
declare module 'tsrpc' {
    export interface ApiCall {
        /** 当前登录的用户 */
        currentUser?: DbUser;
    }
}

/** 校验登录态和角色权限 */
export function userAndRoles(server: HttpServer) {
    // API 执行前
    server.flows.preApiCallFlow.push(async call => {
        // 解析已登录用户
        let uid = (await UserUtil.parseSso(call.req.sso)).uid;
        if (uid) {
            call.currentUser = await UserUtil.getUser(uid);
        }

        // 该接口必须登录后才可使用
        if (call.service.conf?.needLogin && !call.currentUser) {
            call.error('请登录后再进行此操作', { code: ErrorCode.NeedLogin });
            return undefined;   // 中断后续流程
        }

        // 该接口有角色要求
        if (call.service.conf?.needRoles &&
            // 需要的角色都不满足（满足任一即有权限）
            call.service.conf?.needRoles.every((v: UserRole) => !call.currentUser?.roles.includes(v))
        ) {
            call.error('没有足够的权限', { code: ErrorCode.NoAccess });
            return undefined;   // 中断后续流程
        }

        // 验证通过，继续后续流程
        return call;
    })
}