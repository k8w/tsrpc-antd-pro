import { UserRole } from '../../data/UserRole';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqLogin extends BaseRequest {
    ticket: LoginTicket
}

export interface ResLogin extends BaseResponse {
    currentUserRole: UserRole,
    sso: string;
}

export type LoginTicket = {
    type: 'account',
    username: string,
    password: string,
} | {
    type: 'mobile',
    mobile: string,
    captcha: string,
}

export const conf: BaseConf = {

};