export interface BaseRequest {
    sso?: string;
}

export interface BaseResponse {
    
}

export interface BaseConf {
    needLogin?: boolean;
    needRoles?: string[];
}