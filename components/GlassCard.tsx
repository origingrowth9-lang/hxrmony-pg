'use client';

import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: 'default' | 'primary' | 'secondary' | 'gradient';
  interactive?: boolean;
}

export const GlassCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  variant = 'default',
  interactive = true,
}: GlassCardProps) => {
  const variantStyles = {
    default: 'backdrop-blur-xl bg-dark-800/50 border border-primary-500/20',
    primary: 'backdrop-blur-xl bg-primary-500/5 border border-primary-500/30',
    secondary: 'backdrop-blur-xl bg-secondary-500/5 border border-secondary-500/30',
    gradient: 'backdrop-blur-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={
        hover && interactive
          ? { y: -10, boxShadow: '0 0 40px rgba(91, 117, 255, 0.3)' }
          : {}
      }
      className={`${variantStyles[variant]} rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
