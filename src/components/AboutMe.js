import React from 'react';
import '../styles/AboutMe.css';
import '../styles/theme.css';

const AboutMe = ({ cards }) => {
    return (
        <div className="about-me-container">
            {cards.map((card, index) => (
                <div key={index} className="about-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="card-icon">{card.icon}</div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-content">{card.content}</p>
                    <div className="card-links">
                        {card.links.map((link, linkIndex) => (
                            <a 
                                key={linkIndex} 
                                href={link.url} 
                                className="card-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutMe;