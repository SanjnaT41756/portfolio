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
            <p className="tagline">Software Engineering @ Las Vegas Sands</p>
            <p className="copyright">
              {currentYear} Sanjna Tailor. All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#Header" onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('Header');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}>Home</a></li>
              <li><a href="#Projects" onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('Projects');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}>Projects</a></li>
              <li><a href="#AboutMe" onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('AboutMe');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}>About Me</a></li>
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
              Always on the sunny side
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Built with React and refactored with Windsurf</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;