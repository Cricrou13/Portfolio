import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png'  },
    { code: 'es', label: 'Espagnol', flag: 'https://flagcdn.com/w40/es.png'},
    { code: 'it', label: 'Italien', flag: 'https://flagcdn.com/w40/it.png'},
    { code: 'de', label: 'Allemand', flag: 'https://flagcdn.com/w40/de.png'},
  ];

  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(l => l.code === (i18n.language || 'fr')) || languages[0];

  return (
    <div className="lang-dropdown-container" ref={dropdownRef}>
      <button className="lang-trigger" onClick={() => setIsOpen(!isOpen)}>
        <img src={currentLanguage.flag} alt={currentLanguage.label} />
      {/*   <span className={`arrow ${isOpen ? 'open' : ''}`}>▾</span> */}
      </button>

      {isOpen && (
        <ul className="lang-menu">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button 
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={i18n.language === lang.code ? 'active' : ''}
              >
                <img src={lang.flag} alt={lang.label} />
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;