import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar /> 
      <Hero />
      <Skills />
      <Projects />
      <Contact />   
    </div>
  );
}

export default App;