import React from 'react';
import './styles/index.scss';
import profilePic from './assets/photo-christophe.jpeg';

function App() {
  return (
    <div className="App">
      {/* --- NAVBAR --- */}
      <nav className='navbar'>
        <div className="navbar-content container">
          <div className="logo">
            <span className='first-letter'>C</span>
            <span className='second-letter'>D</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="hero container">
        <div className="hero-left">
          <div className="badge-tech">
            <span className="icon">💎</span> • Développeur Full-Stack •
          </div>
          
          <h1>DELCLOS <span className="accent">Christophe</span></h1>
          
          <p className="description">
            Ancien électricien reconverti dans le numérique. 
            Je combine 20 ans de rigueur technique avec la création 
            d'expériences digitales modernes et performantes.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
               <i className="fa-solid fa-folder-open"></i> Voir mes projets
            </a>
            <a href="/CV.pdf" className="btn-outline" download>
             <i className="fa-solid fa-download"></i> Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profilePic} alt="Christophe Delclos" />
          </div>
        </div>
      </header>

      {/* --- SECTION A PROPOS (Texte + Stats) --- */}
      <section id="about" className="about container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Mon <span className="accent">Parcours</span></h2>
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
              <h3>20</h3>
              <p>Ans d'expérience technique</p>
            </div>
            <div className="stat-card accent-card">
              <h3>100%</h3>
              <p>Passionné par le code</p>
            </div>
            <div className="stat-card">
              <h3>31</h3>
              <p>Basé en Haute-Garonne</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION EXPERTISE --- */}
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

      {/* --- PROJETS ET CONTACT --- */}
      <main className="container">
        <section id="projects" className="projects">
          <h2>Mes Projets <span className='accent'> OpenClassrooms</span></h2>
          <div className="project-grid">
            <div className="card">
              <h3>Kasa</h3>
              <p>Application de location immobilière avec React et React Router. Gestion du design responsive.</p>
              <div className="tags"><span>#React</span><span>#Sass</span></div>
            </div>
            <div className="card">
              <h3>Mon Vieux Grimoire</h3>
              <p>Développement du Back-End : API REST sécurisée avec Node.js, Express et MongoDB.</p>
              <div className="tags"><span>#Node.js</span><span>#MongoDB</span></div>
            </div>
            <div className="card">
              <h3>Portfolio Pro</h3>
              <p>Conception et déploiement de mon portfolio professionnel utilisant Vite, React et Sass.</p>
              <div className="tags"><span>#Vite</span><span>#React</span><span>#Sass</span></div>
            </div>
          </div>
        </section>

        <section id='contact' className='contact'>
          <div className='contact-header'>
            <h2>Me <span className="accent">Contacter</span></h2>
            <p>Un projet en tête ? Écrivez-moi, je réponds rapidement.</p>
            <div className='contact-email'>
              <i className="fa-solid fa-envelope"></i> 
              <a href="mailto:delclos.c13@gmail.com">delclos.c13@gmail.com</a>
            </div>
          </div>
        
          <form className='contact-form'>
            <div className='form-row'>
              <div className='form-group'>
                <input type="text" name="name" placeholder="Votre nom" required />
              </div>
              <div className='form-group'>
                <input type="email" name="email" placeholder="Votre email" required />
              </div>
            </div>
            <div className='form-group'>
              <textarea name="message" placeholder="Votre message..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <span className="icon">🚀</span> Envoyer le message
            </button>
          </form>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer>
        <div className='footer-content container'>
          <div className='footer-logo'>
            C<span>.</span>
          </div>

          <div className='footer-socials'>
              <a href="mailto:delclos.c13@gmail.com" title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://github.com/Cricrou13" target="_blank" rel="noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/christophe-delclos-65a6563a7" target="_blank" rel="noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
          </div>

          <div className='footer-copy'>
             <p>© 2025 - Christophe Delclos - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;