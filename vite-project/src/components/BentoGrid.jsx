import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BentoGrid.css';

// We will import actual functional components later to render inside modals
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';
import Hero from './Hero';
import profileImg from '../assets/profile.png';
import { User, Code2, Briefcase, GraduationCap, Award, Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
};

const carouselProjects = [
  { title: 'Med-Remind', tag: 'Full-Stack · React · Node', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop' },
  { title: 'UNTUCKit Clone', tag: 'E-Commerce · JavaScript', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop' },
  { title: 'Litecoin Web3', tag: 'React · Web3', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop' },
  { title: 'Decure Interior', tag: 'HTML · UI/UX · Animation', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop' },
];

const BentoGrid = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [hasScrolledModal, setHasScrolledModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [slideDir, setSlideDir] = useState('right');

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDir('right');
      setCarouselIndex(prev => (prev + 1) % carouselProjects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const bentoItems = [
    { id: 'intro', title: 'Saptak Bhattacharyya', desc: 'Full-stack developer specialized in building scalable, user-centered digital products.', span: 'col-span-2 row-span-2', type: 'hero' },
    { id: 'about', title: 'About Me', desc: 'Passionate CS student pursuing B.Tech at Swaminarayan University. Creative, logical, and innovation-driven.', span: 'col-span-2 row-span-1', type: 'about', icon: <User size={28} /> },
    { id: 'skills', title: 'Top Skills', desc: 'Expertise in React.js, Node.js, Express, and MongoDB. Professional UI/UX Designer.', span: 'col-span-2 row-span-1', type: 'skills', icon: <Code2 size={28} /> },
    { id: 'projects', title: 'Featured Projects', desc: '', span: 'col-span-2 row-span-2', type: 'projects', icon: <Briefcase size={28} /> },
    { id: 'education', title: 'Education', desc: 'B.Tech CSE @ Swaminarayan University. (Currently Pursuing).', span: 'col-span-1 row-span-1', type: 'education', icon: <GraduationCap size={28} /> },
    { id: 'certificates', title: 'Certificates', desc: 'Certified in MERN Stack, UI Design, and Advanced Algorithms.', span: 'col-span-1 row-span-1', type: 'certificates', icon: <Award size={28} /> },
    { id: 'contact', title: 'Contact Me', desc: 'Available for freelance & Internships. Reach out now.', span: 'col-span-1 row-span-1', type: 'contact', icon: <Mail size={28} /> },
    { id: 'resume', title: 'Resume', desc: 'Download my latest professional CV (PDF).', span: 'col-span-1 row-span-1', type: 'resume', icon: <FileText size={28} /> },
  ];

  const handleBoxClick = (id) => {
    setActiveModal(id);
    setHasScrolledModal(false); // Reset on new open
  };

  const closeModal = () => {
    setActiveModal(null);
    setHasScrolledModal(false);
  };

  const handleModalScroll = (e) => {
    if (e.target.scrollTop > 50) {
      setHasScrolledModal(true);
    } else {
      setHasScrolledModal(false);
    }
  };

  return (
    <section className="bento-section">
      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {bentoItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className={`bento-card ${item.span} bento-${item.type}-card`}
            onClick={() => handleBoxClick(item.id)}
          >
            {item.type === 'hero' && (
              <div className="bento-hero-greeting">
                HELLO <span className="greeting-wave">👋</span>
              </div>
            )}
            <div className="bento-card-inner">
              {item.type === 'hero' && (
                <div className="bento-hero-header">
                  <div className="bento-profile-wrap">
                    <img src={profileImg} alt="Profile" className="bento-profile-img" />
                  </div>
                  <div className="bento-code-snippet">
                    <div className="typing-animation">
                      <span className="code-keyword">&lt;</span><span className="code-component">Saptak</span> <span className="code-prop">role</span>=<span className="code-string">"FullStack Engineer"</span> <span className="code-keyword">/&gt;</span>
                    </div>
                  </div>
                </div>
              )}
              {item.type === 'projects' && (
                <div className="bento-project-carousel">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={carouselIndex}
                      className="carousel-slide"
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -80, opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                    >
                      <img
                        src={carouselProjects[carouselIndex].image}
                        alt={carouselProjects[carouselIndex].title}
                        className="carousel-img"
                      />
                      <div className="carousel-meta">
                        <span className="carousel-title">{carouselProjects[carouselIndex].title}</span>
                        <span className="carousel-tag">{carouselProjects[carouselIndex].tag}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-dots">
                    {carouselProjects.map((_, i) => (
                      <span key={i} className={`carousel-dot${i === carouselIndex ? ' active' : ''}`} />
                    ))}
                  </div>
                </div>
              )}
              {item.icon && (
                <div className="bento-icon-wrapper">
                  {item.icon}
                </div>
              )}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.type === 'hero' && (
                <div className="bento-hero-cta">
                  <button 
                    className="primary-btn" 
                    onClick={(e) => { e.stopPropagation(); handleBoxClick('resume'); }}
                  >
                    View Resume
                  </button>
                  <div className="hero-socials">
                    <a href="https://github.com/SaptakBhattacharyya" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/saptakbhattacharyya" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Linkedin size={18} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Basic Modal System Placeholder */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="bento-modal-overlay"
            data-lenis-prevent="true"
            onScroll={handleModalScroll}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <AnimatePresence>
              {!hasScrolledModal && activeModal !== 'intro' && (
                <motion.div
                  className="scroll-indicator-popup"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span>Scroll for more info</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              className="bento-modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
            >
              <button className="close-modal-btn" onClick={closeModal}>×</button>
              <div className="modal-scroll-area">
                {activeModal === 'about' && <About />}
                {activeModal === 'skills' && <Skills />}
                {activeModal === 'projects' && <Projects />}
                {activeModal === 'education' && <Education />}
                {activeModal === 'certificates' && <Certificates />}
                {activeModal === 'contact' && <Contact />}
                {activeModal === 'resume' && <Resume />}
                {activeModal === 'intro' && <Hero />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGrid;
