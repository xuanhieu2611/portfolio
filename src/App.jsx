import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import HeroSection from "./components/HeroSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EBEBEB]">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          scrolled ? "bg-[#0A0A0A]/95 border-b border-[#1F1F1F]" : ""
        }`}
      >
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-[#EBEBEB] hover:text-white transition-colors"
            >
              hieu le
            </button>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-[#A1A1AA] hover:text-[#EBEBEB] transition-colors"
              >
                experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-[#A1A1AA] hover:text-[#EBEBEB] transition-colors"
              >
                projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-2xl mx-auto px-6">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />

          <footer className="py-8 mt-4 border-t border-[#1F1F1F]">
            <div className="flex justify-between items-center">
              <p className="text-xs font-mono text-[#555555]">© 2025 Hieu Le</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/xuanhieu2611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#555555] hover:text-[#A1A1AA] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hieule2611/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#555555] hover:text-[#A1A1AA] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/hieule2611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#555555] hover:text-[#A1A1AA] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hieulexuan261103@gmail.com"
                  className="text-[#555555] hover:text-[#A1A1AA] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
