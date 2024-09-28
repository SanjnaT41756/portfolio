import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json';
import BackButton from './BackButton';
import '../styles/ProjectInformation.css';
import '../styles/theme.css';
import Github from '../styles/images/Github.svg';
const ProjectInformation = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  //project.val
  return (
    <div>
      <BackButton />
      <h3 className='small-header' style={{ paddingRight: '0' }}>{project.title}</h3>
      <div className='project-content'>
        <div className='section'>
          <p className='paragraph'>{project.info}</p>
          <img src='https://via.placeholder.com/150x150' alt='Placeholder' className='placeholder-image' />
        </div>

        <div className='section'>
          <img src='https://via.placeholder.com/150x150' alt='Placeholder' className='placeholder-image' />
          <p className='paragraph'>{project.timeContributions}</p>
        </div>

        <a href={project.link} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
        <div className='repoButton' >
            <p className='paragraph' style={{color:"white"}}>Check out the project repository!</p>
            <img src={Github} alt="Project Github Repository" style={{width:"30px"}}/>

        </div>
        </a>

      </div>
    </div>
  );
};

export default ProjectInformation;
