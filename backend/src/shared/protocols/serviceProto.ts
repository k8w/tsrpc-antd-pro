import { ServiceProto } from 'tsrpc-proto';
import { ReqGetNotice, ResGetNotice } from './antd/PtlGetNotice';
import { ReqGetOrderWithProducts, ResGetOrderWithProducts } from './mongo/advanced/PtlGetOrderWithProducts';
import { ReqGetProductWithOrders, ResGetProductWithOrders } from './mongo/advanced/PtlGetProductWithOrders';
import { ReqAdd, ResAdd } from './mongo/order/PtlAdd';
import { ReqDel, ResDel } from './mongo/order/PtlDel';
import { ReqGet, ResGet } from './mongo/order/PtlGet';
import { ReqUpdate, ResUpdate } from './mongo/order/PtlUpdate';
import { ReqAdd as ReqAdd_1, ResAdd as ResAdd_1 } from './mongo/product/PtlAdd';
import { ReqDel as ReqDel_1, ResDel as ResDel_1 } from './mongo/product/PtlDel';
import { ReqGet as ReqGet_1, ResGet as ResGet_1 } from './mongo/product/PtlGet';
import { ReqUpdate as ReqUpdate_1, ResUpdate as ResUpdate_1 } from './mongo/product/PtlUpdate';
import { ReqAddData, ResAddData } from './simple/PtlAddData';
import { ReqGetData, ResGetData } from './simple/PtlGetData';
import { ReqUploadFile, ResUploadFile } from './simple/PtlUploadFile';
import { ReqGetCurrentUser, ResGetCurrentUser } from './user/PtlGetCurrentUser';
import { ReqGetUsers, ResGetUsers } from './user/PtlGetUsers';
import { ReqLogin, ResLogin } from './user/PtlLogin';

export interface ServiceType {
    api: {
        "antd/GetNotice": {
            req: ReqGetNotice,
            res: ResGetNotice
        },
        "mongo/advanced/GetOrderWithProducts": {
            req: ReqGetOrderWithProducts,
            res: ResGetOrderWithProducts
        },
        "mongo/advanced/GetProductWithOrders": {
            req: ReqGetProductWithOrders,
            res: ResGetProductWithOrders
        },
        "mongo/order/Add": {
            req: ReqAdd,
            res: ResAdd
        },
        "mongo/order/Del": {
            req: ReqDel,
            res: ResDel
        },
        "mongo/order/Get": {
            req: ReqGet,
            res: ResGet
        },
        "mongo/order/Update": {
            req: ReqUpdate,
            res: ResUpdate
        },
        "mongo/product/Add": {
            req: ReqAdd_1,
            res: ResAdd_1
        },
        "mongo/product/Del": {
            req: ReqDel_1,
            res: ResDel_1
        },
        "mongo/product/Get": {
            req: ReqGet_1,
            res: ResGet_1
        },
        "mongo/product/Update": {
            req: ReqUpdate_1,
            res: ResUpdate_1
        },
        "simple/AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "simple/GetData": {
            req: ReqGetData,
            res: ResGetData
        },
        "simple/UploadFile": {
            req: ReqUploadFile,
            res: ResUploadFile
        },
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
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 14,
    "services": [
        {
            "id": 24,
            "name": "antd/GetNotice",
            "type": "api"
        },
        {
            "id": 29,
            "name": "mongo/advanced/GetOrderWithProducts",
            "type": "api"
        },
        {
            "id": 30,
            "name": "mongo/advanced/GetProductWithOrders",
            "type": "api"
        },
        {
            "id": 9,
            "name": "mongo/order/Add",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 10,
            "name": "mongo/order/Del",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 11,
            "name": "mongo/order/Get",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 13,
            "name": "mongo/order/Update",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 25,
            "name": "mongo/product/Add",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 26,
            "name": "mongo/product/Del",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 27,
            "name": "mongo/product/Get",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 28,
            "name": "mongo/product/Update",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 22,
            "name": "simple/AddData",
            "type": "api"
        },
        {
            "id": 23,
            "name": "simple/GetData",
            "type": "api"
        },
        {
            "id": 21,
            "name": "simple/UploadFile",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
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
        }
    ],
    "types": {
        "antd/PtlGetNotice/ReqGetNotice": {
            "type": "Interface"
        },
        "antd/PtlGetNotice/ResGetNotice": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "antd/PtlGetNotice/NoticeIconItem"
                        }
                    }
                }
            ]
        },
        "antd/PtlGetNotice/NoticeIconItem": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "extra",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "key",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "read",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "title",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "status",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "datetime",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "description",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "antd/PtlGetNotice/NoticeIconItemType"
                    },
                    "optional": true
                }
            ]
        },
        "antd/PtlGetNotice/NoticeIconItemType": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Literal",
                        "literal": "notification"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Literal",
                        "literal": "message"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Literal",
                        "literal": "event"
                    }
                }
            ]
        },
        "mongo/advanced/PtlGetOrderWithProducts/ReqGetOrderWithProducts": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../data/ReqAntdTable/ReqAntdTable"
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
        "../data/ReqAntdTable/ReqAntdTable": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "current",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "mongo/advanced/PtlGetOrderWithProducts/ResGetOrderWithProducts": {
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
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Overwrite",
                            "target": {
                                "type": "Reference",
                                "target": "../data/db/DbOrder/DbOrder"
                            },
                            "overwrite": {
                                "type": "Interface",
                                "properties": [
                                    {
                                        "id": 0,
                                        "name": "products",
                                        "type": {
                                            "type": "Array",
                                            "elementType": {
                                                "type": "Intersection",
                                                "members": [
                                                    {
                                                        "id": 0,
                                                        "type": {
                                                            "type": "Reference",
                                                            "target": "../data/db/DbProduct/DbProduct"
                                                        }
                                                    },
                                                    {
                                                        "id": 1,
                                                        "type": {
                                                            "type": "Interface",
                                                            "properties": [
                                                                {
                                                                    "id": 0,
                                                                    "name": "amount",
                                                                    "type": {
                                                                        "type": "Number"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "../data/db/DbOrder/DbOrder": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "products",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "_id",
                                    "type": {
                                        "type": "Reference",
                                        "target": "?mongodb/ObjectId"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "price",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "amount",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "totalPrice",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "seller",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "remark",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "create",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 2,
                                "name": "uid",
                                "type": {
                                    "type": "Reference",
                                    "target": "?mongodb/ObjectId"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "update",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 2,
                                "name": "uid",
                                "type": {
                                    "type": "Reference",
                                    "target": "?mongodb/ObjectId"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "../data/db/DbProduct/DbProduct": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
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
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "price",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "create",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 2,
                                "name": "uid",
                                "type": {
                                    "type": "Reference",
                                    "target": "?mongodb/ObjectId"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "update",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 2,
                                "name": "uid",
                                "type": {
                                    "type": "Reference",
                                    "target": "?mongodb/ObjectId"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "mongo/advanced/PtlGetProductWithOrders/ReqGetProductWithOrders": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../data/ReqAntdTable/ReqAntdTable"
                    }
                }
            ]
        },
        "mongo/advanced/PtlGetProductWithOrders/ResGetProductWithOrders": {
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
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Intersection",
                            "members": [
                                {
                                    "id": 0,
                                    "type": {
                                        "type": "Reference",
                                        "target": "../data/db/DbProduct/DbProduct"
                                    }
                                },
                                {
                                    "id": 1,
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "orders",
                                                "type": {
                                                    "type": "Array",
                                                    "elementType": {
                                                        "type": "Reference",
                                                        "target": "../data/db/DbOrder/DbOrder"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "mongo/order/PtlAdd/ReqAdd": {
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
                    "name": "order",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../data/db/DbOrder/DbOrder"
                        },
                        "keys": [
                            "_id",
                            "create",
                            "update"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "mongo/order/PtlAdd/ResAdd": {
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
                    "name": "insertedId",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "mongo/order/PtlDel/ReqDel": {
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
                    "name": "_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "?mongodb/ObjectId"
                        }
                    }
                }
            ]
        },
        "mongo/order/PtlDel/ResDel": {
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
                    "name": "deletedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "mongo/order/PtlGet/ReqGet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../data/ReqAntdTable/ReqAntdTable"
                    }
                }
            ]
        },
        "mongo/order/PtlGet/ResGet": {
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
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../data/db/DbOrder/DbOrder"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "mongo/order/PtlUpdate/ReqUpdate": {
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
                    "id": 1,
                    "name": "update",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "target": {
                                        "type": "Reference",
                                        "target": "../data/db/DbOrder/DbOrder"
                                    },
                                    "keys": [
                                        "_id"
                                    ],
                                    "type": "Pick"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Partial",
                                    "target": {
                                        "target": {
                                            "type": "Reference",
                                            "target": "../data/db/DbOrder/DbOrder"
                                        },
                                        "keys": [
                                            "seller",
                                            "remark"
                                        ],
                                        "type": "Pick"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "mongo/order/PtlUpdate/ResUpdate": {
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
                    "name": "matchedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "mongo/product/PtlAdd/ReqAdd": {
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
                    "name": "product",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../data/db/DbProduct/DbProduct"
                        },
                        "keys": [
                            "_id",
                            "create",
                            "update"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "mongo/product/PtlAdd/ResAdd": {
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
                    "name": "insertedId",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "mongo/product/PtlDel/ReqDel": {
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
                    "name": "_ids",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "?mongodb/ObjectId"
                        }
                    }
                }
            ]
        },
        "mongo/product/PtlDel/ResDel": {
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
                    "name": "deletedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "mongo/product/PtlGet/ReqGet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../data/ReqAntdTable/ReqAntdTable"
                    }
                }
            ]
        },
        "mongo/product/PtlGet/ResGet": {
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
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../data/db/DbProduct/DbProduct"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "mongo/product/PtlUpdate/ReqUpdate": {
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
                    "id": 1,
                    "name": "update",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "target": {
                                        "type": "Reference",
                                        "target": "../data/db/DbProduct/DbProduct"
                                    },
                                    "keys": [
                                        "_id"
                                    ],
                                    "type": "Pick"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Partial",
                                    "target": {
                                        "target": {
                                            "type": "Reference",
                                            "target": "../data/db/DbProduct/DbProduct"
                                        },
                                        "keys": [
                                            "name",
                                            "desc",
                                            "price"
                                        ],
                                        "type": "Pick"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "mongo/product/PtlUpdate/ResUpdate": {
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
                    "name": "matchedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "simple/PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "simple/PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "simple/PtlGetData/ReqGetData": {
            "type": "Interface"
        },
        "simple/PtlGetData/ResGetData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "simple/PtlUploadFile/ReqUploadFile": {
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
                    "name": "fileName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "fileData",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    }
                }
            ]
        },
        "simple/PtlUploadFile/ResUploadFile": {
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
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
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
        "../data/CurrentUser/CurrentUser": {
            "target": {
                "type": "Reference",
                "target": "../data/db/DbUser/DbUser"
            },
            "keys": [
                "_id",
                "nickname",
                "roles",
                "createTime"
            ],
            "type": "Pick"
        },
        "../data/db/DbUser/DbUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?bson/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "username",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "mobile",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "roles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../data/UserRole/UserRole"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "createTime",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "../data/UserRole/UserRole": {
            "type": "Enum",
            "members": [
                {
                    "id": 2,
                    "value": "管理员"
                },
                {
                    "id": 3,
                    "value": "普通用户"
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
                            "type": "Reference",
                            "target": "../data/db/DbUser/DbUser"
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
                    "id": 6,
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "type",
                                "type": {
                                    "type": "Literal",
                                    "literal": "password"
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
                    "id": 2,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../data/db/DbUser/DbUser"
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
        }
    }
};