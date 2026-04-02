import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { form } from 'framer-motion/client';

function App() {
   return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> 
    </div>
  );
}



export default App;