import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card">
            {/* conteneur pour l'image et le titre */}
            <div className="card-header">
                {/* je vérifie si une image existe dans les données du projet */}
                {project.image && (
                    <img 
                        src={project.image} 
                        alt={`Icône de ${project.title}`} 
                        className="project-icon" 
                    />
                )}
                <h3>{project.title}</h3>
            </div>

            <p>{project.description}</p>
            
            <div className="tags">
                {project.tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                ))}
            </div>
            {<a href={project.link} className="btn-link">Voir le code</a>}
        </div>
    );
};

export default ProjectCard;