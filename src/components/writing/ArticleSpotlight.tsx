import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const ArticleSpotlight = () => {
  const articles = [
    {
      title: "Understanding React Server Components",
      excerpt: "A deep dive into the architecture and when to use them in your applications",
      category: "Technical",
      readTime: "8 min read",
      date: "March 2024",
      image: "/article_rsc.png",
      featured: true,
    },
    {
      title: "Performance Optimization in Modern Web Apps",
      excerpt: "Practical techniques to achieve sub-second load times and smooth interactions",
      category: "Performance",
      readTime: "12 min read",
      date: "February 2024",
      image: "/article_perf.png",
      featured: false,
    },
  ];

  return (
    <section className="relative z-10 py-32">
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
              Writing & Insights
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sharing knowledge about frontend development and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group glass-panel rounded-xl overflow-hidden hover:border-neon-cyan transition-all"
            >
              {/* Cover image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs rounded-full backdrop-blur-sm border border-neon-cyan/20">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-text-secondary">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm">{article.excerpt}</p>
                <Button className="w-full h-11 bg-neon-purple hover:bg-neon-purple/90 text-white text-sm font-medium">
                  Read Article →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ArticleSpotlight;
