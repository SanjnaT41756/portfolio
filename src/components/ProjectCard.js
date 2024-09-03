import React from 'react';
import '../styles/ProjectCard.css';
import '../styles/theme.css';
import ToolChip from './ToolChip';

const ProjectCard = ({ title, description, technologies }) => {
    return (
        <div className='card-container'>
            <img src='https://via.placeholder.com/150x70' alt='Placeholder' className='placeholder-image' />
            <div>
                <h3 className='card-title'>{title}</h3>
                <p className='paragraph'>
                    <p className='content'>
                    {description}
                    </p>
                </p>
                <ToolChip chipList={technologies} />
            </div>
        </div>
    );
};

export default ProjectCard;