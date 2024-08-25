import React from 'react';
import '../styles/Footer.css';
import Sunset from '../styles/images/Sunset.svg';
import Github from '../styles/images/Github.svg';
import Linkedin from '../styles/images/LinkedIn.svg';
import Gmail from '../styles/images/Gmail.svg';


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p className="footer-text">Feels Like a Sunny Day  <img src={Sunset} alt=""/> </p>
                <div>

                    <a href="https://github.com/SanjnaT41756" className="image-button" target="_blank">
                        <img src={Github} alt="Github Account" />
                    </a>

                    <a href="https://www.linkedin.com/in/sanjna-tailor/" className="image-button" target="_blank">
                        <img src={Linkedin} alt="LinkedIn Account"/>
                    </a>

                    <a href="mailto:sstailor2@gmail.com" className="image-button" target="_blank">
                        <img src={Gmail} alt="Gmail Account sstailor2@gmail.com" />
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;