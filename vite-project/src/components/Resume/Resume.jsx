import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import './Resume.css';

export default function Resume() {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    window.print();
  };

  return (
    <section id="resume" className="resume-section">
      {/* Print CSS for single-page A4 PDF output */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 0 !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Hide everything outside the resume */
          #root > *:not(main),
          nav, footer, .no-print,
          main > *:not(#resume) {
            display: none !important;
          }

          html, body, #root, main, #resume, #resume .container {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
            color: #1a1a1a !important;
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }

          #resume .container {
            display: block !important;
          }

          .resume-section {
            padding: 0 !important;
            margin: 0 !important;
            background: #fff !important;
          }

          #resume-printable {
            width: 210mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 auto !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: #fff !important;
            color: #1a1a1a !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }

          /* Maintain exact 2-column layout in print mode */
          .resume-body {
            display: flex !important;
            flex-direction: row !important;
          }

          .resume-col-left {
            width: 42% !important;
            padding: 20px 18px 18px 30px !important;
            border-right: 1.5px solid #ddd !important;
            border-bottom: none !important;
          }

          .resume-col-right {
            width: 58% !important;
            padding: 20px 30px 18px 18px !important;
          }

          .resume-header-top {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
          }

          .resume-header-contact {
            text-align: right !important;
          }

          a {
            color: #1a1a1a !important;
            text-decoration: underline !important;
          }
        }
      `}} />

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Section Header (Screen only) */}
        <motion.div
          className="section-header no-print"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#F5F4F3', letterSpacing: '-0.5px' }}>
            My <span style={{ color: '#E5A93B' }}>Resume</span>
          </h2>
          <p style={{ color: '#A8ADB5', marginTop: '0.4rem', fontSize: '0.95rem' }}>
            A comprehensive overview of my experience, technical skills, and achievements.
          </p>
          <button 
            className="print-btn" 
            onClick={handleDownload} 
            style={{ 
              marginTop: '1.25rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              backgroundColor: '#E5A93B',
              color: '#090D11',
              border: 'none',
              padding: '0.65rem 1.6rem',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(229, 169, 59, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(229, 169, 59, 0.45)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(229, 169, 59, 0.35)';
            }}
          >
            <FiDownload size={18} /> Download PDF
          </button>
        </motion.div>

        {/* Printable Resume Sheet */}
        <div
          ref={resumeRef}
          id="resume-printable"
          className="resume-page"
        >
          {/* HEADER */}
          <div className="resume-header">
            <div className="resume-header-top">
              <div className="resume-header-name">
                <h1>SAPTAK BHATTACHARYYA</h1>
                <div className="resume-title">Full Stack Web Developer</div>
              </div>
              <div className="resume-header-contact">
                <div><a href="mailto:saptak.bhattacharyya.cg@gmail.com">saptak.bhattacharyya.cg@gmail.com</a></div>
                <div><a href="tel:6290232029">+91 6290232029</a></div>
                <div>Ahmedabad, Gujarat, India</div>
              </div>
            </div>
            <div className="resume-header-links">
              <a href="https://www.linkedin.com/in/saptak-bhattacharyya-06aa05388/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/SaptakBhattacharyya" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://youtube.com/@saptak-codez" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://saptak-bhattacharyya-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
              <a href="https://leetcode.com/u/SaptakBhattacharyyaCodez/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              <a href="https://x.com/SaptakCodez" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>

          {/* BODY: two columns */}
          <div className="resume-body">

            {/* LEFT COLUMN */}
            <div className="resume-col-left">

              {/* SKILLS */}
              <div className="resume-section-block">
                <div className="resume-section-title">Skills</div>
                <div className="resume-skill-group">
                  <div className="resume-skill-label">Languages &amp; Frameworks</div>
                  <div className="resume-skill-value">JavaScript (ES6+), C++, C, Python, React.js, React Native, Node.js, Express.js, Tailwind CSS, HTML5, CSS3</div>
                </div>
                <div className="resume-skill-group">
                  <div className="resume-skill-label">Databases &amp; Backend</div>
                  <div className="resume-skill-value">MongoDB, REST APIs, Express.js, JWT, SQL</div>
                </div>
                <div className="resume-skill-group">
                  <div className="resume-skill-label">Tools &amp; Platforms</div>
                  <div className="resume-skill-value">Git, GitHub, VS Code, Postman, Figma, Vercel, Netlify, Render, npm, Vite</div>
                </div>
                <div className="resume-skill-group">
                  <div className="resume-skill-label">Specialized</div>
                  <div className="resume-skill-value">MERN Stack, UI/UX Design</div>
                </div>
              </div>

              {/* HACKATHONS & AWARDS */}
              <div className="resume-section-block">
                <div className="resume-section-title">Hackathons &amp; Awards</div>

                <div className="resume-hack-item">
                  <div className="resume-hack-num">1. Winner (1st Place) — ElectroSphere 2K26</div>
                  <div className="resume-hack-meta">Software Edition | January 2026<br/>TechX Club, Swaminarayan University</div>
                  <div className="resume-hack-desc">Secured <strong>1st Place</strong> in ElectroSphere 2K26 as core developer, building a full-stack MERN application under rigorous sprint constraints.</div>
                  <div className="resume-hack-links">
                    <a href="https://res.cloudinary.com/e2gnvesl/image/upload/v1788951227/Screenshot_2026-09-09_162141_qfk7pg.png" target="_blank" rel="noopener noreferrer">Certificate</a>
                  </div>
                </div>

                <div className="resume-hack-item">
                  <div className="resume-hack-num">2. Participant — Vibe-2-Vision Hackathon</div>
                  <div className="resume-hack-meta">36-Hour Hackathon | July 2026<br/>IEEE VSSUT Student Branch · IEEE SHE ASPIRE 3.0</div>
                  <div className="resume-hack-desc">Participated in 36-hour national sprint, developing <strong>SafeSphere AI</strong>, a predictive women's safety platform with automated telemetry alerts and live guardian tracking.</div>
                  <div className="resume-hack-links">
                    <a href="https://res.cloudinary.com/e2gnvesl/image/upload/v1787725881/Screenshot_2026-08-26_120036_ph5ore.png" target="_blank" rel="noopener noreferrer">Certificate</a>
                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="resume-section-block">
                <div className="resume-section-title">Education</div>
                <div className="resume-edu-item">
                  <span className="resume-edu-year">2025 – 2029</span>
                  <div className="resume-edu-school">SwamiNarayan Institute of Technology</div>
                  <div className="resume-edu-degree">
                    Swaminarayan University, Kalol<br/>
                    Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering<br/>
                    Currently in 3rd Semester (2nd Year) | Academic Score: <strong>CGPA: 8.84</strong><br/>
                    Coursework: Data Structures, Algorithms, DBMS, OOP, Web Architecture
                  </div>
                </div>
              </div>

              {/* INTERESTS & STRENGTHS */}
              <div className="resume-section-block">
                <div className="resume-section-title">Interests &amp; Strengths</div>
                <ul className="resume-summary-list">
                  <li>Passionate about building modern, responsive, and performance-driven web applications</li>
                  <li>Strong problem-solving mindset with 250+ DSA problems solved on LeetCode</li>
                  <li>Focused on building scalable full-stack architectures, clean RESTful APIs, and database efficiency</li>
                  <li>Enjoy crafting immersive digital experiences and interactive animations</li>
                  <li>Believe great software is built directly at the intersection of clean, modular code and thoughtful design</li>
                  <li>Goal is to relentlessly keep learning, actively contribute to meaningful projects, and collaboratively grow</li>
                </ul>
              </div>

            </div>{/* /resume-col-left */}

            {/* RIGHT COLUMN */}
            <div className="resume-col-right">

              {/* EXPERTISE & SUMMARY */}
              <div className="resume-section-block">
                <div className="resume-section-title">Expertise &amp; Summary</div>
                <ul className="resume-summary-list">
                  <li>Full Stack Web Developer &amp; UI/UX Designer currently in 3rd semester (2nd year) building modern dynamic web applications</li>
                  <li>Specialized heavily in the robust <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong> ecosystem</li>
                  <li>Architected full-stack platforms including <strong>Med-Remind</strong> (Healthcare), <strong>Employee Hub</strong>, and live interactive web apps</li>
                  <li>Achieved <strong>1st Place in ElectroSphere 2K26 Hackathon</strong> and solved 250+ algorithmic data structure problems on LeetCode</li>
                  <li>Experienced in end-to-end continuous deployment workflows across Vercel, Netlify, Render, and GitHub Actions</li>
                </ul>
              </div>

              {/* CERTIFICATIONS */}
              <div className="resume-section-block">
                <div className="resume-section-title">Certifications</div>
                <div className="resume-cert-grid">
                  <div className="resume-cert-item"><span className="resume-cert-num">1.</span><a href="https://res.cloudinary.com/e2gnvesl/image/upload/v1788951227/Screenshot_2026-09-09_162141_qfk7pg.png" target="_blank" rel="noopener noreferrer">ElectroSphere 2K26 (1st Place)</a></div>
                  <div className="resume-cert-item"><span className="resume-cert-num">2.</span><a href="https://res.cloudinary.com/e2gnvesl/image/upload/v1787719810/Screenshot_2026-08-26_101914_pupzj4.png" target="_blank" rel="noopener noreferrer">Data Analysis</a></div>
                  <div className="resume-cert-item"><span className="resume-cert-num">3.</span><a href="https://www.sololearn.com/certificates/CC-ISU4JILV" target="_blank" rel="noopener noreferrer">Certification on C (SoloLearn)</a></div>
                  <div className="resume-cert-item"><span className="resume-cert-num">4.</span><a href="https://res.cloudinary.com/e2gnvesl/image/upload/v1787719487/Screenshot_2026-08-26_100936_bhfqmr.png" target="_blank" rel="noopener noreferrer">Frontend Developer (React)</a></div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="resume-section-block">
                <div className="resume-section-title">Experience</div>
                <div className="resume-exp-title">Full-Stack Developer &amp; Web Engineer</div>
                <div className="resume-exp-date">2025 – Present &nbsp;|&nbsp; Freelance / Personal Projects</div>
                <ul className="resume-exp-list">
                  <li>Engineered end-to-end full-stack web architectures smoothly utilizing React.js, Node.js, Express.js &amp; MongoDB frameworks</li>
                  <li>Developed strongly scalable RESTful API endpoints and globally deployed live applications natively on Vercel, Netlify &amp; Render</li>
                  <li>Skillfully designed responsive, component-driven UI systems with Tailwind CSS, and custom styling</li>
                  <li>Reliably delivered optimized production-grade software platform solutions actively operating under strict intensive hackathon sprint environments safely</li>
                </ul>
              </div>

              {/* PROJECTS */}
              <div className="resume-section-block">
                <div className="resume-section-title">Projects</div>

                <div className="resume-project-item">
                  <div className="resume-project-header">
                    <div className="resume-project-name"><span className="resume-project-num">1.</span>Med-Remind</div>
                    <div className="resume-project-links">
                      <a href="https://medremind-z2yo.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                      <a href="https://github.com/codinggita/medremind.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                  </div>
                  <div className="resume-project-tech">React.js · Node.js · Express.js · MongoDB · JWT</div>
                  <div className="resume-project-desc">Comprehensive healthcare reminder application featuring real-time medication logging, custom calendar scheduler, and interactive dashboard health analytics.</div>
                </div>

                <div className="resume-project-item">
                  <div className="resume-project-header">
                    <div className="resume-project-name"><span className="resume-project-num">2.</span>Employee Hub</div>
                    <div className="resume-project-links">
                      <a href="https://employees-dataset-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                      <a href="https://github.com/SaptakBhattacharyya/employees_dataset_saptak_bhattacharyya.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                  </div>
                  <div className="resume-project-tech">React.js · Node.js · Express.js · MongoDB · Tailwind CSS</div>
                  <div className="resume-project-desc">Full-stack employee management platform with role-based access control, real-time employee search, dynamic CRUD operations, and system health monitoring.</div>
                </div>

                <div className="resume-project-item">
                  <div className="resume-project-header">
                    <div className="resume-project-name"><span className="resume-project-num">3.</span>OmniRetail</div>
                    <div className="resume-project-links">
                      <a href="https://omni2-0-ymx3.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                      <a href="https://github.com/SaptakBhattacharyya/omni2.0.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                  </div>
                  <div className="resume-project-tech">React.js · Node.js · Express.js · MongoDB · Redis</div>
                  <div className="resume-project-desc">Phygital commerce platform with multi-store inventory synchronization, automated order routing, and real-time inventory management.</div>
                </div>

                <div className="resume-project-item">
                  <div className="resume-project-header">
                    <div className="resume-project-name"><span className="resume-project-num">4.</span>Smart Field Survey App</div>
                    <div className="resume-project-links">
                      <a href="https://youtu.be/QXnwBrve-BQ" target="_blank" rel="noopener noreferrer">Live</a>
                      <a href="https://github.com/SaptakBhattacharyya/Smart-Field-Survey-Inspection-App-React-Native.git" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                  </div>
                  <div className="resume-project-tech">React Native · Expo · Node.js · MongoDB</div>
                  <div className="resume-project-desc">Mobile survey and inspection suite supporting GPS location tracking, offline-first data capture, media audits, and automated inspection reporting.</div>
                </div>
              </div>

            </div>{/* /resume-col-right */}
          </div>{/* /resume-body */}
        </div>{/* /resume-page */}
      </div>{/* /container */}
    </section>
  );
}
