import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import SEO from './components/SEO';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import AnimatedBackground from './components/AnimatedBackground';
import GlitterCursor from './components/GlitterCursor';
import MarvelIntro from './components/MarvelIntro';
import './App.css';
import profileImg from './assets/profile.png';

// Dynamic SEO metadata per section
const seoConfig = {
  '/': {
    title: 'Saptak Bhattacharyya | Full-Stack Developer & UI/UX Designer',
    description: 'Portfolio of Saptak Bhattacharyya — Full-stack developer and UI/UX designer specializing in React, Node.js, MongoDB, and modern web experiences.',
  },
  about: {
    title: 'About | Saptak Bhattacharyya',
    description: 'Learn about Saptak Bhattacharyya — passionate CS student at Swaminarayan University, full-stack developer, and UI/UX designer.',
  },
  skills: {
    title: 'Skills | Saptak Bhattacharyya',
    description: 'Technical skills of Saptak Bhattacharyya — React.js, Node.js, Express, MongoDB, JavaScript, HTML/CSS, and professional UI/UX design.',
  },
  projects: {
    title: 'Projects | Saptak Bhattacharyya',
    description: 'Featured projects by Saptak Bhattacharyya including Med-Remind, UNTUCKit Clone, Litecoin Web3, and more full-stack and frontend work.',
  },
  education: {
    title: 'Education | Saptak Bhattacharyya',
    description: 'Education background of Saptak Bhattacharyya — B.Tech CSE at Swaminarayan University.',
  },
  certificates: {
    title: 'Certificates | Saptak Bhattacharyya',
    description: 'Certifications earned by Saptak Bhattacharyya in MERN Stack, UI Design, and Advanced Algorithms.',
  },
  contact: {
    title: 'Contact | Saptak Bhattacharyya',
    description: 'Get in touch with Saptak Bhattacharyya for freelance, internship, or collaboration opportunities.',
  },
  resume: {
    title: 'Resume | Saptak Bhattacharyya',
    description: 'View the detailed resume of Saptak Bhattacharyya — skills, hackathons, projects, and achievements.',
  },
  hackathons: {
    title: 'Hackathons | Saptak Bhattacharyya',
    description: 'Hackathon achievements of Saptak Bhattacharyya including 1st place at ElectroSphere 2K26.',
  },
  achievements: {
    title: 'Achievements | Saptak Bhattacharyya',
    description: 'Academic and technical achievements of Saptak Bhattacharyya at university level.',
  },
};

// Wrapper component that reads route and passes dynamic SEO props
const DynamicSEO = () => {
  const { sectionId } = useParams();
  const config = seoConfig[sectionId] || seoConfig['/'];
  const path = sectionId ? `/${sectionId}` : '/';
  return <SEO title={config.title} description={config.description} path={path} />;
};

function App() {
  const [theme, setTheme] = useState('dark');
  
  // State for the intro animation (will play on every page reload)
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroComplete = () => {
    setIntroFinished(true);
  };

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
      {!introFinished && <MarvelIntro onComplete={handleIntroComplete} />}
      
      <AnimatedBackground />
      <GlitterCursor />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<><DynamicSEO /><BentoGrid /></>} />
          <Route path="/:sectionId" element={<><DynamicSEO /><BentoGrid /></>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
