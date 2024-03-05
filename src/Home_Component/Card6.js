import React from 'react'

const Card6 = () => {
    const customOpacity = 0.8;
  return (

    <div className="relative flex flex-col gap-12  p-5 col-span-2 row-span-4 rounded-md bg-black border border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:row-span-6 max-second:col-span-1 max-second:row-span-3 max-third:col-span-1 max-third:row-span-3">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
        <div className='z-10 flex flex-col gap-16'>
  <p className="text-3xl text-white">Services Offering</p>
  <div className="flex flex-row justify-around items-center  gap-6 max-first:flex-col">
    <div className="flex flex-col items-center gap-3">
      <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 lucide lucide-smartphone">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
      <p className="text-white">UI/UX</p>
    </div>
    <div className="flex flex-col items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 lucide lucide-badge-dollar-sign">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
      <p className="text-white">Digital Marketing</p>
    </div>
    <div className="flex flex-col items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 lucide lucide-airplay">
        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
        <polygon points="12 15 17 21 7 21 12 15" />
      </svg>
      <p className="text-white">Web Developement</p>
    </div>
    <div className="flex flex-col items-center gap-3">
      <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 lucide lucide-file-pen-line">
        <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
        <path d="M8 18h1" />
        <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
      </svg>
      <p className="text-white">Editing</p>
    </div>
  </div>
  <div className="flex flex-row items-center gap-2">
    <p className="text-4xl font-bold tracking-tighter text-white">Things I’m good at Service</p>
    <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 lucide lucide-thumbs-up">
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  </div>
  <div className="mb-2 flex w-11/12 flex-row justify-between">
    <p className="font-bold text-white">Biography</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square text-white">
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      <path d="m21 3-9 9" />
      <path d="M15 3h6v6" />
    </svg>
  </div>
  </div>
</div>

    
  )
}

export default Card6