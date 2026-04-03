// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const CVPage = () => {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <section className="cv-page container">
            <div className="cv-content">
                <h2 className="section-title">
                    Mon <span className="accent">Curriculum Vitae</span>
                </h2>
                
                <div className="cv-actions">
                    {/* LIEN DE TÉLÉCHARGEMENT : Doit pointer vers le fichier EXACT dans le dossier public */}
                    <a 
                        href="/cv.pdf" 
                        download="CV_Christophe_Delclos.pdf"
                        className="btn-primary"
                    >
                        <i className="fa-solid fa-file-pdf"></i> Télécharger le PDF
                    </a>
                    
                    <button 
                        className="btn-secondary" 
                        onMouseEnter={() => setShowPreview(true)}
                        onMouseLeave={() => setShowPreview(false)}
                    >
                        <i className={`fa-solid ${showPreview ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        {showPreview ? " Aperçu..." : " Survoler pour l'aperçu"}
                    </button>
                </div>

                <div className="preview-container">
                    <AnimatePresence>
                        {showPreview && (
                            <motion.div 
                                className="cv-preview"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src="/assets/cv.webp" alt="Aperçu du CV" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CVPage;