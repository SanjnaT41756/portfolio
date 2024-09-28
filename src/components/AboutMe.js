import React from 'react';
import '../styles/AboutMe.css';
import '../styles/theme.css';
import headshot from '../styles/images/DSC_0129.JPG';


const AboutMe = ({leftText, rightText}) => {
    return (
        <div className="info-container">
            <div className='text'>
                <p className='paragraph' style={{ lineHeight: '2', textAlign:'right'}}>{leftText}</p>
            </div>
            <img src={headshot} alt="Sanjna Tailor headshot" style={{ width: '250px', height: 'auto' }} />

            <div className="text">
                <p className='paragraph' style={{ lineHeight: '2', textAlign:'left'}}>{rightText}</p>
            </div>
        </div>
    );
};

export default AboutMe;