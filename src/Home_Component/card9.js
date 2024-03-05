import React from 'react'
import Ai from './AI.png'
import Photoshop from './photo shop.png'
import picart from './picart.png'
import vs from './VS.jpg'

const card9 = () => {
    const customOpacity = 0.8;
  return (
    <div class="relative flex flex-col gap-5  p-5 col-span-3 row-span-2 rounded-md bg-black border border-gray-700 max-first:col-span-1 max-first:row-span-2 max-second:col-span-2 max-second:row-span-1 max-third:col-span-1 max-third:row-span-1">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-md" style={{ opacity: customOpacity }}></div>
  <div class="z-10 flex flex-col gap-5">
  <p class="text-2xl text-white">Skills & Tools</p>
  <marquee class="flex flex-row gap-6" direction="left" behavior="scroll" scrollamount="5">
    <div class="flex flex-row gap-6 overflow-hidden animate-cycling">
      <div class="flex h-10 items-center justify-center rounded-md border border-gray-700 p-5 text-white">UI Design</div>
      <div class="flex h-10 items-center justify-center border  border-gray-700 p-5 text-white">UI Design</div>
      <div class="flex h-10 items-center justify-center border border-gray-700 p-5 text-white">UI Design</div>
      <div class="flex h-10 items-center justify-center border border-gray-700 p-5 text-white">UI Design</div>
      <div class="flex h-10 items-center justify-center border border-gray-700 p-5 text-white">UI Design</div>
      <div class="flex h-10 items-center justify-center border border-gray-700 p-5 text-white">UI Design</div>
      <div class="flex h-10 items-center justify-center border border-gray-700 p-5 text-white">UI Design</div>

      
    </div>
  </marquee>
  <marquee class="" direction="left" behavior="scroll" scrollamount="5">
    <div class="flex flex-row gap-5 h-20 items-center">
        <img class="size-16 border border-gray-700" src={Ai} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={Photoshop} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={picart} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={vs} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={Ai} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={Photoshop} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={picart} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={vs} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={Photoshop} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={picart} alt="AI"></img>
        <img class="size-16 border border-gray-700" src={vs} alt="AI"></img>
    
    </div>
  </marquee>
  </div>
</div>

  )
}

export default card9