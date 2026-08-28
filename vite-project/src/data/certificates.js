import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/hackerrank_react.png';
import cert3 from '../assets/Screenshot 2026-03-16 112648.png';
import cert4 from '../assets/data_analysis_cwh.png';

export const certificatesData = [
  {
    id: 1,
    title: "ElectroSphere 2K26 Winner",
    issuer: "Swaminarayan University",
    date: "Jan 2026",
    credentialId: "SU-ES-2026-WIN",
    image: cert1,
    skills: ["Full Stack Development", "Vite", "Tailwind CSS"],
    description: "Secured first place in the Software Edition hackathon organized by TechX Club at Swaminarayan University.",
    verifyUrl: "/certificates/ElectroSphere.html",
    downloadUrl: cert1
  },
  {
    id: 2,
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Jun 2026",
    credentialId: "92CF4564A1DE",
    image: cert2,
    skills: ["React.js", "Component Architecture", "Frontend Development"],
    description: "Successfully cleared the HackerRank role certification test for Frontend Developer (React).",
    verifyUrl: "/certificates/Frontend_React.html",
    downloadUrl: cert2
  },
  {
    id: 3,
    title: "Certification on C Programming",
    issuer: "SoloLearn",
    date: "Oct 2025",
    credentialId: "CC-ISU4JILV",
    image: cert3,
    skills: ["C Language", "Structured Logic", "Memory Pointers", "Algorithms"],
    description: "Completed the comprehensive online course on C Programming Language structures and pointers.",
    verifyUrl: "https://www.sololearn.com/certificates/CC-ISU4JILV",
    downloadUrl: cert3
  },
  {
    id: 4,
    title: "Data Analysis",
    issuer: "Code With Harry",
    date: "2026",
    credentialId: "CWH-DA-2026",
    image: cert4,
    skills: ["Data Analysis", "Python", "Data Processing"],
    description: "Successfully certified in Data Analysis by Code With Harry.",
    verifyUrl: "https://res.cloudinary.com/e2gnvesl/image/upload/v1787719810/Screenshot_2026-08-26_101914_pupzj4.png",
    downloadUrl: cert4
  }
];
