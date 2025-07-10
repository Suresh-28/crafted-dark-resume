import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com",
      name: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com",
      name: "LinkedIn"
    },
    {
      icon: Twitter,
      url: "https://twitter.com",
      name: "Twitter"
    },
    {
      icon: Mail,
      url: "mailto:alex.johnson@email.com",
      name: "Email"
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-primary/20 bg-gradient-to-br from-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-br from-primary to-emerald rounded-lg flex items-center justify-center"
              >
                <span className="text-background font-bold text-sm">AJ</span>
              </motion.div>
              <span className="text-xl font-bold gradient-text">Alex Johnson</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved. Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-red-400"
              >
                <Heart className="w-4 h-4 inline fill-current" />
              </motion.span>
              {' '}and React
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 bg-card/50 border border-primary/20 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-all group"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-primary/10 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>Designed & developed by Alex Johnson</p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Floating Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </footer>
  );
};