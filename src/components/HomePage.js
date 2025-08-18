import React from 'react';
import Menu from './Menu';
import '../styles/theme.css';
import '../styles/HomePage.css';
import ProjectCard from './ProjectCard';
import AboutMe from './AboutMe';
import UpButton from './UpButton';
import projectsData from '../projects.json';
import personalInfo from '../personalInfo.json';

const HomePage = () => {
    return (
        <div className="portfolio-container">
            {/* Hero Section */}
            <header className="hero" id="Header">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Sanjna Tailor</h1>
                        <h2 className="hero-subtitle">Linguistics & Computer Science @ UCLA</h2>
                        <p className="hero-description">{personalInfo.topSection}</p>
                        <div className="hero-cta">
                            <a href="#Projects" className="cta-button">View My Work</a>
                            <a href="#AboutMe" className="cta-button secondary">About Me</a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        {/* Add a nice visual element or your photo here */}
                        <div className="visual-placeholder"></div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="arrow-down"></div>
                </div>
            </header>

            <Menu />

            <main className="main-content">
                {/* About Me Section */}
                <section id="AboutMe" className="about-section">
                    <div className="section-header">
                        <h2 className="section-title">About Me</h2>
                        <div className="section-divider"></div>
                    </div>
                    <AboutMe leftText={personalInfo.bottomSection1} rightText={personalInfo.bottomSection2} />
                </section>

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
            </main>
            <UpButton />
        </div>
    );
};

export default HomePage;