import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
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
                        <h1>SAPTAK BHATTACHARYYA</h1>
                        <div className="resume-contact-row">
                            <span><Phone size={14} /> +91 6290232029</span>
                            <span><Mail size={14} /> saptak.bhattacharyya.cg@gmail.com</span>
                        </div>
                    </div>

                    {/* Profile Links Bar */}
                    <div className="resume-links-bar">
                        <a href="https://github.com/SaptakBhattacharyya" target="_blank" rel="noopener noreferrer">
                            <Github size={14} /> GitHub Profile
                        </a>
                        <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={14} /> LinkedIn Profile
                        </a>
                        <a href="https://leetcode.com/u/SaptakBhattacharyyaCodez/" target="_blank" rel="noopener noreferrer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                            {' '}LeetCode Profile
                        </a>
                        <a href="https://x.com/SaptakCodez" target="_blank" rel="noopener noreferrer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            {' '}Twitter Profile
                        </a>
                    </div>

                    <hr className="resume-divider" />

                    {/* Two Column Layout */}
                    <div className="resume-two-col">
                        {/* Left Column */}
                        <div className="resume-col-left">
                            {/* Skills */}
                            <div className="resume-block">
                                <h3>SKILLS</h3>
                                <div className="resume-skills-group">
                                    <p><strong>Frontend Development:</strong></p>
                                    <ul>
                                        <li>HTML5, CSS3, React.js, Next.js</li>
                                        <li>Responsive Web Design, UI/UX Fundamentals</li>
                                    </ul>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Backend Development:</strong></p>
                                    <ul>
                                        <li>Node.js, RESTful APIs, Express.js</li>
                                        <li>Authentication & Authorization</li>
                                    </ul>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Programming Languages:</strong></p>
                                    <ul>
                                        <li>JavaScript, C, C++, Python</li>
                                    </ul>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Database & Data Management:</strong></p>
                                    <ul>
                                        <li>MongoDB, MySQL (Basic)</li>
                                    </ul>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Tools & Deployment:</strong></p>
                                    <ul>
                                        <li>Git, GitHub, Postman, VS Code, Vercel, Netlify, Render</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="resume-block">
                                <h3>EDUCATION</h3>
                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>CodingGita X Swaminarayan University</h4>
                                        <span className="item-date">2025 – 2029</span>
                                    </div>
                                    <div className="item-sub">B.Tech in Computer Science & Engineering</div>
                                    <p><strong>SGPA:</strong> 9.81</p>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="resume-block">
                                <h3>CERTIFICATIONS</h3>
                                <div className="resume-certs">
                                    <p><strong>Core Programming & Development</strong></p>
                                    <ul className="cert-list">
                                        <li>Problem Solving</li>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                        <li>C++</li>
                                        <li>React</li>
                                        <li>SQL</li>
                                        <li>RESTful API</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="resume-col-right">
                            {/* Projects */}
                            <div className="resume-block">
                                <h3>PROJECTS</h3>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>UNTUCKit Clone</h4>
                                        <span className="item-skills">E-Commerce Project</span>
                                    </div>
                                    <ul>
                                        <li>A responsive e-commerce replica of the UNTUCKit clothing brand website.</li>
                                        <li><strong>Technologies:</strong> HTML, CSS, JavaScript</li>
                                        <li>Features product filtering, cart functionality, and a seamless checkout UI.</li>
                                    </ul>
                                </div>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>Litecoin Web3</h4>
                                        <span className="item-skills">Web3 Project</span>
                                    </div>
                                    <ul>
                                        <li>A modern cryptocurrency landing page built with a focus on dark-mode aesthetics.</li>
                                        <li><strong>Technologies:</strong> React, Web3, CSS</li>
                                        <li>Real-time data visualization concepts and Web3 styling.</li>
                                    </ul>
                                </div>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>Decure Interior Clone</h4>
                                        <span className="item-skills">UI/UX Project</span>
                                    </div>
                                    <ul>
                                        <li>A pixel-perfect clone showcasing elegant interior design layouts.</li>
                                        <li><strong>Technologies:</strong> HTML, CSS, JavaScript, Animation</li>
                                        <li>Smooth animations and a premium user interface.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="resume-block">
                                <h3>ACHIEVEMENTS</h3>
                                <ul>
                                    <li>Achieved <strong>9.81 SGPA</strong> in First Year of Bachelor of Technology, reflecting strong academic excellence.</li>
                                    <li><strong>ElectroSphere 2K26 Winner</strong> (1st Place) — TechX Club, Swaminarayan University (Jan 2026).</li>
                                    <li>Google Cloud — <strong>Introduction to Generative AI</strong> certification (Dec 2025).</li>
                                    <li>SoloLearn — <strong>Certification on C Programming</strong> (Oct 2025).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
