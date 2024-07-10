import React from 'react'

const items = [
    {
        id:1,
        title:"Split The Bills",
        img:"/splitthebills.png",
        description:"Split The Bills is a full-stack web application that make shared bills between students, roomates, and colleagues become much easier!",
        githubLink: "https://github.com/xuanhieu2611/Split-The-Bills",
        link: "https://split-the-bills-hieu.vercel.app/"
    },
    {
        id:2,
        title:"VitAlert",
        img:"/VitAlert.png",
        description:"VitAlert is a web application designed to help individuals maintain a balanced diet by tracking their daily food intake. VitAlert will display the total amount of specific nutrients, percentage of recommended daily intake achieved, and symptoms of deficiency of a specific nutrient. This additional information includes the deficiency rarity, deficiency symptoms , foods that contain the specific nutrient, and functions of the specific nutrient within the human body.",
        githubLink: "https://github.com/xuanhieu2611/VitAlert",
        link: "https://vitalert.tech/"
    },
    {
        id:3,
        title:"UBC Insight Website",
        img:"/ubc.png",
        description:"This is my CPSC 311 project - a full stack web allows users effectively query historical data regarding the university’s sections and rooms. I was mainly responsible for the back-end including creating RESTful API, load, validate, and parse data to process",
        githubLink: "https://github.com/xuanhieu2611/UBC-grade-insight",
    },
    {
        id:4,
        title:"Portfolio Website",
        img:"/portfolio.png",
        description:"A website that displays my personal information, contacts, and my projects",
        githubLink: "https://github.com/xuanhieu2611/portfolio",
    }
]

export default function Projects() {
  return (
    <div id="Projects" className='pt-20'>
        <h1 className='text-center font-bold tracking-wide text-4xl'>Projects</h1>
        {items && items.map((item,index) => (
            <div key={item.id} className='flex flex-col items-center justify-between mx-auto my-20 lg:flex-row lg:w-3/4 lg:mb-40'>
                {index%2==0 && <img src={item.img} alt="Project picture" className='hidden lg:inline rounded-lg w-[500px] h-auto shadow-[0_0_16px]'/>}
                <img src={item.img} alt="Project picture" className='lg:hidden rounded-lg w-[500px] h-auto shadow-[0_0_16px]'/>
                <div className='flex flex-col'>
                    <p className='p-5 text-center [text-wrap:balance]'>{item.description}</p>
                    <div className='flex gap-5 items-center justify-center'>
                        <button className='flex items-center justify-center gap-2 rounded-xl px-4 py-1 dashing_button hover:scale-105' onClick={() => (window.open(`${item.githubLink}`))}>
                            <img className="w-5 h-5" src="/github.svg.png" alt="github icon" />
                            <span>Github</span>
                        </button>
                        <button className="border-0 rounded-xl px-2 py-1 shadow-[0_0_12px_4px_#22c55e] text-green-500 hover:shadow-[0_0_8px_6px_#22c55e] hover:scale-105" onClick={() => (window.open(`${item.link}`))}>
                            Visit Website
                        </button>
                    </div>
                </div>
                {index%2==1 && <img src={item.img} alt="Project picture" className='hidden lg:inline rounded-lg w-[500px] h-auto shadow-[0_0_16px]'/>}
            </div>
        ))}
    </div>
  )
}