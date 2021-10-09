import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormInstance } from '@ant-design/pro-form';
import { Button, Card, Form, Input } from 'antd';
import * as React from "react";
import { useRef, useState } from 'react';
import "./LoginPage.less";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    async function onBtnLogin() {
        setLoading(true);
        await new Promise(rs => setTimeout(rs, 2000));
        setLoading(false);
    }

    const formRef = useRef<ProFormInstance>();

    return (
        <Card title={<>
            <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>TSRPC Admin</h1>
            <p>请先登录</p>
        </>} style={{ margin: '100px auto 0 auto', width: 500 }}>
            <ProForm formRef={formRef} labelCol={{ span: 0 }} submitter={false} onFinish={onBtnLogin} params={{ aaa: 'bbb' }} request={(params, props) => {
                console.log('xxx', params, props);
                return new Promise((rs, rj) => {
                    setTimeout(() => {
                        if (Math.random() > 0.5) {
                            rs({
                                username: 'XXX',
                                password: ''
                            });
                        }
                        else {
                            console.warn('failed')
                            rj(new Error('what the heal??'))
                        }
                    }, 500)
                })
            }}>
                <Form.Item label='用户名' name='username' rules={[{ required: true }]}>
                    <Input size='large' prefix={<UserOutlined />} placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item label='密码' name='password' rules={[{ required: true }]}>
                    <Input type='password' size='large' prefix={<LockOutlined />} placeholder='请输入密码' />
                </Form.Item>
                <div>
                    <Button loading={loading} style={{ width: '100%' }} type='primary' htmlType='submit' size='large'>登  录</Button>
                </div>
            </ProForm>
        </Card>
    )
};
export default LoginPage;