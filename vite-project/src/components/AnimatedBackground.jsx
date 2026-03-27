import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="animated-background-container">
      {/* Noise overlay for a premium matte/frosted look */}
      <div className="noise-overlay" />
      
      {/* Secondary ambient blobs for richer golden hours */}
      <div className="blur-blob ambient-blob-1" />
      <div className="blur-blob ambient-blob-2" />
      <div className="blur-blob ambient-blob-3" />
      
      {/* Subtle grid pattern overlay */}
      <div className="grid-overlay" />
    </div>
  );
};

export default AnimatedBackground;
