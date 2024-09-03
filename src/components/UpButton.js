import React, {useState} from 'react';
import '../styles/UpButton.css';
import Arrow from '../styles/images/Arrow.svg';

const UpButton = () => {
    const handleClick = () => {
        const headerElement = document.getElementById('Header');
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(true) 
      }  
      else if (scrolled <= 300){ 
        setVisible(false) 
      } 
    }; 
    window.addEventListener('scroll', toggleVisible); 

    return (
        <div onClick={handleClick} className="up-button" style={{display: visible ? 'flex' : 'none'}}>
            <img src={Arrow} alt="up arrow" />
        </div>
    );
};

export default UpButton;

