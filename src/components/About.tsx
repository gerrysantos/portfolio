import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Section Header with Accent Line */}
      <div className="mb-8">
        <div className="w-12 h-1 bg-blue-500 rounded mb-4" />
        <h2 className="text-3xl font-semibold">About Me</h2>
      </div>

      {/* About Content with Fade-In */}
      <motion.p
        className="text-slate-400 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        I'm a web developer focused on creating clean, responsive websites and
        functional backend services. I work with front-end technologies like
        React, HTML, and CSS, and backend tools such as Node.js, Express, and
        databases like MySQL, MSSQL, and MongoDB. I am currently learning
        full-stack development to build complete web applications.
      </motion.p>
    </section>
  );
};

export default About;
