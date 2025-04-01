import React, { useState } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ProductOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to={'/'}>Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={'/users'}>Users</Link>,
      key: 'users',
      icon: <UserOutlined />,
    },
    {
      label: <Link to={'/books'}>Books</Link>,
      key: 'books',
      icon: <ProductOutlined />,
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};

export default Header;
