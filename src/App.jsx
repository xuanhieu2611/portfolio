import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (<>
    <section id="Homepage">
      <Navbar/>
      {/* <Sidebar/> */}
      <Hero/>
    </section>
    <section id="About">
      <About/>
    </section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
      <Footer/>
    </section>
  </>)
}

export default App
