import { apiClient } from "@/models/apiClient/apiClient"
import { useScopedClient } from "@/models/tsrpc-react/useScopedClient"
import { DbProduct } from "@/shared/data/db/DbProduct"
import { ReqAdd } from "@/shared/protocols/mongo/product/PtlAdd"
import { ModalForm, ProFormMoney, ProFormText, ProFormTextArea } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import ProTable from "@ant-design/pro-table"
import { Button } from "antd"
import { useState } from "react"

export default () => {
    const client = useScopedClient(apiClient);

    /** 编辑弹窗 */
    const [editing, setEditing] = useState<DbProduct | ReqAdd['product']>();

    return <PageContainer>
        <ProTable<DbProduct>
            headerTitle='产品管理'
            search={false}
            toolBarRender={() => [<Button type='primary' onClick={() => {
                setEditing({
                    name: new Date().toDateString(),
                    /** 商品描述 */
                    desc: '',
                    /** 商品单价 */
                    price: 100
                })
            }}>新建产品</Button>]}
            columns={[
                { dataIndex: '_id', title: 'ID' },
                { dataIndex: 'name', title: '商品名' },
                { dataIndex: 'desc', title: '商品描述' },
                { dataIndex: 'price', title: '单价', valueType: 'money' },
                { dataIndex: ['create', 'time'], title: '创建时间', valueType: 'dateTime' },
                { dataIndex: ['update', 'time'], title: '最后更新', valueType: 'dateTime' },
            ]}
            request={params => client.callApi('mongo/product/Get', params)}
        />
        <ModalForm visible={!!editing}
            onFinish={async () => { console.log('ok') }}
            initialValues={editing}
            onVisibleChange={v => { if (!v) { setEditing(undefined) } }}
            modalProps={{
                destroyOnClose: true,
            }}
        >
            {/* {editing && '_id' in editing && <Form.Item label='ID'>{editing._id}</Form.Item>} */}
            <ProFormText name='name' label='商品名' />
            <ProFormTextArea name='desc' label='商品描述' />
            <ProFormMoney name='price' label='单价' />
        </ModalForm>
    </PageContainer>
}