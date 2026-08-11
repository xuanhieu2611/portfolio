export const experiences = [
  {
    company: "University of British Columbia",
    role: "Software Developer Co-op",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      {
        text: "Sole engineer on Spaces, a production room, resource, and approval-workflow platform I architected end-to-end and took from empty repository to production in six months - 200+ bookable rooms across Faculty of Medicine sites province-wide, replacing a 20-year-old vendor system with no remaining support",
        link: "/projects/spaces",
        linkLabel: "read the case study",
      },
      {
        text: "Built Fac360, an automated platform generating standardized CVs and research reports for Faculty of Medicine professors across the university",
      },
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Prisma", "Python"],
  },
  {
    company: "Teck Resources Ltd.",
    role: "Software Developer Co-op",
    period: "Dec 2024 – Aug 2025",
    current: false,
    bullets: [
      {
        text: "Engineered an event-driven integration between 2 ATS systems, eliminating manual duplicate entry and saving ~6–8 hours/week for the recruiting team",
      },
    ],
    technologies: ["Python", "Power Automate", "Power BI", "Azure DevOps"],
  },
]
