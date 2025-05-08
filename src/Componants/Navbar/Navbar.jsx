import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/yashlogo.png';

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = ['Home', 'About', 'Experience', 'Portfolio'];

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  // ✅ Scroll to section by ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Handle Connect button click
  const handleConnectClick = () => {
    setMenuOpen(false);
    setActiveLink('Contact');
    scrollToSection('Contact'); // Scroll to the Contact section
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <img src={logo} alt="Logo" className="logo" />

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={handleMenuToggle}
        >
          <div></div>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item}
              className={activeLink === item ? 'active' : ''}
              onClick={() => {
                setActiveLink(item);
                setMenuOpen(false);
                scrollToSection(item);
              }}
            >
              {item}
            </li>
          ))}

          {/* Mobile view: Connect button */}
          <div 
            className="nav-connect mobile-connect d-lg-none" 
            onClick={handleConnectClick}
          >
            Connect With Me
          </div>
        </ul>

        {/* Desktop view: Connect button */}
        <div 
          className="nav-connect d-none d-lg-block" 
          onClick={handleConnectClick}
        >
          Connect With Me
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
