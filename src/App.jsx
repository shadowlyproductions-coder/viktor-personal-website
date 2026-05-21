import About from "./components/About.jsx";
import CareerDirection from "./components/CareerDirection.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import PersonalBrand from "./components/PersonalBrand.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-midnight text-ice">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <PersonalBrand />
        <CareerDirection />
        <Contact />
      </main>
    </div>
  );
}
