import React from 'react';
import { motion } from 'framer-motion';

export default function TechBadge({ icon: Icon, label, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11161D]/80 backdrop-blur-md border border-[#2A313B] shadow-lg shadow-black/30 pointer-events-auto ${className}`}
    >
      {Icon && <Icon className="text-[#E5A93B]" size={14} />}
      <span className="text-xs font-semibold text-[#F5F4F3] font-body tracking-wider">{label}</span>
    </motion.div>
  );
}
