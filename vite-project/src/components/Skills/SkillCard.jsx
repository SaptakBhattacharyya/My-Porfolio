import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ categoryTitle, skills }) {
  return (
    <div className="p-6 bg-[#11161D]/60 backdrop-blur-md border border-[#2A313B] rounded-2xl shadow-xl flex flex-col gap-6 hover:border-[#FFC25D]/30 transition-all duration-300">
      <h3 className="text-lg font-bold font-display text-[#E5A93B] border-b border-[#2A313B] pb-3 uppercase tracking-wide">
        {categoryTitle}
      </h3>

      <div className="flex flex-col gap-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ x: 4, y: -2 }}
              className="flex items-start gap-4 p-3 rounded-xl bg-[#11161D]/40 hover:bg-[#11161D]/80 border border-[#2A313B]/60 hover:border-[#FFC25D]/20 transition-all duration-200"
            >
              <div 
                className="p-2.5 rounded-lg flex items-center justify-center bg-[#11161D]"
                style={{ color: skill.color || '#E5A93B' }}
              >
                {Icon && <Icon size={20} />}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#F5F4F3] font-body">{skill.name}</span>
                <span className="text-xs text-[#A8ADB5] font-body mt-0.5 leading-relaxed">{skill.desc}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
