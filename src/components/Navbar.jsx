import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-content container">
        <div className="logo">
          <span className='first-letter'>C</span>
          <span className='second-letter'>D</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">A propos</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;