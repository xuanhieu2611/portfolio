export const caseStudies = {
  spaces: {
    title: "Spaces",
    tagline:
      "A production room, resource, and approval-workflow platform for the UBC Faculty of Medicine, replacing a twenty-year-old system the vendor had abandoned, along with the two in-house applications the Faculty built to work around it. Designed, architected, and built end-to-end as the sole engineer - empty repository to production in six months.",
    role: "Sole application engineer",
    org: "UBC Faculty of Medicine",
    period: "Feb 2026 – present",
    image: "/ubc-logo.png",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "MySQL",
      "AWS ECS Fargate",
      "Lambda",
      "SQS",
      "SES",
      "Keycloak / OIDC",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    stats: [
      { value: "6 mo", label: "empty repo to production" },
      { value: "1", label: "engineer on the project" },
      { value: "113K", label: "lines of TypeScript" },
      { value: "400+", label: "bookable rooms province-wide" },
      { value: "220+", label: "reviewed pull requests" },
      { value: "48", label: "test suites, ~745 assertions" },
    ],
    sections: [
      {
        heading: "the problem",
        body: [
          "For roughly twenty years, the Faculty's resource coordinating team ran on FM:Systems Resource Scheduler - a product shaped like hotel reservation software, being used to manage teaching rooms, clinical spaces, and shared equipment. The fit was never right, and it decayed. The team accumulated workarounds for things the software simply could not express - including two applications UBC built and maintained in-house, Room Finder and Advanced Booking Manager, propping up the gaps Resource Scheduler left. The vendor was acquired and support effectively ended, leaving them paying a significant annual licence for a system nobody maintained anymore, plus two internal apps to keep alive alongside it.",
          "They had been looking for a replacement for years and could not find one. The requirements are specific enough to the Faculty of Medicine - its approval hierarchies, its contested teaching spaces, its province-wide distributed sites - that no off-the-shelf product addresses them, and building in-house had always been priced as a multi-engineer, multi-year effort nobody wanted to fund.",
          "My manager had seen how quickly I was moving with AI-assisted development and suggested I prototype it instead. The prototype became the project. I took it from an empty repository to a system running in production, owning every layer: the relational data model, the domain logic, the API surface, the entire frontend and design system, the AWS infrastructure, the security and identity model, the test strategy, the documentation, and the stakeholder conversations that decided what got built and in what order.",
        ],
      },
      {
        heading: "the hard parts",
        items: [
          {
            title: "Correctness under concurrency",
            body: "I wrote a conflict-detection engine that reasons about per-resource setup and cleanup buffer windows, scheduled maintenance blocks, and mutually-exclusive \"separation groups\" of rooms that physically cannot be occupied at the same time. I then extended the same guarantees to pooled Zoom licences and portable equipment, so a room booking and an asset booking can never silently double-allocate. Writes run inside Prisma interactive transactions with optimistic concurrency control, retry on write-conflict errors, and bounded parallelism - so batch-approving hundreds of bookings degrades gracefully instead of deadlocking.",
          },
          {
            title: "A recurrence engine, written from scratch",
            body: "I chose not to adopt RRULE. Real faculty scheduling required monthly nth-weekday and end-of-month clamping strategies, per-occurrence room and time overrides, partial series cancellation, and series extension - none of which RRULE expresses cleanly. All scheduling arithmetic is pinned to America/Vancouver with explicit DST handling, including British Columbia's transition to permanent UTC-7, and the entire test suite executes in that timezone so regressions surface in CI rather than in somebody's calendar.",
          },
          {
            title: "Approvals as a state machine",
            body: "Admin-configurable approval chains supporting both named-user and role-based approvers, snapshotted onto each booking at submission time - so an admin editing a chain cannot corrupt requests already in flight. Layered on top: advanced-booking submission rounds for contested teaching spaces, resource-policy review gates, and a nine-state booking lifecycle.",
          },
          {
            title: "Building accessibly, on purpose",
            body: "Accessibility was a requirement, not a retrofit: semantic ARIA roles, full keyboard navigation, and screen-reader labelling applied across every surface - including the hard ones, like a multi-step booking wizard and a drag-to-create availability calendar, where the obvious implementation is mouse-only and locks out anyone who can't use one. Public QR-code availability pages meant the same content also had to work for someone standing in a hallway on a phone.",
          },
          {
            title: "Email that actually arrives",
            body: "I replaced fire-and-forget email with a transactional outbox. Messages commit to the database in the same transaction as the business write, then dispatch event-driven through SQS to a Lambda worker backed by SES - deduplicated by idempotency key, retried with exponential backoff, reconciled against bounce and complaint webhooks, and replayable by an administrator from the UI. Templates live in the database and are editable in-product, all behind a provider abstraction so the transport can be swapped without touching business logic.",
          },
        ],
      },
      {
        heading: "six months, one engineer",
        body: [
          "The interesting question about this project is not what it does, it is how it got built on that timeline. The honest answer is that I use AI-assisted development seriously, as an engineering practice with its own discipline rather than as autocomplete - and the discipline is the part that mattered.",
          "This was never a one-shot generation problem. The domain is niche and the requirements lived in the heads of the people who had been working around bad software for two decades; getting it right meant many rounds of building, demoing, and correcting against real users. What AI leverage bought me was iteration speed - the ability to take a piece of feedback on Tuesday and have it in front of the team the following week - which on a project this domain-heavy compounds far more than raw typing speed does.",
          "A codebase this size normally has a team's worth of review pressure keeping it coherent. With one engineer, I had to manufacture that pressure. I codified the repository's engineering standards into agent rules, reusable skills, and conventions checked into version control alongside the code, so AI-assisted work started from the project's real architecture and constraints instead of generic defaults - which is what kept naming, error handling, data-access patterns, and test structure uniform across 551 files.",
          "The guardrails were deliberately mechanical, because the failure mode of generated code is that it looks right and is subtly wrong, which is exactly what a booking system cannot absorb: tsc and ESLint as hard pre-deploy gates, 48 test suites concentrated on conflicts, recurrence, timezone arithmetic, and approval gating, 220+ self-reviewed pull requests, and Trivy and dependency scanning in CI. The system also passed institutional security review at UBC, which is a different and less forgiving kind of audit than a passing test suite.",
          "That approach has since become something of an internal reference point. Colleagues have asked how the velocity was achieved, and other teams have started looking at the same methods for modernizing their own internal tools.",
        ],
      },
      {
        heading: "architecture",
        items: [
          {
            title: "Frontend",
            body: "Next.js 16 on the App Router with React 19 Server Components, TypeScript under strict mode, Tailwind CSS v4 and shadcn/ui over Radix primitives. A 31-component internal design system across 132 React components, with form handling through React Hook Form and Zod schemas shared between client and server. The deep component layer includes a multi-step booking wizard, drag-to-create availability calendars on dnd-kit, 360° room panoramas, a command palette, and guided product tours for onboarding - with semantic ARIA roles, keyboard navigation, and screen-reader labelling applied across the surface.",
          },
          {
            title: "Backend",
            body: "A modular monolith on Node.js 24 using Prisma against MySQL 8 on Amazon RDS, with business logic isolated into domain modules behind server actions and API routes. The schema spans 49 models and 96 committed migrations covering resource taxonomy, multi-room bookings, recurring series, approval chains, exclusively-scheduled assets, the email outbox, and an append-only audit log.",
          },
          {
            title: "Infrastructure",
            body: "Containerized with a multi-stage Docker build against the Next.js standalone output, running on ECS Fargate - a migration I performed off an earlier Amplify deployment to gain control over the runtime. RDS over enforced TLS, S3 and CloudFront for media via presigned uploads and signed delivery, API Gateway fronting Lambda functions I wrote (email dispatch, SES inbound forwarding, a Keycloak JWT authorizer, a scheduled cron, and automated Secrets Manager rotation), IAM least-privilege policies, and CloudWatch RUM for real-user telemetry.",
          },
          {
            title: "Identity and delivery",
            body: "Institutional Keycloak SSO over OIDC/OAuth 2.0 through NextAuth v5, with JWT sessions and OIDC token sets persisted server-side to keep cookies under browser size limits. A seven-role RBAC model supplemented by per-user capability flags, route middleware backed by server-side authorization re-checks as defense in depth, CSP and HSTS headers, and a 60-minute idle timeout to satisfy a UBC IT security control. CI/CD runs on GitHub Actions self-hosted runners with BuildKit caching, SBOM generation, Trivy and npm audit gates, and digest-pinned ECS deploys so every release is immutable and traceable.",
          },
        ],
      },
      {
        heading: "what shipped on top",
        body: [
          "A 22-route administrative suite with global booking search and CSV export, live resource-availability timelines, maintenance-window scheduling, database-backed email template editing with a delivery log, and a super-admin audit trail rendering field-level change diffs - written non-blocking through Next.js after() so observability never slows a user action or fails a booking.",
          "Plus the adoption features that drove real usage: Panopto lecture-capture folder sync, ICS calendar export, public QR-code room availability pages, shareable tokenized room links, saved and shared room presets, one-click rebooking, and an optional OpenAI-powered bulk-paste importer that normalizes unstructured pasted schedules into validated booking records behind a feature flag.",
        ],
      },
      {
        heading: "outcome",
        body: [
          "Spaces runs in production with a pilot cohort of faculty staff and is scheduled for full cutover from the legacy system. I built the migration tooling that reads reservations out of the legacy Resource Scheduler REST API and imports them into the new schema, ran the phased rollout, and fed user feedback back into the product through weekly demos.",
          "It replaces all three - the vendor system the coordinating team had been stuck with for two decades and the two in-house apps holding it together - and it improves both sides of the transaction at once - the coordinators get approval workflows, conflict detection, and audit trails that match how they actually work, and the faculty booking a room get a process that no longer requires knowing the workarounds. That second part is the reason the feedback has been what it has been.",
          "Beyond the code, I gathered requirements directly from faculty stakeholders, translated a PRD into a delivery roadmap, reviewed and merged contributions from a DevOps collaborator and other developers, wrote 32 architecture and feature documents so the platform could survive handoff, and presented a full walkthrough to engineering managers, senior developers, solution architects, and cloud engineers.",
          "The Faculty has since offered me a continuing part-time engineering role to carry the platform through full migration and beyond.",
        ],
      },
    ],
  },
}
