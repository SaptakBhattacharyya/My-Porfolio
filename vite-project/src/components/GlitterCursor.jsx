import React, { useEffect, useRef } from 'react';

const GlitterCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles = [];
    const colors = ['#34d399', '#10b981', '#059669', '#fff'];

    const addParticle = (x, y) => {
      // Add 2-3 particles per movement
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 20, // Spread
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2, // Velocity X
          vy: (Math.random() - 1) * 2, // Velocity Y (mostly upwards/drifting)
          life: 1, // Full life
          decay: Math.random() * 0.02 + 0.015, // How fast it fades
          size: Math.random() * 3 + 1, // Size of glitter
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.2
        });
      }
    };

    let mouseX = -100;
    let mouseY = -100;
    let isMoving = false;
    let moveTimer = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      addParticle(mouseX, mouseY);
      
      clearTimeout(moveTimer);
      moveTimer = setTimeout(() => { isMoving = false; }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // Slight gravity
        p.angle += p.spin;
        p.life -= p.decay;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        // Draw glittering star/diamond
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        
        // Make it blink
        const blink = Math.abs(Math.sin(p.life * 10));
        ctx.globalAlpha = p.life * blink;
        
        ctx.fillStyle = p.color;
        
        // Draw a diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.lineTo(p.size / 2, 0);
        ctx.lineTo(0, p.size);
        ctx.lineTo(-p.size / 2, 0);
        ctx.closePath();
        ctx.fill();
        
        // Add a slight glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Crucial so it doesn't block clicks
        zIndex: 9999, // On top of everything
      }}
    />
  );
};

export default GlitterCursor;
