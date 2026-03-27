import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Nav links removed because Bento Grid acts as the central hub.

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="nav-logo">
                    <span className="logo-text">Saptak Bhattacharyya</span>
                </div>

                {/* Links removed as Bento Dashboard handles navigation */}

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
