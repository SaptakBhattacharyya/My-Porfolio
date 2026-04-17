import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Code2, Presentation, Trophy } from 'lucide-react';
import SEO from './SEO';
import './Achievements.css';

const achievementsList = [
    {
        icon: <Trophy size={24} />,
        title: "Hackathon Winner",
        subtitle: "ElectroSphere 2K26",
        description: "Secured first place in the Software Edition of ElectroSphere 2K26, building a high-impact solution under competitive time constraints."
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Academic Excellence",
        subtitle: "B.Tech Computer Science",
        description: "Secured an exceptional 8.81 SGPA in the first year of B.Tech CSE at Swaminarayan University, demonstrating strong foundational knowledge in core computer science subjects."
    }
];

const Achievements = () => {
    return (
        <>
            <SEO 
                title="Achievements | Saptak Bhattacharyya"
                description="Academic achievements, club leadership, and extracurricular highlights of Saptak Bhattacharyya."
            />
            <section className="achievements-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                    >
                        <h2>Key <span className="text-gradient">Achievements</span></h2>
                        <p>Highlighting academic performance and technical milestones.</p>
                    </motion.div>

                    <div className="achievements-grid">
                        {achievementsList.map((item, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <div className="achievement-icon-wrap">
                                    {item.icon}
                                </div>
                                <div className="achievement-content">
                                    <h3>{item.title}</h3>
                                    <span className="achievement-subtitle">{item.subtitle}</span>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Achievements;
