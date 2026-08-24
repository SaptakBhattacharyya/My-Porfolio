import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiVercel, SiNetlify, SiCplusplus, SiFramer, SiBootstrap, SiFigma, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const skillsData = {
  radarStats: [
    { label: "Frontend", score: 92 },
    { label: "Backend", score: 85 },
    { label: "Database", score: 80 },
    { label: "Problem Solving", score: 88 },
    { label: "UI/UX", score: 85 },
    { label: "Tools", score: 90 },
  ],
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB", desc: "SPAs with modern state management" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", desc: "Utility-first responsive layouts" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", desc: "Semantic structure & modern layouts" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", desc: "Advanced animations and styling" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", desc: "Grid systems and legacy layouts" },
        { name: "Framer Motion", icon: SiFramer, color: "#FM00C2", desc: "Fluid, high-performance interactions" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933", desc: "High throughput runtime systems" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF", desc: "REST APIs and custom middlewares" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", desc: "Document storage and aggregation pipelines" },
        { name: "Python", icon: FaPython, color: "#3776AB", desc: "Scripting, OOP, and automation scripts" },
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", desc: "ES6+, closures, and asynchronous flows" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: "Static typing and robust OOP" },
        { name: "C++", icon: SiCplusplus, color: "#00599C", desc: "Pointers, structures, and DSA algorithms" },
      ]
    },
    {
      title: "Tools & Deploys",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", desc: "Branching, merge strategies, and versioning" },
        { name: "GitHub", icon: FaGithub, color: "#181717", desc: "Remote repositories and Actions workflows" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC", desc: "Code editing and extension setup" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37", desc: "API request builder and validations" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E", desc: "Vector graphics & high-fidelity mockups" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF", desc: "Production hosting and serverless deployments" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7", desc: "Static site continuous integration" },
      ]
    }
  ]
};
