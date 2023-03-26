import React from 'react';
import Humburger from '../humburger/Humburger';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
        <span>Welcome: Jean</span>
      </div>
      <Humburger />
    </div>
  );
};

export default Header;
