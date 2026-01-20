import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header with Accent */}
        <div className="mb-8 flex flex-col items-center">
          {/* Centered Accent */}
          <div className="w-12 h-1 bg-blue-500 rounded mb-4" />
          <h2 className="text-3xl font-semibold">Let's Work Together</h2>
        </div>

        {/* Intro Text */}
        <motion.p
          className="text-slate-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Have a project or opportunity in mind? Let's talk.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <a
            href="mailto:gerrysantos0226@gmail.com"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
          >
            Email
          </a>
          <a
            href="https://github.com/gerrysantos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gerry-santos-026988242/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
