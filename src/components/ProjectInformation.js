import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json';
import BackButton from './BackButton';
import '../styles/ProjectInformation.css';
const ProjectInformation = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (

    <div>
      <BackButton/>
      <div className='content-container'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ProjectInformation;
