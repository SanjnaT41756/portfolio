import React from 'react';
import '../styles/Menu.css';

const MenuButton = ({ icon, text }) => {
    return (
        <div className="menu-item">
          <span className="tooltip">{text}</span>
          <img src={icon} alt="" />
        </div>
      );
};

export default MenuButton;