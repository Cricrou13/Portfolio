import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (e) => {
        if (e) e.preventDefault();
        setIsOpen(!isOpen);
    };

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

    // FONCTION DE FORMATAGE (POUR LA MODALE UNIQUEMENT)
    const formatDescription = (textKey) => {
        const text = t(textKey);
        if (!text) return null;

        const titles = t('proj_headers', { returnObjects: true });
        if (!Array.isArray(titles)) return <p className="section-text">{text}</p>;

        const regex = new RegExp(`(${titles.join('|')})`, 'g');
        const parts = text.split(regex);
        
        return parts.map((part, index) => {
            const trimmed = part.trim();
            if (!trimmed) return null;

            if (titles.includes(trimmed)) {
                return <h4 key={index} className="section-title">{trimmed}</h4>;
            } else {
                const cleanText = trimmed.replace(/^[\s:]+/, ''); 
                const formattedText = cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
                return <p key={index} className="section-text">{formattedText}</p>;
            }
        });
    };

    return (
        <>
            {/* --- LA CARTE (CE QUI EST VISIBLE TOUT LE TEMPS) --- */}
            <div className="card">
                <div className="card-header">
                    {project.image && (
                        <img src={project.image} alt="" className="project-icon" width="50" height="50" />
                    )}
                    <h2>{project.title}</h2>
                </div>
                
                {/* ICI : Uniquement la description COURTE (p1_desc) */}
                <p>{t(project.description)}</p>

                <div className="tags">
                    {project.tags.map((tag, index) => <span key={index}>#{tag}</span>)}
                </div>
                
                <button onClick={toggleModal} className="btn-link">
                    {t('projects_btn_detail')}
                </button>
            </div>

            {/* --- LA MODALE (CE QUI N'APPARAÎT QU'AU CLIC) --- */}
            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
                        
                        <div className="modal-header">
                            <h2>{project.title}</h2>
                            <div className="underline"></div>
                        </div>

                        <div className="modal-body">
                            {/* ICI : La description LONGUE (p1_long) formatée avec les titres bleus */}
                            {formatDescription(project.longDescription)}
                            
                            <div className="modal-actions">
                                {project.link && project.link.startsWith('http') ? (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="btn-github">
                                        {t('projects_btn_github')}
                                    </a>
                                ) : (
                                    <p className="no-link">{t('projects_no_link')}</p>
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