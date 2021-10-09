export interface BaseRequest {
    sso?: string;
}

export interface BaseResponse {
    __refreshSso?: string;
}

export interface BaseConf {
    needLogin?: boolean;
    needRoles?: string[];
}