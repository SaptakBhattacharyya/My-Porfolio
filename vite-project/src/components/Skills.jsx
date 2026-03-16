import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    useEffect(() => {
        const container = '.tagcloud-container';
        // Skills list as requested
        const texts = [
            'Node.js', 'React.js', 'TypeScript',
            'JavaScript', 'Python', 'Bootstrap',
            'HTML', 'CSS', 'C', 'C++',
            'Git', 'MongoDB', 'Express',
            'Tailwind'
        ];

        const options = {
            radius: 250, // Size of the sphere
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true,
            itemClass: 'tagcloud--item',
        };

        // Clean up previous instance if any (though React usually handles mount/unmount)
        const existing = document.querySelector('.tagcloud');
        if (existing) {
            existing.remove();
        }

        TagCloud(container, texts, options);

        return () => {
            // Cleanup logic if needed, TagCloud appends directly to DOM
            const cloud = document.querySelector('.tagcloud');
            if (cloud) cloud.remove();
        };
    }, []);

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <motion.div
                    className="skills-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>My Technical <span className="text-gradient">Skills</span></h2>
                    <p>
                        I have cultivated a diverse set of skills ranging from frontend artistry to backend logic.
                        I love exploring new technologies and applying them to solve real-world problems.
                        Here is a "box" of my tools revolving around my passion for coding.
                    </p>
                </motion.div>

                <motion.div
                    className="tagcloud-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* TagCloud SDK injects the sphere here */}
                    <span className="tagcloud-container"></span>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
