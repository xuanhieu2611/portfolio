import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="w-3/4 h-full mx-auto pt-24" id="About">
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:2, delay:0.5}}
            viewport={{
                once:true
            }}
            className="text-center font-bold tracking-wide text-4xl"
        >
            About me
        </motion.h2>

        <div className="flex items-center justify-center lg:m-10 sm:gap-5 lg:gap-20">
            {/* Picture */}
            <motion.img
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                viewport={{
                    once:true
                }}
                src="/basketball.JPG" alt="About me picture" className='hidden sm:inline sm:w-[150px] lg:w-[300px] h-auto rounded-lg'
            />
            
            {/* Text */}
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                viewport={{
                    once:true
                }}
                className='flex flex-col gap-5 mt-5 lg:mt-0 lg:gap-16'
            >
                <p className="text-center [text-wrap:balance] font-light sm:text-left">
                    Hi! I'm Hieu Le, a 21-year-old from 🇻🇳 Vietnam, currently based in 📍 Vancouver, British Columbia. I am pursuing a Bachelor's in <b>Computer Science</b> at the University of British Columbia and actively seeking an <b>Internship/Co-op</b> position as a <b>Full Stack Developer</b> or <b>Data Scientist</b>. My primary focus is Web Development with <b>React</b> (using both <b>TypeScript</b> and <b>JavaScript</b>). Additionally, I have a solid understanding of <b>Python</b> and <b>C++</b> from my coursework.
                </p>
                <p className="text-center [text-wrap:balance] font-light sm:text-left">
                    When <i>I'm not doing</i>, I enjoy playing basketball 🏀 and going to the gym 🏋️
                </p>
            </motion.div>
        </div>
    </div>
  )
}
