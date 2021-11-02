import { DbUser } from '../../data/db/DbUser';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqLogin extends BaseRequest {
    ticket: LoginTicket
}

export interface ResLogin extends BaseResponse {
    user: DbUser,
    sso: string;
}

export type LoginTicket = {
    type: 'password',
    username: string,
    password: string,
} | {
    type: 'mobile',
    mobile: string,
    captcha: string,
}

export const conf: BaseConf = {

};