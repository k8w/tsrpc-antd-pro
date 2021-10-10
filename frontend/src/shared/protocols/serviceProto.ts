import { ServiceProto } from 'tsrpc-proto';
import { ReqGetCurrentUser, ResGetCurrentUser } from './user/PtlGetCurrentUser';
import { ReqGetUsers, ResGetUsers } from './user/PtlGetUsers';
import { ReqLogin, ResLogin } from './user/PtlLogin';
import { ReqLogout, ResLogout } from './user/PtlLogout';

export interface ServiceType {
    api: {
        "user/GetCurrentUser": {
            req: ReqGetCurrentUser,
            res: ResGetCurrentUser
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
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 6,
            "name": "user/GetCurrentUser",
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
            "conf": {}
        },
        {
            "id": 5,
            "name": "user/Logout",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "user/PtlGetCurrentUser/ReqGetCurrentUser": {
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
        "user/PtlGetCurrentUser/ResGetCurrentUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "currentUser",
                    "type": {
                        "type": "Reference",
                        "target": "../data/CurrentUser/CurrentUser"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "../data/CurrentUser/CurrentUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "userid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "signature",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "group",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "tags",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "label",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 8,
                    "name": "notifyCount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 9,
                    "name": "unreadCount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 10,
                    "name": "country",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 11,
                    "name": "role",
                    "type": {
                        "type": "Reference",
                        "target": "../data/UserRole/UserRole"
                    }
                },
                {
                    "id": 12,
                    "name": "geographic",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "province",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "label",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "key",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "name": "city",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "label",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "key",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 13,
                    "name": "address",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 14,
                    "name": "phone",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../data/UserRole/UserRole": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "admin"
                },
                {
                    "id": 1,
                    "value": "user"
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
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "users",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "age",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "address",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
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
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "ticket",
                    "type": {
                        "type": "Reference",
                        "target": "user/PtlLogin/LoginTicket"
                    }
                }
            ]
        },
        "user/PtlLogin/LoginTicket": {
            "type": "Union",
            "members": [
                {
                    "id": 4,
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "type",
                                "type": {
                                    "type": "Literal",
                                    "literal": "account"
                                }
                            },
                            {
                                "id": 1,
                                "name": "username",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "password",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "type",
                                "type": {
                                    "type": "Literal",
                                    "literal": "mobile"
                                }
                            },
                            {
                                "id": 1,
                                "name": "mobile",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "captcha",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
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
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "currentUserRole",
                    "type": {
                        "type": "Reference",
                        "target": "../data/UserRole/UserRole"
                    }
                },
                {
                    "id": 1,
                    "name": "sso",
                    "type": {
                        "type": "String"
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
        }
    }
};