import React from 'react';
import project from './project.webp'

const Card8 = () => {
    const customOpacity = 0.8;
  return (
    <div className="relative  row-span-3 flex flex-col gap-9 p-5 bg-black border rounded-md border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:row-span-3 max-second:col-span-1 max-second:row-span-1 max-third:col-span-1 max-third:row-span-1">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
      <div className="z-10 row-span-3 flex flex-col gap-9">
      <div className>
      <p className="text-white text-3xl">See my </p>
      <p className="pl-8 text-3xl text-white">Certificate</p>
      </div>
      
      <div className="flex justify-center items-center"><img  src={project} alt="project"></img></div>

      <div className="flex flex-row justify-between w-11/12 mb-2">
        <p className="text-white font-bold">Biography</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white lucide lucide-arrow-up-right-from-square"
        >
          <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
          <path d="m21 3-9 9" />
          <path d="M15 3h6v6" />
        </svg>
      </div>
      </div>
    </div>
  );
};

export default Card8;
