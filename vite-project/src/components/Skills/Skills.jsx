import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data/skills';

// Lazy load SVG RadarChart
const RadarChart = lazy(() => import('./RadarChart'));

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData.categories[0].title);

  // Find active category
  const activeCategory = skillsData.categories.find(cat => cat.title === activeTab) || skillsData.categories[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 px-8 lg:px-10 relative overflow-hidden bg-[#090D11] border-b border-[#2A313B]">
      <div className="max-w-7xl mx-auto">
        
        {/* Desktop 3-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_25%_30%] gap-10 items-start text-left">
          
          {/* Column 1: Tech Stack Badges (Left) */}
          <div className="flex flex-col items-start w-full">
            <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1">
              02 | SKILLS
            </span>
            <h2 className="text-3xl font-black font-display text-[#F5F4F3] mb-6">
              My Tech Stack
            </h2>

            {/* Tab buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#11161D]/40 border border-[#2A313B] p-1.5 rounded-lg w-full">
              {skillsData.categories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  className={`px-4 py-2 rounded-md text-xs font-bold font-body transition-all duration-300 relative ${
                    activeTab === category.title
                      ? 'text-[#090D11]'
                      : 'text-[#A8ADB5] hover:text-[#F5F4F3]'
                  }`}
                >
                  {activeTab === category.title && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-[#E5A93B] rounded-md z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active category items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full"
            >
              <AnimatePresence mode="wait">
                {activeCategory.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="p-3.5 bg-[#11161D]/55 border border-[#2A313B] rounded-xl flex items-center gap-3 group hover:border-[#FFC25D]/40 hover:scale-[1.03] transition-all duration-300 relative overflow-hidden"
                    >
                      {/* background hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                      <div
                        className="p-2 rounded-lg text-white/90 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${skill.color}22`, color: skill.color }}
                      >
                        <Icon size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#F5F4F3] font-body">{skill.name}</span>
                        <span className="text-[9px] text-[#A8ADB5] font-body mt-0.5 line-clamp-1">{skill.desc}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Column 2: Skills Radar Chart (Center) */}
          <div className="flex flex-col items-center justify-center w-full min-h-[300px] border border-[#2A313B]/30 rounded-xl bg-[#11161D]/20 p-4">
            <h3 className="text-xs font-bold text-[#E5A93B] uppercase tracking-wider font-display mb-4">
              Skills Radar
            </h3>
            <div className="w-full flex items-center justify-center">
              <Suspense fallback={<div className="h-48 flex items-center justify-center text-xs text-[#A8ADB5]">Loading Radar Chart...</div>}>
                <RadarChart stats={skillsData.radarStats} />
              </Suspense>
            </div>
          </div>

          {/* Column 3: Proficiency Bars (Right) */}
          <div className="flex flex-col items-start w-full gap-5">
            <h3 className="text-xs font-bold text-[#E5A93B] uppercase tracking-wider font-display mb-2">
              Proficiency
            </h3>

            {skillsData.radarStats.map((stat, idx) => (
              <div key={idx} className="w-full text-left">
                <div className="flex items-center justify-between text-xs font-bold text-[#F5F4F3] font-body mb-2">
                  <span>{stat.label}</span>
                  <span className="text-[#E5A93B]">{stat.score}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#11161D] border border-[#2A313B] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#E5A93B] to-[#B07C51] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
