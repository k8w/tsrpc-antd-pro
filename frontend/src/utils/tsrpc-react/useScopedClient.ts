import { useEffect, useRef } from "react";
import { BaseClient } from "tsrpc-base-client";
import { BaseServiceType } from "tsrpc-proto";

let abortKeyId = 0;

/**
 * 通过本方法获得的 client，在 callApi 期间，如果组件销毁，则会自动取消未完成的请求。
 * 以此防止内存泄露和相关报错，推荐所有会影响组件状态变更的请求都通过此方法调用接口。
 * @param client 原始 TSRPC Client 实例
 * @returns 
 */
export function useScopedClient<ServiceType extends BaseServiceType>(client: BaseClient<ServiceType>): ScopedApiClient<ServiceType> {
    // 给每个组件一个唯一的 abortKey
    const abortKey = useRef<string>();
    if (!abortKey.current) {
        abortKey.current = '__RC__' + (++abortKeyId);
    }

    // 组件 unmount 时取消所有未完成的请求，防止内存泄漏
    useEffect(() => {
        return () => { client.abortByKey(abortKey.current!) };
    }, [abortKey.current!]);

    // 修改后的 callApi，（加入 abortKey）
    let scodedClient = useRef<ScopedApiClient<ServiceType>>();
    if (!scodedClient.current) {
        scodedClient.current = {
            callApi: (apiName, req, options) => {
                return client.callApi(apiName, req, {
                    ...options,
                    abortKey: abortKey.current!
                })
            }
        };
    }

    return scodedClient.current;
}

export type ScopedApiClient<ServiceType extends BaseServiceType> = { callApi: BaseClient<ServiceType>['callApi'] };