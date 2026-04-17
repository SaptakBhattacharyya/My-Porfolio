import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Certificates', target: 'certificates' },
    { label: 'Contact', target: 'contact' },
    { label: 'Resume', target: 'resume' },
];

const moreLinks = [
    { label: 'Hackathons', target: 'hackathons' },
    { label: 'Achievements', target: 'achievements' },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreTimeoutRef = useRef(null);
    const navigate = useNavigate();

    const handleNavClick = (e, target) => {
        if (e) e.preventDefault();
        setIsOpen(false);
        setIsMoreOpen(false);

        // Navigate to the route
        const validRoutes = [
            'about', 'skills', 'projects', 'education', 
            'certificates', 'contact', 'resume', 
            'hackathons', 'achievements'
        ];

        if (validRoutes.includes(target)) {
            navigate(`/${target}`);
        } else {
            navigate('/');
        }

        // Find the bento card element by its data-section attribute
        const el = document.querySelector(`[data-section="${target}"]`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.dispatchEvent(new CustomEvent('nav-highlight', { detail: { target } }));
        }
    };

    const handleMoreMouseEnter = () => {
        if (window.innerWidth > 1024) {
            if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
            setIsMoreOpen(true);
        }
    };

    const handleMoreMouseLeave = () => {
        if (window.innerWidth > 1024) {
            moreTimeoutRef.current = setTimeout(() => {
                setIsMoreOpen(false);
            }, 300);
        }
    };

    const toggleMoreMobile = () => {
        if (window.innerWidth <= 1024) {
            setIsMoreOpen(!isMoreOpen);
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
                            <NavLink
                                to={`/${link.target}`}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.target)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}

                    {/* More Dropdown */}
                    <li 
                        className="nav-item-more"
                        onMouseEnter={handleMoreMouseEnter}
                        onMouseLeave={handleMoreMouseLeave}
                    >
                        <button 
                            className={`nav-link more-btn ${isMoreOpen ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleMoreMobile();
                            }}
                        >
                            More <ChevronDown size={14} className={`chevron ${isMoreOpen ? 'rotate' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isMoreOpen && (
                                <motion.div 
                                    className="dropdown-menu"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="dropdown-content">
                                        {moreLinks.map((link) => (
                                            <NavLink
                                                key={link.target}
                                                to={`/${link.target}`}
                                                className="dropdown-link"
                                                onClick={(e) => handleNavClick(e, link.target)}
                                            >
                                                {link.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                </ul>

                <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                        className="theme-toggle"
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
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

