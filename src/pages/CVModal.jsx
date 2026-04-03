// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const CVModal = ({ isOpen, onClose, cvUrl }) => {
  // Fermeture avec la touche Échap
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="cv-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
        <motion.div 
            className="cv-modal"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique sur le CV
          >
            <button className="close-btn" onClick={onClose} aria-label="Fermer">
              &times;
            </button>
            
            <div className="modal-scroll-area">
                <iframe 
                    src={cvUrl} 
                    title="CV Christophe Delclos"
                    width="100%" 
                    height="100%"
                    style={{ border: 'none' }}
                />
            </div>
        </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;