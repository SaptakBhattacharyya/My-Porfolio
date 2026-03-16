import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import './Certificates.css';
import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';
import cert3 from '../assets/Screenshot 2026-03-16 112648.png'
const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const certificates = [
        {
            title: "ElectroSphere 2K26 Winner",
            description: "Secured 1st Place in the Software Edition hackathon organized by TechX Club.",
            issuer: "Swaminarayan University",
            date: "Jan 2026",
            image: cert1,
            badge: "1st Place 🏆"
        },
        {
            title: "Introduction to Generative AI",
            description: "Completed the comprehensive online course on Generative AI concepts and applications.",
            issuer: "Google Cloud / Simplilearn",
            date: "Dec 2025",
            image: cert2,
            badge: "Certified"
        },
        {
            title: "Certificaton on C Programming",
            description: "Completed the comprehensive online course on C Programming Language.",
            issuer: "SoloLearn",
            date: "Oct 2025",
            image:  cert3,
            badge: "Certified"
        }
    ];

    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>My <span className="text-gradient">Certificates</span></h2>
                    <p>Recognitions and achievements from various tech competitions and courses.</p>
                </motion.div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            className="certificate-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(cert.image)}
                            style={{ cursor: 'pointer' }}
                        >
                            {cert.badge && <span className="cert-badge">{cert.badge}</span>}

                            <div className="cert-image-wrapper">
                                <img src={cert.image} alt={cert.title} />
                                <div className="cert-overlay">
                                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                                        <ExternalLink size={16} style={{ marginRight: '5px' }} /> View Original
                                    </button>
                                </div>
                            </div>

                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <p>{cert.description}</p>

                                <div className="cert-meta">
                                    <span className="cert-issuer">
                                        <Award size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                                        {cert.issuer}
                                    </span>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="cert-modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        >
                            <img src={selectedImage} alt="Certificate Preview" />
                            <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
