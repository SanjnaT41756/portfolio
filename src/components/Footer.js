import React from 'react';
import '../styles/Footer.css';
import Sunset from '../styles/images/Sunset.svg';


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div style={style=}>
                <p className="footer-text">Feels Like a Sunny Day</p>
                <img src={Sunset} alt=""/>
                </div>

            </div>
        </footer>
    );
};

export default Footer;