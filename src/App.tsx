import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Animated from "./components/Animated"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Animated/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </BrowserRouter>
    </>
  )
}

export default App
