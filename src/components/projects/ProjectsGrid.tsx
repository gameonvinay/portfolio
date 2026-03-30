import { motion } from "framer-motion";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping experience with real-time inventory",
    tech: ["React", "Node.js", "PostgreSQL"],
    challenge: "Built a scalable e-commerce platform handling 10k+ daily users",
    solution: "Implemented microservices architecture with Redis caching",
    image: "/project_ecommerce.png",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive analytics with real-time updates",
    tech: ["React", "D3.js", "WebSocket"],
    challenge: "Created complex data visualizations from scratch",
    solution: "Optimized rendering with WebGL and virtual scrolling",
    image: "/project_dashboard.png",
  },
  {
    title: "AI-Powered Chat Interface",
    description: "Conversational UI with intelligent responses",
    tech: ["Next.js", "GraphQL", "Python"],
    challenge: "Designed intuitive chat interface for complex AI models",
    solution: "Built streaming response system with optimistic UI updates",
    image: "/project_ai_chat.png",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative perspective-1000"
    >
      <div className={`h-full glass-panel rounded-xl overflow-hidden transition-smooth hover:glow-primary ${
        document.documentElement.classList.contains('dark') ? 'dark' : ''
      }`}>
        {/* Cover Image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 via-transparent to-transparent" />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-surface-card border border-dark-border rounded-full text-xs text-text-secondary group-hover:border-neon-purple transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-dark-border space-y-3">
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">
                  Challenge
                </p>
                <p className="text-sm text-text-primary">{project.challenge}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">
                  Solution
                </p>
                <p className="text-sm text-neon-cyan">{project.solution}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
