import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { MdDirectionsBike, MdLogin, MdLogout } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Dashboard</h1>
      <div className='navlinks-container'>
        <div className='navlink-container'>
          <MdDirectionsBike size='30' />
          <Link to='' className='navlink'>
            All trips
          </Link>
        </div>
        <div className='navlink-container'>
          <FaParking size='30' />
          <Link to='' className='navlink'>
            All stations
          </Link>
        </div>
        <div className='navlink-container'>
          <MdLogin size='30' />
          <Link to='' className='navlink'>
            Login
          </Link>
        </div>
        <div className='navlink-container'>
          <MdLogout size='30' />
          <Link to='' className='navlink'>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
