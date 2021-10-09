import { HttpClient } from "tsrpc-browser";
import { serviceProto } from "../../shared/protocols/serviceProto";

// 适用于全站只有 1 个唯一的 Client 的情况
export const apiClient = new HttpClient(serviceProto, {
    server: `${location.protocol}//${location.hostname}:3000`,
    logger: console
});

if (process.env.NODE_ENV === 'development') {
    (window as any).apiClient = apiClient;
}