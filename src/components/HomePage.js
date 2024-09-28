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
        <div>
            <div className="container" id="Header">
                <div className="header">
                    <p className="paragraph" style={{ marginBottom: '5px', fontSize: '28px', fontWeight: 'lighter'}}> <i>Welcome to the Sunny Side...</i></p>
                    <h2 className="big-header">I'm Sanjna</h2>
                    <p className="paragraph" style={{ marginTop: '10px'}}>
                        < p className='about'>{personalInfo.topSection}</p>
                    </p>
                </div>
                <Menu />
            </div>
            <main id = "Projects">

                    <div className="subheading">
                        <h2 className="small-header">Projects and Experience</h2>
                    </div>
                <div className="main-content">
                {projectsData.map((project, index) => (
                    <ProjectCard
                    key={index}
                    id={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    />
                ))}

                    <hr style={{marginLeft:"60px", width: '80%', border: '1px solid var(--color-primary)', opacity: '0.5',  }} />

                </div>
                <div className="subheading" id = "AboutMe">     
                    <h2 className="small-header" style={{marginBottom:"0px"}}>About Me</h2>           
                </div>
                <AboutMe leftText={personalInfo.bottomSection1} rightText={personalInfo.bottomSection2}/>
                <UpButton/>

            </main>
        </div>
    );
};

export default HomePage;