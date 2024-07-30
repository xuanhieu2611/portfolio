import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="h-full w-full mx-auto" id="About">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="text-center font-bold tracking-wide text-4xl pt-20 pb-5"
      >
        About me
      </motion.h2>

      <div className="flex items-center justify-center sm:gap-5 md:gap-10 mx-10">
        {/* Picture */}
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
          src="/basketball.JPG"
          alt="About me picture"
          className="hidden sm:inline sm:w-[150px] md:w-[150px] lg:w-[200px] h-auto rounded-lg"
        />

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-5 mt-5 lg:mt-0 lg:gap-16"
        >
          <p className="text-center font-normal sm:text-left max-w-[520px]">
            I'm currently pursuing Bachelor's Degree in <b>Computer Science</b>{" "}
            at the University of British Columbia and actively seeking an{" "}
            <b>Internship/Co-op</b> position as a <b>Full Stack Developer</b> or{" "}
            <b>Data Scientist</b>
          </p>
          <p className="text-center font-normal sm:text-left max-w-[520px]">
            When <i>I'm not doing</i>, I enjoy playing basketball 🏀 and going
            to the gym 🏋️
          </p>
        </motion.div>
      </div>
    </div>
  )
}
