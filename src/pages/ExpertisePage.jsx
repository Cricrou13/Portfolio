import React from 'react';

const ExpertisePage = () => {
    return (
         <section id="expertise" className='expertise'>
        <div className='container'>
          <div className='section-header'>
            <h1>Mon <span className='accent'>Expertise</span></h1>
            <p>Les domaines dans lesquels je crée de la valeur</p>
          </div>

          <div className='expertise-grid'>
            <div className='expertise-card'>
              <div className='icon-box blue'>
                <i className="fa-solid fa-code"></i>
              </div>
              <h2>Développement Frontend</h2>
              <p>Interfaces modernes et responsives avec React, JavaScript et Sass.</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box purple">
                <i className="fa-solid fa-database"></i>
              </div>
              <h2>Architecture Backend</h2>
              <p>API REST sécurisées et gestion de bases de données NoSQL avec Node.js et MongoDB.</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box green">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h2>Rigueur & Diagnostic</h2>
              <p>Approche méthodique héritée de 20 ans d'expérience technique pour un code fiable.</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box orange">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h2>Workflow & Outils</h2>
              <p>Maîtrise de Git/GitHub, des tests et des méthodes de déploiement continu.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExpertisePage;