import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { Linkedin } from "lucide-react"
import ThemeToggle from "./components/ThemeToggle"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"

function App() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle hash scrolling on navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "")
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      window.history.pushState({}, "", `/#${sectionId}`)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-sm font-mono font-medium text-foreground hover:text-foreground transition-colors tracking-tight"
            >
              Hieu Le
            </Link>
            <div className="flex items-center gap-6 font-mono text-xs">
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                experience
              </a>
              <Link
                to="/projects"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                projects
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-2xl mx-auto px-6 pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>

          <hr className="border-border/50 mb-4" />
          <div className="pb-8">
            <div className="flex justify-between items-center">
              <p className="text-xs font-mono text-foreground-muted">
                © 2026 Hieu Le
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/xuanhieu2611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src="/github.png"
                    alt="GitHub"
                    className="w-5 h-5 object-contain bg-white rounded-md"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/hieule2611/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-subtle hover:text-foreground transition-colors flex items-center"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="w-5 h-5 object-contain bg-white rounded-md"
                  />
                </a>
                <a
                  href="https://twitter.com/hieuspringle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src="/twitter.jpg"
                    alt="Twitter"
                    className="w-5 h-5 object-cover rounded-md"
                  />
                </a>
                <a
                  href="mailto:hieulexuan261103@gmail.com"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src="/gmail.svg"
                    alt="Email"
                    className="w-5 h-5 object-contain bg-white rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Analytics />
    </div>
  )
}

export default App
