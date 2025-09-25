import React from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mt-20 relative flex items-center py-12 md:py-16"
    >
      <div className="relative z-10 w-full">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end md:col-span-1"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-white/30 glow">
              <img
                src="/ava.png"
                alt="Hieu Le Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left md:col-span-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Hieu Le
            </h1>
            <ul className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 transform rotate-45 mr-3 flex-shrink-0"></span>
                CS student at UBC
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 transform rotate-45 mr-3 flex-shrink-0"></span>
                Interested in AI and Software Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 transform rotate-45 mr-3 flex-shrink-0"></span>
                Checkout my projects below!
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
