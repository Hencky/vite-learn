import React from 'react';
import logo from '@/logo.svg';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <img width={40} height={40} src={logo} alt="" />
    </div>
  );
};

export default Logo;
