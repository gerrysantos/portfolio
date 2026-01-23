import { projects } from "../data/projects";
import type { Project } from "../types/project";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Header with Accent Line */}
      <div className="mb-12">
        <div className="w-12 h-1 bg-blue-500 rounded mb-4" />
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p: Project) => (
          <motion.div
            key={p.title}
            className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-transparent hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

            {/* Project Description */}
            <p className="text-slate-400 mb-2">{p.description}</p>

            {/* Optional Note / Metadata */}
            {p.note && (
              <p className="text-slate-500 text-sm italic mb-4">{p.note}</p>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((s: string) => (
                <span
                  key={s}
                  className="text-xs bg-slate-700 px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {p.demo && (
                <a
                  href={p.demo}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
