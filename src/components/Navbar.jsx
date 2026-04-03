import React ,{ useState }from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/_navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='navbar'>
      <div className="navbar-content container">
        <div className="logo">
          <img src="./assets/LogoDev.webp" alt="Logo Delclos Christophe" width="50" height="50"/>
        </div>

          {/* LE BOUTON BURGER (Visible uniquement sur mobile) */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

         {/* LES LIENS (Desktop constant / Mobile conditionnel) */}
        <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/expertise" onClick={closeMenu}>Expertise</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
          <li><Link to="cv" onClick={closeMenu}>CV</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
         
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