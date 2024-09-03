import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json';

const ProjectInformation = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectInformation;
