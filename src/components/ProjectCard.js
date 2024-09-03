import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectCard.css';
import '../styles/theme.css';
import ToolChip from './ToolChip';

const ProjectCard = ({id,title, description, technologies }) => {

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/project/${id}`);
      };

    return (
        <div className='card-container'  onClick={handleCardClick}>
            <img src='https://via.placeholder.com/150x70' alt='Placeholder' className='placeholder-image' />
            <div className="inner-card">
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