import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { experiences } from "../data/experiences"

// Phrases worth pulling out of the surrounding muted body text. Keep the
// source and the test in sync - the test is the same alternation, anchored.
const HIGHLIGHT_SOURCE =
  "Winner of [^.]+|97% recall|3M\\+ views|20-year-old|up to 80%|40%"

const HighlightText = ({ text }) => {
  const parts = text.split(new RegExp(`(${HIGHLIGHT_SOURCE})`, "g"))
  const isHighlight = new RegExp(`^(?:${HIGHLIGHT_SOURCE})$`)
  return (
    <>
      {parts.map((part, i) => {
        if (isHighlight.test(part)) {
          return (
            <span key={i} className="text-foreground font-medium">
              {part}
            </span>
          )
        }
        return part
      })}
    </>
  )
}

const getCompanyIcon = (company) => {
  if (company.includes("UBC") || company.includes("University"))
    return "/ubc-logo.png"
  // Return null for others to use default/fallback or just no icon
  return null
}

const CompanyIcon = ({ company }) => {
  const icon = getCompanyIcon(company)
  if (icon) {
    return (
      <img
        src={icon}
        alt={company}
        className="w-4 h-4 object-contain bg-white rounded-sm"
      />
    )
  }
  if (company.includes("Stride"))
    return (
      <img
        src="/stride-logo.png"
        alt={company}
        className="w-4 h-4 object-contain bg-white rounded-sm"
      />
    )
  if (company.includes("Teck"))
    return (
      <img
        src="/teck.png"
        alt={company}
        className="w-4 h-4 object-contain bg-white rounded-sm"
      />
    )
  return <span className="w-4 h-4 rounded-full bg-border-subtle" />
}

export default function ExperienceSection() {
  const current = experiences.filter((exp) => exp.current)
  const past = experiences.filter((exp) => !exp.current)

  return (
    <section id="experience" className="space-y-8">
      {current.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-foreground-muted text-sm italic font-medium">
              ♦ currently:
            </span>
          </div>
          <div className="space-y-6">
            {current.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-foreground-muted text-sm italic font-medium">
              ♦ previously:
            </span>
          </div>
          <div className="space-y-6">
            {past.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function ExperienceItem({ exp }) {
  return (
    <div className="group relative pl-4 border-l border-border ml-1">
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-background-card border border-border-subtle group-hover:border-foreground transition-colors" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-foreground font-medium text-sm flex items-center gap-2">
          <CompanyIcon company={exp.company} />
          {exp.company}
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-subtle hover:text-foreground transition-colors"
              aria-label="Visit website"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <span className="text-foreground-subtle text-xs font-normal hidden sm:inline">
            ·
          </span>
          <span className="text-foreground-muted font-normal">{exp.role}</span>
        </h3>
        {exp.period && (
          <span className="text-foreground-subtle text-xs font-mono pl-6 sm:pl-0">
            {exp.period}
          </span>
        )}
      </div>

      <div className="space-y-2 mt-1">
        {exp.bullets.map((bullet, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-foreground-subtle select-none text-sm leading-tight font-mono">
              ↳
            </span>
            <p className="text-foreground-muted text-sm leading-tight max-w-xl">
              <HighlightText text={bullet.text} />
              {bullet.link && (
                <>
                  {" "}
                  <Link
                    to={bullet.link}
                    className="text-foreground-muted hover:text-foreground underline decoration-foreground-subtle underline-offset-2 transition-colors whitespace-nowrap"
                  >
                    {bullet.linkLabel} ↗
                  </Link>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
