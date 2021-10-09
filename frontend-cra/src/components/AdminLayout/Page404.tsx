import { Button, Result } from "antd"

export const Page404 = () => {
    return <div>
        <Result
            status="404"
            style={{
                height: '100%',
                background: '#fff',
            }}
            title="页面找不到了"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
        />
    </div>
}