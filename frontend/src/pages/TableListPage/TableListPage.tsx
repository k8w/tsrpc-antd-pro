import { PageContainer } from "@ant-design/pro-layout";
import ProTable from '@ant-design/pro-table';

interface DataItem {
    _id: string,
    title: string,
    content: string,
    status: 'pending' | 'succ' | 'failed',
    createTime: Date
}

const TableListPage = () => {
    return <PageContainer>
        <ProTable<DataItem>
            search={false}
            dateFormatter='number'
            columns={[
                {
                    title: 'ID',
                    dataIndex: '_id',
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                },
                {
                    title: '创建日期',
                    dataIndex: 'createTime',
                    valueType: 'date'
                }
            ]}

            request={async (params, props) => {
                console.log('request', params)
                await new Promise(rs => setTimeout(rs, 2000));
                return {
                    success: true,
                    data: Array.from({ length: 50 }, (v, i) => ({
                        _id: 'xxx' + i,
                        title: '标题' + i,
                        content: 'xxxxx',
                        status: ['pending', 'succ', 'failed'][Math.random() * 3 | 0] as any,
                        createTime: new Date(Date.now() - 86400000 * 0.5 * i)
                    })),
                    total: 1000
                }
            }}
        />
    </PageContainer>
}
export default TableListPage;