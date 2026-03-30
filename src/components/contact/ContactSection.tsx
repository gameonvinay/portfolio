import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className={`relative z-10 py-32 ${
      document.documentElement.classList.contains('dark') ? 'bg-dark-bg/50' : 'bg-surface-card/30'
    }`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-text-secondary text-lg mb-12">
            Ready to elevate your digital presence? I'm available for freelance projects 
            and full-time opportunities.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <a
              href="mailto:nfstarzan@gmail.com"
              className="inline-block group"
            >
              <div className="text-2xl md:text-3xl font-mono text-text-primary group-hover:text-neon-cyan transition-colors">
                nfstarzan@gmail.com
              </div>
              <div className="text-sm text-text-secondary mt-2 group-hover:text-neon-purple transition-colors">
                Click to send an email
              </div>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8">
              <Button className="px-6 h-11 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm">
                Get In Touch
              </Button>
              <Button variant="outline" className={`px-6 h-11 border border-dark-border ${
                document.documentElement.classList.contains('dark') ? 'hover:bg-dark-panel' : 'hover:bg-surface-card'
              } text-text-primary font-medium text-sm`}>
                Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 glass-panel p-8 rounded-xl max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Subscribe to Newsletter
          </h3>
          <p className="text-text-secondary text-sm mb-6">
            Get updates on new articles, projects, and insights
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className={`flex-1 px-4 h-11 rounded-md border border-dark-border focus:outline-none focus:border-neon-cyan transition-colors text-sm ${
                document.documentElement.classList.contains('dark') ? 'bg-dark-panel' : 'bg-surface-card'
              }`}
            />
            <Button type="submit" className="px-6 h-11 bg-neon-purple hover:bg-neon-purple/90 text-white text-sm font-medium">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
