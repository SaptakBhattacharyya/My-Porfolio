import React from 'react';
import CountUp from 'react-countup';

export default function StatsCard({ value, suffix = '', label, subtext }) {
  // Check if value is a number for CountUp to work, else render it directly
  const isNumber = !isNaN(parseFloat(value)) && isFinite(value);

  return (
    <div className="bg-[#11161D]/60 backdrop-blur-sm border border-[#2A313B] p-5 rounded-xl hover:border-[#FFC25D]/50 transition-all duration-300 flex flex-col justify-center">
      <div className="text-2xl md:text-3xl font-extrabold text-[#E5A93B] font-display flex items-baseline gap-0.5">
        {isNumber ? (
          <CountUp end={parseFloat(value)} duration={2.5} decimals={value.toString().includes('.') ? 2 : 0} />
        ) : (
          <span>{value}</span>
        )}
        {suffix && <span className="text-xl text-[#B07C51]">{suffix}</span>}
      </div>
      <div className="text-sm font-semibold text-[#F5F4F3] font-body mt-1">{label}</div>
      {subtext && <div className="text-xs text-[#A8ADB5] font-body mt-0.5">{subtext}</div>}
    </div>
  );
}
