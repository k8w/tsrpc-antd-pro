import { BaseRequest } from "@/shared/protocols/base";
import { HttpClient } from "tsrpc-browser";
import { serviceProto } from "../../shared/protocols/serviceProto";

// Server 地址，建议放到自己统一的配置文件中
export const serverUrl = `${location.protocol}//${location.hostname}:3000`;

// 适用于全站只有 1 个唯一的 Client 的情况
export const apiClient = new HttpClient(serviceProto, {
    server: serverUrl,
    logger: console
});

// 不依赖 Cookie，跨平台的登录态实现
// 在特定请求收到 SSO 登录态后，将其存在本地
apiClient.flows.postApiReturnFlow.push(v => {
    if (v.apiName === 'user/Login' && v.return.isSucc) {
        localStorage.setItem('SSO', v.return.res.sso);
    }
    return v;
});
// 后续每次请求，自动带上 SSO
apiClient.flows.preCallApiFlow.push(v => {
    let sso = localStorage.getItem('SSO');
    let req = v.req as BaseRequest;
    if (sso && !req.sso) {
        req.sso = sso;
    }
    return v;
});

// 方便浏览器调试
if (process.env.NODE_ENV === 'development') {
    (window as any).apiClient = apiClient;
}