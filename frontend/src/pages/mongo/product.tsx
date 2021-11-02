import { apiClient } from "@/models/apiClient/apiClient"
import { useScopedClient } from "@/models/tsrpc-react/useScopedClient"
import { DbProduct } from "@/shared/data/db/DbProduct"
import { ReqAdd } from "@/shared/protocols/mongo/product/PtlAdd"
import { ModalForm, ProFormMoney, ProFormText, ProFormTextArea } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import ProTable, { ActionType } from "@ant-design/pro-table"
import { Button, message } from "antd"
import { useRef, useState } from "react"

export default () => {
    const client = useScopedClient(apiClient);

    /** 编辑弹窗 */
    const [editing, setEditing] = useState<{ key: number } & (
        { type: 'add', value: ReqAdd['product'] } | { type: 'update', value: DbProduct } | { type?: undefined, value?: undefined }
    )>({ key: 0 });

    const tableRef = useRef<ActionType>();

    return <PageContainer>
        <ProTable<DbProduct>
            actionRef={tableRef}
            headerTitle='产品管理'
            search={false}
            toolBarRender={() => [<Button type='primary' onClick={() => {
                setEditing({
                    key: editing.key + 1,
                    type: 'add',
                    value: {
                        name: '',
                        desc: '',
                        price: 0
                    }
                });
            }}>新建产品</Button>]}
            columns={[
                { dataIndex: '_id', title: 'ID' },
                { dataIndex: 'name', title: '商品名' },
                { dataIndex: 'desc', title: '商品描述' },
                { dataIndex: 'price', title: '单价', valueType: 'money' },
                { dataIndex: ['create', 'time'], title: '创建时间', valueType: 'dateTime' },
                { dataIndex: ['update', 'time'], title: '最后更新', valueType: 'dateTime' },
                {
                    title: '操作',
                    render: (_, v) => <>
                        <Button type='link' size='small' onClick={() => {
                            console.log('sss', v)
                            setEditing({
                                key: editing.key + 1,
                                type: 'update',
                                value: v
                            })
                        }}>修改</Button>
                        <Button type='link' size='small'>删除</Button>
                    </>
                }
            ]}
            rowKey='_id'
            request={params => client.callApi('mongo/product/Get', params).then(v => ({ ...v.res, success: v.isSucc }))}
        />
        <ModalForm visible={!!editing.value}
            onFinish={async (v: any) => {
                console.log('finish', v);

                if (editing.type === 'add') {
                    let ret = await client.callApi('mongo/product/Add', {
                        product: v
                    });

                    if (!ret.isSucc) {
                        message.error('创建失败');
                        return;
                    }

                    message.success('创建成功');
                }
                else {
                    let ret = await client.callApi('mongo/product/Update', {
                        update: v
                    });

                    if (!ret.isSucc) {
                        message.error('更新失败');
                        return;
                    }

                    message.success('更新成功');
                }

                // reload
                setEditing({ ...editing, type: undefined, value: undefined });
                tableRef.current?.reload();
            }}
            request={async () => editing.value}
            key={editing.key}
            onVisibleChange={v => { if (!v) { setEditing({ ...editing, value: undefined, type: undefined }) } }}
        >
            <ProFormText name='_id' label='ID' hidden />
            <ProFormText name='name' label='商品名' rules={[{ required: true }]} />
            <ProFormTextArea name='desc' label='商品描述' rules={[{ required: true }]} />
            <ProFormMoney name='price' label='单价' rules={[{ required: true }]} />
        </ModalForm>
    </PageContainer>
}