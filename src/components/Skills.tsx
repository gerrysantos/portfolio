import { motion } from "framer-motion";
import Skill from "./SkillList";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="bg-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header with Centered Accent */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-12 h-1 bg-blue-500 rounded mb-4" />
          <h2 className="text-3xl font-semibold text-center text-slate-100">
            Skills & Tools
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Skill
              title="Frontend"
              items={[
                { name: "React", icon: SiReact },
                { name: "TailwindCSS", icon: SiTailwindcss },
                { name: "HTML", icon: SiHtml5 },
                { name: "CSS", icon: SiCss3 },
                { name: "JavaScript", icon: SiJavascript },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Skill
              title="Backend"
              items={[
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express", icon: SiExpress },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Skill
              title="Database"
              items={[
                { name: "MongoDB", icon: SiMongodb },
                { name: "MySQL", icon: SiMysql },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Skill
              title="E-commerce / AI"
              items={[
                { name: "Shopify Liquid" },
                { name: "OpenAI API" },
                { name: "Chatbots" },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
