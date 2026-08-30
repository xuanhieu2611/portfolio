export const projects = [
  {
    title: "Spaces",
    description:
      "Production room, resource, and approval-workflow platform for the UBC Faculty of Medicine - architected and built end-to-end as the sole engineer, managing 400+ bookable rooms across sites province-wide",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Prisma",
      "MySQL",
      "AWS ECS",
      "Lambda",
    ],
    github: null,
    demo: null,
    caseStudy: "/projects/spaces",
    image: "/ubc-logo.png",
    imageContain: true,
    // Shown on /projects, but not in the home page's featured list - the
    // experience section already covers it and links to the case study.
    showOnHome: false,
  },
  {
    title: "Hydro AI",
    description:
      "Production-ready, photo-first hydration app - Claude Vision estimates a drink's volume and hydration value, with streaks, social accountability, subscriptions, and privacy-first image handling",
    technologies: [
      "React Native",
      "Expo",
      "Claude Vision",
      "Supabase",
      "RevenueCat",
      "TypeScript",
    ],
    github: "https://github.com/xuanhieu2611/Hydro-AI",
    demo: "https://apps.apple.com/ca/app/hydro-ai-water-tracker/id6785374266",
    image: "/hydro-ai-icon.png",
  },
  {
    title: "SumUp Sundae",
    description:
      "Social video platform unlocking content via weekly updates (🏆 Winner of nwHacks 2025)",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Livepeer API",
      "Firebase",
    ],
    github: "https://github.com/tyin76/sum-up-sundae",
    demo: null,
  },
  {
    title: "Sightline",
    description:
      "AI audio-describer for the visually impaired (StormHacks 2025)",
    technologies: ["Next.js", "Gemini API", "ElevenLabs", "TypeScript", "PWA"],
    github: "https://github.com/xuanhieu2611/Sightline",
    demo: "https://sightline-xi.vercel.app/describe",
  },
  {
    title: "Stride AI",
    description:
      "iOS running coach that generates personalized training plans and adapts workouts to your recent activity",
    technologies: ["Swift", "SwiftUI", "Firebase", "HealthKit"],
    github: null,
    demo: "https://getstrideai.com/",
    image: "/stride-logo.png",
    imageContain: true,
  },
  {
    title: "Stroke Detection Model",
    description:
      "ML classifier predicting stroke risk with 97% recall using patient health data",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/xuanhieu2611/StrokeDetection",
  },
  {
    title: "Video Caption Generator",
    description:
      "Auto-generate and edit video captions instantly with AWS-powered transcription",
    technologies: ["Next.js", "AWS S3", "AWS Transcribe", "Tailwind CSS"],
    github: "https://github.com/xuanhieu2611/caption-generator",
  },
  {
    title: "Split The Bills",
    description:
      "Track group expenses and automate cost-splitting with AI receipt scanning",
    technologies: ["React.js", "JavaScript", "MySQL", "Node.js", "OpenAI API"],
    github: "https://github.com/xuanhieu2611/Split-The-Bills",
    demo: "https://split-the-bills-hieu.vercel.app/",
    earlier: true,
  },
  {
    title: "Expense Tracker",
    description:
      "Full-stack app for tracking income and expenses across multiple categories",
    technologies: ["React.js", "JavaScript", "MySQL", "Django", "Python"],
    github: "https://github.com/xuanhieu2611/expense_tracker",
    demo: "https://expense-tracker-hieu.vercel.app/",
    earlier: true,
  },
  {
    title: "VitAlert",
    description:
      "Dietary insight platform tracking daily food intake and nutrient deficiencies",
    technologies: ["React", "TypeScript", "Edamam API", "Firebase"],
    github: "https://github.com/xuanhieu2611/VitAlert",
    earlier: true,
  },
]
