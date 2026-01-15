import React, { useState, useEffect } from 'react';
import companyLogo from '../assets/images/company-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling DOWN (and not at very top) -> Hide
                setIsHidden(true);
            } else {
                // Scrolling UP or at top -> Show
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={isHidden ? 'navbar-hidden' : ''}>
            <div className="nav-logo">
                <div><img src={companyLogo} alt="Company Logo" width="80" height="80" /></div>
                <div className="navbar-logo-text">
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
                <li><a href="#vision" onClick={() => setIsOpen(false)}>Vision</a></li>
                <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
