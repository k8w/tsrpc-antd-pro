import { useEffect } from "react";
import { BaseClient } from "tsrpc-base-client";
import { BaseServiceType } from "tsrpc-proto";

let abortKeyId = 0;

export function createUseApiClient<ServiceType extends BaseServiceType>(client: BaseClient<ServiceType>): HookUseApiClient<ServiceType> {
    return () => {
        // 给每个组件一个唯一的 abortKey
        const abortKey = '__RC__' + (++abortKeyId);

        // 组件 unmount 时取消所有未完成的请求，防止内存泄漏
        useEffect(() => {
            client.abortByKey(abortKey);
        }, [abortKey]);

        // 修改后的 callApi，（加入 abortKey）
        return {
            callApi: (apiName, req, options) => {
                return client.callApi(apiName, req, {
                    ...options,
                    abortKey: abortKey
                })
            }
        }
    }
}

export type HookUseApiClient<ServiceType extends BaseServiceType> = () => { callApi: BaseClient<ServiceType>['callApi'] };