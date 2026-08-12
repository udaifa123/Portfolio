import { useState } from 'react';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar">
      <a href="/" className="logo-text">
        UDAI<span>FA</span>
      </a>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
        <li><a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Work</a></li>
        <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
      </ul>
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
}

export default Navbar;