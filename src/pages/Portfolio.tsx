import { Hero, Projects, Skills, About, Contact } from "./index.ts";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <Projects />

      {/* SKILLS */}
      <Skills />

      {/* ABOUT */}
      <About />

      {/* CONTACT */}
      <Contact />
    </div>
  );
}
