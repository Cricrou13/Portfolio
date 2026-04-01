import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
// Vérifie bien le nom de ton fichier SCSS ci-dessous
import '../styles/components/_scroller-top.scss'; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer la visibilité au scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button 
          className="scroll-to-top" 
          onClick={handleScrollToTop}
          aria-label="Remonter en haut de la page"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}; // Cette accolade ferme ENFIN le composant à la toute fin

export default ScrollToTop;