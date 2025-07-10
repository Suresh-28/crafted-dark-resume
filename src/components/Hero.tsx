import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Briefcase, Globe } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import profilePhoto from '../assets/profile-photo.jpg';
import heroBackground from '../assets/hero-background.jpg';

export const Hero = () => {
  const roles = [
    "Frontend Engineer",
    "React Developer", 
    "Web3 Developer",
    "UI/UX Designer"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-animated opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full float opacity-60" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-emerald rounded-full float opacity-80" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-royal-blue rounded-full float opacity-70" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-emerald rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-lg" />
            <img
              src={profilePhoto}
              alt="Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", bounce: 0.5 }}
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-emerald text-background px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
            >
              Available for Work
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="gradient-text">Alex Johnson</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
            I'm a{' '}
            <TypeWriter 
              texts={roles}
              speed={150}
              delay={2000}
              className="text-primary font-semibold"
            />
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Passionate about creating exceptional digital experiences with modern technologies. 
          Specialized in React, TypeScript, and cutting-edge web development.
        </motion.p>

        {/* Floating Labels */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Briefcase, text: "5+ Years Experience" },
            { icon: Globe, text: "Remote Ready" },
            { icon: MapPin, text: "San Francisco, CA" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-sm"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium group"
          >
            <Download className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Download Resume
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};