import { motion } from "framer-motion";
import type { Skill } from "../types/skill";

const Skills = ({ title, items }: Skill) => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-slate-100">{title}</h3>
      <ul className="space-y-2">
        {items.map((i) => (
          <motion.li
            key={i.name}
            whileHover={{ scale: 1.05 }}
            className="
              group flex items-center gap-2
              text-slate-400
              transition-colors duration-200
              cursor-default
            "
          >
            {/* Icon inherits group-hover color */}
            {i.icon && (
              <i.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-200" />
            )}
            <span className="group-hover:text-blue-400">{i.name}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
