import React from 'react';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="hero container">
        <span className="badge">Ancien électricien • 20 ans d'expertise</span>
        <h1>Christophe Delclos</h1>
        <h2>Développeur Web Fullstack</h2>
        <p>Expertise technique et rigueur au service de vos solutions numériques.</p>
        <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
          Voir mes projets
        </button>
      </header>

      <main className="container">
        <section id="projects" className="projects">
          <h3>Mes Projets OpenClassrooms</h3>
          
          <div className="project-grid">
            
            {/* Projet 1 */}
            <div className="card">
              <h4>Kasa</h4>
              <p>Application de location immobilière avec React et React Router. Gestion du design responsive et des animations.</p>
              <div className="tags">
                <span>#React</span>
                <span>#Sass</span>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="card">
              <h4>Mon Vieux Grimoire</h4>
              <p>Développement du Back-End : Création d'une API REST sécurisée avec Node.js, Express et MongoDB.</p>
              <div className="tags">
                <span>#Node.js</span>
                <span>#MongoDB</span>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="card">
              <h4>Portfolio Pro</h4>
              <p>Conception et déploiement de mon portfolio professionnel utilisant Vite, React et Sass.</p>
              <div className="tags">
                <span>#Vite</span>
                <span>#React</span>
                <span>#Sass</span>
              </div>
            </div>

          </div>
        </section>
      </main>

      <section className="contact container">
         <h3>Me contacter</h3>
          <p>En recherche d'une opportunité en Haute-Garonne ; présentiel ou télétravail.</p>
          <div className="contact-links">
            <a href="mailto:votre-email@exemple.com" className="btn btn--outline">Envoyer un Email</a>
            <a href="https://www.linkedin.com/in/votre-profil" target="_blank" className="btn btn--outline">Profil LinkedIn</a>
          </div>
      </section>

      <footer>
        <p>© 2025 - Christophe Delclos - Toulouse & Haute-Garonne</p>
      </footer>
    </div>
  );
}

export default App;