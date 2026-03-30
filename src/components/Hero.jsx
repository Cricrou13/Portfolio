import React from 'react';

const Hero = () => {
    return (
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
        {/*    { <img src={profilePic} alt="Christophe Delclos" />} */}
          </div>
        </div>
      </header>
    )
}

export default Hero;

