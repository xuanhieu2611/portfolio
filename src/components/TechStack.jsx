import { motion } from "framer-motion"

export default function TechStack() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
      className="hidden sm:flex sm:gap-5 md:gap-8 lg:gap-10 items-center justify-center"
    >
      <h2 className="text-2xl">Tech Stack |</h2>
      <img src="./javascript.png" alt="javacript" className="h-10" />
      <img src="./typescript.jpg" alt="typescript" className="h-10" />
      <img src="./node.png" alt="node.js" className="h-10" />
      <img src="./react.png" alt="react" className="h-10" />
      <img src="./mongodb.png" alt="mongodb" className="h-10" />
      <img src="./python.png" alt="python" className="h-10" />
      <img src="./cpp.png" alt="c plus plus" className="h-10" />
      <img src="./mysql.png" alt="mysql" className="h-10" />
    </motion.div>
  )
}
