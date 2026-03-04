import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src="/ava.png"
            alt="Hieu Le"
            className="w-16 h-16 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold text-[#EBEBEB] mb-2">Hieu Le</h1>
          <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm mb-5">
            CS student at{" "}
            <a
              href="https://www.ubc.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EBEBEB] underline decoration-[#333333] underline-offset-2 hover:decoration-[#A1A1AA] transition-colors"
            >
              UBC
            </a>
            . Interested in AI and software development. Building{" "}
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-[#EBEBEB] underline decoration-[#333333] underline-offset-2 hover:decoration-[#A1A1AA] transition-colors"
            >
              Stride AI
            </a>
            .
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/xuanhieu2611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#EBEBEB] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hieule2611/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#EBEBEB] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/hieule2611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#EBEBEB] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:hieulexuan261103@gmail.com"
              className="text-[#A1A1AA] hover:text-[#EBEBEB] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
