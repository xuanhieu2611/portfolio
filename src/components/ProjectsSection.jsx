import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "SumUp Sundae - nwHacks 2025 Winner",
      description:
        "A social video platform where weekly video updates unlock access to your friends’ content.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      github: "https://github.com/tyin76/sum-up-sundae",
      demo: "https://demo.example.com",
    },
    {
      title: "Stroke Detection Model",
      description:
        "Predicting stroke risk from patient health data with 97% recall using advanced ML models.",
      technologies: ["TypeScript", "Python", "TensorFlow", "VS Code API"],
      github: "https://github.com/xuanhieu2611/StrokeDetection",
    },
    {
      title: "Video Caption Generator",
      description:
        "Upload videos, auto-generate captions, and edit them instantly with AWS-powered transcription.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/xuanhieu2611/caption-generator",
    },
    {
      title: "Split The Bills",
      description:
        "Easily track group expenses and automate cost-splitting with AI-powered receipt scanning.",
      technologies: ["React Native", "Python", "MQTT", "InfluxDB"],
      github: "https://github.com/xuanhieu2611/Split-The-Bills",
      demo: "https://split-the-bills-hieu.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description:
        "A full-stack web application that keep tracks of your income and expenses.",
      technologies: ["React.js", "JavaScript", "MySQL", "Django", "Python"],
      github: "https://github.com/xuanhieu2611/expense_tracker",
      demo: "https://expense-tracker-hieu.vercel.app/",
    },
    {
      title: "VitAlert – Nutrition Tracking Web App",
      description:
        "Tracks daily food intake, highlights nutrient levels, and flags potential deficiencies with personalized insights.",
      technologies: ["React", "TypeScript", "Edamam API", "Firebase"],
      github: "https://github.com/xuanhieu2611/VitAlert",
    },
  ]

  return (
    <section id="projects" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-2 gradient-text">
          Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[var(--bg-secondary)] backdrop-blur-sm rounded-lg p-3 border border-gray-800/80 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
