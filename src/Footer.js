import React from 'react'

export default function Footer() {
  return (
    <footer class="flex flex-row gap-5 justify-between items-center h-24 p-5 w-10/12">
  <div class="flex flex-row gap-3">
  <p class="tracking-tighter text-white">Copyright @ 2024 Rangesh</p>
  <p text-white>|</p>
  <p class="tracking-tighter text-white">Designed By Pixelaxis</p>
  </div>
  <div class="flex flex-row gap-10">
          <a className='text-white'>Home</a>
          <a className='text-white'>About</a>
          <a className='text-white'>Project</a>
          <a className='text-white'>Contact</a>
  </div>
</footer>
  )
}
