import React from 'react';
import '../styles/ProjectCard.css';
import '../styles/theme.css';

const ProjectCard = () => {
    return (
        <div className='card-container'>
            <img src='https://via.placeholder.com/150x70' alt='Placeholder' className='placeholder-image' />
            <div>
                <h3 className='card-title'>Project Title</h3>
                <p className='paragraph'>
                    <p className='content'>
                    This is a brief description of the project. It should be a few sentences long.
                    </p>
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;