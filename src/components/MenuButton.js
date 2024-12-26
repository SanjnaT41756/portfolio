import React from 'react';
import '../styles/Menu.css';

const MenuButton = ({ icon, text, targetId, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (targetId) {
      console.log('clicked ', targetId);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="menu-item" onClick={handleClick}>
      <span className="tooltip">{text}</span>
      <img src={icon} alt="" />
    </div>
  );
};

export default MenuButton;