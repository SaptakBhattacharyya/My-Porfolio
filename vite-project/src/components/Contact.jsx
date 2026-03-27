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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <h2>Get In <span className="text-gradient">Touch</span></h2>
                    <p>Have a project in mind or just want to say hi? Send me a message!</p>
                </motion.div>

                <div className="contact-content-wrapper">
                    {/* Contact Info Side */}
                    <motion.div
                        className="contact-info-side"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: '-50px' }}
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
                            <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/SaptakBhattacharyya" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a href="https://youtube.com/@saptak-codez?si=RFoMsH_dslP8a22i" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <Youtube size={20} />
                            </a>
                            <a href="https://x.com/SaptakCodez" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://leetcode.com/u/SaptakBhattacharyyaCodez/" className="social-btn" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, margin: '-50px' }}
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
