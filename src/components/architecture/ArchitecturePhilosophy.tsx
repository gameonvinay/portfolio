import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";

const principles = [
  {
    icon: "⬡",
    title: "Component-Driven Architecture",
    description:
      "Designing UI as a hierarchy of composable, atomic components. Every piece is isolated, testable, and reusable — reducing coupling and accelerating delivery.",
    tags: ["Atomic Design", "Storybook", "Design Systems"],
    gradient: "from-neon-cyan/20 to-transparent",
    border: "border-neon-cyan/30",
    accent: "text-neon-cyan",
  },
  {
    icon: "⚡",
    title: "Performance-First Mindset",
    description:
      "Treating performance as a feature, not an afterthought. Code-splitting, lazy loading, memoization, and web vitals monitoring are standard in every project.",
    tags: ["Core Web Vitals", "Bundle Analysis", "memoization"],
    gradient: "from-neon-purple/20 to-transparent",
    border: "border-neon-purple/30",
    accent: "text-neon-purple",
  },
  {
    icon: "🔷",
    title: "Scalable State Architecture",
    description:
      "Engineering state as the backbone of complex UIs. From server-state with React Query to local state machines, every slice is predictable and observable.",
    tags: ["React Query", "Zustand", "State Machines"],
    gradient: "from-neon-green/20 to-transparent",
    border: "border-neon-green/30",
    accent: "text-neon-green",
  },
  {
    icon: "🛡",
    title: "Developer Experience & DX",
    description:
      "Investing in tooling, CI pipelines, lint rules, and shared conventions so teams ship fast without sacrificing quality. Great DX = great product.",
    tags: ["TypeScript", "ESLint", "CI/CD", "Monorepos"],
    gradient: "from-amber-400/20 to-transparent",
    border: "border-amber-400/30",
    accent: "text-amber-400",
  },
];

const stackLayers = [
  { label: "Design System / Tokens", color: "bg-neon-purple/70", width: "w-full" },
  { label: "Component Library", color: "bg-neon-cyan/60", width: "w-11/12" },
  { label: "Feature Modules", color: "bg-neon-green/50", width: "w-10/12" },
  { label: "State & Data Layer", color: "bg-amber-400/50", width: "w-9/12" },
  { label: "API / Backend Integration", color: "bg-rose-400/50", width: "w-8/12" },
];

export default function ArchitecturePhilosophy() {
  return (
    <section className="relative z-10 py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4">
            How I Think
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent">
              Architecture Philosophy
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Principles that guide every system I design — from single components to platform-scale applications.
          </p>
        </motion.div>

        {/* Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative group glass-panel rounded-2xl p-8 border ${p.border} transition-smooth overflow-hidden cursor-default`}
            >
              {/* Card gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`text-4xl mb-4 ${p.accent}`}>{p.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${p.border} ${p.accent} bg-surface-card/50`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frontend Stack Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-center text-2xl font-bold text-text-primary mb-10">
            Layered Frontend Architecture
          </h3>
          <div className="flex flex-col items-center gap-2">
            {stackLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, scaleX: 0.4 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${layer.width} ${layer.color} rounded-lg flex items-center justify-center py-3 px-6 text-sm font-semibold text-white/90 tracking-wide`}
                style={{ transformOrigin: "center" }}
              >
                {layer.label}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-text-secondary text-xs mt-4 tracking-widest uppercase">
            User → Component → Feature → State → API
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
