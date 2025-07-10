import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill}</span>
        <span className="text-primary font-mono text-sm">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: delay,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
        />
      </div>
    </div>
  );
};