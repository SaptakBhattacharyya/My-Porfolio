import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube, Figma, BookOpen } from 'lucide-react';
import SEO from './SEO';
import './Projects.css';

const projects = [
    {
        title: 'Color Guess Game',
        description: 'An interactive browser game where players guess the RGB color value from visual options. Features streak tracking and difficulty modes.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        image: '/images/game_color_guess.png',
        github: 'https://github.com/SaptakBhattacharyya/guess-the-color.git',
        demo: '/games/color guess/index.html'
    },
    {
        title: 'Tic-Tac-Toe',
        description: 'A classic Tic-Tac-Toe browser game with a clean UI, supporting 2-player gameplay with win detection.',
        tags: ['JavaScript', 'Logic', 'Game'],
        category: 'Games',
        image: '/images/tic_tac_toe.png',
        github: 'https://github.com/SaptakBhattacharyya/tic-tac-toe.git',
        demo: '/games/TIC-TAC-TOE/tic-tac-toe3x3/index.html'
    },
    {
        title: 'Typing Speed Test',
        description: 'Test your WPM and accuracy in real-time. Tracks time, speed, and best score across sessions.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        image: '/images/game_typing.png',
        github: 'https://github.com/SaptakBhattacharyya/typing-speed-test.git',
        demo: '/games/Typing-speed-test/index.html'
    },
    {
        title: 'Click Counter Game',
        description: 'Click as fast as you can! A reflex game with a timer, high score tracking, and a 10-second challenge.',
        tags: ['JavaScript', 'Game'],
        category: 'Games',
        image: '/images/game_countclick.png',
        github: 'https://github.com/SaptakBhattacharyya/clickcounter-.git',
        demo: '/games/countclick/index.html'
    },
    {
        title: 'Whack-a-Mole',
        description: 'A fast-paced reflex game — whack the mole before it disappears! Tracks score, time, and best performance.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        image: '/images/game_wakemole.png',
        github: 'https://github.com/SaptakBhattacharyya/wake-a-mole.git',
        demo: '/games/dug the hole/index.html'
    },
    {
        title: 'Memory Card',
        description: 'A classic card-matching memory puzzle. Find all pairs with the fewest flips to win.',
        tags: ['Vanilla JS', 'Logic', 'CSS Grid'],
        category: 'Games',
        image: '/images/game_memory.png',
        github: 'https://github.com/SaptakBhattacharyya/memory-card-.git',
        demo: '/games/memory  card/index.html'
    },
    {
        title: 'To-Do List Manager',
        description: 'A robust to-do list application for daily task tracking and organization.',
        tags: ['JavaScript', 'DOM', 'LocalStorage'],
        category: 'Frontend Clone',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
        github: 'https://github.com/SaptakBhattacharyya/html-all-assignments/tree/main/My-Porfolio/vite-project/src/games/todo%20list',
        demo: '/games/todo list/index.html'
    },
    {
        title: 'Med-Remind',
        description: 'A full-stack healthcare reminder application helping patients manage their medications and health logs.',
        tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
        category: 'Full Stack',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
        github: 'https://github.com/codinggita/medremind.git',
        demo: 'https://medremind-z2yo.vercel.app/',
        postman: 'https://github.com/codinggita/medremind#api-documentation',
        figma: 'https://github.com/codinggita/medremind#uiux-design'
    },
    {
        title: 'UNTUCKit Clone',
        description: 'A responsive e-commerce replica of the famous clothing brand UNTUCKit with cart & checkout UI.',
        tags: ['HTML/CSS', 'JavaScript', 'E-commerce'],
        category: 'Frontend Clone',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
        github: 'https://github.com/SaptakBhattacharyya/untuckitclone-web6.git',
        demo: 'https://saptak108267untuckitweb6.netlify.app/',
        video: 'https://youtu.be/ZWfsPoOT3Nw?si=onGj5BnQZC2ksorD'
    },
    {
        title: 'Lazarev Agency Clone',
        description: 'A pixel-perfect clone of the award-winning Lazarev Design Agency landing page, featuring advanced CSS animations.',
        tags: ['HTML', 'CSS', 'Animation'],
        category: 'Frontend Clone',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop',
        github: 'https://github.com/SaptakBhattacharyya/frontend-Lazarev-Digital-Product-Design-Agency-Webpage.git',
        demo: 'https://lazarev-frontend-webpage-saptak.netlify.app/',
        video: 'https://youtu.be/mzoZqWNIpIs?si=gynu_dI6C3nWy9mY'
    },
    {
        title: 'Litecoin Web3',
        description: 'A modern crypto landing page with dark-mode aesthetics, real-time data visualization concepts.',
        tags: ['React', 'Web3'],
        category: 'Frontend Clone',
        image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop',
        github: 'https://github.com/SaptakBhattacharyya/litecoin-clone-web-4.git',
        demo: 'https://saptak108267litecoinweb3.netlify.app/',
        video: 'https://youtu.be/mzoZqWNIpIs?si=gynu_dI6C3nWy9mY'
    },
    {
        title: 'Decure Interior Clone',
        description: 'A pixel-perfect clone showcasing elegant interior design layouts and smooth animations.',
        tags: ['HTML', 'UI/UX', 'Animation'],
        category: 'Frontend Clone',
        image: 'https://decure.in/cdn/shop/files/Decure_Logo_1000x500Px.png?height=628&pad_color=ffffff&v=1711642701&width=1200',
        github: 'https://github.com/SaptakBhattacharyya/decure-web5.git',
        demo: 'https://saptak108267decurewebclone5.netlify.app/',
        video: 'https://youtu.be/F7RyF2E7WKU?si=AeO496RqlJCPHV2f'
    }
];

// Duplicate array for seamless infinite scrolling
const duplicatedProjects = [...projects, ...projects];
const categories = ['All', 'Games', 'Full Stack', 'Frontend Clone'];

const ProjectCard = ({ project, index }) => (
    <motion.div 
        className="marquee-card static-card" 
        key={`${project.title}-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        layout
    >
        <div className="card-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="view-btn">
                    View Details <ExternalLink size={16} style={{ marginLeft: '5px' }} />
                </a>
            </div>
        </div>

        <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
                {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                ))}
            </div>

            <div className="card-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> Code
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Live
                </a>
                {project.video && (
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link project-link-yt">
                        <Youtube size={18} /> Video
                    </a>
                )}
                {project.postman && (
                    <a href={project.postman} target="_blank" rel="noopener noreferrer" className="project-link project-link-pm">
                        <BookOpen size={18} /> API
                    </a>
                )}
                {project.figma && (
                    <a href={project.figma} target="_blank" rel="noopener noreferrer" className="project-link project-link-fg">
                        <Figma size={18} /> Figma
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    return (
        <>
        <SEO 
            title="Projects | Saptak Bhattacharyya"
            description="View my latest projects in web development, including full-stack apps and UI clones."
        />
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <h2>Featured <span className="text-gradient">Projects</span></h2>
                    <p>A selection of my recent work in web and mobile development.</p>
                </motion.div>

                <div className="project-filters-wrapper">
                    <div className="project-filters">
                        {categories.map((cat) => (
                            <button 
                                key={cat} 
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {activeCategory === cat && (
                                    <motion.div 
                                        layoutId="activeFilter"
                                        className="active-filter-bg"
                                        transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                                    />
                                )}
                                <span className="filter-label">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeCategory === 'All' ? (
                        <motion.div 
                            className="marquee-wrapper"
                            key="marquee"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="marquee-fade marquee-fade-left" />
                            <div className="marquee-fade marquee-fade-right" />

                            <div className="marquee-track">
                                {duplicatedProjects.map((project, index) => (
                                    <div className="marquee-card" key={`${project.title}-marquee-${index}`}>
                                        <div className="card-image">
                                            <img src={project.image} alt={project.title} />
                                            <div className="project-overlay">
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="view-btn">
                                                    View Details <ExternalLink size={16} style={{ marginLeft: '5px' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>

                                            <div className="project-tags">
                                                {project.tags.map((tag, i) => (
                                                    <span className="project-tag" key={i}>{tag}</span>
                                                ))}
                                            </div>

                                            <div className="card-links">
                                                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                                    <Github size={18} /> Code
                                                </a>
                                                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={18} /> Live
                                                </a>
                                                {project.video && (
                                                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link project-link-yt">
                                                        <Youtube size={18} /> Video
                                                    </a>
                                                )}
                                                {project.postman && (
                                                    <a href={project.postman} target="_blank" rel="noopener noreferrer" className="project-link project-link-pm">
                                                        <BookOpen size={18} /> API
                                                    </a>
                                                )}
                                                {project.figma && (
                                                    <a href={project.figma} target="_blank" rel="noopener noreferrer" className="project-link project-link-fg">
                                                        <Figma size={18} /> Figma
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="projects-grid" 
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AnimatePresence>
                                {filteredProjects.map((project, index) => (
                                    <ProjectCard project={project} index={index} key={`${project.title}-grid`} />
                                ))}
                                {filteredProjects.length === 0 && (
                                    <motion.p 
                                        className="no-projects-msg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        No projects found in this category yet.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
        </>
    );
};

export default Projects;
