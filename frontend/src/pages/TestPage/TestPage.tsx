import { PageContainer, PageLoading } from '@ant-design/pro-layout';
import React from 'react';
import './TestPage.less';

const TestPage = () => {
    return <PageContainer title='aaa' className='TestPage'>
        <PageLoading />
    </PageContainer>;
};
export default TestPage;