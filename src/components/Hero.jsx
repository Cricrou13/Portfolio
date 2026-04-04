import React from 'react';
import { projectData } from "../data/projectData";
import { techIcons } from "../data/techIcons";

const Hero = () => {
  const techStack = [
    ...new Set(projectData.flatMap(project => project.tags))
  ];

  return (
    <header id="accueil" className="hero container">
      <div className="hero-left">
        <div className="badge-tech">
          <span className="icon">💎</span> • Développeur Full-Stack •
        </div>
        
        <h1 className='section-title'>
          DELCLOS <span className="accent">Christophe</span>
        </h1>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
                {techIcons[tech] ? techIcons[tech] : null}
                <span>{tech}</span>
            </div>       
          ))}
        </div>
        
        <p className="description">
          Ancien électricien reconverti dans le numérique. <br />
          Je combine 20 ans de rigueur technique à la création 
          d'expériences digitales modernes et performantes.
        </p>
      </div>

      <div className="hero-right"> {/* Changé hero-image par hero-right pour la clarté */}
        <div className="image-wrapper">
          {/* 2. On insère la photo ici */}
          <img src="/assets/Photo.jpg" alt="Christophe Delclos" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Hero;