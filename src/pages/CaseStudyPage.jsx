import { ArrowLeft } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"
import { caseStudies } from "../data/caseStudies"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies[slug]

  if (!study) return <Navigate to="/projects" replace />

  return (
    <article className="py-8 animate-in fade-in duration-500">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-foreground-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        back to home
      </Link>

      <header className="space-y-4">
        <div className="flex items-center gap-2">
          {study.image && (
            <img
              src={study.image}
              alt=""
              aria-hidden="true"
              className="w-6 h-6 rounded-[0.4rem] object-contain bg-white p-px"
            />
          )}
          <h1 className="text-xl font-medium text-foreground">{study.title}</h1>
        </div>

        <p className="text-sm text-foreground-muted leading-relaxed max-w-xl">
          {study.tagline}
        </p>

        <p className="text-xs font-mono text-foreground-subtle">
          {study.role} · {study.org} · {study.period}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-foreground-faint bg-background-elevated px-1.5 py-0.5 rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden mt-10">
        {study.stats.map((stat) => (
          <div key={stat.label} className="bg-background-elevated px-3 py-4">
            <div className="text-foreground font-medium text-lg leading-none">
              {stat.value}
            </div>
            <div className="text-foreground-muted text-[11px] font-mono mt-1.5 leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-12 mt-14">
        {study.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-foreground-muted text-sm italic font-medium">
              ♦ {section.heading}
            </h2>

            {section.body && (
              <div className="space-y-3 border-l border-border pl-4 ml-1">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-foreground-muted text-sm leading-relaxed max-w-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.items && (
              <div className="space-y-6 border-l border-border pl-4 ml-1">
                {section.items.map((item) => (
                  <div key={item.title} className="space-y-1.5">
                    <h3 className="text-foreground font-medium text-sm">
                      {item.title}
                    </h3>
                    <p className="text-foreground-muted text-sm leading-relaxed max-w-xl">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-14">
        <Link
          to="/projects"
          className="text-xs font-mono text-foreground-muted hover:text-foreground transition-colors flex items-center gap-2"
        >
          <span className="text-foreground-subtle">↳</span> view all projects ↗
        </Link>
      </div>
    </article>
  )
}
