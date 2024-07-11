import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="w-3/4 p-2 h-full mx-auto border-2 border-gray-500 rounded-xl md:p-10 lg:p-12" id="About">
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            viewport={{
                once:true
            }}
            className="text-center font-bold tracking-wide text-4xl"
        >
            About me
        </motion.h2>
        <div className="flex items-center justify-center gap-5">
            <motion.img
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                viewport={{
                    once:true
                }}
                src="/basketball.JPG" alt="About me picture" className='hidden sm:inline sm:w-[150px] lg:w-[300px] h-auto rounded-lg'
            />
            <div className='flex flex-col gap-5 lg:gap-16'>
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    viewport={{
                        once:true
                    }}
                    className="flex flex-col items-center"
                >
                    <h3 className='hidden sm:inline font-bold'>About</h3>
                    <p className='text-center [text-wrap:balance]'>Hi! I'm Hieu Le, a 21-year-old originally from Vietnam 🇻🇳. Currently, I'm based in  📍 <b>Vancouver, British Columbia</b></p>
                    <p className='text-center [text-wrap:balance]'>I am actively seeking an <b>Internship/Co-op</b> position as a <b>Full Stack Developer</b> or <b>Data Scientist</b>. My primary focus is Web Development with <b>React</b> (using both <b>TypeScript</b> and <b>JavaScript</b>). Additionally, I have a solid understanding of <b>Python</b> and <b>C++</b> from my coursework.</p>
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1, delay:0.3}}
                    viewport={{
                        once:true
                    }}
                    className="flex flex-col items-center"
                >
                    <h3 className='hidden sm:inline font-bold'>Education</h3>
                    <p className='text-center [text-wrap:balance]'>I am currently pursuing a Bachelor degree in <b>Computer Science</b> at the <b>University of British Columbia</b></p>
                </motion.div>   
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1, delay:0.6}}
                    viewport={{
                        once:true
                    }}
                    className="flex flex-col items-center"
                >
                    <h3 className='hidden sm:inline font-bold'>Passion</h3>
                    <p className='text-center [text-wrap:balance]'>I have a deep passion for coding and enjoy building websites and applications. In my free time, I love going to the gym 🏋️ and playing basketball 🏀</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
