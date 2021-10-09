import { ApiCall } from "tsrpc";
import { UserRole } from "../../shared/data/UserRole";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
    // 模拟延迟 2 秒
    await new Promise(rs => { setTimeout(rs, 2000) });

    const ticket = call.req.ticket;
    if (ticket.type === 'account') {
        // 用户名是 admin，则返回管理员权限
        if (ticket.password === 'ant.design' && ticket.username === 'admin') {
            call.succ({
                currentUserRole: UserRole.管理员,
                sso: 'SSO_ADMIN'
            });
            return;
        }
        // 用户名是 user，则返回普通用户权限
        if (ticket.password === 'ant.design' && ticket.username === 'user') {
            call.succ({
                currentUserRole: UserRole.普通用户,
                sso: 'SSO_USER'
            });
            return;
        }

        call.error('错误的用户名和密码，测试账号是：admin/ant.design');
        return;
    }

    if (call.req.ticket.type === 'mobile') {
        if (call.req.ticket.captcha === '1234') {
            call.succ({
                currentUserRole: UserRole.管理员,
                sso: 'SSO_ADMIN'
            });
            return;
        }

        call.error('验证码错误，正确的验证码是 1234');
        return;
    }
}