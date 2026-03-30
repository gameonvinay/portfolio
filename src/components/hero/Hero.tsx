import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import TypingEffect from "./TypingEffect";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto px-6 lg:px-16 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-screen py-32">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <GlitchText text="Vinay Saini" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <TypingEffect text="Senior Frontend Architect @ Leah" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-text-secondary text-lg max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              15+ years crafting high-performance UIs and scalable frontend
              systems — from design tokens to AI-native legal workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 h-11 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md font-semibold transition-smooth hover:glow-primary text-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 h-11 border border-dark-border rounded-md hover:bg-dark-panel transition-smooth font-medium text-text-primary text-sm"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Quick stat pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2"
            >
              {["React", "TypeScript", "Next.js", "AI Interfaces", "Design Systems"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border border-dark-border text-text-secondary bg-dark-panel/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center gap-4"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-neon-green/30 text-neon-green text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Photo frame */}
            <div className="relative">
              {/* Outer animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00F5FF, #A855F7, #10B981, #00F5FF)",
                  padding: "2px",
                  borderRadius: "50%",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Static inner ring */}
              <div className="absolute -inset-1.5 rounded-full border border-neon-cyan/20" />

              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-dark-border">
                <img
                  src="/me.webp"
                  alt="Vinay Saini — Frontend Architect"
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/30 via-transparent to-transparent" />
              </div>

              {/* Floating decoration: years experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -left-6 glass-panel border border-neon-purple/40 rounded-2xl px-4 py-3 text-center shadow-lg"
              >
                <div className="text-2xl font-black text-neon-purple">15+</div>
                <div className="text-xs text-text-secondary leading-tight">Years<br />Experience</div>
              </motion.div>

              {/* Floating decoration: current role */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-6 glass-panel border border-neon-cyan/40 rounded-2xl px-4 py-3 text-center shadow-lg"
              >
                <div className="text-lg font-black text-neon-cyan">⚡</div>
                <div className="text-xs text-text-secondary leading-tight">AI-Native<br />Products</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-neon-purple rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

