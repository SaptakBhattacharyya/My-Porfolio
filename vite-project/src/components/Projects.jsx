import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'UNTUCKit Clone',
            description: 'A responsive e-commerce replica of the famous clothing brand UNTUCKit. Features product filtering, cart functionality, and a seamless checkout UI.',
            tags: ['HTML/CSS', 'JavaScript', 'E-commerce'],
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            github: '#',
            demo: 'https://saptak108267untuckitweb6.netlify.app/'
        },
        {
            title: 'Litecoin Web3',
            description: 'A modern cryptocurrency landing page for Litecoin. Built with a focus on dark-mode aesthetics, real-time data visualization concepts, and Web3 styling.',
            tags: ['React', 'Web3'],
            image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop',
            github: '#',
            demo: 'https://saptak108267litecoinweb3.netlify.app/'
        },
        {
            title: 'Decure Interior Clone',
            description: 'A pixel-perfect clone of the Decure website, showcasing elegant interior design layouts, smooth animations, and a premium user interface.',
            tags: ['HTML', 'UI/UX', 'Animation'],
            image: 'https://decure.in/cdn/shop/files/Decure_Logo_1000x500Px.png?height=628&pad_color=ffffff&v=1711642701&width=1200',
            github: '#',
            demo: 'https://saptak108267decurewebclone5.netlify.app/'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Featured <span className="text-gradient">Projects</span></h2>
                    <p>A selection of my recent work in web and mobile development.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="view-btn">
                                        Click to View Details <ExternalLink size={16} style={{ marginLeft: '5px' }} />
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
                                    <a href={project.github} className="project-link">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.demo} className="project-link">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
