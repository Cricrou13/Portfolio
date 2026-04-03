import React from 'react';

const AboutPage = () => {
    return (
        <section id="about" className="about container">
                <div className="about-grid">
                <div className="about-text">
                    <h1 className="section-title">Mon <span className="accent">Parcours</span></h1>
                    <p>
                    Après plus de 20 ans dans les métiers manuels et techniques, j'ai choisi de mettre ma <strong>rigueur opérationnelle</strong> au service du développement web.
                    </p>
                    <p>
                    Passer de la construction physique à la construction numérique est pour moi une suite logique : 
                    le goût de l'assemblage précis et la satisfaction de voir un système fonctionner parfaitement une fois livré.
                    </p>
                    
                    <div className="about-highlights">
                    <div className="highlight-item">
                        <i className="fa-solid fa-check"></i> Rigueur Technique
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-check"></i> Capacité de Diagnostic
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-check"></i> Autonomie & Fiabilité
                    </div>
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stat-card">
                    <h2>20</h2>
                    <p>Ans d'expérience technique</p>
                    </div>
                    <div className="stat-card accent-card">
                    <h2>100%</h2>
                    <p>Passionné par le code</p>
                    </div>
                    <div className="stat-card">
                    <h2>31</h2>
                    <p>Basé en Haute-Garonne</p>
                    </div>
                </div>
                </div>
            </section>
    );
};
export default AboutPage;