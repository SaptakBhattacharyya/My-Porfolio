import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Resume.css';

const Resume = () => {
    const resumeRef = useRef(null);

    const handleDownload = () => {
        const element = resumeRef.current;
        
        // Temporarily scale down for capture to ensure single page fit
        const originalTransform = element.style.transform;
        const originalTransformOrigin = element.style.transformOrigin;
        element.style.transform = 'scale(0.9)';
        element.style.transformOrigin = 'top center';

        const opt = {
            margin:       [0, 0, 0, 0],
            filename:     'Saptak_Bhattacharyya_Resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, logging: false, windowWidth: 900, x: 0, y: 0 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        import('html2pdf.js').then(({ default: html2pdf }) => {
            html2pdf().set(opt).from(element).save().then(() => {
                // Restore original styling
                element.style.transform = originalTransform;
                element.style.transformOrigin = originalTransformOrigin;
            });
        });
    };

    return (
        <>
        <Helmet>
            <title>Resume | Saptak Bhattacharyya</title>
            <meta name="description" content="Download my professional resume and view my experience, skills, and achievements." />
        </Helmet>
        <section id="resume" className="resume-section">
            <div className="container">
                <motion.div
                    className="section-header no-print"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <h2>My <span className="text-gradient">Resume</span></h2>
                    <p>A printable summary of my professional experience and skills.</p>
                    <button className="btn btn-primary print-btn" onClick={handleDownload} style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Download size={18} /> Download PDF
                    </button>
                </motion.div>

                <motion.div
                    ref={resumeRef}
                    className="resume-document"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: '-50px' }}
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
                            <Github size={14} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={14} /> LinkedIn
                        </a>
                        <a href="https://saptak-bhattacharyya-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Globe size={14} /> Portfolio
                        </a>
                        <a href="https://leetcode.com/u/SaptakBhattacharyyaCodez/" target="_blank" rel="noopener noreferrer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                            {' '}LeetCode
                        </a>
                        <a href="https://x.com/SaptakCodez" target="_blank" rel="noopener noreferrer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            {' '}Twitter
                        </a>
                        <a href="https://www.youtube.com/@Saptak-codez" target="_blank" rel="noopener noreferrer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            {' '}YouTube
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
                                    <p><strong>Frontend:</strong> HTML5, CSS3, React.js, Next.js, Responsive Design</p>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Auth</p>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Languages:</strong> JavaScript, C, C++, Python</p>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Database:</strong> MongoDB, MySQL (Basic)</p>
                                </div>
                                <div className="resume-skills-group">
                                    <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code, Vercel, Netlify</p>
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
                                    <div className="item-sub">B.Tech in Computer Science &amp; Engineering</div>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="resume-block">
                                <h3>LANGUAGES</h3>
                                <p className="print-only" style={{ fontSize: '5.5pt', marginTop: '0.2rem' }}>
                                    English — Fluent | Bengali — Native | Hindi — Proficient
                                </p>
                                <ul className="no-print">
                                    <li>English — Fluent</li>
                                    <li>Bengali — Native</li>
                                    <li>Hindi — Proficient</li>
                                </ul>
                            </div>

                            {/* Hackathon */}
                            <div className="resume-block">
                                <h3>HACKATHON</h3>
                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>
                                            <a href="/certificates/electrosphere_proof.jpg" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline', cursor: 'pointer' }}>
                                                ElectroSphere 2K26
                                            </a>
                                            {' — '}<span className="resume-win-badge">1st Place </span>
                                        </h4>
                                        <span className="item-date">Jan 2026</span>
                                    </div>
                                    <div className="item-sub">TechX Club, Swaminarayan University — Software Edition</div>
                                    <ul>
                                        <li>Built a full-stack solution under time constraints, securing 1st place among all participants.</li>
                                    </ul>
                                </div>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>
                                            <a href="/certificates/doppelganger_proof.png" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline', cursor: 'pointer' }}>
                                                Doppelganger — OpenPools.in
                                            </a>
                                        </h4>
                                        <span className="item-date">2026</span>
                                    </div>
                                    <div className="item-sub">OpenPools.in — 30-Hour Collaborative Build Sprint</div>
                                    <ul>
                                        <li>Participated in Doppelganger, a collaborative 30-hour build sprint where teams transformed their Professional DNA into real-world solutions.</li>
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
                                        <h4>Med-Remind</h4>
                                        <span className="item-skills">React · Node.js · MongoDB · JWT</span>
                                    </div>
                                    <ul>
                                        <li>Full-stack healthcare app for medication management with user auth and health dashboard.</li>
                                    </ul>
                                    <div className="resume-project-links">
                                        Links: <a href="https://github.com/codinggita/medremind.git" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://medremind-z2yo.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                                    </div>
                                </div>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>UNTUCKit Clone</h4>
                                        <span className="item-skills">HTML · CSS · JavaScript</span>
                                    </div>
                                    <ul>
                                        <li>Responsive e-commerce clone with product filtering, cart, and seamless checkout UI.</li>
                                    </ul>
                                    <div className="resume-project-links">
                                        Links: <a href="https://github.com/SaptakBhattacharyya/untuckitclone-web6.git" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://saptak108267untuckitweb6.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
                                    </div>
                                </div>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>Lazarev Agency Webpage Clone</h4>
                                        <span className="item-skills">HTML · CSS</span>
                                    </div>
                                    <ul>
                                        <li>This project is a frontend clone of the Lazarev design agency homepage.</li>
                                    </ul>
                                    <div className="resume-project-links">
                                        Links: <a href="https://github.com/SaptakBhattacharyya/frontend-Lazarev-Digital-Product-Design-Agency-Webpage.git" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://lazarev-frontend-webpage-saptak.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
                                    </div>
                                </div>

                                <div className="resume-item">
                                    <div className="item-header">
                                        <h4>Decure Interior Clone</h4>
                                        <span className="item-skills">HTML · CSS · Animation</span>
                                    </div>
                                    <ul>
                                        <li>Pixel-perfect interior design clone with smooth animations and premium UI.</li>
                                    </ul>
                                    <div className="resume-project-links">
                                        Links: <a href="https://github.com/SaptakBhattacharyya/decure-web5.git" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://saptak108267decurewebclone5.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="resume-block">
                                <h3>CERTIFICATIONS</h3>
                                <ul className="cert-list">
                                    <li>
                                        <a href="/certificates/Intro_to_C.html" target="_blank" rel="noopener noreferrer">
                                            Introduction to C
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/certificates/Generative_AI.html" target="_blank" rel="noopener noreferrer">
                                            Introduction to Generative AI
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/certificates/Data_Science_Analytics.html" target="_blank" rel="noopener noreferrer">
                                            Data Science & Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/certificates/ElectroSphere.html" target="_blank" rel="noopener noreferrer">
                                            ElectroSphere 2K26 (1st Place)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Achievements */}
                            <div className="resume-block">
                                <h3>ACHIEVEMENTS</h3>
                                <ul>
                                    <li>Completed First Year of B.Tech with an exceptional 8.81 SGPA.</li>
                                    <li>Actively participated in competitive hackathons and technical events.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
        </>
    );
};

export default Resume;
