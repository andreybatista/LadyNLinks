
import React from 'react';
import LogoImg from '@/image/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <div className="text-white font-['Playfair_Display'] text-center p-5">
        <img src={LogoImg} />
      </div>
    </div>
  );
};

export default Logo;
