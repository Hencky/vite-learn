import React from 'react';
import logo from '@/logo.svg';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
