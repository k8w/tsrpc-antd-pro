import { Button, Result } from 'antd';
import { Link } from 'umi';

export default () => (
  <Result
    status="404"
    title="404"
    style={{
      background: 'none',
    }}
    subTitle="出错啦，你要访问的页面不存在哦~"
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);
