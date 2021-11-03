import { apiClient } from "@/models/apiClient/apiClient"
import { useScopedClient } from "@/models/tsrpc-react/useScopedClient"
import { UIUtil } from "@/models/UIUtil"
import { DbOrder } from "@/shared/data/db/DbOrder"
import { ReqAdd } from "@/shared/protocols/mongo/order/PtlAdd"
import { ResGet as ResGetProduct } from "@/shared/protocols/mongo/product/PtlGet"
import { PlusOutlined } from "@ant-design/icons"
import { ModalForm, ProFormMoney, ProFormText, ProFormTextArea } from "@ant-design/pro-form"
import { PageContainer } from "@ant-design/pro-layout"
import ProTable, { ActionType } from "@ant-design/pro-table"
import { Button, Form, FormInstance, InputNumber, message, Select, Table } from "antd"
import { useEffect, useRef, useState } from "react"

export default () => {
    const client = useScopedClient(apiClient);

    /** 编辑弹窗 */
    const [editing, setEditing] = useState<{ type: 'add', value: ReqAdd['order'] } | { type: 'update', value: DbOrder }>();

    /** 选择产品的 options */
    const [products, setProducts] = useState<ResGetProduct['data']>();
    useEffect(() => {
        client.callApi('mongo/product/Get', { current: 1, pageSize: 1000 }).then(ret => {
            if (ret.isSucc) {
                setProducts(ret.res.data);
            }
        });
    }, [])

    const tableRef = useRef<ActionType>();
    const formRef = useRef<FormInstance>();

    return <PageContainer>
        <ProTable<DbOrder>
            actionRef={tableRef}
            headerTitle='订单管理'
            search={false}
            toolBarRender={() => [<Button type='primary' onClick={() => {
                setEditing({
                    type: 'add',
                    value: {
                        products: [],
                        totalPrice: 0,
                        seller: '',
                        remark: ''
                    }
                });
            }}>新建订单</Button>]}
            columns={[
                { dataIndex: '_id', title: '流水号' },
                { title: '商品明细', render: (_, r, i) => <ol>{r.products.map(v => <li>{v.name} x {v.amount}</li>)}</ol> },
                { dataIndex: 'totalPrice', title: '订单总价', valueType: 'money' },
                { dataIndex: 'seller', title: '销售' },
                { dataIndex: 'remark', title: '备注' },
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
                            if (!await UIUtil.confirm(<>确认要删除订单 <b>{v._id}</b> 吗？</>)) {
                                return;
                            }

                            let ret = await client.callApi('mongo/order/Del', {
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
            request={params => client.callApi('mongo/order/Get', params).then(v => ({ ...v.res, success: v.isSucc }))}
        />
        {editing && <ModalForm visible
            formRef={formRef}
            title={editing.type === 'add' ? '创建订单' : '更新订单'}
            onFieldsChange={v => {
                v.forEach(v1 => {
                    if (v1.name[0] === 'products') {
                        let value = formRef.current!.getFieldsValue();
                        formRef.current?.setFieldsValue({
                            ...value,
                            totalPrice: value.products.sum((v: any) => v._id && v.amount ? v.amount * v.price : 0)
                        })
                    }
                })
            }}
            onFinish={async (v: any) => {
                if (editing.type === 'add') {
                    v.products = v.products.filter((v1: any) => v1._id && v1.amount);
                    let ret = await client.callApi('mongo/order/Add', {
                        order: v
                    });

                    if (!ret.isSucc) {
                        message.error('创建失败');
                        return;
                    }

                    message.success('创建成功');
                }
                else if (editing.type === 'update') {
                    let ret = await client.callApi('mongo/order/Update', {
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
            modalProps={{
                width: 600
            }}
        >
            <ProFormText name='_id' label='ID' hidden />
            <Form.Item name='products' label='商品清单' rules={[{ required: true }]}>
                <ProductList products={products} readonly={editing.type === 'update'} />
            </Form.Item>
            <ProFormMoney name='totalPrice' readonly label='总价' rules={[{ required: true }]} />
            <ProFormText name='seller' label='销售员' rules={[{ required: true }]} />
            <ProFormTextArea name='remark' label='备注' rules={[{ required: true }]} />
        </ModalForm>}
    </PageContainer>
}

const ProductList = (props: {
    value?: DbOrder['products'],
    onChange?: (v: DbOrder['products']) => void,
    readonly?: boolean,
    products: ResGetProduct['data'] | undefined,
}) => {
    const value = props.value ?? [];
    console.log('value', value)

    return <>
        <Table
            columns={[
                {
                    title: '商品', dataIndex: 'name', render: (v, r, i) => props.readonly ? r.name : <Select
                        options={props.products?.map(v => ({ label: v.name, value: v._id, product: v }))}
                        value={r._id}
                        onChange={(v1, opt: any) => {
                            r._id = v1;
                            r.name = opt.product.name;
                            r.price = opt.product.price;
                            props.onChange?.([...value]);
                        }}
                        showSearch
                    />,
                    width: '40%'
                },
                { title: '单价', dataIndex: 'price', width: '15%' },
                {
                    title: '数量', dataIndex: 'amount', render: (v, r, i) => props.readonly ? v :
                        <InputNumber value={v} onChange={nv => {
                            r.amount = nv;
                            props.onChange?.([...value]);
                        }} />,
                    width: '15%'
                },
                {
                    title: '小计', render: (_, r) => r._id && r.amount ? r.amount * r.price : '', width: '15%',
                },
                ...(props.readonly ? [] : [{
                    title: '操作', width: '15%', render: (_: any, r: any, i: number) => <><Button type='link' size='small' onClick={() => {
                        value.splice(i, 1);
                        props.onChange?.([...value]);
                    }}>删除</Button></>
                }])
            ]}
            dataSource={value}
            pagination={false}
            size='small'
            rowKey={v => v._id}
        />

        {!props.readonly && <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Button onClick={() => {
                props.onChange?.([...value, {
                    _id: '',
                    name: '',
                    price: 0,
                    amount: 0
                }])
            }}
            ><PlusOutlined /> 添加商品</Button>
        </div>}
    </>
}