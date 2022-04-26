import { Link } from 'react-router-dom';

import './index.css';

export const Header = () => {
  return (
    <div className="header">
      Header
      <Link to={'/dynamic'}>跳转到动态路由</Link>
    </div>
  );
};
