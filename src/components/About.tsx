import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Code2, Users, Trophy, Heart } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "5+ Years",
      description: "Frontend Development"
    },
    {
      icon: Users,
      title: "Team Lead",
      description: "Cross-functional Teams"
    },
    {
      icon: Trophy,
      title: "Top Performer",
      description: "Multiple Projects"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Clean Code & UX"
    }
  ];

  const techStack = [
    "React", "TypeScript", "Next.js", "Tailwind CSS",
    "Node.js", "GraphQL", "AWS", "Docker"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate frontend engineer with over 5 years of experience 
                building scalable web applications. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or mentoring junior developers. 
                I believe in writing clean, maintainable code and creating experiences 
                that users love.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-secondary/50 border border-primary/20 px-3 py-1 rounded-full text-sm font-mono text-primary cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Highlights Grid */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-premium p-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-emerald/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};