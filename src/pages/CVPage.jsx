// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const CVPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Bloquer le scroll de la page quand la modal est ouverte
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Nettoyage si le composant est démonté
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    return (
        <section className="cv-page container">
            <div className="cv-content">
                <h1 className="section-title">
                    Mon <span className="accent">Curriculum Vitae</span>
                </h1>
                
                <div className="cv-actions">
                    <a 
                        href="/cv.pdf" 
                        download="CV_Christophe_Delclos.pdf"
                        className="btn-primary"
                    >
                        <i className="fa-solid fa-file-pdf"></i> Télécharger le PDF
                    </a>
                    
                    <button 
                        className="btn-secondary" 
                        onClick={() => setIsModalOpen(true)}
                    >
                        <i className="fa-solid fa-eye"></i> Voir l'aperçu
                    </button>
                </div>

                <AnimatePresence>
                    {isModalOpen && (
                        <div className="cv-modal-overlay">
                            {/* Fond sombre */}
                            <motion.div 
                                className="overlay-bg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsModalOpen(false)}
                            />

                            {/* Contenu de la Modal */}
                            <motion.div 
                                className="cv-modal-content"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            >
                                <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                                
                                <div className="modal-scroll-area">
                                    <img src="/assets/cv.webp" alt="Aperçu du CV" />
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CVPage;