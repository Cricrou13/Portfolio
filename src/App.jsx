import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importe toutes tes nouvelles pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import CVPage from './pages/CVPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Navbar />
        
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