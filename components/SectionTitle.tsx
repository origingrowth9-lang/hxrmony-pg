'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  align?: 'left' | 'center' | 'right';
  id?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  gradient = 'from-primary-400 to-secondary-400',
  align = 'center',
  id,
}: SectionTitleProps) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={alignClass}
      {...(id && { id })}
    >
      <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </motion.div>
  );
};
