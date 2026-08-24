import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import CountUp from 'react-countup';

import profileImg from '../../assets/profile.png';
import TechBadge from '../UI/TechBadge';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatingBadges = [
    { icon: FaReact, label: 'React', className: 'top-[0%] -left-[8%] sm:-left-[12%]' },
    { icon: FaNodeJs, label: 'Node.js', className: 'top-[42%] -left-[12%] sm:-left-[18%]' },
    { icon: SiMongodb, label: 'MongoDB', className: 'top-[84%] -left-[5%] sm:-left-[8%]' },
    { icon: SiTailwindcss, label: 'Tailwind CSS', className: 'top-[0%] -right-[8%] sm:-right-[12%]' },
    { icon: SiTypescript, label: 'TypeScript', className: 'top-[42%] -right-[12%] sm:-right-[18%]' },
    { icon: FaGitAlt, label: 'Git', className: 'top-[84%] -right-[5%] sm:-right-[8%]' },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Days Coding" },
    { value: 15, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Certificates" },
    { value: 150, suffix: "+", label: "DSA Problems" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center pt-28 pb-10 px-8 lg:px-10 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center z-10"
      >
        {/* Left Column: Details */}
        <div className="flex flex-col items-start text-left">
          {/* Availability Status Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5A93B]/10 border border-[#E5A93B]/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#57C66A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#57C66A]"></span>
            </span>
            <span className="text-xs font-semibold text-[#E5A93B] tracking-wider uppercase font-body">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-tight tracking-tight text-[#F5F4F3]"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="text-[#F5F4F3]">Saptak</span>{' '}
            <span className="bg-gradient-to-r from-[#E5A93B] via-[#B07C51] to-[#E5A93B] bg-clip-text text-transparent">
              Bhattacharyya
            </span>
          </motion.h1>

          {/* Typewriter Subheading */}
          <motion.div
            variants={itemVariants}
            className="h-10 mt-3 text-lg md:text-xl text-[#A8ADB5] font-body font-semibold"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1200,
                'React Developer',
                1200,
                'MERN Stack Developer',
                1200,
                'UI Engineer',
                1200,
                'Open Source Contributor',
                1200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-[#A8ADB5] font-body leading-relaxed max-w-lg mt-3"
          >
            I build scalable full-stack web applications with modern UI/UX, clean architecture, and performant user experiences using the MERN stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-bold font-body text-xs tracking-wider uppercase bg-[#E5A93B] text-[#090D11] hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-[#E5A93B]/10 transition-all duration-300 text-center w-full sm:w-auto flex items-center justify-center gap-1.5"
            >
              <span>View My Work</span>
              <span>➔</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-bold font-body text-xs tracking-wider uppercase border border-[#2A313B] bg-[#11161D]/40 text-[#F5F4F3] hover:bg-[#11161D] hover:border-[#FFC25D]/50 hover:scale-[1.02] transition-all duration-300 text-center w-full sm:w-auto flex items-center justify-center gap-1.5"
            >
              <span>Contact Me</span>
              <span>➔</span>
            </a>
          </motion.div>

          {/* Social Icons in Small Glass Circular Buttons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
            <a
              href="https://github.com/SaptakBhattacharyya"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#11161D]/60 backdrop-blur-sm border border-[#2A313B] text-[#A8ADB5] hover:text-[#FFC25D] hover:border-[#FFC25D]/30 hover:scale-110 shadow-md shadow-black/20 hover:shadow-[#FFC25D]/5 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#11161D]/60 backdrop-blur-sm border border-[#2A313B] text-[#A8ADB5] hover:text-[#FFC25D] hover:border-[#FFC25D]/30 hover:scale-110 shadow-md shadow-black/20 hover:shadow-[#FFC25D]/5 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/SaptakCodez"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#11161D]/60 backdrop-blur-sm border border-[#2A313B] text-[#A8ADB5] hover:text-[#FFC25D] hover:border-[#FFC25D]/30 hover:scale-110 shadow-md shadow-black/20 hover:shadow-[#FFC25D]/5 transition-all duration-300"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="mailto:saptak.bhattacharyya.cg@gmail.com"
              className="p-3 rounded-full bg-[#11161D]/60 backdrop-blur-sm border border-[#2A313B] text-[#A8ADB5] hover:text-[#FFC25D] hover:border-[#FFC25D]/30 hover:scale-110 shadow-md shadow-black/20 hover:shadow-[#FFC25D]/5 transition-all duration-300"
            >
              <FiMail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Portrait and Symmetrical Badges */}
        <motion.div 
          variants={itemVariants} 
          className="relative flex justify-center items-center min-h-[360px]"
        >
          {/* Background Radial Glow */}
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-gradient-to-tr from-[#E5A93B]/16 to-[#B07C51]/4 rounded-full blur-3xl pointer-events-none" />

          {/* Image Wrapper */}
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full flex justify-center items-center z-10 animate-[bounce_8s_infinite_ease-in-out]">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E5A93B]/35 animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-[3px] rounded-full border border-double border-[#B07C51]/15" />

            {/* Profile Image container */}
            <div className="w-[195px] h-[195px] sm:w-[255px] sm:h-[255px] rounded-full overflow-hidden border-2 border-[#E5A93B]/50 bg-[#11161D]/80 p-1 flex justify-center items-center shadow-2xl">
              <img
                src={profileImg}
                alt="Saptak Bhattacharyya"
                className="w-full h-full object-cover rounded-full pointer-events-auto"
              />
            </div>

            {/* Symmetrical Floating Badges */}
            {floatingBadges.map((badge, idx) => (
              <TechBadge
                key={idx}
                icon={badge.icon}
                label={badge.label}
                className={badge.className}
              />
            ))}

            {/* Status Capsule Badge */}
            <div className="absolute bottom-[4%] right-[0%] px-3 py-1 rounded-full bg-[#11161D]/95 border border-[#2A313B] text-[10px] font-bold text-[#F5F4F3] font-body flex items-center gap-1.5 shadow-lg pointer-events-auto select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#57C66A]" />
              <span>Available for work</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Flat Unified Stats Bar Row (Aligned to the image mockup) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto border-t border-b border-[#2A313B] py-8 mt-20 z-10 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#11161D]/10 via-[#11161D]/20 to-[#11161D]/10"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[#E5A93B] font-display flex items-baseline">
              <CountUp end={stat.value} duration={2.5} />
              <span className="text-2xl text-[#B07C51]">{stat.suffix}</span>
            </div>
            <div className="text-[11px] font-bold text-[#A8ADB5] font-body uppercase tracking-wider mt-1.5">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          ease: 'easeInOut',
        }}
        className="mt-12 flex flex-col items-center gap-1 cursor-pointer pointer-events-auto z-10 opacity-60 hover:opacity-100 transition-opacity"
        onClick={() => {
          const next = document.getElementById('about');
          if (next) next.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A8ADB5] font-body">Scroll Down</span>
        <FiArrowDown size={14} className="text-[#E5A93B]" />
      </motion.div>
    </section>
  );
}
