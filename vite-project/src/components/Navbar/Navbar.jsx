import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const dropdownLinks = [
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Achievements', href: '#achievements' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');
  const [isMoreActive, setIsMoreActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 200;

      // Check standard links
      let currentActive = '';
      navLinks.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = link.href;
          }
        }
      });

      // Check dropdown links to highlight "More"
      let moreActive = false;
      dropdownLinks.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            moreActive = true;
          }
        }
      });

      setIsMoreActive(moreActive);
      if (currentActive) {
        setActiveLink(currentActive);
      } else if (moreActive) {
        setActiveLink('#more');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center ${
        scrolled
          ? 'bg-[#090D11]/85 backdrop-blur-md border-b border-[#2A313B]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-wider font-display text-[#F5F4F3] flex items-center gap-1 group">
          <span className="text-[#E5A93B] transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
          <span className="bg-gradient-to-r from-[#E5A93B] to-[#B07C51] bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">SB</span>
          <span className="text-[#E5A93B] transition-transform duration-300 group-hover:translate-x-1">/&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#FFC25D] ${
                    activeLink === link.href && !isMoreActive ? 'text-[#E5A93B]' : 'text-[#A8ADB5]'
                  }`}
                >
                  {link.name}
                  {activeLink === link.href && !isMoreActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A93B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}

            {/* More Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#FFC25D] focus:outline-none ${
                  isMoreActive ? 'text-[#E5A93B]' : 'text-[#A8ADB5]'
                }`}
              >
                More
                <FiChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                {isMoreActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A93B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-8 left-0 min-w-[160px] bg-[#11161D]/95 border border-[#2A313B] rounded-lg shadow-xl backdrop-blur-md overflow-hidden z-50"
                  >
                    <ul className="flex flex-col py-1.5">
                      {dropdownLinks.map((sublink) => (
                        <li key={sublink.name}>
                          <a
                            href={sublink.href}
                            onClick={() => {
                              setActiveLink('#more');
                              setIsMoreActive(true);
                              setDropdownOpen(false);
                            }}
                            className="block px-4 py-2 text-xs font-semibold text-[#A8ADB5] hover:text-[#FFC25D] hover:bg-[#11161D]/80 transition-all duration-200"
                          >
                            {sublink.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="h-4 w-[1px] bg-[#2A313B]" />

          {/* Socials & Primary CTA */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/SaptakBhattacharyya" target="_blank" rel="noreferrer" className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors duration-300">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/" target="_blank" rel="noreferrer" className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors duration-300">
              <FiLinkedin size={18} />
            </a>
            <a
              href="#resume"
              className="px-4 py-1.5 rounded-md text-xs font-semibold font-body border border-[#E5A93B]/50 bg-[#E5A93B]/10 text-[#E5A93B] hover:bg-[#FFC25D] hover:text-[#090D11] transition-all duration-300 shadow-md shadow-[#E5A93B]/5"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F5F4F3] hover:text-[#FFC25D] transition-colors duration-300"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[72px] left-0 w-full bg-[#11161D]/95 border-b border-[#2A313B] backdrop-blur-lg overflow-hidden"
          >
            <ul className="px-8 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMoreActive(false);
                      setIsOpen(false);
                    }}
                    className={`block py-1 text-base font-medium transition-colors duration-300 ${
                      activeLink === link.href && !isMoreActive ? 'text-[#E5A93B]' : 'text-[#A8ADB5]'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {dropdownLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink('#more');
                      setIsMoreActive(true);
                      setIsOpen(false);
                    }}
                    className={`block py-1 pl-4 text-sm font-medium transition-colors duration-300 ${
                      isMoreActive ? 'text-[#E5A93B]' : 'text-[#A8ADB5]'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <hr className="border-[#2A313B] my-2" />
              <div className="flex justify-between items-center py-2">
                <div className="flex gap-6">
                  <a href="https://github.com/SaptakBhattacharyya" target="_blank" rel="noreferrer" className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors duration-300">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/" target="_blank" rel="noreferrer" className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors duration-300">
                    <FiLinkedin size={20} />
                  </a>
                </div>
                <a
                  href="#resume"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-md text-xs font-semibold border border-[#E5A93B]/50 bg-[#E5A93B]/10 text-[#E5A93B] hover:bg-[#FFC25D] hover:text-[#090D11] transition-all duration-300"
                >
                  Resume
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
