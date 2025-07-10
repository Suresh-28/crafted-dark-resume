import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led a team of 5 developers building scalable React applications. Implemented modern CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
      achievements: [
        "Increased team velocity by 35% through process improvements",
        "Architected reusable component library used across 3 products",
        "Mentored 8 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: "Built responsive web applications from scratch using React and modern JavaScript. Collaborated closely with design team to implement pixel-perfect UIs.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
      achievements: [
        "Delivered 12+ production features on schedule",
        "Reduced bundle size by 50% through optimization",
        "Implemented automated testing increasing coverage to 85%"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Developed custom WordPress themes and React components. Gained experience in client communication and project management.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
      achievements: [
        "Completed 25+ client projects",
        "Improved site performance by 60%",
        "Built custom e-commerce solutions"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-card/50 to-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                  </div>

                  <div className="card-premium p-8 group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-emerald transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground mb-2">
                          <span className="text-lg font-semibold text-foreground">{exp.company}</span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-primary" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-mono text-primary"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};