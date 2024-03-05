import React from 'react'

const Card1 = () => {
    const customOpacity = 0.8;
  return (

    <div className="relative flex flex-col gap-5 items-center rounded-xl justify-center p-5 row-span-4 col-span-1 bg-black border border-gray-700 transition-transform hover:scale-105 max-first:col-span-1 max-first:grid-rows-4 max-second:col-span-1 max-second:row-span-2 max-third:col-span-1 max-third:row-span-1">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded-md" style={{ opacity: customOpacity }}></div>
        <div className="flex flex-col gap-11 z-10 w-11/12 items-center">
          <img className="size-44 rounded-full transition-transform hover:scale-105  hover:shadow-2xl bg-lime-200" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
          <button className='bg-purple-600 w-44 h-12 rounded-xl text-white font-bold transition-transform hover:scale-105  hover:shadow-2xl'>
            I'm Rangesh
          </button>

          {/* <p className="text-white font-bold hidden max-second:block">I am Rangesh . I am pursuing my BEComputer science Engineering at Sri Eshwar
College of Engineering . I am always
energetic and eager to learn new skills . I use
a creative approach to problem solvin</p> */}

          <di
          
          v className="flex flex-row justify-between w-11/12 mb-2 ">
            <p className="text-white font-bold">Biography</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-arrow-up-right-from-square">
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
              <path d="m21 3-9 9" />
              <path d="M15 3h6v6" />
            </svg>
          </div>
        </div>
      </div>
  )
}

export default Card1