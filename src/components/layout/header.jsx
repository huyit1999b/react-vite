import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
