import React from 'react';
import { projectData } from "../data/projectData";
import { techIcons } from "../data/techIcons";

const Hero = () => {

  // 🔥 Génération dynamique de la stack
  const techStack = [
    ...new Set(
      projectData.flatMap(project => project.tags)
    )
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

        {/* ✅ AJOUT ICI */}
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-item">
      
              {techIcons[tech] && (
                <img src={techIcons[tech]} alt={tech} />
      )}
      
              {tech}
            </span>
  ))}
</div>
        
        <p className="description">
          Ancien électricien reconverti dans le numérique. 
          Je combine 20 ans de rigueur technique à la création 
          d'expériences digitales modernes et performantes.
        </p>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          {/* <img src={profilePic} alt="Christophe Delclos" /> */}
        </div>
      </div>

    </header>
  );
};

export default Hero;

