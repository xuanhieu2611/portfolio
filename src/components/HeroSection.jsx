import { Github, Linkedin, Mail, Twitter } from "lucide-react"

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
            I'm a builder and CS student at{" "}
            <span className="whitespace-nowrap">
              <img
                src="/ubc-logo.png"
                alt="UBC"
                className="inline-block w-4 h-4 object-contain bg-white rounded-sm align-middle translate-y-[-1.5px] mr-1"
              />
              <a
                href="https://www.ubc.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="relative transition-colors pb-px group"
              >
                UBC
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground-faint"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </span>
            . Currently, I'm founding{" "}
            <span className="whitespace-nowrap">
              <img
                src="/stride-logo.png"
                alt="Stride"
                className="inline-block w-4 h-4 object-contain bg-white rounded-sm align-middle translate-y-[-1.5px] mr-1"
              />
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                className="relative transition-colors pb-px group"
              >
                Stride AI
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground-faint"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </span>
            , an iOS running coach.
          </p>
        </div>
      </div>
    </section>
  )
}
