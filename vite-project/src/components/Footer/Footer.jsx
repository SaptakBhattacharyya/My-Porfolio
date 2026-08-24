import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { contactData } from '../../data/contact';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090D11] py-10 px-8 lg:px-10 border-t border-[#2A313B] text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#A8ADB5] font-body">
          <span className="text-[#E5A93B] font-black font-display text-sm tracking-wider">
            &lt;SB /&gt;
          </span>
          <span className="hidden md:inline text-[#2A313B]">&bull;</span>
          <span>
            &copy; 2026 Saptak Bhattacharyya. All rights reserved.
          </span>
        </div>

        {/* Center: Built With Info */}
        <div className="text-xs text-[#A8ADB5] font-body flex items-center gap-1">
          <span>Built</span>
          <span>using</span>
          <span className="text-[#F5F4F3] font-semibold">React &amp; Tailwind CSS</span>
        </div>

        {/* Right Side: Social Icons & Back to Top Button */}
        <div className="flex items-center gap-4">
          <a
            href={contactData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors"
          >
            <FiGithub size={15} />
          </a>
          <a
            href={contactData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={contactData.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors"
          >
            <FiTwitter size={15} />
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="text-[#A8ADB5] hover:text-[#FFC25D] transition-colors"
          >
            <FiMail size={15} />
          </a>

          {/* Simple Inline Back to Top Arrow button (Mockup inspired) */}
          <button
            onClick={scrollToTop}
            className={`p-2 rounded-lg bg-[#11161D] border border-[#2A313B] text-[#E5A93B] hover:text-[#F5F4F3] hover:border-[#FFC25D]/40 transition-all duration-300 ${
              showScroll ? 'opacity-100' : 'opacity-30'
            }`}
            aria-label="Back to Top"
          >
            <FiArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
