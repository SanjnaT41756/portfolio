import React from 'react';
import MenuButton from '../components/MenuButton'; 
import Moon from '../styles/images/Moon.svg';
import Rainbow from '../styles/images/Rainbow.svg';
import Sun from '../styles/images/Sun.svg';
import '../styles/Menu.css';
import '../styles/theme.css';

const Menu = () => {


  return (
    <div className="menu-container">
      <MenuButton icon={Sun} text="Projects" targetId="Projects"/>
      <MenuButton icon={Moon} text="About Me" targetId="AboutMe"/>
      <MenuButton icon={Rainbow} text="Resume" targetId="Header"/>

    </div>
  );
};

export default Menu;
