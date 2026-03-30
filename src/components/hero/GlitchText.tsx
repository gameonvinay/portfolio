import { motion } from "framer-motion";

const GlitchText = ({ text }) => {
  return (
    <motion.div
      className="relative inline-block"
      animate={{ opacity: [1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <span className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-clip-text text-transparent">
        {text}
      </span>
    </motion.div>
  );
};

export default GlitchText;
