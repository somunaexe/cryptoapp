import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/logo.png';

const menuItems = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: '2',
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: '3',
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: '4',
    icon: <BulbOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const MyMenu = () => {
  return (
    <Menu theme="dark" 
    items={menuItems} />
  );
};

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className='logo'>
            <Link to="/">Cryptbull</Link>
        </Typography.Title>
        <MyMenu />
      </div>
    </div>
  )
}

export default Navbar;
