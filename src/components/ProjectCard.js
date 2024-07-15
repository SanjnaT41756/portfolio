import React from 'react';
import '../styles/ProjectCard.css';
import '../styles/theme.css';

const ProjectCard = () => {
    return (
        <div className='card-container'>
            <img src='https://via.placeholder.com/200' alt='Project' className='card-image' />
            <div>
                <h3 className='card-title'>Project Title</h3>
                <p className='paragraph'>This is a brief description of the project. It should be a few sentences long.</p>
            </div>
        </div>
    );
};

export default ProjectCard;