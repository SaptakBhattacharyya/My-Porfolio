import React from 'react';

export default function RadarChart({ stats }) {
  const width = 320;
  const height = 320;
  const cx = width / 2;
  const cy = height / 2;
  const maxVal = 100;
  const r = 100; // max radius
  const N = stats.length;

  // Generate grid concentric lines (polygons)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
  
  // Calculate point coordinates for any level (0 to 1) and index
  const getCoordinates = (index, level) => {
    const angle = (Math.PI * 2 / N) * index - Math.PI / 2;
    const currentRadius = r * level;
    const x = cx + currentRadius * Math.cos(angle);
    const y = cy + currentRadius * Math.sin(angle);
    return { x, y };
  };

  // Generate points string for grid polygons
  const getGridPoints = (level) => {
    const points = [];
    for (let i = 0; i < N; i++) {
      const { x, y } = getCoordinates(i, level);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  // Generate path points for the actual stats data polygon
  const statsPoints = stats.map((stat, i) => {
    const level = stat.score / maxVal;
    const { x, y } = getCoordinates(i, level);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#11161D]/40 border border-[#2A313B] rounded-2xl backdrop-blur-md hover:border-[#FFC25D]/30 transition-all duration-300">
      <h4 className="text-sm font-bold font-display text-[#E5A93B] tracking-wider uppercase mb-6">
        Technical Balance
      </h4>

      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full max-w-[280px] h-auto drop-shadow-[0_0_12px_rgba(229, 169, 59,0.15)]"
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E5A93B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B07C51" stopOpacity="0.0" />
          </radialGradient>
        </defs>

        {/* Draw concentric web grid */}
        {gridLevels.map((level, idx) => (
          <polygon
            key={idx}
            points={getGridPoints(level)}
            fill="none"
            stroke="rgba(229, 169, 59, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Draw axis lines from center to outer level */}
        {stats.map((_, i) => {
          const outerPt = getCoordinates(i, 1.0);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={outerPt.x}
              y2={outerPt.y}
              stroke="rgba(229, 169, 59, 0.12)"
              strokeWidth="1"
            />
          );
        })}

        {/* Draw data filled polygon */}
        <polygon
          points={statsPoints}
          fill="url(#radarGlow)"
          stroke="#E5A93B"
          strokeWidth="2"
          className="transition-all duration-500 ease-in-out"
        />

        {/* Draw markers and labels */}
        {stats.map((stat, i) => {
          const pt = getCoordinates(i, 1.18);
          // Adjust text alignment based on position
          let textAnchor = "middle";
          if (pt.x > cx + 10) textAnchor = "start";
          if (pt.x < cx - 10) textAnchor = "end";

          return (
            <g key={i}>
              <text
                x={pt.x}
                y={pt.y + 4}
                fill="#A8ADB5"
                fontSize="10"
                fontWeight="700"
                fontFamily="Outfit"
                textAnchor={textAnchor}
                className="select-none tracking-wider"
              >
                {stat.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
