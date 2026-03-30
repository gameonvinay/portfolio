import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import ProficiencyBars from "./ProficiencyBars";
import TechMarquee from "./TechMarquee";

const SkillsSection = () => {
  return (
    <section id="expertise" className="relative z-10 py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building scalable, performant applications with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">
              Core Competencies
            </h3>
            <ProficiencyBars />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TechMarquee />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
