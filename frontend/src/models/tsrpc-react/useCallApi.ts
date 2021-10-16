import { useEffect, useRef, useState } from "react";
import { BaseClient } from "tsrpc-base-client";
import { HttpClientTransportOptions } from "tsrpc-browser";
import { BaseServiceType, TsrpcError } from "tsrpc-proto";
import { useScopedClient } from "./useScopedClient";

/**
 * 对标 umi 中的 useRequest，以更方便的关联 ANTD 组件。
 * 类似 useApiClient，通过此方式发起的请求，在组件销毁后也会自动取消未完成的请求。
 * 手动调用返回中的 run 方法，以重新触发请求。
 * @param client - TSRPC Client
 * @param apiName
 * @param req - 请求参数，当 req 变化时，自动重新请求。若不希望立即开始请求，则传入 undefined，此时不会发起请求。
 * @param options 
 * @returns 
 */
export function useCallApi<ServiceType extends BaseServiceType, T extends keyof ServiceType['api']>
    (client: BaseClient<ServiceType>, apiName: T, req: ServiceType['api'][T]['req'], options?: UseCallApiOptions<ServiceType, T>)
    : {
        loading: boolean,
        res?: ServiceType['api'][T]['res'],
        err?: TsrpcError,
        /** 调用此方法以重新请求 */
        run: () => void
    } {
    const scopedClient = useScopedClient(client);
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState<unknown>();
    const [err, setErr] = useState<TsrpcError>();

    const [runId, setRunId] = useState(0);
    const run = useRef(() => { setRunId(v => v + 1) });

    useEffect(() => {
        setErr(undefined);
        if (!options?.keepLastRes) {
            setRes(undefined);
        }
        if (options?.manual && runId === 0) {
            setLoading(false);
            return;
        }

        setLoading(true);
        scopedClient.callApi(apiName, req, options).then(ret => {
            setLoading(false);
            if (ret.isSucc) {
                options?.onSuccess?.(ret.res);
                setRes(ret.res)
            }
            else {
                options?.onError?.(ret.err);
                setErr(ret.err)
            }
        });

        let sn = client.lastSN;
        return () => { client.abort(sn) };
    }, [runId])

    return {
        loading: loading,
        res: res,
        err: err,
        run: run.current!
    }
}

export type UseCallApiOptions<ServiceType extends BaseServiceType, T extends keyof ServiceType['api']> = HttpClientTransportOptions & {
    /**
     * 默认 false。 即在初始化时自动执行 service。
     * 如果设置为 true，则需要手动调用 run 触发执行。
     * @defaultValue false
     */
    manual?: boolean,

    /**
     * callApi 返回成功时触发
     */
    onSuccess?: (res: ServiceType['api'][T]['res']) => void,

    /**
     * callApi 返回错误时触发
     */
    onError?: (err: TsrpcError) => void,

    /**
     * 重新请求时，在新的成功响应返回前，保留上一次成功的响应。
     * 即便新的请求报错，也会保留上一次成功的响应，此时 res 和 err 同时存在。
     * @defaultValue false
     */
    keepLastRes?: boolean
}