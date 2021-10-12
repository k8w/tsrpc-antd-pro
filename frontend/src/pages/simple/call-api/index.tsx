import { PageContainer } from "@ant-design/pro-layout";
import { Alert, Button, Card, Col, Row } from "antd";
import { useState } from "react";
import ExampleGlobalClient from "./ExampleGlobalClient";
import ExampleScopedClient from "./ExampleScopedClient";
import ExampleUseCallApi from "./ExampleUseCallApi";

export default () => {
    const [destroyed1, setDestroyed1] = useState(false);
    const [destroyed2, setDestroyed2] = useState(false);
    const [destroyed3, setDestroyed3] = useState(false);

    return <PageContainer content='TSRPC 在 React 中的应用示例，根据实际需要选择适合的引用方式。'>
        <Row gutter={[24, 24]}>
            <Col xs={24} xl={8}>
                <Card title='通过全局 Client 调用'
                    extra={<Button danger={!destroyed1} size='small'
                        onClick={() => { setDestroyed1(!destroyed1) }}>
                        {destroyed1 ? '恢复组件' : '销毁组件'}
                    </Button>}
                >
                    {destroyed1 ?
                        <Alert message='组件已销毁' /> :
                        <ExampleGlobalClient />
                    }
                </Card>
            </Col>

            <Col xs={24} xl={8}>
                <Card title='通过 useScopedClient 调用'
                    extra={<Button danger={!destroyed2} size='small'
                        onClick={() => { setDestroyed2(!destroyed2) }}>
                        {destroyed2 ? '恢复组件' : '销毁组件'}
                    </Button>}
                >
                    {destroyed2 ?
                        <Alert message='组件已销毁' /> :
                        <ExampleScopedClient />
                    }
                </Card>
            </Col>

            <Col xs={24} xl={8}>
                <Card title='通过 useCallApi 调用'
                    extra={<Button danger={!destroyed3} size='small'
                        onClick={() => { setDestroyed3(!destroyed3) }}>
                        {destroyed3 ? '恢复组件' : '销毁组件'}
                    </Button>}
                >
                    {destroyed3 ?
                        <Alert message='组件已销毁' /> :
                        <ExampleUseCallApi />
                    }
                </Card>
            </Col>
        </Row>
    </PageContainer>
};

