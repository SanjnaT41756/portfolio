import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json';
import BackButton from './BackButton';
import '../styles/ProjectInformation.css';
import '../styles/theme.css';
import Github from '../styles/images/Github.svg';

const ProjectInformation = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <div className="project-information"><p>Project not found</p></div>;
  }

  return (
    <div className="project-information">
      <BackButton />
      <header className="project-header">
        <h1>{project.title}</h1>
      </header>
      
      <div className="project-content">
        <section className="section">
          <div className="section-text">
            <p>{project.info}</p>
          </div>
          <img 
            src={`${process.env.PUBLIC_URL}${project.pimage1}`} 
            alt={`${project.title} screenshot 1`} 
            className="project-image"
            loading="lazy"
          />
        </section>

        <section className="section">
          <img 
            src={`${process.env.PUBLIC_URL}${project.pimage2}`} 
            alt={`${project.title} screenshot 2`} 
            className="project-image"
            loading="lazy"
          />
          <div className="section-text">
            <p>{project.timeContributions}</p>
          </div>
        </section>

        <div className="repo-button-container">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="repoButton"
          >
            <span>View on GitHub</span>
            <img 
              src={Github} 
              alt="GitHub logo" 
              style={{ width: '24px', height: '24px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
