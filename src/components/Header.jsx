import React from 'react'

export default function Header() {
  return (
    <header className='z-[999] relative w-full'>
      <div className="flex px-5 items-center justify-between fixed top-0 h-[4.5rem] w-full rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[8px] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full sm:left-1/2 sm:-translate-x-1/2 lg:px-10 sm:shadow-[2px_4px_2px]">
        <span className='font-bold tracking-wider text-xl'><a href="#Home">Hieu Le</a></span>
        <ul className='flex gap-5'>
          <li><a className="hover:underline hover:underline-offset-8 hover:text-gray-500" href="#About">About</a></li>
          <li><a className="hover:underline hover:underline-offset-8 hover:text-gray-500" href="#Projects">Projects</a></li>
          <li><a className="hover:underline hover:underline-offset-8 hover:text-gray-500"  href="#Contact">Contact</a></li>
        </ul>
      </div>
    </header> 
  )
}
