import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Youtube } from 'lucide-react';
import { Helmet } from 'react-helmet';
import './Projects.css';

const projects = [
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

// Duplicate array for seamless infinite scrolling
const duplicatedProjects = [...projects, ...projects];

const Projects = () => {
    return (
        <>
        <Helmet>
            <title>Projects | Saptak Bhattacharyya</title>
            <meta name="description" content="View my latest projects in web development, including full-stack apps and UI clones." />
        </Helmet>
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

                {/* Marquee Wrapper */}
                <div className="marquee-wrapper">
                    {/* Left fade gradient */}
                    <div className="marquee-fade marquee-fade-left" />
                    {/* Right fade gradient */}
                    <div className="marquee-fade marquee-fade-right" />

                    <div className="marquee-track">
                        {duplicatedProjects.map((project, index) => (
                            <div className="marquee-card" key={`${project.title}-${index}`}>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Projects;
