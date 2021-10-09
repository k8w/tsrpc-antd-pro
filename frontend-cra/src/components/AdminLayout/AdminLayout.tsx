import { UserOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer, RouteContext } from '@ant-design/pro-layout';
import { Avatar, Button, Space, Spin } from 'antd';
import React from 'react';
import { Link, matchPath, useHistory, useLocation } from 'react-router-dom';
import { routes } from '../../configs/routes';
import { useCallApi } from '../../models/hooks/useCallApi';
import { useCurrentUser } from '../../models/hooks/useCurrentUser';
import { UIUtil } from '../../models/utils/UIUtil';
import { Page404 } from './Page404';


export const AdminLayout = () => {
    const callApi = useCallApi();
    const history = useHistory();
    const location = useLocation();
    const currentUser = useCurrentUser();

    // 未登录，跳转到登录界面
    if (!currentUser) {
        history.replace('/login');
        return <Spin spinning />;
    }

    async function onBtnLogout() {
        await callApi('user/Logout', {});
        // TODO
        // ApiClient.resLogin = null;
        UIUtil.toast('您已安全退出', 'success');
        history.replace('/login');
    }

    return (
        <ProLayout className='AdminLayout'
            title='TSRPC Admin'
            logo={null}
            route={{ routes: routes }}
            
            location={location}
            fixSiderbar
            menuItemRender={(item, dom) => (
                <Link to={item.path ?? ''}>{dom}</Link>
            )}
            rightContentRender={() => (
                <Space>
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                    <span>{currentUser.nickname}</span>
                    <Button type='link' onClick={onBtnLogout}>退出登录</Button>
                </Space>
            )}
        >
            {<RouteContext.Consumer>
                {routeContext => {
                    return <PageContainer breadcrumb={{
                        ...routeContext.breadcrumb,
                        itemRender: v => <Link to={v.path}>{v.breadcrumbName}</Link>
                    }}>
                        {routeContext.currentMenu?.component ?
                            <routeContext.currentMenu.component params={matchPath(location.pathname, {
                                path: routeContext.currentMenu.path
                            })?.params} /> :
                            <Page404 />
                        }
                    </PageContainer>
                }}
            </RouteContext.Consumer>}

        </ProLayout>
    );
}