import React, { useState } from 'react'; 

const ProjectCard = ({ project }) => {
    // 2. On crée l'état pour la modale (fermée par défaut)
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour ouvrir/fermer
    const toggleModal = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {project.image && (
                        <img 
                            src={project.image} 
                            alt={`Icône de ${project.title}`} 
                            className="project-icon" 
                            width="50" height="50"
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

                {/* 3. Le bouton appelle maintenant toggleModal */}
                <button onClick={toggleModal} className="btn-link">
                    Voir le détail
                </button>
            </div>

            {/* 4. La Modale (Rendu conditionnel) */}
            {isOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={toggleModal}>&times;</button>
                        
                        <h2>{project.title}</h2>
                        <div className="modal-body">
                            <p>{project.longDescription || project.description}</p>
                            
                        <div className="modal-actions">
    {/* On affiche le bouton seulement si le lien commence par "http" */}
                        {project.link && project.link.startsWith('http') ? (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn-github"
                            >
                                Voir le code sur GitHub
                            </a>
                        ) : (
                            <p className="no-link">Code source privé ou bientôt disponible</p>
                        )}
                        </div> 
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;