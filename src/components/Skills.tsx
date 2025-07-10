import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SkillBar } from './SkillBar';
import { Code2, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 78 },
        { name: "PostgreSQL", level: 82 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Kubernetes", level: 65 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Git", "Docker", "Figma", "Postman", "Slack",
    "Jira", "Notion", "Chrome DevTools", "npm/yarn"
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      status: "Active"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      status: "Active"
    },
    {
      title: "Meta Frontend Developer",
      issuer: "Meta",
      year: "2022",
      status: "Active"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and certifications that drive my development process.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald mx-auto rounded-full mt-6" />
          </div>
        </AnimatedSection>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-premium p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-emerald/20 rounded-xl">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.level}
                      delay={skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tools & Technologies */}
        <AnimatedSection>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Tools & <span className="text-primary">Technologies</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/10 transition-all cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">
              <span className="text-primary">Certifications</span> & Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-premium p-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-emerald/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                      {cert.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Summary */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Code2, number: "50+", label: "Projects Completed" },
                { icon: Palette, number: "5+", label: "Years Experience" },
                { icon: Smartphone, number: "25+", label: "Happy Clients" },
                { icon: Globe, number: "3", label: "Certifications" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-emerald/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};