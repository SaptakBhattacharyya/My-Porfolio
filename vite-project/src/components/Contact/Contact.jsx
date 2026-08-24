import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCheckCircle } from 'react-icons/fi';
import { contactData } from '../../data/contact';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message cannot exceed 500 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-8 lg:px-10 relative overflow-hidden bg-[#090D11] border-b border-[#2A313B]">
      <div className="max-w-7xl mx-auto">
        
        {/* Row Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          
          {/* Left Column: Quick details list */}
          <div className="flex flex-col items-start w-full">
            <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1">
              08 | CONTACT
            </span>
            <h2 className="text-3xl font-black font-display text-[#F5F4F3] mb-6">
              Let's Connect
            </h2>
            <p className="text-sm text-[#A8ADB5] font-body leading-relaxed mb-10 max-w-md">
              I'm always open to discussing new opportunities, collaborations or just having a chat.
            </p>

            {/* Quick Contact Links Details Row */}
            <div className="flex flex-col gap-5 w-full">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-3 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#E5A93B] group-hover:border-[#FFC25D]/50 transition-colors">
                  <FiMail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A8ADB5] font-body font-semibold uppercase">Email</span>
                  <span className="text-xs font-bold text-[#F5F4F3] font-body mt-0.5">{contactData.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-3 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#E5A93B] group-hover:border-[#FFC25D]/50 transition-colors">
                  <FiPhone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A8ADB5] font-body font-semibold uppercase">Phone</span>
                  <span className="text-xs font-bold text-[#F5F4F3] font-body mt-0.5">{contactData.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 w-fit">
                <div className="p-3 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#E5A93B]">
                  <FiMapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A8ADB5] font-body font-semibold uppercase">Location</span>
                  <span className="text-xs font-bold text-[#F5F4F3] font-body mt-0.5">{contactData.location}</span>
                </div>
              </div>

              <a
                href={contactData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-3 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#E5A93B] group-hover:border-[#FFC25D]/50 transition-colors">
                  <FiLinkedin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A8ADB5] font-body font-semibold uppercase">LinkedIn</span>
                  <span className="text-xs font-bold text-[#F5F4F3] font-body mt-0.5">linkedin.com/in/saptak</span>
                </div>
              </a>

              <a
                href={contactData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-3 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#E5A93B] group-hover:border-[#FFC25D]/50 transition-colors">
                  <FiGithub size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A8ADB5] font-body font-semibold uppercase">GitHub</span>
                  <span className="text-xs font-bold text-[#F5F4F3] font-body mt-0.5">github.com/saptak</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form and Paper Airplane Graphic */}
          <div className="w-full relative bg-[#11161D]/40 border border-[#2A313B] rounded-2xl p-6 sm:p-8 overflow-hidden">
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              {/* Name */}
              <div className="relative text-left">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg bg-[#11161D]/80 border text-xs text-[#F5F4F3] font-body placeholder-[#A8ADB5]/40 focus:outline-none transition-all duration-300 ${
                    errors.name ? 'border-[#EF4444]' : 'border-[#2A313B] focus:border-[#E5A93B]/60'
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-[#EF4444] font-body mt-1 block">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="relative text-left">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg bg-[#11161D]/80 border text-xs text-[#F5F4F3] font-body placeholder-[#A8ADB5]/40 focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-[#EF4444]' : 'border-[#2A313B] focus:border-[#E5A93B]/60'
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-[#EF4444] font-body mt-1 block">{errors.email}</span>
                )}
              </div>

              {/* Message */}
              <div className="relative text-left">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-[#11161D]/80 border text-xs text-[#F5F4F3] font-body placeholder-[#A8ADB5]/40 focus:outline-none transition-all duration-300 resize-none ${
                    errors.message ? 'border-[#EF4444]' : 'border-[#2A313B] focus:border-[#E5A93B]/60'
                  }`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <span className="text-[10px] text-[#EF4444] font-body">{errors.message}</span>
                  ) : (
                    <span />
                  )}
                  <span className="text-[9px] text-[#A8ADB5] font-body">
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#E5A93B] text-[#090D11] font-bold font-body text-xs tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93B]/5 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-[#090D11] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <span></span>
                  </>
                )}
              </button>

            </form>

            {/* Success notification overlay */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#11161D]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 10 }}
                    className="flex flex-col items-center"
                  >
                    <FiCheckCircle className="text-[#57C66A] mb-4" size={40} />
                    <h3 className="text-lg font-bold font-display text-[#F5F4F3] mb-2">Message Sent!</h3>
                    <p className="text-xs text-[#A8ADB5] font-body max-w-[240px]">
                      Thanks for reaching out! I will get back to you shortly.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Flying Paper Airplane illustration in bottom right (Mockup inspired) */}
            <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#E5A93B" strokeWidth="1.5">
                <path d="M20 50 L80 20 L50 80 L40 60 Z" />
                <path d="M40 60 L80 20" />
                <path d="M40 60 L45 75 L50 68" />
              </svg>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
