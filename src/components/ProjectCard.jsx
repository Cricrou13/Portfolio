import React from 'react';

const ProjectCard = ({ project}) => {
    return (
        <div className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
                {project.tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                ))}
            </div>
            {/* <a href={project.link} className="btn-link">Voir le code</a> */}
        </div>
    )
}

export default ProjectCard;