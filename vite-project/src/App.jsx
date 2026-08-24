import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AnimatedBackground from './components/Background/AnimatedBackground'
import MouseGlow from './components/Background/MouseGlow'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import TimelineGalleryRow from './components/UI/TimelineGalleryRow'
import HackathonAchievementRow from './components/UI/HackathonAchievementRow'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <MouseGlow />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TimelineGalleryRow />
        <HackathonAchievementRow />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
