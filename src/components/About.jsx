import React from 'react'

export default function About() {
  return (
    <div className="w-3/4 p-2 h-full mx-auto border-2 border-gray-500 rounded-xl md:p-10 lg:p-12" id="About">
        <h2 className="text-center font-bold tracking-wide text-4xl">About me</h2>
        <div className="flex items-center justify-center gap-5">
            <img src="/basketball.JPG" alt="About me picture" className='hidden sm:inline sm:w-[150px] lg:w-[300px] h-auto rounded-lg'/>
            <div className='flex flex-col gap-5 lg:gap-16'>
                <div className="flex flex-col items-center">
                    <h3 className='hidden sm:inline font-bold'>About</h3>
                    <p className='text-center'>I'm 21 years old and originally from Vietnam 🇻🇳<span></span></p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className='hidden sm:inline font-bold'>Education</h3>
                    <p className='text-center [text-wrap:balance]'>I'm currently a Computer Science student at the University of British Columbia</p>
                </div>   
                <div className="pb-10 flex flex-col items-center">
                    <h3 className='hidden sm:inline font-bold'>Passion</h3>
                    <p className='text-center [text-wrap:balance]'>I love coding and create things. In my free time, I also enjoy going to the gym 🏋️ and playing basketball 🏀</p>
                </div>
            </div>
        </div>
    </div>
  )
}
