import { motion } from "framer-motion"
import { projects } from "../data/constants"

export default function Projects() {
  return (
    <div id="Projects" className="pt-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="text-center font-bold tracking-wide text-4xl"
      >
        Projects
      </motion.h1>
      {projects &&
        projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-between mx-auto my-20 md:flex-row lg:mb-40 lg:gap-10"
          >
            {/* Mobile display */}
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              viewport={{
                once: true,
              }}
              src={project.img}
              alt="Project picture"
              className="md:hidden rounded-lg w-[500px] h-auto shadow-[0_0_16px]"
            />

            {/* Even display */}
            {index % 2 == 0 && (
              <motion.img
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: true,
                }}
                src={project.img}
                alt="Project picture"
                className="hidden md:inline rounded-lg w-[300px] lg:w-[500px] h-auto shadow-[0_0_16px]"
              />
            )}

            {/* Text Area */}
            <div className="flex flex-col">
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: true,
                }}
                className="p-5 text-center [text-wrap:balance]"
              >
                {project.description}
              </motion.p>
              <div className="flex gap-5 items-center justify-center">
                <motion.button
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{
                    once: true,
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl px-4 py-1 dashing_button hover:scale-105"
                  onClick={() => window.open(`${project.githubLink}`)}
                >
                  <img
                    className="w-5 h-5"
                    src="/github.svg.png"
                    alt="github icon"
                  />
                  <span>Github</span>
                </motion.button>
                {project.link && (
                  <motion.button
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{
                      once: true,
                    }}
                    className="border-0 rounded-xl px-2 py-1 shadow-[0_0_12px_4px_#22c55e] text-green-500 hover:shadow-[0_0_8px_6px_#22c55e] hover:scale-105"
                    onClick={() => window.open(`${project.link}`)}
                  >
                    Visit Website
                  </motion.button>
                )}
              </div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{
                  once: true,
                }}
                className="flex flex-wrap items-center justify-center gap-2 py-4"
              >
                {project.stack &&
                  project.stack.map((tech) => (
                    <span className="px-2 py-1 bg-gray-300 rounded-md">
                      {tech}
                    </span>
                  ))}
              </motion.div>
            </div>

            {/* Odd display */}
            {index % 2 == 1 && (
              <motion.img
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: true,
                }}
                src={project.img}
                alt="Project picture"
                className="hidden md:inline rounded-lg w-[300px] lg:w-[500px] h-auto shadow-[0_0_16px]"
              />
            )}
          </div>
        ))}
    </div>
  )
}
