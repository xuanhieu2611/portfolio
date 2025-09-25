import { Moon, Sun } from "lucide-react"
import Button from "./components/Button"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import HeroSection from "./components/HeroSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import ParticleBackground from "./components/ParticleBackground"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", color: "hover:text-cyan-400" },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-purple-400",
    },
    {
      icon: Mail,
      href: "mailto:alex@example.com",
      color: "hover:text-green-400",
    },
  ]

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <style>
        {`
          :root {
            --bg-primary: ${isDarkMode ? "#0a0a0a" : "#ffffff"};
            --bg-secondary: ${
              isDarkMode ? "rgba(26, 26, 46, 0.7)" : "rgba(248, 250, 252, 0.7)"
            };
            --text-primary: ${isDarkMode ? "#e5e7eb" : "#1f2937"};
            --text-secondary: ${isDarkMode ? "#9ca3af" : "#6b7280"};
            --accent-cyan: #00f5ff;
            --accent-purple: #8b5cf6;
            --accent-green: #10b981;
            --glow: ${
              isDarkMode
                ? "0 0 20px rgba(0, 245, 255, 0.3)"
                : "0 0 20px rgba(139, 92, 246, 0.2)"
            };
          }
          
          body {
            background: var(--bg-primary);
            color: var(--text-primary);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            overflow-x: hidden;
          }
          
          .glow {
            box-shadow: var(--glow);
          }
          
          .text-glow {
            text-shadow: ${
              isDarkMode ? "0 0 10px rgba(0, 245, 255, 0.5)" : "none"
            };
          }
          
          .gradient-text {
            background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .nav-blur {
            backdrop-filter: blur(20px);
            background: ${
              isDarkMode ? "rgba(10, 10, 10, 0.5)" : "rgba(255, 255, 255, 0.5)"
            };
            border-bottom: 1px solid ${
              isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            };
          }
        `}
      </style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "nav-blur" : ""
        }`}
      >
        <div className="max-w-3xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold gradient-text"
            >
              &lt;Hieu Le/&gt;
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("experience")}
                className="hidden md:block text-sm hover:text-[var(--accent-cyan)] transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hidden md:block text-sm hover:text-[var(--accent-cyan)] transition-colors duration-200"
              >
                Projects
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-[var(--bg-secondary)]"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <main className="min-h-screen relative z-10">
        <div
          className="relative min-h-screen"
          style={{ background: "rgba(10, 10, 10, 0.8)" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <HeroSection />
            <div className="py-4"></div>
            <ExperienceSection />
            <div className="py-4"></div>
            <ProjectsSection />

            {/* Footer */}
            <footer className="py-4 border-t border-gray-800/50">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-xs text-gray-500">
                  © 2024 Hieu Le. All rights reserved.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="group">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-colors duration-300 flex items-center`}
                      >
                        <social.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs whitespace-nowrap overflow-hidden w-0 group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
                          {social.icon === Github
                            ? "GitHub"
                            : social.icon === Linkedin
                            ? "LinkedIn"
                            : social.icon === Mail
                            ? "Email"
                            : ""}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
