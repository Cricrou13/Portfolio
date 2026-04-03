import React from 'react';

const Hero = () => {
    return (
         <header id="accueil" className="hero container">
        <div className="hero-left">
          <div className="badge-tech">
            <span className="icon">💎</span> • Développeur Full-Stack •
          </div>
          
          <h1 className='section-title'>DELCLOS <span className="accent">Christophe</span></h1>
          
          <p className="description">
            Ancien électricien reconverti dans le numérique. 
            Je combine 20 ans de rigueur technique avec la création 
            d'expériences digitales modernes et performantes.
          </p>
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

