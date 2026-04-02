import React from 'react';

const ExpertisePage = () => {
    return (
         <section id="expertise" className='expertise'>
        <div className='container'>
          <div className='section-header'>
            <h2>Mon <span className='accent'>Expertise</span></h2>
            <p>Les domaines dans lesquels je crée de la valeur</p>
          </div>

          <div className='expertise-grid'>
            <div className='expertise-card'>
              <div className='icon-box blue'>
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Développement Frontend</h3>
              <p>Interfaces modernes et responsives avec React, JavaScript et Sass.</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box purple">
                <i className="fa-solid fa-database"></i>
              </div>
              <h3>Architecture Backend</h3>
              <p>API REST sécurisées et gestion de bases de données NoSQL avec Node.js et MongoDB.</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box green">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3>Rigueur & Diagnostic</h3>
              <p>Approche méthodique héritée de 20 ans d'expérience technique pour un code fiable.</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box orange">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3>Workflow & Outils</h3>
              <p>Maîtrise de Git/GitHub, des tests et des méthodes de déploiement continu.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExpertisePage;