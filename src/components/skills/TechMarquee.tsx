import { motion } from "framer-motion";

const TechMarquee = () => {
  const techStack = [
    "React.js", "Vue.js", "Next.js", "TypeScript", "Node.js",
    "Python", "MongoDB", "Express.js", "Langsmith", "Langflow", "GSAP",
    "React.js", "Vue.js", "Next.js", "TypeScript", "Node.js",
    "Python", "MongoDB", "Express.js", "Langsmith", "Langflow", "GSAP"
  ];

  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -techStack.length * 100 / 2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-2xl md:text-3xl font-bold text-text-secondary/50 hover:text-neon-cyan transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
