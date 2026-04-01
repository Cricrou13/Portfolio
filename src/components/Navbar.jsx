import React ,{ useState }from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
  import '../styles/components/_navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='navbar'>
      <div className="navbar-content container">
        <div className="logo">
          <span className='first-letter'>C</span>
          <span className='second-letter'>D</span>
        </div>

          {/* LE BOUTON BURGER (Visible uniquement sur mobile) */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

         {/* LES LIENS (Desktop constant / Mobile conditionnel) */}
        <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <li><a href="#accueil" onClick={closeMenu}>Accueil</a></li>
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#expertise" onClick={closeMenu}>Expertise</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
      <AnimatePresence>
          {isOpen && (
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;