import React, { useEffect, useState } from 'react';

import Lenis from 'lenis';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import AnimatedBackground from './components/AnimatedBackground';
import GlitterCursor from './components/GlitterCursor';
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
      <AnimatedBackground />
      <GlitterCursor />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <BentoGrid />
      </main>
    </div>
  );
}

export default App;
