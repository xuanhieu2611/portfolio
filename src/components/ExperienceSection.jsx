import { experiences } from "../data/experiences"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-t border-[#1F1F1F]">
      <h2 className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <p className="text-sm text-[#EBEBEB]">
                <span className="font-medium">{exp.company}</span>
                <span className="text-[#555555] mx-1.5">·</span>
                <span className="text-[#A1A1AA]">{exp.role}</span>
              </p>
              <span className="text-xs font-mono text-[#555555] flex-shrink-0">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-2">
              {exp.description}
            </p>
            <p className="text-xs font-mono text-[#444444]">
              {exp.technologies.join("  ·  ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
