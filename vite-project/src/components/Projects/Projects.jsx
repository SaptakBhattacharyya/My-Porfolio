import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Featured project (Med-Remind)
  const featuredProject = projectsData.find((p) => p.featured);
  
  // Secondary projects
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  // Initially show only the first 4 major projects, expand to show all on click
  const visibleProjects = showAll ? secondaryProjects : secondaryProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-8 lg:px-10 relative overflow-hidden bg-[#090D11] border-b border-[#2A313B]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Left-Aligned Title and Right-Aligned Link (Mockup inspired) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 w-full text-left">
          <div>
            <span className="text-[10px] font-bold text-[#E5A93B] tracking-widest uppercase mb-1 block">
              03 | PROJECTS
            </span>
            <h2 className="text-3xl font-black font-display text-[#F5F4F3]">
              Things I've Built
            </h2>
          </div>
          
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-bold text-[#E5A93B] hover:text-[#F5F4F3] transition-colors uppercase tracking-wider font-body border-b border-[#E5A93B]/30 pb-1 flex items-center gap-1.5"
          >
            <span>{showAll ? 'Collapse List' : 'View all projects'}</span>
            <span>➔</span>
          </button>
        </div>

        {/* Showcase Layout */}
        <div className="flex flex-col gap-10">
          
          {/* Featured Case Study (Full Width) */}
          {featuredProject && (
            <ProjectCard project={featuredProject} isFeatured={true} />
          )}

          {/* Secondary Projects Grid (2-Column Layout on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
