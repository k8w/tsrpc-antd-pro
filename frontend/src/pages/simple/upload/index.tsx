import ProForm from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import { Card, Modal } from "antd"
import TsrpcUpload from "./TsrpcUpload"
import TsrpcUploadArray from "./TsrpcUploadArray"

export default () => {

    return <PageContainer content='TSRPC 支持以 Uint8Array 等二进制格式作为请求参数，用普通 API 接口的形式即可实现文件上传。'>
        <Card title='一份带上传的表单' type='inner'>
            <ProForm onFinish={async v => {
                Modal.success({
                    title: '表单数据',
                    content: <pre>{JSON.stringify(v, null, 2)}</pre>
                })
            }}>
                <ProForm.Item name='single' label='只可上传一个'>
                    <TsrpcUpload />
                </ProForm.Item>
                <ProForm.Item name='many' label='可上传多个'>
                    <TsrpcUploadArray />
                </ProForm.Item>
            </ProForm>
        </Card>
    </PageContainer>
}