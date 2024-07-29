import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack"

function App() {
  return (
    <main className="bg-gray-50">
      <div className="text-gray-950 max-w-screen-lg mx-auto">
        <Header />
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
