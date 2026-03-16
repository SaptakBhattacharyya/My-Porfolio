import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '#resume' },
    ];

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="nav-logo">
                    <span className="logo-text">Saptak Bhattacharyya</span>
                </div>

                {/* Desktop Links */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
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
