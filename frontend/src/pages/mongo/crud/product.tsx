import { apiClient } from "@/models/apiClient/apiClient"
import { useScopedClient } from "@/models/tsrpc-react/useScopedClient"
import { UIUtil } from "@/models/UIUtil"
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
    const [editing, setEditing] = useState<{ type: 'add', value: ReqAdd['product'] } | { type: 'update', value: DbProduct }>();

    const tableRef = useRef<ActionType>();

    return <PageContainer>
        <ProTable<DbProduct>
            actionRef={tableRef}
            headerTitle='商品管理'
            search={false}
            toolBarRender={() => [<Button type='primary' onClick={() => {
                setEditing({
                    type: 'add',
                    value: {
                        name: '',
                        desc: '',
                        price: 0
                    }
                });
            }}>新建商品</Button>]}
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
                            setEditing({
                                type: 'update',
                                value: v
                            })
                        }}>修改</Button>
                        <Button type='link' size='small' onClick={async () => {
                            if (!await UIUtil.confirm(<>确认要删除 <b>{v.name}</b> 吗？</>)) {
                                return;
                            }

                            let ret = await client.callApi('mongo/product/Del', {
                                _ids: [v._id]
                            });
                            if (!ret.isSucc) {
                                message.error('删除失败');
                                return;
                            }
                            tableRef.current?.reload();
                        }}>删除</Button>
                    </>
                }
            ]}
            rowKey='_id'
            request={params => client.callApi('mongo/product/Get', params).then(v => ({ ...v.res, success: v.isSucc }))}
        />
        {editing && <ModalForm visible
            onFinish={async (v: any) => {
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
                else if (editing.type === 'update') {
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
                setEditing(undefined);
                tableRef.current?.reload();
            }}
            initialValues={editing.value}
            onVisibleChange={v => { if (!v) { setEditing(undefined) } }}
        >
            <ProFormText name='_id' label='ID' hidden />
            <ProFormText name='name' label='商品名' rules={[{ required: true }]} />
            <ProFormTextArea name='desc' label='商品描述' rules={[{ required: true }]} />
            <ProFormMoney name='price' label='单价' rules={[{ required: true }]} />
        </ModalForm>}
    </PageContainer>
}