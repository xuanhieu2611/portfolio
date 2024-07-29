import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

export default function Hero() {
  return (
    <div
      className=" h-screen w-full flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-5 md:gap-10 lg:gap-24"
      id="Homepage"
    >
      {/* Hero text */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Text */}
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="font-normal tracking-widest text-4xl pt-10 lg:text-6xl"
        >
          Hieu Le
        </motion.h2>
        <motion.h1
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="font-bold text-5xl lg:text-7xl bg-gradient-to-br from-emerald-300 to-green-500 bg-clip-text text-transparent"
        >
          Software Engineer
        </motion.h1>
        <motion.p
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="font-light text-center [text-wrap:balance]"
        >
          based in Vancouver, BC 📍 with focus on Full Stack Web Development
        </motion.p>
        <motion.div
          variants={container(0.4)}
          initial="hidden"
          animate="visible"
          className="flex gap-5"
        >
          <button
            className="border-solid border-2 border-gray-700 p-2 rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500"
            onClick={() => (location.href = "/#Projects")}
          >
            See the Latest Works
          </button>
          <button
            className="border-solid border-2 border-green-500 p-2 rounded-xl bg-green-500 text-white hover:bg-gray-50 hover:text-gray-950 hover:border-gray-700"
            onClick={() => (location.href = "/#Contact")}
          >
            Contact me
          </button>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="flex gap-5"
        >
          <img
            src="/instagram.svg"
            alt="My Instagram"
            className="h-10 w-10 hover:cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-100"
            onClick={() => window.open("https://instagram.com/hieu.spring")}
          />
          <img
            src="/linkedin.svg.png"
            alt="My Linkedin"
            className="h-10 w-10 hover:cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-100"
            onClick={() => window.open("https://linkedin.com/in/hieule2611")}
          />
          <img
            src="/github.svg.png"
            alt="My Github"
            className="h-10 w-10 hover:cursor-pointer hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-100"
            onClick={() => window.open("https://github.com/xuanhieu2611")}
          />
        </motion.div>
      </div>

      {/* Hero image */}
      <div className="flex w-36 overflow-hidden items-center justify-center">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src="/ava.jpg"
          alt="My Portrait"
          className="object-fit rounded-full"
        />
      </div>
    </div>
  )
}
