import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-20 lg:gap-40 sm:h-auto sm:pt-48" id="Hero">
        {/* Hero text */}
        <div className='flex flex-col items-center justify-center gap-8'>
          {/* Text */}
          <h2 className='font-normal tracking-widest text-3xl pt-10 lg:text-5xl'>Hieu Le</h2>
          <h1 className='font-bold text-4xl lg:text-6xl bg-gradient-to-br from-emerald-300 to-green-500 bg-clip-text text-transparent'>Software Engineer</h1>
          <div className="flex gap-5">
            <button className='border-solid border-2 border-gray-700 p-2 rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500' onClick={() => location.href='/#Projects'}>See the Latest Works</button>
            <button className='border-solid border-2 border-green-500 p-2 rounded-xl bg-green-500 text-white hover:bg-gray-50 hover:text-gray-950 hover:border-gray-700' onClick={() => location.href='/#Contact'}>Contact me</button>
          </div>

          {/* Social Media */}
          <div className="flex gap-5">
            <img src="/instagram.svg" alt="My Instagram" className='h-10 w-10 hover:cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-100' onClick={() => (window.open("https://instagram.com/hieu.spring"))}/>
            <img src="/linkedin.svg.png" alt="My Linkedin" className='h-10 w-10 hover:cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-100' onClick={() => (window.open("https://linkedin.com/in/hieule2611"))}/>
            <img src="/github.svg.png" alt="My Github" className='h-10 w-10 hover:cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-100' onClick={() => (window.open("https://github.com/xuanhieu2611"))}/>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex w-48 overflow-hidden items-center justify-center">
          <img src="/ava.jpg" alt="My Portrait" className='object-fit rounded-full'/>
        </div>

      </div>

      {/* Tech Stack */}
      <div className=' hidden sm:flex sm:gap-5 lg:gap-10 items-center justify-center pt-32'>
        <h2 className='text-2xl text-gray-600'>Tech Stack |</h2>
        <img src="./javascript.png" alt="javacript" className="h-10" />
        <img src="./typescript.jpg" alt="typescript" className="h-10" />
        <img src="./node.png" alt="node.js" className="h-10" />
        <img src="./react.png" alt="react" className="h-10" />
        <img src="./mongodb.png" alt="mongodb" className="h-10" />
        <img src="./python.png" alt="python" className="h-10" />
        <img src="./cpp.png" alt="c plus plus" className="h-10" />
        <img src="./mysql.png" alt="mysql" className="h-10" />
      </div>
    </>
  )
}
