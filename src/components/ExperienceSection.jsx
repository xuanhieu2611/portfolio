import React from "react"
import { motion } from "framer-motion"
import { Building2, Calendar } from "lucide-react"
import { experiences } from "../data/experiences"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-2 gradient-text">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 opacity-30"></div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <div className="absolute left-2 top-1.5 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-[var(--bg-primary)] z-10"></div>
              <div className="group">
                <div className="flex flex-wrap items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-3">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </p>
                </div>
                <h4 className="text-base font-semibold gradient-text mb-2">
                  {exp.role}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
