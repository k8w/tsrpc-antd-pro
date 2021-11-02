import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { UserUtil } from "../../models/UserUtil";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
    const ticket = call.req.ticket;
    if (ticket.type === 'password') {
        let user = await Global.collection('User').findOne({
            username: ticket.username,
            password: UserUtil.encodePassword(ticket.password)
        });

        if (!user) {
            call.error('错误的用户名和密码，测试账号是：admin/admin, user/user （不同权限）');
            return;
        }

        call.succ({
            user: user,
            sso: await UserUtil.createSso(user._id)
        })
    }
    else if (call.req.ticket.type === 'mobile') {
        if (call.req.ticket.captcha !== '1234') {
            call.error('验证码错误，正确的验证码是 1234');
            return;
        }

        let user = await Global.collection('User').findOne({
            mobile: ticket.mobile
        });
        if (!user) {
            call.error('用户不存在');
            return;
        }

        call.succ({
            user: user,
            sso: await UserUtil.createSso(user._id)
        })
    }
}