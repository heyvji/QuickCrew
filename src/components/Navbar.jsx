import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <div><img src={companyLogo} alt="Company Logo" width="80" height="80" /></div>
                </Link>
                <Link to="/" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="navbar-logo-text">
                        QuickCrew
                    </div>
                </Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
                <span style={isOpen ? { opacity: 0 } : {}}></span>
                <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
                <li><NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
                <li><NavLink to="/safety" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Safety</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
