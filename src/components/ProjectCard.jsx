import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (e) => {
        if (e) e.preventDefault();
        setIsOpen(!isOpen);
    };

    // Gestion de la fermeture (Échap + Verrouillage du scroll)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Fonction de formatage pour séparer titres (bleu) et texte (gris)
    const formatDescription = (text) => {
        if (!text) return null;

        // Regex pour capturer les titres clés
        const regex = /(CONTEXTE|OBJECTIFS|STACK TECHNIQUE|COMPETENCES DEVELOPPEES|RESULTATS|PERSPECTIVES D'AMELIORATION)/g;
        const parts = text.split(regex);
        
        const titles = [
            "CONTEXTE", "OBJECTIFS", "STACK TECHNIQUE", 
            "COMPETENCES DEVELOPPEES", "RESULTATS", "PERSPECTIVES D'AMELIORATION"
        ];

        return parts.map((part, index) => {
            const trimmed = part.trim();
            if (!trimmed) return null;

            if (titles.includes(trimmed)) {
                // Rendu du TITRE (sera stylisé en bleu via CSS)
                return <h4 key={index} className="section-title">{trimmed}</h4>;
            } else {
                // Nettoyage du texte : minuscules + majuscule initiale
                const cleanText = trimmed.toLowerCase().replace(/^[\s:]+/, ''); 
                const formattedText = cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
                
                return <p key={index} className="section-text">{formattedText}</p>;
            }
        });
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {project.image && (
                        <img src={project.image} alt="" aria-hidden="true" className="project-icon" width="50" height="50" />
                    )}
                    <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                    {project.tags.map((tag, index) => <span key={index}>#{tag}</span>)}
                </div>
                <button onClick={toggleModal} className="btn-link">Voir le détail</button>
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    {/* stopPropagation empêche la fermeture quand on clique sur le texte */}
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Fermer">
                            &times;
                        </button>
                        
                        <div className="modal-header">
                            <h2>{project.title}</h2>
                            <div className="underline"></div>
                        </div>

                        <div className="modal-body">
                            {formatDescription(project.longDescription || project.description)}
                            
                            <div className="modal-actions">
                                {project.link && project.link.startsWith('http') ? (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="btn-github">
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