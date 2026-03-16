import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <motion.div
                    className="section-header no-print"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>My <span className="text-gradient">Resume</span></h2>
                    <p>A printable summary of my professional experience and skills.</p>
                    <button className="btn btn-primary print-btn" onClick={handlePrint} style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Download size={18} /> Print / Download PDF
                    </button>
                </motion.div>

                <motion.div
                    className="resume-document"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <div className="resume-header">
                        <h1>Saptak Bhattacharyya</h1>
                        <h2>Full-Stack Developer & UI/UX Designer</h2>
                        <div className="contact-info">
                            <span><Mail size={14} /> saptak@example.com</span>
                            <span><Phone size={14} /> +91 (Add Phone)</span>
                            <span><MapPin size={14} /> Gujarat, India</span>
                        </div>
                        <div className="social-links">
                            <span><Github size={14} /> github.com/saptak</span>
                            <span><Linkedin size={14} /> linkedin.com/in/saptak</span>
                            <span><Globe size={14} /> saptak-portfolio.web.app</span>
                        </div>
                    </div>

                    <hr className="resume-divider" />

                    {/* Summary */}
                    <div className="resume-block">
                        <h3>Summary</h3>
                        <p>
                            Dedicated Computer Science and Engineering professional with a passion for innovation and problem-solving.
                            A passionate Full-Stack Developer and UI/UX Designer who loves creating user-focused digital products.
                            Strong focus on blending creativity, logic, and design to build intuitive, scalable, and beautiful interfaces.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="resume-block">
                        <h3>Education</h3>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>B.Tech in Computer Science & Engineering</h4>
                                <span className="item-date">2025 – 2029</span>
                            </div>
                            <div className="item-sub">CodingGita X Swaminarayan University, Kalol, Gujarat</div>
                            <p><strong>SGPA:</strong> 9.81</p>
                            <p>Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Web Technologies.</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="resume-block">
                        <h3>Technical Skills</h3>
                        <div className="skills-list">
                            <p><strong>Languages:</strong> JavaScript, TypeScript, Python, C, C++, HTML, CSS</p>
                            <p><strong>Frameworks & Libraries:</strong> React.js, Node.js, Express, Tailwind CSS, Bootstrap</p>
                            <p><strong>Tools & Databases:</strong> Git, MongoDB</p>
                            <p><strong>Core Competencies:</strong> Full-Stack Development, UI/UX Design, Responsive Web Design</p>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="resume-block">
                        <h3>Selected Projects</h3>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>UNTUCKit Clone</h4>
                                <span className="item-skills">HTML/CSS, JavaScript, E-commerce</span>
                            </div>
                            <p>A responsive e-commerce replica of the UNTUCKit clothing brand. Features product filtering, cart functionality, and a seamless checkout UI.</p>
                        </div>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Litecoin Web3</h4>
                                <span className="item-skills">React, Web3</span>
                            </div>
                            <p>A modern cryptocurrency landing page built with a focus on dark-mode aesthetics, real-time data visualization concepts, and Web3 styling.</p>
                        </div>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Decure Interior Clone</h4>
                                <span className="item-skills">HTML, UI/UX, Animation</span>
                            </div>
                            <p>A pixel-perfect clone of the Decure website, showcasing elegant interior design layouts, smooth animations, and a premium user interface.</p>
                        </div>
                    </div>

                    {/* Certifications & Achievements */}
                    <div className="resume-block">
                        <h3>Certifications & Achievements</h3>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>ElectroSphere 2K26 Winner (1st Place)</h4>
                                <span className="item-date">Jan 2026</span>
                            </div>
                            <div className="item-sub">TechX Club, Swaminarayan University</div>
                        </div>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Introduction to Generative AI</h4>
                                <span className="item-date">Dec 2025</span>
                            </div>
                            <div className="item-sub">Google Cloud / Simplilearn</div>
                        </div>
                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Certification on C Programming</h4>
                                <span className="item-date">Oct 2025</span>
                            </div>
                            <div className="item-sub">SoloLearn</div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
