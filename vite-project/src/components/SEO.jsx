import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://saptak-bhattacharyya-portfolio.vercel.app';

const SEO = ({ 
  title = "Saptak Bhattacharyya | Full-Stack Developer & UI/UX Designer", 
  description = "Portfolio of Saptak Bhattacharyya — Full-stack developer and UI/UX designer specializing in React, Node.js, MongoDB, and modern web experiences. B.Tech CSE student building scalable digital products.",
  image = "/og-image.png",
  path = "/",
  type = "website"
}) => {
  const url = `${BASE_URL}${path}`;
  const absoluteImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  // JSON-LD Structured Data — Person + Website
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Saptak Bhattacharyya",
        "url": BASE_URL,
        "image": `${BASE_URL}/og-image.png`,
        "jobTitle": "Full-Stack Developer & UI/UX Designer",
        "description": "Full-stack developer and UI/UX designer specializing in React, Node.js, MongoDB, and modern web experiences.",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Swaminarayan University"
        },
        "knowsAbout": [
          "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
          "HTML", "CSS", "UI/UX Design", "Full-Stack Development", "Web3"
        ],
        "sameAs": [
          "https://github.com/SaptakBhattacharyya",
          "https://linkedin.com/in/saptakbhattacharyya"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Saptak Bhattacharyya Portfolio",
        "url": BASE_URL,
        "description": "Official portfolio of Saptak Bhattacharyya — Full-stack developer and UI/UX designer.",
        "author": {
          "@type": "Person",
          "name": "Saptak Bhattacharyya"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Saptak Bhattacharyya" />
      <meta name="keywords" content="Saptak Bhattacharyya, full-stack developer, UI/UX designer, React developer, Node.js developer, MERN stack, portfolio, web developer, frontend developer, B.Tech CSE" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content="Saptak Bhattacharyya Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
