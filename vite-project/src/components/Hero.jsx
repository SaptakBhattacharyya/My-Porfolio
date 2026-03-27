import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-modal-container">
      <div className="hero-modal-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-modal-title"
          >
            Full-stack developer specialized in building scalable, user-centered digital products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-modal-desc"
          >
            I'm <strong>Saptak Bhattacharyya</strong> — a multidisciplinary developer and UI/UX designer who builds performant web applications with clean architecture, intuitive interfaces, and meaningful user experiences from end to end.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="hero-modal-tech"
          >
             <span>React</span>
             <span>Node.js</span>
             <span>MongoDB</span>
             <span>UI/UX</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Saptak Bhattacharyya" className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
