import { SmileOutlined } from '@ant-design/icons';
import { Route } from '@ant-design/pro-layout/lib/typings';
import React from 'react';
import PatientPage from '../pages/PatientPage/PatientPage';
import TableListPage from '../pages/TableListPage/TableListPage';
import TestPage from '../pages/TestPage/TestPage';

export const routes: Route[] = [
    {
        path: '/test',
        hideInMenu: true,
        component: TestPage
    },
    {
        path: '/table',
        hideInMenu: true,
        component: TableListPage
    },
    {
        path: '/patient',
        name: '患者管理',
        component: PatientPage
    },
    {
        path: '/todo',
        name: '待办事项',
        icon: <SmileOutlined />,
        // component: TodoListPage
    },
    // {
    //     path: '/questions',
    //     name: '日常模式题库',
    //     icon: <SmileOutlined />,
    //     component: QuestionPage
    // },
    // {
    //     path: '/activity',
    //     name: '活动模式配置',
    //     icon: <SmileOutlined />,
    //     component: ActivityListPage,
    //     routes: [
    //         {
    //             path: '/activity/new',
    //             name: '新建活动',
    //             component: ActivityConfigPage,
    //             hideInMenu: true
    //         },
    //         {
    //             path: '/activity/:activityId',
    //             name: '修改活动',
    //             component: ActivityConfigPage,
    //             hideInMenu: true
    //         }
    //     ]
    // },
    // {
    //     path: '/awardPool',
    //     name: '奖池管理',
    //     icon: <SmileOutlined />,
    //     component: AwardPoolPage,
    //     routes: [
    //         {
    //             path: '/awardPool/:poolId',
    //             name: '奖池管理',
    //             component: AwardPoolPage,
    //             hideInMenu: true
    //         }
    //     ]
    // },
    // {
    //     path: '/awards',
    //     name: '奖品发放',
    //     icon: <SmileOutlined />,
    //     component: SendAwardPage
    // },
    // {
    //     path: '/ugc',
    //     name: '玩家出题审核',
    //     icon: <SmileOutlined />,
    //     component: UGCPage
    // },
    // {
    //     path: '/stat',
    //     name: '数据统计',
    //     icon: <SmileOutlined />,
    //     children: [
    //         {
    //             path: 'by-date',
    //             name: '按日期查看',
    //             icon: <SmileOutlined />,
    //             component: StatByDatePage
    //         },
    //         {
    //             path: 'by-action',
    //             name: '按事件查看',
    //             icon: <SmileOutlined />,
    //             component: StatByActionPage
    //         },
    //         {
    //             path: 'round',
    //             name: '对局统计',
    //             icon: <SmileOutlined />,
    //             component: RoundStatPage
    //         },
    //     ]
    // },
    // {
    //     path: '/bot',
    //     name: '发送BOT消息',
    //     icon: <SmileOutlined />,
    //     component: SendBotPage
    // },
    // {
    //     path: '/workAreas',
    //     name: '工区配置',
    //     icon: <SmileOutlined />,
    //     component: WorkAreaPage
    // },
    // {
    //     path: '/gameSettings',
    //     name: '游戏设置',
    //     icon: <SmileOutlined />,
    //     component: GameSettingsPage
    // },
    // {
    //     path: '/adminUsers',
    //     name: '管理员账号配置',
    //     icon: <SmileOutlined />,
    //     component: AdminUserPage
    // },
];