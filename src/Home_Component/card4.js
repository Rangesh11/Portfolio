import React from 'react';

const Card4 = () => {
  const customOpacity = 0.8;

  return (
    <div className="relative flex flex-row gap-2 p-3 justify-center items-center rounded-lg row-span-1 col-span-1 bg-black border border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:row-span-1 max-second:col-span-1 max-second:row-span-1 max-third:col-span-1 max-third:row-span-1">
      {/* Pseudo-element for background opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
      <div className="z-10 flex flex-row items-center gap-3" >
      <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
          {/* Your SVG content */}
        <p className="text-white text-2xl">LeetCode 147</p>
        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
      </div>
    </div>
  );
};

export default Card4;
