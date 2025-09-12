import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/ProjectCard.css';
import '../styles/theme.css';

const ProjectCard = ({ id, title, image, description, technologies = [] }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <article className="project-card" onClick={handleCardClick}>
      <div className="card-image">
        <img 
          src={`${process.env.PUBLIC_URL}/${image}`} 
          alt={`${title} project`}
          loading="lazy"
        />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <p className="card-description">
          {description}
        </p>
        
        {technologies.length > 0 && (
          <div className="technologies">
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="tech-tag">+{technologies.length - 4}</span>
            )}
          </div>
        )}
        
        <span className="card-cta">
          View Project
          <FiArrowRight size={18} />
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;