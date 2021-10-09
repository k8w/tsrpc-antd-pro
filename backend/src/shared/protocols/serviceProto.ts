import { ServiceProto } from 'tsrpc-proto';
import { ReqAddUser, ResAddUser } from './user/PtlAddUser';
import { ReqDelUsers, ResDelUsers } from './user/PtlDelUsers';
import { ReqGetUsers, ResGetUsers } from './user/PtlGetUsers';
import { ReqLogin, ResLogin } from './user/PtlLogin';
import { ReqLogout, ResLogout } from './user/PtlLogout';
import { ReqUpdateUser, ResUpdateUser } from './user/PtlUpdateUser';

export interface ServiceType {
    api: {
        "user/AddUser": {
            req: ReqAddUser,
            res: ResAddUser
        },
        "user/DelUsers": {
            req: ReqDelUsers,
            res: ResDelUsers
        },
        "user/GetUsers": {
            req: ReqGetUsers,
            res: ResGetUsers
        },
        "user/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "user/Logout": {
            req: ReqLogout,
            res: ResLogout
        },
        "user/UpdateUser": {
            req: ReqUpdateUser,
            res: ResUpdateUser
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 1,
    "services": [
        {
            "id": 0,
            "name": "user/AddUser",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 1,
            "name": "user/DelUsers",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 2,
            "name": "user/GetUsers",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 3,
            "name": "user/Login",
            "type": "api",
            "conf": {
                "needLogin": false
            }
        },
        {
            "id": 5,
            "name": "user/Logout",
            "type": "api",
            "conf": {}
        },
        {
            "id": 4,
            "name": "user/UpdateUser",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        }
    ],
    "types": {
        "user/PtlAddUser/ReqAddUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sso",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "user/PtlAddUser/ResAddUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__refreshSso",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "user/PtlDelUsers/ReqDelUsers": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlDelUsers/ResDelUsers": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlGetUsers/ReqGetUsers": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlGetUsers/ResGetUsers": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlLogin/ReqLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlLogout/ReqLogout": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlLogout/ResLogout": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlUpdateUser/ReqUpdateUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlUpdateUser/ResUpdateUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        }
    }
};