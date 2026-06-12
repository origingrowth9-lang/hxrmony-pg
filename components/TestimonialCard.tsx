'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  index: number;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
  index,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard hover className="h-full flex flex-col">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-600">
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 italic flex-1 mb-6">"{quote}"</p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-lg"
          >
            {avatar}
          </motion.div>
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-xs text-gray-400">
              {role} at {company}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
