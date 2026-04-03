import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
// Importe toutes tes nouvelles pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import CVPage from './pages/CVPage';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// Composant pour le bouton retour
function BackToHome() {
  const location = useLocation();
  const navigate = useNavigate();

  // Si on est sur l'accueil ("/"), on n'affiche rien (null)
  if (location.pathname === '/') {
    return null;
  }

  // Sinon, on affiche le lien
  return (
    <div className="container-back">
      <button 
        onClick={() => navigate('/')} 
        className="back-link"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span className="arrow">←</span> Retour à l'accueil
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="site-wrapper">
        <Navbar />
        <BackToHome />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
  export default App;