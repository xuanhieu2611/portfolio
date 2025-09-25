import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mt-20 relative flex items-center py-12 md:py-16"
    >
      <div className="relative z-10 w-full">
        <div className="flex flex-1 flex-col md:justify-between md:flex-row gap-6 md:gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="w-32 h-32 md:w-60 md:h-60 rounded-xl overflow-hidden border-4 border-white glow">
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
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Hieu Le
            </h1>
            <ul className="text-base text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 transform rotate-45 mr-3 flex-shrink-0"></span>
                CS student at{" "}
                <a
                  href="https://www.ubc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors duration-300 ml-1"
                >
                  <img
                    src="/ubc-logo.png"
                    alt="UBC Logo"
                    className="w-4 h-4 object-contain bg-white rounded-full"
                  />
                  UBC
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 transform rotate-45 mr-3 flex-shrink-0"></span>
                Interested in AI and Software Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 transform rotate-45 mr-3 flex-shrink-0"></span>
                <button
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 transform"
                >
                  Checkout my projects below!
                  <ArrowDown className="w-4 h-4" />
                </button>
              </li>
            </ul>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center md:justify-start gap-2 mt-6"
            >
              <div className="group">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  <Github className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm whitespace-nowrap overflow-hidden w-0 group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
                    GitHub
                  </span>
                </a>
              </div>

              <div className="group">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm whitespace-nowrap overflow-hidden w-0 group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className="group">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <Twitter className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm whitespace-nowrap overflow-hidden w-0 group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
                    Twitter
                  </span>
                </a>
              </div>

              <div className="group">
                <a
                  href="mailto:alex@example.com"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm whitespace-nowrap overflow-hidden w-0 group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
                    Email
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
