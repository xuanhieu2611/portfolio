import { ExternalLink, Github } from "lucide-react"
import { projects } from "../data/projects"
import { Link } from "react-router-dom"

const HighlightText = ({ text }) => {
  const parts = text.split(/(Winner of [^.]+|97% recall|3M\+ views)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (
          part.startsWith("Winner") ||
          part.includes("97%") ||
          part.includes("views")
        ) {
          return (
            <span key={i} className="text-foreground font-medium">
              {part}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3) // Show top 3 projects

  const getProjectIcon = (title) => {
    if (title.includes("Sightline")) return "👁️"
    if (title.includes("SumUp")) return "🍦"
    if (title.includes("Stroke")) return "🧠"
    if (title.includes("Video")) return "🎬"
    if (title.includes("Split")) return "💸"
    return "⚡"
  }

  return (
    <section id="projects" className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-foreground-muted text-sm italic font-medium">
          ♦ other things i've been building:
        </span>
      </div>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <div key={index} className="group flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="text-base">{getProjectIcon(project.title)}</span>
              <a
                href={project.demo || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-bold text-sm hover:underline decoration-foreground-subtle underline-offset-2 transition-all"
              >
                {project.title}
              </a>
              <div className="flex items-center gap-2 ml-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-subtle hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-3 h-3" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-subtle hover:text-foreground transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex gap-3 ml-1 border-l border-border pl-4 pb-1">
              <span className="text-foreground-subtle select-none text-sm leading-tight font-mono mt-[2px]">
                ↳
              </span>
              <div className="space-y-2">
                <p className="text-foreground-muted text-sm leading-tight max-w-xl">
                  <HighlightText text={project.description} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 ml-5">
        <Link
          to="/projects"
          className="text-xs font-mono text-foreground-muted hover:text-foreground transition-colors flex items-center gap-2"
        >
          <span className="text-foreground-subtle">↳</span> view all projects ↗
        </Link>
      </div>
    </section>
  )
}
