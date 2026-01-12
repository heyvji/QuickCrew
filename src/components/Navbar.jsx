import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-logo">
                <div><img src="./src/assets/images/company-logo.png" alt="Company Logo" width="100" height="100" border="2px solid gold"/></div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '1.2px', color: 'white', fontWeight: 'bold', marginTop: '5px'}}>
                    QuickCrew
                </div>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
                <span style={isOpen ? { opacity: 0 } : {}}></span>
                <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
                <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                <li><a href="#vision" onClick={() => setIsOpen(false)}>Vision</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
