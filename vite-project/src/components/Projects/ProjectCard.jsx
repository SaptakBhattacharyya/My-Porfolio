import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion as m } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiVercel, SiNetlify, SiCplusplus, SiFramer } from 'react-icons/si';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const iconMap = {
  react: { icon: FaReact, color: '#61DAFB' },
  mongodb: { icon: SiMongodb, color: '#47A248' },
  'node.js': { icon: FaNodeJs, color: '#339933' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  git: { icon: FaGitAlt, color: '#F05032' },
  express: { icon: SiExpress, color: '#FFFFFF' },
  vercel: { icon: SiVercel, color: '#FFFFFF' },
  netlify: { icon: SiNetlify, color: '#00C7B7' },
  python: { icon: FaPython, color: '#3776AB' },
  cplusplus: { icon: SiCplusplus, color: '#00599C' },
  framer: { icon: SiFramer, color: '#FM00C2' },
};

function getTechIcon(techName) {
  const key = techName.toLowerCase();
  if (iconMap[key]) {
    return iconMap[key];
  }
  // Default fallback icon
  return { icon: null, color: '#E5A93B' };
}

export default function ProjectCard({ project, isFeatured = false }) {
  const { title, category, status, overview, problem, solution, outcome, features, tech, github, liveDemo, image } = project;

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`p-5 md:p-6 bg-[#11161D]/50 backdrop-blur-md border border-[#2A313B] rounded-2xl shadow-xl hover:border-[#FFC25D]/40 transition-all duration-300 ${
        isFeatured ? 'col-span-1 lg:col-span-2 !p-6 !md:!p-8' : ''
      }`}
    >
      <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-[55%_45%] gap-8 lg:gap-12' : 'gap-6'} items-start`}>
        
        {/* Left/Main Column: Case Study Details */}
        <div className="flex flex-col text-left">
          {/* Card Headers */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-2.5 py-1 rounded-full bg-[#E5A93B]/10 border border-[#E5A93B]/20 text-[10px] font-bold text-[#E5A93B] tracking-wider uppercase font-body">
              {category}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase font-body border ${
              status === 'Completed' 
                ? 'bg-[#57C66A]/10 border-[#57C66A]/20 text-[#57C66A]' 
                : 'bg-[#B07C51]/10 border-[#B07C51]/20 text-[#B07C51]'
            }`}>
              {status}
            </span>
            {isFeatured && (
              <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#E5A93B] to-[#B07C51] text-[#090D11] text-[10px] font-black tracking-wider uppercase font-body">
                Featured Case Study
              </span>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-display text-[#F5F4F3] mb-4">
            {title}
          </h3>

          <p className="text-sm text-[#A8ADB5] font-body leading-relaxed mb-6">
            {overview}
          </p>

          {/* Mini Case Study (Problem / Solution / Outcome) - Featured Only */}
          {isFeatured && (
            <div className="flex flex-col gap-4 border-l border-[#2A313B] pl-4 mb-6">
              <div className="text-xs font-body leading-relaxed">
                <span className="font-bold text-[#E5A93B] uppercase tracking-wide block sm:inline mr-1">Problem:</span>
                <span className="text-[#A8ADB5]">{problem}</span>
              </div>
              <div className="text-xs font-body leading-relaxed">
                <span className="font-bold text-[#E5A93B] uppercase tracking-wide block sm:inline mr-1">Solution:</span>
                <span className="text-[#A8ADB5]">{solution}</span>
              </div>
              <div className="text-xs font-body leading-relaxed">
                <span className="font-bold text-[#57C66A] uppercase tracking-wide block sm:inline mr-1">Outcome:</span>
                <span className="text-[#F5F4F3]">{outcome}</span>
              </div>
            </div>
          )}

          {/* Key Features Section - Featured Only */}
          {isFeatured && features && features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#F5F4F3] uppercase tracking-wider font-display mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A8ADB5] font-body">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#E5A93B] flex-shrink-0" size={12} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges Pills with Matching Icons */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-[#F5F4F3] uppercase tracking-wider font-display mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((techName, idx) => {
                const { icon: Icon, color } = getTechIcon(techName);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11161D]/80 border border-[#2A313B] text-[11px] font-semibold text-[#F5F4F3] font-body transition-colors hover:border-[#FFC25D]/30"
                  >
                    {Icon && <Icon size={12} style={{ color: color }} />}
                    <span>{techName}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold font-body text-xs tracking-wider uppercase bg-[#E5A93B] text-[#090D11] hover:opacity-90 transition-all duration-300 shadow-md shadow-[#E5A93B]/5 text-center w-full sm:w-auto"
            >
              View Live <span className="text-[10px]">&#8594;</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold font-body text-xs tracking-wider uppercase border border-[#2A313B] bg-[#11161D]/40 text-[#F5F4F3] hover:bg-[#11161D] hover:border-[#FFC25D]/30 transition-all duration-300 text-center w-full sm:w-auto"
            >
              <FaGithub size={14} />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium CSS Browser Mockup Wrapper */}
        <div className="w-full h-full flex justify-center items-center pointer-events-auto">
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#E5A93B"
            glarePosition="all"
            className="w-full"
          >
            {/* Minimal Dark Browser Mockup Frame */}
            <div className="w-full rounded-xl overflow-hidden border border-[#2A313B] bg-[#11161D] shadow-2xl flex flex-col group/mockup">
              {/* Browser Header Bar */}
              <div className="px-4 py-3 bg-[#11161D] border-b border-[#2A313B] flex items-center gap-3">
                {/* Colored Window Dots */}
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                </div>
                {/* Subtle Address Bar */}
                <div className="w-full max-w-[200px] sm:max-w-[280px] h-5 bg-[#090D11]/60 border border-[#2A313B] rounded flex items-center justify-center text-[9px] text-[#A8ADB5]/60 font-body select-none overflow-hidden truncate">
                  {title.toLowerCase().replace(/\s+/g, '')}.dev
                </div>
              </div>

              {/* Browser Body (Screenshot View) */}
              <div className={`relative overflow-hidden ${isFeatured ? 'aspect-[4/3]' : 'aspect-[16/10]'} bg-[#090D11] flex items-center justify-center`}>
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/mockup:scale-105"
                />
              </div>
            </div>
          </Tilt>
        </div>

      </div>
    </m.div>
  );
}
