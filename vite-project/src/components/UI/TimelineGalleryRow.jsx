import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiExternalLink, FiX, FiDownload, FiShare2, FiCheck } from 'react-icons/fi';
import { educationData } from '../../data/education';
import { certificatesData } from '../../data/certificates';

export default function TimelineGalleryRow() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copied, setCopied] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const handleShare = (cert) => {
    navigator.clipboard.writeText(`${window.location.origin}#certificates`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="education-certificates" className="py-24 px-8 lg:px-10 relative overflow-hidden bg-[#090D11] border-b border-[#2A313B]">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          
          {/* Left Column: Education */}
          <motion.div
            id="education"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full"
          >
            <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1">
              04 | EDUCATION
            </span>
            <h2 className="text-3xl font-black font-display text-[#F5F4F3] mb-8">
              My Academic Journey
            </h2>

            <div className="relative border-l border-[#B07C51]/30 pl-6 flex flex-col gap-10">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative group text-left"
                >
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-[32px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#2A313B] bg-[#090D11]">
                    <span className="h-2 w-2 rounded-full bg-[#E5A93B]" />
                  </span>

                  {/* Meta Row */}
                  <div className="text-xs text-[#A8ADB5] font-body flex items-center gap-2 mb-2">
                    <FiCalendar size={12} className="text-[#E5A93B]" />
                    <span>{edu.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#F5F4F3] mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-[#E5A93B] font-semibold font-body mb-4">
                    {edu.institution}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#57C66A]/10 border border-[#57C66A]/20 text-[10px] font-bold text-[#57C66A]">
                      {edu.score}
                    </span>
                  </div>

                  {/* Highlights and Coursework */}
                  <p className="text-xs text-[#A8ADB5] font-body leading-relaxed mb-4">
                    Focusing on core software engineering principles, dynamic application states, and UI/UX layouts.
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded bg-[#11161D]/80 border border-[#2A313B] text-[9px] text-[#F5F4F3] font-body"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certificates */}
          <motion.div
            id="certificates"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1 block">
                  05 | CERTIFICATES
                </span>
                <h2 className="text-3xl font-black font-display text-[#F5F4F3]">
                  My Professional Certificates
                </h2>
              </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificatesData.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  onClick={() => setSelectedCert(cert)}
                  className="p-4 bg-[#11161D]/55 border border-[#2A313B] rounded-xl cursor-pointer hover:border-[#FFC25D]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left"
                >
                  <div className="w-full aspect-[16/10] rounded-lg overflow-hidden border border-[#2A313B] mb-4 relative bg-[#090D11]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[#E5A93B] text-[#090D11] text-[10px] font-bold uppercase tracking-wider">
                        Quick Preview
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold font-display text-[#F5F4F3] mb-1 line-clamp-1">
                    {cert.title}
                  </h3>
                  <div className="text-[10px] text-[#E5A93B] font-semibold font-body mb-3">
                    {cert.issuer} &bull; {cert.date}
                  </div>
                  
                  <div className="text-[10px] font-body text-[#A8ADB5] line-clamp-2 leading-relaxed mb-4 mt-auto">
                    {cert.description}
                  </div>

                  <button className="text-[10px] font-bold text-[#E5A93B] uppercase tracking-wider font-body mt-auto flex items-center gap-1">
                    <span>View Credential</span>
                    <span>➔</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Certificate Modal Lightbox (Mockup design refined) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#11161D] border border-[#2A313B] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-[55%_45%]"
            >
              {/* Image side */}
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[480px] bg-[#090D11] flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-[#2A313B]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain max-h-[380px]"
                />
              </div>

              {/* Text / Actions side */}
              <div className="p-6 md:p-8 flex flex-col text-left justify-between h-full">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="px-2 py-0.5 rounded bg-[#E5A93B]/10 border border-[#E5A93B]/20 text-[9px] font-bold text-[#E5A93B] uppercase tracking-wider">
                        Verified Credential
                      </span>
                      <h3 className="text-xl font-black font-display text-[#F5F4F3] mt-2 leading-tight">
                        {selectedCert.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-1 text-[#A8ADB5] hover:text-[#F5F4F3] transition-colors"
                    >
                      <FiX size={18} />
                    </button>
                  </div>

                  {/* Cert details */}
                  <div className="flex flex-col gap-2 mb-6 text-xs text-[#A8ADB5] font-body">
                    <div>
                      <span className="font-bold text-[#E5A93B]">Issuer:</span> {selectedCert.issuer}
                    </div>
                    <div>
                      <span className="font-bold text-[#E5A93B]">Issue Date:</span> {selectedCert.date}
                    </div>
                    {selectedCert.credentialId && (
                      <div>
                        <span className="font-bold text-[#E5A93B]">Credential ID:</span> {selectedCert.credentialId}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#A8ADB5] font-body leading-relaxed mb-6">
                    {selectedCert.description}
                  </p>

                  {/* Skills tags */}
                  <div>
                    <h4 className="text-[10px] font-bold text-[#F5F4F3] uppercase tracking-wider mb-2 font-display">
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-[#11161D] border border-[#2A313B] text-[9px] text-[#F5F4F3] font-body"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with share, download, verify */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2A313B] pt-6 mt-8">
                  <button
                    onClick={() => handleShare(selectedCert)}
                    className="flex items-center gap-1.5 text-xs text-[#A8ADB5] hover:text-[#FFC25D] transition-colors font-body font-semibold"
                  >
                    {copied ? <FiCheck size={14} className="text-[#57C66A]" /> : <FiShare2 size={14} />}
                    <span>{copied ? 'Copied Link' : 'Share'}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {selectedCert.downloadUrl && (
                      <a
                        href={selectedCert.downloadUrl}
                        download
                        className="p-2.5 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#A8ADB5] hover:text-[#F5F4F3] transition-colors"
                      >
                        <FiDownload size={14} />
                      </a>
                    )}
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-[#E5A93B] text-[#090D11] font-bold font-body text-xs rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Verify Credential
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
