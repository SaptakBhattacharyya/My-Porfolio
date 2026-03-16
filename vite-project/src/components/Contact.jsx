import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Linkedin, Github, Youtube } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Get In <span className="text-gradient">Touch</span></h2>
                    <p>Have a project in mind or just want to say hi? Send me a message!</p>
                </motion.div>

                <div className="contact-content-wrapper">
                    {/* Contact Info Side */}
                    <motion.div
                        className="contact-info-side"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Let's Chat</h3>
                        <p className="contact-desc">
                            I'm currently available for freelance work and internships.
                            Let's build something scalable and user-centered together.
                        </p>

                        <a href="tel:+916290232029" className="info-item" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <div className="info-icon"><Phone size={20} /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 6290232029</p>
                            </div>
                        </a>

                        <a href="mailto:saptak.bhattacharyya.cg@gmail.com" className="info-item" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <div className="info-icon"><Mail size={20} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>saptak.bhattacharyya.cg@gmail.com</p>
                            </div>
                        </a>

                        <div className="info-item">
                            <div className="info-icon"><MapPin size={20} /></div>
                            <div>
                                <h4>Location</h4>
                                <p>Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/SaptakBhattacharyya" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a href="https://youtube.com/@saptak-codez?si=RFoMsH_dslP8a22i" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </motion.form>
                </div>

                <footer>
                    <p>© {new Date().getFullYear()} Saptak Bhattacharyya. All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
