import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      © {new Date().getFullYear()} My Todo App |<a href='#'>Privacy Policy</a> |
      <a href='#'>Terms of Service</a>
    </div>
  );
};

export default Footer;
