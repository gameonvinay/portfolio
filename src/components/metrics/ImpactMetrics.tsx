import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/common/Container";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    description: "Across startups, agencies & enterprise",
    color: "text-neon-cyan",
    border: "border-neon-cyan/30",
    glow: "shadow-[0_0_30px_rgba(0,245,255,0.15)]",
  },
  {
    value: 30,
    suffix: "+",
    label: "Products Shipped",
    description: "From MVPs to platform-scale apps",
    color: "text-neon-purple",
    border: "border-neon-purple/30",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  },
  {
    value: 60,
    suffix: "%",
    label: "Avg. Performance Gain",
    description: "Lighthouse score improvements delivered",
    color: "text-neon-green",
    border: "border-neon-green/30",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    value: 5,
    suffix: "+",
    label: "Teams Led",
    description: "Cross-functional engineering squads",
    color: "text-amber-400",
    border: "border-amber-400/30",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.15)]",
  },
];

const milestones = [
  { year: "2011", label: "First freelance HTML/CSS templates", color: "bg-neon-cyan" },
  { year: "2013", label: "Frontend Dev @ Game on Developers", color: "bg-neon-purple" },
  { year: "2016", label: "Joined Trigur Electronics — frontend systems", color: "bg-neon-green" },
  { year: "2018", label: "Went freelance — shipped multi-platform apps", color: "bg-amber-400" },
  { year: "2023", label: "Senior Engineer @ Leah — AI-native legal tech", color: "bg-rose-400" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const steps = 50;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="relative z-10 py-32 bg-dark-bg/40 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-neon-purple text-sm font-semibold tracking-widest uppercase mb-4">
            By the Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Impact & Milestones
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Years of delivering measurable results — in performance, product quality, and team growth.
          </p>
        </motion.div>

        {/* Animated stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`glass-panel rounded-2xl p-8 border ${stat.border} ${stat.glow} text-center transition-smooth`}
            >
              <div className={`text-5xl font-black mb-2 ${stat.color} tabular-nums`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-primary font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-text-secondary text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Career Timeline milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-center text-2xl font-bold text-text-primary mb-12">
            Career Milestones
          </h3>

          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-rose-400 rounded-full" />

            <div className="flex justify-between relative">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center group"
                  style={{ width: `${100 / milestones.length}%` }}
                >
                  {/* Dot */}
                  <div
                    className={`w-6 h-6 rounded-full ${m.color} ring-4 ring-dark-bg z-10 transition-smooth group-hover:scale-125`}
                  />

                  {/* Year */}
                  <span className="mt-3 text-sm font-bold text-text-primary">{m.year}</span>

                  {/* Label */}
                  <p className="mt-1 text-xs text-text-secondary text-center leading-snug px-1 max-w-[110px]">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
