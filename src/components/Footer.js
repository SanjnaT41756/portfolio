import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSun } from 'react-icons/fi';
import { FaSun } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <FaSun className="logo-icon" />
              <span>Sanjna Tailor</span>
            </div>
            <p className="tagline">Linguistics & Computer Science @ UCLA</p>
            <p className="copyright">
              {currentYear} Sanjna Tailor. All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#Header">Home</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#AboutMe">About</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Let's Connect</h3>
            <div className="social-links">
              <a 
                href="https://github.com/SanjnaT41756" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/sanjna-tailor/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:sstailor2@gmail.com" 
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
            <p className="weather">
              <FiSun className="sun-icon" />
              Always sunny on this side
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Built with React & </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;