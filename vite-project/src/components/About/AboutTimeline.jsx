import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCompass, FiDatabase, FiTrendingUp, FiBriefcase, FiGitBranch } from 'react-icons/fi';

const iconMap = {
  code: FiCode,
  web: FiCompass,
  database: FiDatabase,
  streak: FiTrendingUp,
  client: FiBriefcase,
  git: FiGitBranch,
};

export default function AboutTimeline({ milestones }) {
  return (
    <div className="relative border-l border-[#B07C51]/30 ml-4 md:ml-8 pl-8 py-4 flex flex-col gap-10">
      {milestones.map((milestone, idx) => {
        const Icon = iconMap[milestone.icon] || FiCode;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline bullet */}
            <span className="absolute -left-[45px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#2A313B] bg-[#11161D] text-[#E5A93B] shadow-sm">
              <Icon size={14} />
            </span>

            {/* Content card */}
            <div className="bg-[#11161D]/40 border border-[#2A313B] p-5 rounded-xl hover:border-[#FFC25D]/30 transition-all duration-300">
              <h4 className="text-base font-bold font-display text-[#F5F4F3]">{milestone.title}</h4>
              <p className="text-xs text-[#A8ADB5] font-body mt-2 leading-relaxed">{milestone.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
