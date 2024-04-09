import React from 'react';
import MenuItem from '../components/MenuButton'; 
import Moon from '../styles/images/Moon.svg';
import Rainbow from '../styles/images/Rainbow.svg';
import Sun from '../styles/images/Sun.svg';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <MenuItem icon= {Sun} text="Projects" />
      <MenuItem icon={Moon} text="About Me" />
      <MenuItem icon={Rainbow} text="Resume" />

    </div>
  );
};

export default Menu;
