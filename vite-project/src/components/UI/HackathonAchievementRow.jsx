import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { hackathonsData } from '../../data/hackathons';
import { achievementsData } from '../../data/achievements';

export default function HackathonAchievementRow() {
  const [showAll, setShowAll] = useState(false);

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

  // Toggle between showing first 2 and all hackathons
  const visibleHackathons = showAll ? hackathonsData : hackathonsData.slice(0, 2);

  return (
    <section id="hackathons-achievements" className="py-24 px-8 lg:px-10 relative overflow-hidden bg-[#090D11] border-b border-[#2A313B]">
      <div className="max-w-7xl mx-auto">
        
        {/* Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          
          {/* Left Column: Hackathons */}
          <motion.div
            id="hackathons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1 block">
                  06 | HACKATHONS
                </span>
                <h2 className="text-3xl font-black font-display text-[#F5F4F3]">
                  Hackathons & Events
                </h2>
              </div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs font-bold text-[#E5A93B] hover:text-[#F5F4F3] transition-colors uppercase tracking-wider font-body border-b border-[#E5A93B]/30 pb-1 flex items-center gap-1.5"
              >
                <span>{showAll ? 'Collapse' : 'View all hackathons'}</span>
                <span>➔</span>
              </button>
            </div>

            {/* Hackathons Cards List */}
            <div className="flex flex-col gap-4">
              {visibleHackathons.map((hack, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-5 bg-[#11161D]/55 border border-[#2A313B] rounded-xl flex flex-col gap-3 text-left hover:border-[#FFC25D]/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-bold font-display text-[#F5F4F3] group-hover:text-[#FFC25D] transition-colors">
                      {hack.event}
                    </h3>
                    <span className="text-[10px] font-bold text-[#E5A93B] uppercase tracking-wider px-2 py-0.5 rounded border border-[#E5A93B]/35 bg-[#E5A93B]/5">
                      {hack.result}
                    </span>
                  </div>

                  <div className="text-[10px] text-[#A8ADB5] font-body flex items-center gap-4">
                    <span className="flex items-center gap-1"><FiCalendar size={11} /> {hack.date}</span>
                    <span className="flex items-center gap-1"><FiMapPin size={11} /> {hack.organizer}</span>
                  </div>

                  <p className="text-xs text-[#A8ADB5] font-body leading-relaxed">
                    {hack.problem}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                    <div className="flex flex-wrap gap-1">
                      {hack.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded bg-[#11161D]/80 border border-[#2A313B] text-[8px] text-[#F5F4F3] font-body"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {hack.proofUrl && (
                      <a
                        href={hack.proofUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-bold text-[#E5A93B] uppercase tracking-wider font-body flex items-center gap-0.5 hover:text-[#F5F4F3] transition-colors"
                      >
                        <span>View Proof</span>
                        <FiExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Achievements (with Trophy graphic) */}
          <motion.div
            id="achievements"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full h-full justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1 block">
                07 | ACHIEVEMENTS
              </span>
              <h2 className="text-3xl font-black font-display text-[#F5F4F3] mb-8">
                Achievements
              </h2>
            </div>

            {/* Achievements Content row with Checklist left and Trophy right */}
            <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] gap-6 items-center w-full">
              {/* Bullet checklist list */}
              <div className="flex flex-col gap-4 text-left">
                {achievementsData.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3.5 group"
                  >
                    <div className="text-[#E5A93B] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FiCheckCircle size={16} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs font-bold text-[#F5F4F3] font-body group-hover:text-[#FFC25D] transition-colors">
                        {ach.title}
                      </h4>
                      <p className="text-[11px] text-[#A8ADB5] font-body leading-relaxed mt-1">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trophy vector illustration */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center p-4 relative"
              >
                {/* background radial glow behind trophy */}
                <div className="absolute w-36 h-36 bg-[#E5A93B]/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* SVG Trophy illustration (matching design theme) */}
                <svg viewBox="0 0 200 200" className="w-full max-w-[130px] h-auto pointer-events-none drop-shadow-[0_10px_20px_rgba(229, 169, 59,0.15)] animate-[bounce_6s_infinite_ease-in-out]" fill="none" stroke="#E5A93B" strokeWidth="1.5">
                  {/* Cup Base */}
                  <path d="M70 170 L130 170" />
                  <path d="M100 130 L100 170" strokeWidth="2.5" />
                  {/* Pedestal */}
                  <rect x="65" y="170" width="70" height="15" rx="2" fill="#11161D" />
                  {/* Cup Bowl */}
                  <path d="M60 40 L140 40 L135 100 Q130 130 100 130 Q70 130 65 100 Z" fill="#11161D" />
                  {/* Handles */}
                  <path d="M60 55 Q40 65 48 85 Q52 95 63 92" />
                  <path d="M140 55 Q160 65 152 85 Q148 95 137 92" />
                  {/* Star emblem inside cup */}
                  <polygon points="100,65 104,77 116,77 107,84 110,96 100,89 90,96 93,84 84,77 96,77" fill="#E5A93B" />
                </svg>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
