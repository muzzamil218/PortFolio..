import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InteractiveWidget from "./components/InteractiveWidget";
import ExperienceEducation from "./components/ExperienceEducation";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("summary");

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-sky-500 selection:text-slate-950 overflow-x-hidden antialiased">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <InteractiveWidget />
        <ExperienceEducation />
        <Contact />
      </main>
    </div>
  );
}
