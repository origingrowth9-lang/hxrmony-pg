'use client';

import { motion } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: string | number;
  icon: string;
  color?: string;
  delay?: number;
}

export const StatItem = ({ label, value, icon, color = 'primary', delay = 0 }: StatItemProps) => {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600',
    green: 'from-green-500 to-emerald-600',
    orange: 'from-orange-500 to-red-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-20 blur-xl" />
      <div className="relative backdrop-blur-xl bg-dark-800/50 border border-primary-500/20 rounded-lg p-6">
        <div className={`text-4xl mb-3 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent`}>
          {icon}
        </div>
        <p className="text-3xl font-bold text-white mb-2">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </motion.div>
  );
};
