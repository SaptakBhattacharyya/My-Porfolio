import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-content">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Dedicated Computer Science and Engineering professional with a passion for innovation and problem-solving.
                </motion.div>

                <motion.div
                    className="about-bio"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p style={{ marginBottom: '1.5rem' }}>
                        I'm <span className="highlight-white">Saptak Bhattacharyya</span>, a passionate <span className="gradient-multi">Full-Stack Developer</span> and <span className="gradient-multi">UI/UX Designer</span> who loves creating user-focused digital products. My journey began with a curiosity about how technology shapes human experience — evolving into a deep love for blending creativity, logic, and design to build intuitive and beautiful interfaces.
                    </p>

                    <p>
                        I enjoy transforming ideas into meaningful experiences — whether it's designing smooth interactions, building scalable web applications, or optimizing performance for real-world users. I believe great design is not just how something looks, but how seamlessly it works.
                    </p>

                    <div className="code-wrapper">
                        <Typewriter
                            options={{
                                strings: [
                                    '<span style="color: #c792ea">const</span> <span style="color: #ffcb6b">developer</span> = <span style="color: #c3e88d">"Creative"</span>;',
                                    '<span style="color: #c792ea">while</span>(<span style="color: #f07178">alive</span>) { <span style="color: #82aaff">code</span>(); }',
                                    '<span style="color: #c792ea">return</span> <span style="color: #c3e88d">"Innovation"</span>;'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
