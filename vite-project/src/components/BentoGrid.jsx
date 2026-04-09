import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube } from 'lucide-react';
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
import { User, Code2, Briefcase, GraduationCap, Award, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

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

const marqueeProjects = [
  {
    title: 'Med-Remind',
    description: 'A full-stack healthcare reminder application helping patients manage their medications and health logs.',
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/codinggita/medremind.git',
    demo: 'https://medremind-z2yo.vercel.app/'
  },
  {
    title: 'UNTUCKit Clone',
    description: 'A responsive e-commerce replica of the famous clothing brand UNTUCKit with cart & checkout UI.',
    tags: ['HTML/CSS', 'JavaScript', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    github: '#',
    demo: 'https://saptak108267untuckitweb6.netlify.app/',
    video: 'https://youtu.be/ZWfsPoOT3Nw?si=onGj5BnQZC2ksorD'
  },
  {
    title: 'Litecoin Web3',
    description: 'A modern crypto landing page with dark-mode aesthetics, real-time data visualization concepts.',
    tags: ['React', 'Web3'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop',
    github: '#',
    demo: 'https://saptak108267litecoinweb3.netlify.app/',
    video: 'https://youtu.be/mzoZqWNIpIs?si=gynu_dI6C3nWy9mY'
  },
  {
    title: 'Decure Interior Clone',
    description: 'A pixel-perfect clone showcasing elegant interior design layouts and smooth animations.',
    tags: ['HTML', 'UI/UX', 'Animation'],
    image: 'https://decure.in/cdn/shop/files/Decure_Logo_1000x500Px.png?height=628&pad_color=ffffff&v=1711642701&width=1200',
    github: '#',
    demo: 'https://saptak108267decurewebclone5.netlify.app/',
    video: 'https://youtu.be/F7RyF2E7WKU?si=AeO496RqlJCPHV2f'
  }
];

// Duplicate for seamless infinite scrolling
const duplicatedProjects = [...marqueeProjects, ...marqueeProjects];

const BentoGrid = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [hasScrolledModal, setHasScrolledModal] = useState(false);

  const bentoItems = [
    { id: 'intro', title: 'Saptak Bhattacharyya', desc: 'Full-stack developer specialized in building scalable, user-centered digital products.', span: 'col-span-2 row-span-2', type: 'hero' },
    { id: 'about', title: 'About Me', desc: 'Passionate CS student pursuing B.Tech at Swaminarayan University. Creative, logical, and innovation-driven.', span: 'col-span-2 row-span-1', type: 'about', icon: <User size={28} /> },
    { id: 'skills', title: 'Top Skills', desc: 'Expertise in React.js, Node.js, Express, and MongoDB. Professional UI/UX Designer.', span: 'col-span-2 row-span-1', type: 'skills', icon: <Code2 size={28} /> },
    { id: 'education', title: 'Education', desc: 'B.Tech CSE @ Swaminarayan University. (Currently Pursuing).', span: 'col-span-1 row-span-1', type: 'education', icon: <GraduationCap size={28} /> },
    { id: 'certificates', title: 'Certificates', desc: 'Certified in MERN Stack, UI Design, and Advanced Algorithms.', span: 'col-span-1 row-span-1', type: 'certificates', icon: <Award size={28} /> },
    { id: 'contact', title: 'Contact Me', desc: 'Available for freelance & Internships. Reach out now.', span: 'col-span-1 row-span-1', type: 'contact', icon: <Mail size={28} /> },
    { id: 'resume', title: 'Resume', desc: 'View my detailed resume with skills, hackathons & projects.', span: 'col-span-1 row-span-1', type: 'resume', icon: <FileText size={28} /> },
  ];

  const handleBoxClick = (id) => {
    setActiveModal(id);
    setHasScrolledModal(false);
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
              <div className="bento-hero-greeting" style={{ letterSpacing: '-1px', opacity: '0.04' }}>
                BUILDING DIGITAL <span className="greeting-wave" style={{ opacity: '0.3' }}>EXPERIENCES</span>
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

        {/* ─── Full-Width Marquee Projects Row ─── */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-4 bento-marquee-card"
        >
          <div className="bento-card-inner marquee-header">
            <div className="bento-icon-wrapper">
              <Briefcase size={28} />
            </div>
            <h3>Featured Projects</h3>
            <p>A selection of my recent work — hover to pause, click to explore.</p>
          </div>

          <div className="bmq-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="bmq-fade bmq-fade-left" />
            <div className="bmq-fade bmq-fade-right" />
            <div className="bmq-track">
              {duplicatedProjects.map((project, index) => (
                <div className="bmq-card" key={`${project.title}-${index}`}>
                  <div className="mq-card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="mq-project-overlay">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mq-view-btn" onClick={(e) => e.stopPropagation()}>
                        View Details <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                      </a>
                    </div>
                  </div>
                  <div className="mq-card-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="mq-tags">
                      {project.tags.map((tag, i) => (
                        <span className="mq-tag" key={i}>{tag}</span>
                      ))}
                    </div>
                    <div className="mq-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Github size={14} /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={14} /> Live
                      </a>
                      {project.video && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer" className="mq-link-yt" onClick={(e) => e.stopPropagation()}>
                          <Youtube size={14} /> Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal System */}
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
              onClick={(e) => e.stopPropagation()}
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
