
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { ExternalLink, Github, Eye } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory management and advanced analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React", "Node.js", "TypeScript", "Stripe", "MongoDB"],
      category: "Full Stack",
      status: "Live",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "AI Chat Dashboard",
      description: "Intelligent chat application with AI-powered responses, real-time analytics, and advanced conversation management features.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React", "TypeScript", "OpenAI", "WebSocket", "PostgreSQL"],
      category: "AI/ML",
      status: "Live",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "AWS cloud management dashboard with automated deployment pipelines, monitoring, and cost optimization tools.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["React", "AWS", "Docker", "Terraform", "Python"],
      category: "Cloud",
      status: "Development",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Generative AI Toolkit",
      description: "Comprehensive toolkit for prompt engineering and AI model fine-tuning with interactive playground and optimization features.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80",
      technologies: ["Python", "Hugging Face", "React", "FastAPI", "Docker"],
      category: "AI/ML",
      status: "Live",
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing AI-driven solutions, cloud infrastructure, and modern web development.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald mx-auto rounded-full mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="card-premium group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-royal-blue/20 text-royal-blue border border-royal-blue/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.links.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-primary text-background p-3 rounded-full hover:bg-emerald transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-foreground text-background p-3 rounded-full hover:bg-muted-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="bg-secondary/50 border border-primary/20 px-2 py-1 rounded text-xs font-mono text-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.live}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-primary hover:text-emerald transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View More Button */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View All Projects
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
