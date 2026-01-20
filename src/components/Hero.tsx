import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden">
      {/* Accent Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-100 h-100 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Gerry Santos
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 mb-6"
        >
          Web Developer building responsive websites and learning full-stack
          development
        </motion.h2>
        <motion.p
          className="text-lg text-slate-400 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          I build websites using HTML, CSS, JavaScript, and React, and create
          backend APIs with Node.js, Express, and databases like MySQL, MSSQL,
          and MongoDB. Currently expanding my skills to become a full-stack
          developer.
        </motion.p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
          >
            View Projects
          </a>
          <a
            href="/GerryQSantosResume.pdf"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
