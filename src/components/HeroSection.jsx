import { Link } from "react-router-dom"

function InlineLink({ to, href, logo, alt, children }) {
  const content = (
    <>
      {children}
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground-faint"></span>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
    </>
  )
  const className = "relative transition-colors pb-px group"

  return (
    <span className="whitespace-nowrap">
      {logo && (
        <img
          src={logo}
          alt={alt}
          className="inline-block w-4 h-4 object-contain bg-white rounded-sm align-middle translate-y-[-1.5px] mr-1"
        />
      )}
      {to ? (
        <Link to={to} className={className}>
          {content}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      )}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-8">
      <div className="flex flex-col items-start gap-8">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-medium text-foreground">
            Hi, my name is Hieu Le
          </h1>
          <img
            src="/ava.jpg"
            alt="Hieu Le"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        <div className="space-y-4 max-w-xl">
          <p className="text-foreground text-lg leading-relaxed">
            I&apos;m a software developer who likes owning things end to end.
            I&apos;m the sole engineer on{" "}
            <InlineLink to="/projects/spaces" logo="/ubc-logo.png" alt="UBC">
              Spaces
            </InlineLink>
            , a production booking and approvals platform at the UBC Faculty of
            Medicine running 200+ rooms province-wide - empty repository to
            production in six months, replacing a system they had been stuck
            with for twenty years.
          </p>

          <p className="text-foreground text-lg leading-relaxed">
            Outside of work I build and ship mobile apps, mostly around AI.{" "}
            <InlineLink
              href="https://apps.apple.com/ca/app/hydro-ai-water-tracker/id6785374266"
              logo="/hydro-ai-icon.png"
              alt="Hydro AI"
            >
              Hydro AI
            </InlineLink>{" "}
            is on the App Store - a photo-first hydration tracker that uses
            Claude Vision to estimate what you drank, with subscriptions and
            social streaks.
          </p>

          <p className="text-foreground-muted text-base leading-relaxed">
            CS at{" "}
            <InlineLink href="https://www.ubc.ca" logo="/ubc-logo.png" alt="UBC">
              UBC
            </InlineLink>
            , graduating April 2027. I&apos;m looking for new-grad software
            engineering roles - full-stack, backend, or AI-focused.{" "}
            <a
              href="mailto:hieulexuan261103@gmail.com"
              className="text-foreground underline decoration-foreground-subtle underline-offset-2 hover:decoration-foreground transition-colors"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
