import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { projects } from "../data/projects"
import { Link } from "react-router-dom"

const HighlightText = ({ text }) => {
  const parts = text.split(/(Winner of [^.]+|97% recall|3M\+ views)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("Winner") || part.includes("97%") || part.includes("views")) {
          return <span key={i} className="text-foreground font-medium">{part}</span>
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const getProjectIcon = (title) => {
  if (title.includes("Hydro AI")) return "💧"
  if (title.includes("Sightline")) return "👁️"
  if (title.includes("SumUp")) return "🍦"
  if (title.includes("Stroke")) return "🧠"
  if (title.includes("Video")) return "🎬"
  if (title.includes("Split")) return "💸"
  return "⚡"
}

export default function ProjectsPage() {
  const recent = projects.filter((p) => !p.earlier)
  const earlier = projects.filter((p) => p.earlier)

  return (
    <div className="py-8 animate-in fade-in duration-500">
      <div className="mb-10">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-foreground-muted hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          back to home
        </Link>
        <h1 className="text-xl font-medium text-foreground">All Projects</h1>
        <p className="text-sm text-foreground-muted mt-2">A complete list of things I&apos;ve built.</p>
      </div>

      <div className="space-y-8">
        {recent.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>

      {earlier.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-foreground-muted text-sm italic font-medium">
              ♦ earlier work:
            </span>
          </div>
          <p className="text-xs text-foreground-subtle mb-8 max-w-xl leading-relaxed">
            First- and second-year projects. Keeping them around because they
            were fun.
          </p>
          <div className="space-y-8">
            {earlier.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectItem({ project }) {
  return (
    <div className="group flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className={`w-6 h-6 rounded-[0.4rem] ${
                    project.imageContain
                      ? "object-contain bg-white p-px"
                      : "object-cover"
                  }`}
                />
              ) : (
                <span className="text-base">{getProjectIcon(project.title)}</span>
              )}
              {project.caseStudy ? (
                <Link
                  to={project.caseStudy}
                  className="text-foreground font-bold text-base hover:underline decoration-foreground-subtle underline-offset-2 transition-all"
                >
                  {project.title}
                </Link>
              ) : (
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-bold text-base hover:underline decoration-foreground-subtle underline-offset-2 transition-all"
                >
                  {project.title}
                </a>
              )}
              <div className="flex items-center gap-3 ml-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-subtle hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
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
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.caseStudy && (
                  <Link
                    to={project.caseStudy}
                    className="text-[11px] font-mono text-foreground-subtle hover:text-foreground transition-colors"
                  >
                    case study ↗
                  </Link>
                )}
              </div>
            </div>

            <div className="flex gap-3 ml-2 border-l border-border pl-4 pb-2 mt-1">
              <span className="text-foreground-subtle select-none text-sm leading-tight font-mono mt-[2px]">
                ↳
              </span>
              <div className="space-y-2">
                <p className="text-foreground-muted text-sm leading-relaxed max-w-2xl">
                  <HighlightText text={project.description} />
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono text-foreground-faint bg-background-elevated px-1.5 py-0.5 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
    </div>
  )
}
