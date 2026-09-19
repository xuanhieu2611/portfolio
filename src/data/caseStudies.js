export const caseStudies = {
  spaces: {
    title: "Spaces",
    tagline:
      "Booking platform at UBC Medicine. Sole engineer, empty repo to production in six months.",
    role: "Sole application engineer",
    org: "UBC Faculty of Medicine",
    period: "Feb 2026 – present",
    image: "/ubc-logo.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "AWS ECS",
      "Lambda",
      "Keycloak",
    ],
    stats: [
      { value: "6 mo", label: "empty repo to production" },
      { value: "1", label: "engineer" },
      { value: "4", label: "sites across BC" },
      { value: "3", label: "systems replaced" },
      { value: "48", label: "test suites" },
    ],
    sections: [
      {
        heading: "the problem",
        body: [
          "For twenty years, UBC Medicine booked teaching rooms, clinics, and equipment on a hotel-reservation product plus two in-house apps built to cover the gaps. The vendor was acquired, support ended, and the coordinating team was stuck paying for software nobody maintained.",
          "Nothing off-the-shelf fit a faculty spread across Vancouver, Victoria, Prince George, and Kelowna - the approval chains and contested teaching spaces are too specific. A real rebuild had always been priced as a multi-engineer, multi-year project. My manager asked me to prototype it instead. The prototype became the product.",
        ],
      },
      {
        heading: "the hard parts",
        items: [
          {
            title: "Correctness under concurrency",
            body: "Conflict detection across rooms, setup/cleanup buffers, maintenance blocks, and rooms that physically cannot be occupied together - including pooled Zoom licences and equipment. Writes use optimistic concurrency so batch approvals degrade instead of deadlocking.",
          },
          {
            title: "A recurrence engine, written from scratch",
            body: "I didn't use RRULE. Faculty scheduling needed nth-weekday rules, per-occurrence overrides, and partial series cancellation. All of it is pinned to America/Vancouver, including BC's shift to permanent UTC-7, and the tests run in that timezone.",
          },
          {
            title: "Approvals as a state machine",
            body: "Configurable approval chains, snapshotted at submission so editing a chain cannot corrupt requests already in flight. Nine-state lifecycle, plus booking rounds for contested teaching spaces.",
          },
          {
            title: "Accessible on the hard surfaces",
            body: "Keyboard and screen-reader support on a multi-step wizard and a drag-to-create calendar - the parts that are usually mouse-only - plus QR availability pages that work in a hallway on a phone.",
          },
          {
            title: "Email that actually arrives",
            body: "Transactional outbox: the email commits with the booking, then SQS to Lambda/SES, with retries, bounce handling, and admin replay.",
          },
        ],
      },
      {
        heading: "six months, one engineer",
        body: [
          "The timeline only works because I treat AI-assisted development as a practice: rules and conventions in the repo, then mechanical guardrails - typecheck, lint, 48 test suites on conflicts and timezones, container scanning in CI, and a pass through UBC's security review. Iteration speed is the point - feedback on Tuesday, in front of the team the next week.",
        ],
      },
      {
        heading: "outcome",
        body: [
          "Spaces is in production at UBC Medicine, used by faculty, staff, and students across the province. It replaces the twenty-year-old vendor system and the two in-house apps. Coordinators get workflows that match how they actually work; people booking a room no longer need the workarounds. The Faculty has offered me a continuing part-time role to carry it forward.",
        ],
      },
    ],
  },
}
