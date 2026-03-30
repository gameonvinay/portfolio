import { motion } from "framer-motion";

const skillsData = [
  { name: "React & Next.js", level: 95, category: "frontend" },
  { name: "Vue.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 92, category: "frontend" },
  { name: "Node.js & Express", level: 85, category: "backend" },
  { name: "Python", level: 78, category: "backend" },
  { name: "MongoDB", level: 82, category: "backend" },
  { name: "Langsmith & Langflow", level: 88, category: "tools" },
  { name: "GSAP & Framer Motion", level: 90, category: "tools" },
];

const ProficiencyBars = () => {
  return (
    <div className="space-y-4">
      {skillsData.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="flex justify-between mb-2">
            <span className="text-text-primary font-medium">{skill.name}</span>
            <span className="text-text-secondary text-sm">{skill.level}%</span>
          </div>
          <div className={`h-2 rounded-full overflow-hidden ${
            document.documentElement.classList.contains('dark') ? 'bg-dark-panel' : 'bg-surface-card'
          }`}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProficiencyBars;
