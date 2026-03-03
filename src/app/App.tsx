import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ParticleBackground } from "./components/ParticleBackground";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero, EducationSection } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import Projects from "./components/sections/Projects";
import { Status } from "./components/Status";
import { Contact } from "./components/Contact";
import "../styles/fonts.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling during preloader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white selection:bg-[#00f3ff] selection:text-[#0a0a1f] font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ParticleBackground />
          <Navbar />
          
          <main>
            <Hero />
            <div className="min-h-screen flex">
              <TechStack />
              <EducationSection />
            </div>
            <Experience />
            <Projects />
            <Status />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
