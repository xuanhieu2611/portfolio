import { ExternalLink, Github } from "lucide-react"
import { projects } from "../data/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-t border-[#1F1F1F]">
      <h2 className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
        Projects
      </h2>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index} className="group flex items-start gap-3">
            <span className="text-[#444444] font-mono text-sm mt-px flex-shrink-0 select-none">
              ↳
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-sm font-medium text-[#EBEBEB] group-hover:text-white transition-colors">
                  {project.title}
                </span>
                <span className="text-[#444444] select-none">—</span>
                <span className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555555] hover:text-[#A1A1AA] transition-colors flex-shrink-0"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555555] hover:text-[#A1A1AA] transition-colors flex-shrink-0"
                    aria-label={`${project.title} demo`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <p className="text-xs font-mono text-[#444444] mt-1">
                {project.technologies.join("  ·  ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
