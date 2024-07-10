
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="text-gray-950">
      <div className="absolute -z-10 h-full w-full bg-gray-50">
        <div class="absolute inset-0 -z-10 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_70%_400px,#dcfce7,transparent)] sm:bg-[radial-gradient(circle_500px_at_70%_300px,#dcfce7,transparent)] lg:bg-[radial-gradient(circle_600px_at_70%_200px,#dcfce7,transparent)]"></div>
        <div class="absolute inset-0 -z-10 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_30%_400px,#cffafe,transparent)] sm:bg-[radial-gradient(circle_500px_at_30%_300px,#cffafe,transparent)] lg:bg-[radial-gradient(circle_600px_at_30%_200px,#cffafe,transparent)]"></div>
      </div>
      <section id="Homepage" className="bg-transparent">
        <Header />
        <Hero />
      </section>
      <div className="bg-gray-50">
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
