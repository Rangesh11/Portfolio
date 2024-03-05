import React from 'react';

const Nav = () => {
  const customOpacity = 0.8;

  return (
    <div className="relative h-24 w-10/12 px-5 bg-black border border-gray-700 rounded-md">
      {/* Background with Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-950 rounded-md" style={{ opacity: customOpacity }}></div>

      {/* Content */}
      <div className="flex flex-row justify-between items-center text-white relative z-10 h-24">
        <h1 className="font-bold text-3xl">Rangesh</h1>
        <div className="flex flex-row gap-10">
          <a className='text-white'>Home</a>
          <a className='text-white'>About</a>
          <a className='text-white'>Project</a>
          <a className='text-white'>Contact</a>
        </div>
        <button className='bg-purple-600 w-36 h-12 rounded-full transition-transform hover:scale-105  hover:shadow-2xl'>
          Let's Talk
        </button>
      </div>
    </div>
  );
};
 

export default Nav;
