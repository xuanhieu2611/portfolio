export const experiences = [
  {
    company: "University of British Columbia",
    role: "Software Developer Co-op",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      {
        text: "Sole engineer on Spaces, a production room, resource, and approval-workflow platform I architected end-to-end and took from empty repository to production in six months - 400+ bookable rooms across Faculty of Medicine sites province-wide, replacing a 20-year-old vendor system and the two in-house applications built to work around it",
        link: "/projects/spaces",
        linkLabel: "read the case study",
      },
      {
        text: "Designed the scheduling core myself: a conflict-detection engine and a custom recurrence engine with DST-correct time handling, over a 49-model MySQL schema backing multi-room bookings, a nine-state booking lifecycle, and configurable multi-stage approval chains",
      },
      {
        text: "Ran the infrastructure too - Next.js on ECS Fargate, RDS over enforced TLS, S3/CloudFront presigned media, five Lambda workers, and a GitHub Actions pipeline that gates on container and dependency scanning and deploys digest-pinned images",
      },
      {
        text: "Built AI-assisted parsing pipelines for Fac360, extracting publications and grants from unstructured legacy academic records into structured data and cutting manual data entry by up to 80%",
      },
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Prisma", "MySQL", "Python"],
  },
  {
    company: "Teck Resources Ltd.",
    role: "Software Developer Co-op",
    period: "Dec 2024 – Aug 2025",
    current: false,
    bullets: [
      {
        text: "Engineered an event-driven integration between 2 applicant tracking systems, eliminating manual duplicate entry and cutting cross-platform data discrepancies by 85% for the recruiting team",
      },
      {
        text: "Automated the recruitment ticket intake workflow with custom routing logic and dynamic forms, cutting ticket resolution time by 40%",
      },
    ],
    technologies: ["Python", "Power Automate", "Azure DevOps"],
  },
]
