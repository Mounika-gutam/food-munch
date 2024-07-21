import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/"><div className="brand-title"><img src="https://i.pinimg.com/564x/0a/cf/48/0acf483ad17088f7d92536604f5296a5.jpg" alt="logo" className="logo" /></div></Link>
      <button className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;
