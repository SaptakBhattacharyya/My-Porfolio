import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Calendar, Users } from 'lucide-react';
import SEO from './SEO';
import './Hackathons.css';

const hackathonsList = [
    {
        title: "ElectroSphere 2K26",
        placement: "1st Place",
        date: "Jan 2026",
        organizer: "TechX Club, Swaminarayan University — Software Edition",
        description: "Built a full-stack solution under immense time constraints, successfully demonstrating technical depth and securing 1st place among all participating teams.",
        proofLink: "/certificates/electrosphere_proof.jpg"
    },
    {
        title: "Doppelganger",
        placement: "Participant",
        date: "2026",
        organizer: "OpenPools.in",
        description: "Participated in a highly collaborative 30-hour build sprint where teams transformed their Professional DNA into real-world software solutions.",
        proofLink: "/certificates/doppelganger_proof.png" // Using the same proof link we established in Resume
    }
];

const Hackathons = () => {
    return (
        <>
            <SEO 
                title="Hackathons | Saptak Bhattacharyya"
                description="Competitive programming and hackathon wins, including 1st place at ElectroSphere 2K26."
            />
            <section className="hackathons-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                    >
                        <h2>Competitive <span className="text-gradient">Hackathons</span></h2>
                        <p>Showcasing my ability to build robust solutions under high-pressure time constraints.</p>
                    </motion.div>

                    <div className="hackathons-grid">
                        {hackathonsList.map((hack, index) => (
                            <motion.div
                                key={index}
                                className="hackathon-card winner-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {hack.placement === '1st Place' && (
                                    <div className="winner-badge">
                                        <Trophy size={16} /> Winner
                                    </div>
                                )}
                                
                                <div className="card-header">
                                    <h3>{hack.title}</h3>
                                    <span className="placement-text">{hack.placement}</span>
                                </div>
                                
                                <div className="card-meta">
                                    <span className="meta-item"><Calendar size={14} /> {hack.date}</span>
                                    <span className="meta-item"><Users size={14} /> {hack.organizer}</span>
                                </div>
                                
                                <p className="card-desc">{hack.description}</p>
                                
                                <div className="card-footer">
                                    {hack.proofLink && (
                                        <a href={hack.proofLink} target="_blank" rel="noopener noreferrer" className="proof-btn">
                                            View <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hackathons;
