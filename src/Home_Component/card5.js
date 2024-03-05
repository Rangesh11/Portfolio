import React from 'react';

const Card5 = () => {
  const customOpacity = 0.8;
  return (
    <div className="relative flex flex-col items-center row-span-4 justify-center gap-4 col-span-1 rounded-lg bg-black border border-gray-700 transition-transform hover:scale-105 max-first:grid-cols-1 max-first:grid-rows-4 max-second:col-span-1 max-second:row-span-2 max-third:col-span-1 max-third:row-span-1">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
      <div className="z-10  items-center">
        <div className='flex flex-col items-center'>
          <p className="text-[65px] text-white font-bold">23</p>
          <p className="text-white uppercase text-md tracking-tight ">Total presentation</p>
        </div>
        <div className='flex flex-col items-center '>
          <p className="text-[65px]  text-white font-bold ">11</p>
          <p className="text-white uppercase text-md tracking-tight ">Total project</p>
        </div>
        <div className='flex flex-col items-center '>
          <p className="text-[65px]  text-white font-bold">31</p>
          <p className="text-white uppercase text-md tracking-tight">GitHub Contribution</p>
        </div>
      </div>
    </div>
  );
};

export default Card5;