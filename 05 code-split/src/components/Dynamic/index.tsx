import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './index.css';

const Dynamic = () => {
  return (
    <div>
      <div className="dynamic">异步引入的组件</div>
      <Link to="/">跳回首页</Link>
    </div>
  );
};

export default Dynamic;
