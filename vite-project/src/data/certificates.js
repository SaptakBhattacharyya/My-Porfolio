import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';
import cert3 from '../assets/Screenshot 2026-03-16 112648.png';

export const certificatesData = [
  {
    id: 1,
    title: "ElectroSphere 2K26 Winner",
    issuer: "Swaminarayan University",
    date: "Jan 2026",
    credentialId: "SU-ES-2026-WIN",
    image: cert1,
    skills: ["Full Stack Development", "Vite", "Tailwind CSS", "Framer Motion"],
    description: "Secured first place in the Software Edition hackathon organized by TechX Club at Swaminarayan University.",
    verifyUrl: "https://swaminarayanuniversity.ac.in",
    downloadUrl: cert1
  },
  {
    id: 2,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud / Simplilearn",
    date: "Dec 2025",
    credentialId: "GC-GENAI-SIMP-128",
    image: cert2,
    skills: ["Generative AI", "LLMs", "Prompt Engineering"],
    description: "Completed the comprehensive online course on Generative AI concepts, methodologies, and applications.",
    verifyUrl: "https://cloud.google.com",
    downloadUrl: cert2
  },
  {
    id: 3,
    title: "Certification on C Programming",
    issuer: "SoloLearn",
    date: "Oct 2025",
    credentialId: "SL-CPROG-9844",
    image: cert3,
    skills: ["C Language", "Structured Logic", "Memory Pointers", "Algorithms"],
    description: "Completed the comprehensive online course on C Programming Language structures and pointers.",
    verifyUrl: "https://sololearn.com",
    downloadUrl: cert3
  }
];
