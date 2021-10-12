import { ResGetData } from "@/shared/protocols/simple/PtlGetData";
import { apiClient } from "@/utils/apiClient/apiClient";
import { useCallApi } from "@/utils/tsrpc-react/useCallApi";
import ProTable from "@ant-design/pro-table";
import { Alert, Button, Col, Divider, Input, message, Row } from "antd";
import { useState } from "react";

export default () => {
    const [input, setInput] = useState('');

    // GetData 请求，组件挂载后自动请求，后续也可通过 callGet.run() 重新请求
    const callGet = useCallApi(apiClient, 'simple/GetData', {}, {
        // 这样在刷新时，界面上仍然显示上一次的结果，防止闪烁
        keepLastRes: true
    });

    // AddData 请求
    const callAdd = useCallApi(apiClient, 'simple/AddData', {
        content: input
    }, {
        // 由于 manual 为 true，请求不会自动发出，直到手动调用 callAdd.run()
        manual: true,
        onSuccess: () => {
            message.success('发送成功');
            setInput('');
            callGet.run();
        }
    });

    return <>
        <h3>说明</h3>
        <p style={{ padding: 16, color: '#666', background: '#f7f7f7' }}>
            将请求封装成了 Hook，类似 umi 的 useRequest，代码量更少，优雅的一批。
        </p>
        <Divider />

        <h3 style={{ marginTop: 16 }}>演示</h3>
        <Row gutter={[8, 8]}>
            <Col flex='auto'>
                <Input placeholder='请输入文字...' value={input} onChange={e => { setInput(e.target.value) }} />
            </Col>
            <Col>
                <Button type='primary' onClick={() => { callAdd.run() }} loading={callAdd.loading}>添加</Button>
            </Col>

            {callAdd.err && <Col span={24}>
                <Alert type='error' showIcon={true} message={callAdd.err.message} />
            </Col>}
        </Row>

        <ProTable<ResGetData['data'][number]>
            columns={[
                { title: '内容', dataIndex: 'content' },
                { title: '时间', dataIndex: 'time', valueType: 'time' }
            ]}
            dataSource={callGet.res?.data}
            rowKey='id'
            style={{ marginTop: 16 }}
            search={false}
            toolBarRender={false}
            loading={callGet.loading}
            bordered={true}
        />
    </>;
}