import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import Hero from "@/components/hero/Hero";
import ArchitecturePhilosophy from "@/components/architecture/ArchitecturePhilosophy";
import ImpactMetrics from "@/components/metrics/ImpactMetrics";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ArticleSpotlight from "@/components/writing/ArticleSpotlight";
import ContactSection from "@/components/contact/ContactSection";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 z-50 w-full border-b border-dark-border/50 backdrop-blur-md bg-background/80"
      >
        <Container className="h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Vinay Saini
          </div>
          <ul className="hidden md:flex gap-8 text-sm">
            <li><a href="#architecture" className="hover:text-neon-cyan transition-colors">Architecture</a></li>
            <li><a href="#impact" className="hover:text-neon-cyan transition-colors">Impact</a></li>
            <li><a href="#expertise" className="hover:text-neon-cyan transition-colors">Expertise</a></li>
            <li><a href="#portfolio" className="hover:text-neon-cyan transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a></li>
          </ul>
          <ThemeToggle />
        </Container>
      </motion.nav>

      <Hero />
      
      <div id="architecture">
        <ArchitecturePhilosophy />
      </div>

      <div id="impact">
        <ImpactMetrics />
      </div>

      <SkillsSection />
      
      <section id="portfolio" className="relative z-10 py-32">
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
                Featured Projects
              </span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Showcasing technical excellence and innovative solutions
            </p>
          </motion.div>
          <ProjectsGrid />
        </Container>
      </section>

      <ExperienceTimeline />
      
      <ArticleSpotlight />
      
      <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-dark-border py-8">
        <Container className="text-center">
          <p className="text-sm text-text-secondary">
            © 2026 Vinay Saini. Crafted with care.
          </p>
        </Container>
      </footer>
    </div>
  );
}
