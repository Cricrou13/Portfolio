import React from 'react';

const Footer =() => {
    return (
      <footer className='footer'>
         <div className='footer-content'>
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
    )
}
export default Footer;