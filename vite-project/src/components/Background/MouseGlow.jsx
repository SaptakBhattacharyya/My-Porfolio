import React, { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(229, 169, 59, 0.08), transparent 80%)`,
      }}
    />
  );
}
