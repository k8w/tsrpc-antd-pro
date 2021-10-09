import { CurrentUser } from '../../data/CurrentUser';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqGetCurrentUser extends BaseRequest {

}

export interface ResGetCurrentUser extends BaseResponse {
    currentUser: CurrentUser
}

export const conf: BaseConf = {
    needLogin: true
};