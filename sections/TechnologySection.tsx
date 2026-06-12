'use client';

import { motion } from 'framer-motion';
import { SectionTitle, GlassCard } from '@/components/index';
import { technologies } from '@/lib/data';

export const TechnologySection = () => {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <section id="technologies" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-glow-sm rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Tecnologías Avanzadas"
          subtitle="Stack integral de soluciones para transformar industrias"
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border border-primary-500/30 text-primary-400 font-semibold hover:bg-primary-500/20 transition-all"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="h-full flex flex-col cursor-pointer group relative overflow-hidden">
                {/* Icon */}
                <div className="text-5xl mb-4">{tech.icon}</div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm flex-1 mb-4">{tech.description}</p>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary-500/20 text-primary-400">
                    {tech.category}
                  </span>
                  <motion.svg
                    whileHover={{ x: 5 }}
                    className="w-4 h-4 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="bg-gradient-to-r from-secondary-500/10 to-primary-500/10 border-secondary-500/30">
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                Nuestra arquitectura tecnológica integra las últimas innovaciones en IA, procesamiento de datos y computación en la nube.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-lg bg-primary-500/20 text-primary-400 font-semibold hover:bg-primary-500/30 transition-colors"
              >
                Documentación Técnica
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
