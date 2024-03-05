import React from 'react'

const Card7 = () => {
    const customOpacity = 0.8;
  return (
    <div className="relative  row-span-2 col-span-1 flex flex-col gap-14 p-5 bg-black border border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:row-span-2 max-second:col-span-1 max-second:row-span-1 max-third:col-span-1 max-third:row-span-1">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
    <div className='z-10 flex flex-col gap-14'>
    <div class="flex flex-row justify-between">
    <div><p className="pl-1 text-3xl text-white">Blog&</p>
    <p className="pl-8 text-3xl text-white">project</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-purple-600 lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
    </div>
    <div className="flex flex-row justify-between w-11/12 mb-2 ">
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
  )
}

export default Card7