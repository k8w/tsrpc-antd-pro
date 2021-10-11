import { IConfigFromPlugins } from "@/.umi/core/pluginConfig";

export const routes: IConfigFromPlugins['routes'] = [
    // 登录页（无 Layout）
    {
        path: '/login',
        layout: false,
        component: './login',
    },
    {
        path: '/simple',
        name: 'TSRPC 简单示例',
        icon: 'like',
        routes: [
            {
                path: 'callApi',
                name: '接口调用'
            },
            {
                path: 'upload',
                name: '文件上传'
            },
        ]
    },
    {
        path: '/with-mongodb',
        name: 'MongoDB 综合示例',
        icon: 'database',
        routes: [
            {
                path: 'crud',
                name: '增删改查'
            },
            {
                path: 'join',
                name: '联合查询'
            },
            {
                path: 'aggregate',
                name: '聚合统计'
            }
        ]
    },
    {
        path: '/antd',
        name: '静态页面模板',
        icon: 'book',
        routes: [
            {
                path: 'dashboard',
                name: '仪表板',
                routes: [
                    {
                        name: '分析页',
                        path: 'analysis',
                        component: './antd/dashboard/analysis',
                    },
                    {
                        name: '监控页',
                        path: 'monitor',
                        component: './antd/dashboard/monitor',
                    },
                    {
                        name: '工作台',
                        path: 'workplace',
                        component: './antd/dashboard/workplace',
                    },
                ],
            },
            {
                path: 'form',
                name: '表单页',
                routes: [
                    {
                        name: '基础表单',
                        path: 'basic-form',
                        component: './antd/form/basic-form',
                    },
                    {
                        name: '分步表单',
                        path: 'step-form',
                        component: './antd/form/step-form',
                    },
                    {
                        name: '高级表单',
                        path: 'advanced-form',
                        component: './antd/form/advanced-form',
                    },
                ],
            },
            {
                path: 'list',
                icon: 'table',
                name: '列表页',
                routes: [
                    {
                        path: 'search',
                        name: '搜索列表',
                        component: './antd/list/search',
                        routes: [
                            {
                                name: '搜索列表（文章）',
                                path: 'articles',
                                component: './antd/list/search/articles',
                            },
                            {
                                name: '搜索列表（项目）',
                                path: 'projects',
                                component: './antd/list/search/projects',
                            },
                            {
                                name: '搜索列表（应用）',
                                path: 'applications',
                                component: './antd/list/search/applications',
                            },
                        ],
                    },
                    {
                        name: '查询表格',
                        path: 'table-list',
                        component: './antd/list/table-list',
                    },
                    {
                        name: '标准列表',
                        path: 'basic-list',
                        component: './antd/list/basic-list',
                    },
                    {
                        name: '卡片列表',
                        path: 'card-list',
                        component: './antd/list/card-list',
                    },
                ],
            },
            {
                path: 'profile',
                name: '详情页',
                icon: 'profile',
                routes: [
                    {
                        name: '基础详情页',
                        path: 'basic',
                        component: './antd/profile/basic',
                    },
                    {
                        name: '高级详情页',
                        path: 'advanced',
                        component: './antd/profile/advanced',
                    },
                ],
            },
            {
                name: '结果页',
                icon: 'CheckCircleOutlined',
                path: 'result',
                routes: [
                    {
                        name: '成功页',
                        path: 'success',
                        component: './antd/result/success',
                    },
                    {
                        name: '失败页',
                        path: 'fail',
                        component: './antd/result/fail',
                    },
                ],
            },
            {
                name: '异常页',
                icon: 'warning',
                path: 'exception',
                routes: [
                    {
                        name: '403',
                        path: '403',
                        component: './antd/exception/403',
                    },
                    {
                        name: '404',
                        path: '404',
                        component: './antd/exception/404',
                    },
                    {
                        name: '500',
                        path: '500',
                        component: './antd/exception/500',
                    },
                ],
            },
            {
                name: '个人页',
                icon: 'user',
                path: 'account',
                access: 'canAdmin',
                routes: [
                    {
                        name: '个人中心',
                        path: 'center',
                        component: './antd/account/center',
                    },
                    {
                        name: '个人设置',
                        path: 'settings',
                        component: './antd/account/settings',
                    },
                ],
            },
            {
                name: '图形编辑器',
                icon: 'highlight',
                path: 'editor',
                routes: [
                    {
                        name: '流程编辑器',
                        path: 'flow',
                        component: './antd/editor/flow',
                    },
                    {
                        name: '脑图编辑器',
                        path: 'mind',
                        component: './antd/editor/mind',
                    },
                    {
                        name: '拓扑编辑器',
                        path: 'koni',
                        component: './antd/editor/koni',
                    },
                ],
            },
        ]
    },
    // 默认 404 页面
    {
        component: '404',
    },
];