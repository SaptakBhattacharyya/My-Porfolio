import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCoffee, FiMoon, FiCompass, FiAward, FiClock } from 'react-icons/fi';
import { aboutData } from '../../data/about';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Timeline mapped months/years based on milestones
  const timelineYears = [
    { year: "July 2025", text: "Started coding journey & enrolled in Swaminarayan University B.Tech" },
    { year: "Sept 2025", text: "Explored Web Development fundamentals (HTML/CSS/JS)" },
    { year: "Nov 2025", text: "Built first full-stack projects & e-commerce clones" },
    { year: "Jan 2026", text: "Secured 1st Place in ElectroSphere 2K26 Hackathon" },
    { year: "Current", text: "Completed MERN stack; currently mastering React Native, DBMS, DSA, & Next.js" }
  ];

  const stats = [
    { icon: FiBookOpen, value: "15+", label: "Projects Completed" },
    { icon: FiAward, value: "150+", label: "DSA Problems" },
    { icon: FiCoffee, value: "∞", label: "Cups of Coffee" },
    { icon: FiMoon, value: "Night Owl", label: "Best work at night" },
    { icon: FiCompass, value: "Explorer", label: "I love learning new tech stacks" }
  ];

  return (
    <section id="about" className="py-24 px-8 lg:px-10 relative overflow-hidden bg-[#090D11] border-b border-[#2A313B]">
      <div className="max-w-7xl mx-auto">
        
        {/* 3-Column Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[38%_27%_35%] gap-10 items-start text-left"
        >
          {/* Column 1: Story (Left) */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1">
              01 | ABOUT ME
            </span>
            <h2 className="text-3xl font-black font-display text-[#F5F4F3] mb-6">
              More about me
            </h2>
            
            <p className="text-sm text-[#A8ADB5] font-body leading-relaxed mb-6">
              I love turning ideas into products. I enjoy solving problems, learning new technologies and building things that make a difference.
            </p>
            <p className="text-sm text-[#A8ADB5] font-body leading-relaxed mb-8">
              My journey began with a curiosity about how technology shapes human experience, which evolved into a passion for writing clean, efficient MERN stack code.
            </p>

            <a
              href="#contact"
              className="text-xs font-bold text-[#E5A93B] hover:text-[#F5F4F3] transition-colors uppercase tracking-wider font-body border-b border-[#E5A93B]/30 pb-1 flex items-center gap-1.5"
            >
              <span>Know More About Me</span>
              <span>➔</span>
            </a>

            {/* Custom SVG desk/lamp illustration aligned at the bottom (mockup inspired) */}
            <div className="mt-12 opacity-45 hover:opacity-75 transition-opacity duration-300 w-full max-w-[200px] pointer-events-none">
              <svg viewBox="0 0 200 120" className="w-full h-auto" fill="none" stroke="#E5A93B" strokeWidth="1.5">
                {/* Desk Base */}
                <line x1="10" y1="110" x2="190" y2="110" />
                {/* Laptop */}
                <rect x="70" y="65" width="60" height="40" rx="3" fill="#11161D" />
                <line x1="60" y1="105" x2="140" y2="105" strokeWidth="3" />
                {/* Lamp */}
                <path d="M30 110 L30 50 Q30 35 45 35" />
                <path d="M40 30 L55 40" strokeWidth="3" />
                {/* Light Ray glow */}
                <path d="M45 40 L80 100 L20 100 Z" fill="rgba(229, 169, 59, 0.04)" stroke="none" />
                {/* Plants */}
                <rect x="160" y="85" width="20" height="25" rx="2" fill="#11161D" />
                <path d="M170 85 Q175 65 170 50 Q168 70 170 85 Z" fill="rgba(229, 169, 59,0.1)" />
                <path d="M165 85 Q155 70 162 60 Q164 75 165 85 Z" fill="rgba(229, 169, 59,0.1)" />
              </svg>
            </div>
          </motion.div>

          {/* Column 2: Milestone Timeline (Center) */}
          <motion.div variants={itemVariants} className="flex flex-col items-start h-full">
            <h3 className="text-xs font-bold text-[#E5A93B] uppercase tracking-wider font-display mb-6">
              Milestones
            </h3>
            
            {/* Timeline Wrapper */}
            <div className="relative border-l border-[#B07C51]/30 pl-6 flex flex-col gap-8 py-2">
              {timelineYears.map((item, idx) => (
                <div key={idx} className="relative text-left">
                  {/* node dot */}
                  <span className="absolute -left-[30px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#2A313B] bg-[#090D11] group-hover:border-[#FFC25D]/50 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5A93B]" />
                  </span>
                  <div className="text-xs font-bold text-[#E5A93B] font-display">{item.year}</div>
                  <p className="text-[11px] text-[#A8ADB5] font-body mt-1 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Stats Details & Quote Block (Right) */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-[#E5A93B] uppercase tracking-wider font-display">
              Highlights
            </h3>
            
            {/* Bullet Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#11161D]/50 border border-[#2A313B] rounded-xl flex flex-col items-start gap-2 hover:border-[#FFC25D]/30 transition-all duration-300"
                  >
                    <Icon className="text-[#E5A93B]" size={16} />
                    <div className="text-base font-bold font-display text-[#F5F4F3] mt-1">{stat.value}</div>
                    <div className="text-[10px] text-[#A8ADB5] font-body font-semibold">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Cory House Quote Block */}
            <div className="p-5 bg-[#11161D]/80 border border-[#2A313B] rounded-xl relative overflow-hidden text-left mt-2">
              <span className="text-4xl text-[#E5A93B]/10 font-serif absolute -top-1 left-2 font-black">“</span>
              <p className="text-[11px] text-[#A8ADB5] font-body italic leading-relaxed pl-4">
                Code is like humor. When you have to explain it, it's bad.
              </p>
              <div className="text-[10px] font-bold text-[#E5A93B] font-body text-right mt-3">
                &mdash; Cory House
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
