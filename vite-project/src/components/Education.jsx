import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2><span className="text-gradient">Education</span></h2>
                    <p>My academic journey, dedicated to building a strong foundation in computer science and modern technologies.</p>
                </motion.div>

                <div className="education-wrapper">
                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-dot"></div>

                        <h3 className="edu-title">B.Tech in Computer Science & Engineering</h3>

                        <div className="edu-meta">
                            <span><Calendar size={16} style={{ marginRight: '5px' }} /> 2025 – 2029</span>
                            <span className="edu-university">
                                <MapPin size={16} style={{ marginRight: '5px' }} />
                                CodingGita X Swaminarayan University, Kalol, Gujarat
                            </span>
                        </div>

                        <div className="edu-score">SGPA: 9.81</div>

                        <p className="edu-desc" style={{ marginTop: '1.5rem' }}>
                            Currently pursuing a Bachelor's degree in Computer Science & Engineering, focusing on full-stack development, algorithms, database systems, and UI/UX engineering. Actively working on multiple projects and building strong fundamentals in software development.
                        </p>

                        <div className="edu-tags">
                            <span>Data Structures</span>
                            <span>Algorithms</span>
                            <span>DBMS</span>
                            <span>Operating Systems</span>
                            <span>Web Tech</span>
                        </div>
                    </motion.div>

                    {/* Can add High School or other degrees here easily later */}
                </div>
            </div>
        </section>
    );
};

export default Education;
