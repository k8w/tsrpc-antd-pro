import { DbUser } from '../../data/db/DbUser';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqGetUsers extends BaseRequest {

}

export interface ResGetUsers extends BaseResponse {
    users: DbUser[]
}

export const conf: BaseConf = {
    needLogin: true
};