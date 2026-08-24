import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Setup Golden Particles
    const particleCount = 45;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: 'rgba(229, 169, 59, ' + (Math.random() * 0.3 + 0.1) + ')',
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Setup Golden/Warm lines
    const lineCount = 3;
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        y: (canvas.height / lineCount) * i + Math.random() * 100,
        speed: 0.2 + Math.random() * 0.2,
        amplitude: 40 + Math.random() * 40,
        frequency: 0.001 + Math.random() * 0.002,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const animate = () => {
      time += 0.5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw horizontal flowing paths (Animated Lines)
      ctx.strokeStyle = 'rgba(229, 169, 59, 0.015)';
      ctx.lineWidth = 1.5;
      lines.forEach((line) => {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y = line.y + Math.sin(x * line.frequency + line.phase + time * 0.01) * line.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Update and draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#090D11]">
      {/* Layer 1: Gradient Mesh (Base soft gradients) */}
      <div className="absolute -top-[20%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-gradient-to-tr from-[#E5A93B]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] h-[60vw] w-[60vw] rounded-full bg-gradient-to-br from-[#B07C51]/4 to-transparent blur-[140px] pointer-events-none" />

      {/* Layer 2 & 3: Moving Particles and Animated Lines (Canvas) */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Layer 4: Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Layer 6: Blurred Floating Blobs */}
      <div className="absolute top-[40%] left-[20%] h-[150px] w-[150px] rounded-full bg-[#E5A93B]/3 blur-[80px] animate-pulse pointer-events-none" />
      <div className="absolute top-[70%] right-[30%] h-[200px] w-[200px] rounded-full bg-[#B07C51]/3 blur-[100px] animate-bounce duration-[10s] pointer-events-none" />
    </div>
  );
}
