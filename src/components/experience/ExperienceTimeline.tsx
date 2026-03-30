import { motion } from "framer-motion";
import { Container } from "../common/Container";

const experiencesData = [
  {
    company: "Leah",
    role: "Senior Software Engineer",
    period: "Nov 2023 - Present",
    description: "Leads the frontend team in developing legal tech applications and driving innovation in AI-native legal workflows.",
    achievements: [
      "Specializes in building user interfaces for AI automation and deep agents.",
      "Sets technical direction, enforces best practices, and optimizes frontend architecture.",
      "Mentors team members to streamline legal workflows and improve user experience."
    ]
  },
  {
    company: "Popup",
    role: "Senior Frontend Engineer",
    period: "Aug 2021 - Oct 2023",
    description: "Led the frontend team for a no-code eCommerce platform.",
    achievements: [
      "Spearheaded the development of 'Journey Builder', a tool for controlling customer flows.",
      "Focused heavily on critical performance optimizations.",
      "Implemented extensive UX enhancements resulting in a seamless user experience."
    ]
  },
  {
    company: "Cybrilla",
    role: "UI/UX Developer",
    period: "Sep 2020 - Aug 2021",
    description: "Developed and maintained high-performance user interfaces for fintech applications.",
    achievements: [
      "Built sophisticated and robust frontend applications using Next.js and React.js.",
      "Collaborated closely with backend teams to ensure seamless data flow.",
      "Showcased strong expertise in translating complex design requirements to code."
    ]
  },
  {
    company: "Freelancer.com",
    role: "Frontend Developer",
    period: "Apr 2018 - Sep 2020",
    description: "Freelance frontend web development.",
    achievements: [
      "Worked extensively with Node.js and Express.js on full-stack projects.",
      "Delivered customized multi-platform web applications to clients.",
      "Ensured high levels of cross-browser compatibility and responsiveness."
    ]
  },
  {
    company: "Trigur Electronics India",
    role: "Frontend Web Developer",
    period: "Dec 2016 - Feb 2018",
    description: "Dedicated to implementing high-quality web pages and application structure.",
    achievements: [
      "Focused on robust web development using core CSS and Bootstrap.",
      "Integrated key interactive elements utilizing raw JavaScript and jQuery.",
      "Optimized legacy codebases for better load times and performance."
    ]
  },
  {
    company: "Game on Developers",
    role: "Frontend Developer",
    period: "Aug 2013 - Oct 2016",
    description: "Web development for multiple clients across a wide range of industries.",
    achievements: [
      "Delivered responsive, multi-client web applications using Bootstrap and CSS.",
      "Built dynamic UI components with jQuery and vanilla JavaScript.",
      "Managed end-to-end frontend delivery from design handoff to production."
    ]
  },
  {
    company: "Freelance",
    role: "UI Developer",
    period: "Aug 2011 - Jul 2013",
    description: "Developed HTML and CSS templates and paid template customisation.",
    achievements: [
      "Crafted pixel-perfect HTML/CSS templates sold to international clients.",
      "Customised and extended premium templates to meet specific client needs.",
      "Established a foundational understanding of cross-browser compatibility."
    ]
  }
];

const TimelineItem = ({ experience, index, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} mb-12`}
    >
      <div className={`flex-1 text-left ${isLeft ? "pr-8" : "pl-8"}`}>
        <div className="glass-panel p-6 rounded-xl hover:border-neon-cyan transition-colors">
          <span className="text-neon-purple text-sm font-medium">{experience.period}</span>
          <h3 className="text-xl font-semibold text-text-primary mt-2">{experience.role}</h3>
          <p className="text-neon-cyan text-sm mb-4">{experience.company}</p>
          <p className="text-text-secondary mb-4">{experience.description}</p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="text-neon-green mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-4 h-4 rounded-full bg-neon-cyan shadow-glow-primary" />
      <div className="flex-1" />
    </motion.div>
  );
};

const ExperienceTimeline = () => {
  return (
    <section className={`relative z-10 py-32 ${
      document.documentElement.classList.contains('dark') ? 'bg-dark-bg/50' : 'bg-surface-card/30'
    }`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building exceptional digital experiences over the years
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />
          
          {experiencesData.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceTimeline;
