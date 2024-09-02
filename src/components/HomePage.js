import React from 'react';
import Menu from './Menu';
import '../styles/theme.css';
import '../styles/HomePage.css';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import AboutMe from './AboutMe';

const HomePage = () => {
    return (
        <div>
            <div className="container" id="Header">
                <div className="header">
                    <p className="paragraph" style={{ marginBottom: '5px', fontSize: '28px', fontWeight: 'lighter'}}> <i>Welcome to the Sunny Side...</i></p>
                    <h2 className="big-header">I'm Sanjna</h2>
                    <p className="paragraph" style={{ marginTop: '10px'}}>
                        < p className='about'>
                        I'm a full-stack web developer and a student at the University of Washington. I'm passionate about creating beautiful, user-friendly websites and applications. I'm also a huge fan of coffee, dogs, and the color yellow.
                        </p>
                    </p>
                </div>
                <Menu />
            </div>
            <main id = "Projects">

                    <div className="subheading">
                        <h2 className="small-header">Projects and Experience</h2>
                    </div>
                <div className="main-content">
                    <ProjectCard technologies={["React", "JavaScript", "HTML", "CSS"]}/>
                    <ProjectCard technologies={["React", "TypeScript", "HTML", "SCSS"]}/>
                    <ProjectCard technologies={["React", "JavaScript", "HTML", "CSS"]}/>
                    <ProjectCard technologies={["React", "JavaScript", "HTML", "CSS"]}/>
                    <ProjectCard technologies={["React", "JavaScript", "HTML", "CSS"]}/>
                    <ProjectCard technologies={["React", "JavaScript", "HTML", "CSS"]}/>

                    <hr style={{ width: '80%', border: '1px solid var(--color-primary)', opacity: '0.5',  }} />

                </div>
                <div className="subheading" id = "AboutMe">     
                    <h2 className="small-header">About Me</h2>           
                </div>
                <AboutMe />


            </main>
            <Footer />
        </div>
    );
};

export default HomePage;