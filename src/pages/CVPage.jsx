import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CVPage = () => {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <section className="cv-page container">
            <div className="cv-content">
                <h2 className='section-title'>Mon <span className="accent">Curriculum Vitae</span></h2>
                
                <div className="cv-actions">
                    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <i className="fa-solid fa-file-pdf"></i> Télécharger le PDF
                    </a>
                    
                    {/* Le bouton magique */}
                    <button 
                        className="btn-secondary" 
                        onClick={() => setShowPreview(!showPreview)}
                    >
                        <i className={`fa-solid ${showPreview ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        {showPreview ? " Cacher l'aperçu" : " Voir l'aperçu"}
                    </button>
                </div>

                {showPreview && (
                    <div className="cv-preview fade-in">
                        <img src="/assets/cv.jpg" alt="Aperçu de mon CV" className="img-fluid" />
                    </div>
                )}
            </div>
        </section>
    );
};
export default CVPage;