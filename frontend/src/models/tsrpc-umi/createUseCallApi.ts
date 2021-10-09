import { useState } from "@umijs/renderer-react/node_modules/@types/react";
import { BaseClient, TransportOptions } from "tsrpc-base-client";
import { BaseServiceType, TsrpcError } from "tsrpc-proto";

export function createUseCallApi<ServiceType extends BaseServiceType>(client: BaseClient<ServiceType>): HookUseCallApi<ServiceType> {
    return (apiName, req, options) => {
        const [loading, setLoading] = useState(true);
        const [res, setRes] = useState<unknown>();
        const [err, setErr] = useState<TsrpcError>();

        client.callApi(apiName, req, options).then(ret => {
            setLoading(false);
            if (ret.isSucc) {
                setRes(ret.res)
            }
            else {
                setErr(ret.err)
            }
        });

        return {
            loading: loading,
            res: res,
            err: err
        }
    }
}

export type HookUseCallApi<ServiceType extends BaseServiceType> = <T extends keyof ServiceType['api']>(apiName: T, req: ServiceType['api'][T]['req'], options?: TransportOptions) => { loading: boolean, res?: ServiceType['api'][T]['res'], err?: TsrpcError }