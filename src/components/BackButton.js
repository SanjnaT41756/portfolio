import React from 'react';
import LeftArrow from '../styles/images/LeftArrow.svg';
import '../styles/BackButton.css';

const BackButton = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div onClick={handleBackClick} className="back-button">
            <img src={LeftArrow} alt="back arrow" />
        </div>
    );
};

export default BackButton;