import React from 'react';
import { Link } from 'react-router-dom';

const CVPage = () => {
    return (
        <section className="cv-page section">
            <div className="container">
                <Link to="/" className="btn-back">← Retour à l'accueil</Link>
                
                <h2>Mon <span className="accent">Curriculum Vitae</span></h2>
                <p>Retrouvez le détail de mon parcours et de mes compétences.</p>
                
                <div className="cv-actions">
                    {/* Ce bouton ouvre le PDF dans un nouvel onglet */}
                    <a 
                      href="/CV.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary"
                    >
                      <i className="fa-solid fa-file-pdf"></i> Voir / Télécharger le CV (PDF)
                    </a>
                </div>

                {/*image (aperçu) de votre CV */}
                <div className="cv-preview">
                    <img src="/assets/cv-preview.png" alt="Aperçu de mon CV" />
                </div>
            </div>
        </section>
    );
};

export default CVPage;