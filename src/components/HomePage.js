import React from 'react';
import '../styles/theme.css';
import '../styles/HomePage.css';
import ProjectCard from './ProjectCard';
import AboutMe from './AboutMe';
import UpButton from './UpButton';
import headshot from '../styles/images/DSC_0129.JPG';
import projectsData from '../projects.json';
import personalInfo from '../personalInfo.json';

const HomePage = () => {
    const handleViewWorkClick = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById("Projects");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="portfolio-container">
            {/* Hero Section */}
            <header className="hero" id="Header">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Sanjna Tailor</h1>
                        <h2 className="hero-subtitle"> prev. Software Engineering @ Las Vegas Sands</h2>
                        <p className="hero-description">{personalInfo.topSection}</p>
                        <div className="hero-cta">
                            <a href="#Projects" className="cta-button" onClick={handleViewWorkClick}>
                                View My Work
                            </a>
                            <a href="#AboutMe" className="cta-button secondary" onClick={(e) => {
                                e.preventDefault();
                                const targetElement = document.getElementById('AboutMe');
                                if (targetElement) {
                                    targetElement.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>About Me</a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <img 
                                src={headshot} 
                                alt="Sanjna Tailor" 
                                className="hero-image"
                            />
                            <div className="hero-image-decoration"></div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="arrow-down"></div>
                </div>
            </header>


            <main className="main-content">
                {/* Projects Section */}
                <section id="Projects" className="projects-section">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="projects-grid">
                        {projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                id={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                                pimage1={project.pimage1}
                                pimage2={project.pimage2}
                            />
                        ))}
                    </div>
                </section>

                {/* About Me Section */}
                <section id="AboutMe" className="about-section">
                    <div className="section-header">
                        <h2 className="section-title">About Me</h2>
                        <div className="section-divider"></div>
                    </div>
                    <AboutMe cards={personalInfo.cards} />
                </section>
            </main>
            <UpButton />
        </div>
    );
};

export default HomePage;