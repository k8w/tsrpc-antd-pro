
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale/zh_CN';
import 'k8w-extend-native';
import React from "react";
import ReactDOM from 'react-dom';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import './assets/app.less';
import { AdminLayout } from './components/AdminLayout/AdminLayout';
import { Global } from './models/Global/Global';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Router history={Global.history}>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/todo' />
                    </Route>

                    <Route path='/login' component={LoginPage} />

                    <Route path='/' component={AdminLayout} />
                </Switch>
            </Router>
        </ConfigProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
