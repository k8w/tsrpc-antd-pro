import { ResGetData } from "@/shared/protocols/simple/PtlGetData";
import { apiClient } from "@/utils/apiClient/apiClient";
import { useScopedClient } from "@/utils/tsrpc-react/useScopedClient";
import ProTable from "@ant-design/pro-table";
import { Alert, Button, Col, Divider, Input, message, Row } from "antd";
import { useEffect, useState } from "react";
import { TsrpcError } from "tsrpc-browser";

export default () => {
    // 生成一个组件局部的 ApiClient，以在组件销毁时自动取消未完成的请求
    const client = useScopedClient(apiClient);
    // GetData 的成功响应
    const [resGet, setResGet] = useState<ResGetData>();
    // AddData 的报错
    const [errAdd, setErrAdd] = useState<TsrpcError>();
    // 文本框的内容
    const [input, setInput] = useState('');
    // 表格加载 loading
    const [loading, setLoading] = useState(true);
    // 添加数据中 loading
    const [sending, setSending] = useState(false);

    // 组件挂载时自动加载数据
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        setLoading(true);

        let ret = await client.callApi('simple/GetData', {});
        if (ret.isSucc) {
            setResGet(ret.res);
        }
        else {
            message.error(ret.err.message);
        }

        setLoading(false);
    }

    async function onBtnAdd() {
        setSending(true);
        setErrAdd(undefined);

        // 发送请求
        let ret = await client.callApi('simple/AddData', {
            content: input
        });

        // 成功：刷新列表
        if (ret.isSucc) {
            message.success('发送成功');
            setInput('');
            await getData();
        }
        // 失败：报错
        else {
            setErrAdd(ret.err);
        }

        setSending(false);
    }

    return <>
        <h3>说明</h3>
        <p style={{ padding: 16, color: '#666', background: '#f7f7f7' }}>
            通过 useScopedClient，创建组件局部的 Client，组件销毁后会自动取消未完成的请求，防止内存泄露和意外的状态更新。
        </p>
        <Divider />

        <h3 style={{ marginTop: 16 }}>演示</h3>
        <Row gutter={[8, 8]}>
            <Col flex='auto'>
                <Input placeholder='请输入文字...' value={input} onChange={e => { setInput(e.target.value) }} />
            </Col>
            <Col>
                <Button type='primary' onClick={onBtnAdd} loading={sending}>添加</Button>
            </Col>

            {errAdd && <Col span={24}>
                <Alert type='error' showIcon={true} message={errAdd.message} />
            </Col>}
        </Row>

        <ProTable<ResGetData['data'][number]>
            columns={[
                { title: '内容', dataIndex: 'content' },
                { title: '时间', dataIndex: 'time', valueType: 'time' }
            ]}
            dataSource={resGet?.data}
            rowKey='id'
            style={{ marginTop: 16 }}
            search={false}
            toolBarRender={false}
            loading={loading}
            bordered={true}
        />
    </>;
}