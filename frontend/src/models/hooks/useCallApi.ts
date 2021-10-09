import { useEffect } from "react";
import { apiClient } from "../Global/apiClient";

let abortKeyId = 0;

export function useCallApi(): (typeof apiClient)['callApi'] {
    // 给每个组件一个唯一的 abortKey
    const abortKey = '__RC__' + (++abortKeyId);

    // 组件 unmount 时取消所有未完成的请求，防止内存泄漏
    useEffect(() => {
        apiClient.abortByKey(abortKey);
    }, [abortKey]);

    // 修改后的 callApi，（加入 abortKey）
    return (apiName, req, options) => {
        return apiClient.callApi(apiName, req, {
            ...options,
            abortKey: abortKey
        })
    }
}