import React, { useEffect, useState } from 'react';

import Lenis from 'lenis';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Resume from './components/Resume';
import { motion } from 'framer-motion';
import Contact from './components/Contact';
import './App.css';
import profileImg from './assets/profile.png';

function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Smooth scroll configuration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div className="blur-blob bg-glow-1"></div>
      <div className="blur-blob bg-glow-2"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Full-stack developer specialized in building scalable, user-centered digital products
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                I'm Saptak — a multidisciplinary developer and UI/UX designer who builds performant web applications with clean architecture, intuitive interfaces, and meaningful user experiences from end to end.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a href="#projects" className="btn btn-primary">
                  Explore My Work
                </a>
                <a href="#resume" className="btn btn-outline">
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <div className="hero-image-wrapper">
                <img src={profileImg} alt="Saptak Bhattacharyya" className="hero-image" />
              </div>
            </motion.div>
          </div>
        </section>

        <About />

        <Skills />

        <Projects />

        <Certificates />

        <Education />

        <Resume />

        <Contact />

      </main>
    </div>
  );
}

export default App;
