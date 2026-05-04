import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Charge les fichiers .json via HTTP
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Lie i18next à React
  .init({
    fallbackLng: 'fr', // Langue par défaut si la détection échoue
    debug: false, 
    interpolation: {
      escapeValue: false, // Pas besoin pour React (protégé par défaut)
    },
    backend: {
      // Chemin vers tes fichiers (relatif à la racine du dossier public)
      loadPath: '/locales/{{lng}}.json',
    }
  });

export default i18n;