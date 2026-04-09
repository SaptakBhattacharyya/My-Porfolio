import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects-marquee' },
    { label: 'Education', target: 'education' },
    { label: 'Certificates', target: 'certificates' },
    { label: 'Contact', target: 'contact' },
    { label: 'Resume', target: 'resume' },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (e, target) => {
        e.preventDefault();
        setIsOpen(false);

        // Find the bento card element by its data-section attribute
        const el = document.querySelector(`[data-section="${target}"]`);
        if (el) {
            // Smooth scroll into view
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Dispatch a custom event so BentoGrid can apply the glow
            window.dispatchEvent(new CustomEvent('nav-highlight', { detail: { target } }));
        }
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="nav-logo">
                    <span className="logo-text">Saptak Bhattacharyya</span>
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.target}>
                            <a
                                href={`#${link.target}`}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, link.target)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Theme Toggle Button */}
                    <button
                        className="theme-toggle"
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
