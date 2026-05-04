import React from 'react';
// 1. IMPORT MANQUANT
import { useTranslation } from 'react-i18next'; 
import { projectData } from "../data/projectData";
import { techIcons } from "../data/techIcons";

const Hero = () => {
  // 2. INITIALISATION DU HOOK
  const { t } = useTranslation();

  // Logique pour extraire les technos des projets
  const techStack = [
    ...new Set(projectData.flatMap(project => project.tags))
  ];

  return (
    <header id="accueil" className="hero container">
      <div className="hero-left">
        <div className="badge-tech">
          {/* 3. TRADUCTION DU SOUS-TITRE */}
          <span className="icon">💎</span> • {t('hero_subtitle')} •
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
        
{/*           TRADUCTION DE LA DESCRIPTION
 */}        <p className="description">
          {t('hero_description')}
        </p>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src="/assets/Photo.jpg" alt="Christophe Delclos" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Hero;