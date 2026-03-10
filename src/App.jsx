import React from 'react';
import './styles/index.scss';
import profilePic from './assets/photo-christophe.jpeg';

function App() {
  return (
    <div className="App">
       {/* Nouvelle barre de navigation */}
      <nav className='navbar'>
       <div className="navbar-content container">
          <div className="logo">CD</div>
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Section Présentation */}
      <header id="home" className="hero container">
        <div className="hero-content">
          <div className="badge-tech">
            <span className="icon">💎</span> Développeur Full-Stack • Électricien
          </div>
          
          <h1>DELCLOS <span className="accent">Christophe</span></h1>
          
          <p className="description">
            Ancien électricien reconverti dans le numérique. 
            Je combine 20 ans de rigueur technique avec la création 
            d'expériences digitales modernes et performantes.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <i className="icon">📁</i> Voir mes projets
            </a>
            <a href="/cv.pdf" className="btn-outline">
              <i className="icon">⬇️</i> Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profilePic} alt="Christophe Delclos" />
          </div>
        </div>

        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </header>

       <main className="container">
        <section id="projects" className="projects">
          <h2>Mes Projets OpenClassrooms</h2>
          
          <div className="project-grid">
             {/* Projet 1 */}
            <div className="card">
              <h3>Kasa</h3>
              <p>Application de location immobilière avec React et React Router. Gestion du design responsive et des animations.</p>
              <div className="tags">
                <span>#React</span>
                <span>#Sass</span>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="card">
              <h3>Mon Vieux Grimoire</h3>
              <p>Développement du Back-End : Création d'une API REST sécurisée avec Node.js, Express et MongoDB.</p>
              <div className="tags">
                <span>#Node.js</span>
                <span>#MongoDB</span>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="card">
              <h3>Portfolio Pro</h3>
              <p>Conception et déploiement de mon portfolio professionnel utilisant Vite, React et Sass.</p>
              <div className="tags">
                <span>#Vite</span>
                <span>#React</span>
                <span>#Sass</span>
              </div>
            </div>

          </div>
        </section>

        <section id='contact' className='contact'>
          <div className='container'>
            <div className='contact-header'>
               <h2>Me <span className="accent">Contacter</span></h2>
               <p> Un projet en tête ? Ecrivez-moi, je réponds rapidement.</p>

              <div className='contact-email'>
                <span className="icon">✉️</span> 
                <a href="mailto:ton-email@gmail.com">delclos.c13@gmail.com</a>
              </div>
            </div>
          
            <form className='contact-form'>
              <div className='form-row'>
                <div className='form-group'>
                   <input type="text" placeholder="Votre nom" required />
                </div>
                <div className='form-group'>
                   <input type="email" placeholder="Votre email" required />
                </div>
              </div>

              <div className='form-group'>
                 <textarea placeholder="Votre message..." rows="5" required></textarea>
              </div>

               <button type="submit" className="btn-submit">
                  <span className="icon">🚀</span> Envoyer le message
               </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 - Christophe Delclos - Toulouse & Haute-Garonne</p>
      </footer>
    </div>
  );
}

export default App;