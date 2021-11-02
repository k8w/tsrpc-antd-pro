export interface BaseRequest {
    /** 登录态 */
    sso?: string;
}

export interface BaseResponse {

}

export interface BaseConf {
    /**
     * 该接口是否需要登录后才可使用
     * 若未登录调用接口，会返回 `code` 为 `NEED_LOGIN` 的错误
     * @defaultValue false
     */
    needLogin?: boolean;
    /**
     * 该接口需要的用户角色，已登录用户有其中 **任一** 角色即视为有权限
     * 若当前用户无对应角色，会返回 `code` 为 `NoAccess` 的错误
     * `undefined` 代表不需要角色权限验证
     */
    needRoles?: string[];
}