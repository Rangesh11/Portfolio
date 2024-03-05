import React from 'react';

const Card3 = () => {
    const customOpacity=0.8;
  return (
    <div className="relative flex  flex-col justify-between rounded-md items-center p-5 row-span-2 col-span-1 bg-black border border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:row-span-2 max-second:col-span-1 max-second:row-span-1 max-third:col-span-1 max-third:row-span-1">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
        <div class="z-10 flex flex-col items-center gap-11">

      <div className="flex p-1 flex-row justify-between gap-4">
        <a
          className="flex size-28 items-center justify-center rounded-full transition-transform hover:border border-purple-600 hover:scale-105"
          href=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          className="flex size-28 items-center justify-center rounded-full transition-transform hover:border border-purple-600 hover:scale-105"
          href=""
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      </div>
{/* <div class="hidden max-second:block">
      <div className="flex p-1 flex-row justify-between gap-4 ">
        <a
          className="flex size-28 items-center justify-center rounded-full transition-transform hover:border border-purple-600 hover:scale-105"
          href=""
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a
          className="flex size-28 items-center justify-center rounded-full transition-transform hover:border border-purple-600 hover:scale-105"
          href=""
        >
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
      </div> */}
      <div className="flex flex-row justify-between w-9/12">
        <p className="text-white font-bold">Profile</p>
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
          className="text-2xl text-white lucide lucide-arrow-up-right-from-square"
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

export default Card3;
