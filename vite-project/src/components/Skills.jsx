import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'HTML5', color: '#E34F26' },
                { name: 'CSS3', color: '#1572B6' },
                { name: 'JavaScript', color: '#F7DF1E' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'React.js', color: '#61DAFB' },
                { name: 'Bootstrap', color: '#7952B3' },
                { name: 'Tailwind', color: '#06B6D4' },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', color: '#339933' },
                { name: 'Express', color: '#000000' },
                { name: 'MongoDB', color: '#47A248' },
                { name: 'Python', color: '#3776AB' },
                { name: 'C', color: '#A8B9CC' },
                { name: 'C++', color: '#00599C' },
            ]
        },
        {
            title: 'Tools',
            skills: [
                { name: 'Git', color: '#F05032' },
                { name: 'GitHub', color: '#181717' },
                { name: 'Figma', color: '#F24E1E' },
                { name: 'VS Code', color: '#007ACC' },
                { name: 'Postman', color: '#FF6C37' },
                { name: 'Vercel', color: '#000000' },
            ]
        }
    ];

    return (
        <>
        <Helmet>
            <title>Skills | Saptak Bhattacharyya</title>
            <meta name="description" content="Explore my technical skills in React, Node.js, MongoDB, and UI/UX design." />
        </Helmet>
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <motion.div
                    className="skills-text"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
                    viewport={{ once: true, margin: '-50px' }}
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
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', bounce: 0.5, duration: 1, delay: 0.2 }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {/* TagCloud SDK injects the sphere here */}
                    <span className="tagcloud-container"></span>
                </motion.div>
            </div>

            {/* Skills Grid Below */}
            <div className="skills-grid-section">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        className="skills-category"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', bounce: 0.3, duration: 0.8, delay: catIdx * 0.15 }}
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        <h3 className="category-title">
                            <span className="category-icon">{catIdx === 0 ? '🎨' : catIdx === 1 ? '⚙️' : '🛠️'}</span>
                            {category.title}
                        </h3>
                        <div className="skills-marquee-wrapper">
                            <div className="skills-marquee">
                                {[...category.skills, ...category.skills].map((skill, idx) => (
                                    <motion.div
                                        key={`${skill.name}-${idx}`}
                                        className="skill-card"
                                        whileHover={{ scale: 1.08, y: -6, rotateZ: 2, transition: { type: 'spring', bounce: 0.6 } }}
                                        style={{ '--skill-color': skill.color }}
                                    >
                                        <div className="skill-card-inner">
                                            <div className="skill-icon" style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}88)` }}>
                                                {skill.name.charAt(0)}
                                            </div>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <div className="skill-glow" style={{ background: skill.color }}></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
        </>
    );
};

export default Skills;
