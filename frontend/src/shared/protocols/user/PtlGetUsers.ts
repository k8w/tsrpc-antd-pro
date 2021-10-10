import { uint } from 'tsbuffer-schema';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetUsers extends BaseRequest {
    
}

export interface ResGetUsers extends BaseResponse {
    users: {
        key: string,
        name: string,
        age: uint,
        address: string,
    }[]
}

export const conf: BaseConf = {
    needLogin: true
};