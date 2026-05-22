import Navbar from "./component/navbar/navbar"
import Hero from "./component/hero/hero"
import About from "./component/about/about"
import Skills from "./component/skill/skill"
import Project from "./component/project/projext"
import Contact from "./component/contact/contact"
import Footer from "./component/footer/footer"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App