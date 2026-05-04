import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer =() => {
    const { t } = useTranslation();
    return (
      <footer className='footer'>
         <div className='footer-content'>
          <div className='footer-logo'>
            C<span>.</span>
          </div>

          <div className='footer-socials'>
             <a href="mailto:delclos.c13@gmail.com" aria-label="Envoyer un email à Christophe Delclos">
               <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Cricrou13" target="_blank" rel="noreferrer" aria-label="Visiter mon profil GitHub">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/christophe-delclos-65a6563a7" target="_blank" rel="noreferrer" aria-label="Visiter mon profil LinkedIn">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>

          <div className='footer-copy'>
             <p>{t('footer_droits')}</p>
          </div>
        </div>
      </footer>
    )
}
export default Footer;