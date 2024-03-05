import React from 'react';

const Card2 = () => {
  const customOpacity = 0.8;

  return (
    <div className="relative flex flex-col gap-5  items-center rounded-xl justify-center pt-3 overflow-hidden p-5 row-span-2 col-span-1 bg-black border border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:row-span-2  max-first:pl-12 max-second:col-span-1 max-second:row-span-1 max-third:col-span-1 max-third:row-span-1">
      {/* Background with Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>

      <div className="flex flex-col gap-5 z-10 w-64">
        <p className="pl-3 text-2xl font-bold text-purple-500">title</p>
        <div>
          <p className="pl-10 text-4xl font-bold text-white ">Product</p>
          <p className="pl-20 text-4xl font-bold text-white ">Designer</p>
          {/* Add any additional content here */}
        </div>
      </div>
    </div>
  );
};

export default Card2;
