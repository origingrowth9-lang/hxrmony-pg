'use client';

import { motion } from 'framer-motion';
import { SectionTitle, GlassCard } from '@/components/index';
import { ecosystems } from '@/lib/data';

export const EcosystemSection = () => {
  return (
    <section id="ecosystems" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-glow-lg rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Ecosistemas Conectados"
          subtitle="Cinco dominios de innovación tecnológica integrados"
        />

        {/* Network Grid */}
        <div className="mt-20">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-5 gap-8 mb-12">
            {ecosystems.map((eco, index) => (
              <motion.div
                key={eco.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard hover className="h-full cursor-pointer group">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{eco.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{eco.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{eco.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {eco.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 rounded-lg bg-primary-500/20 text-primary-400 text-sm font-semibold hover:bg-primary-500/30 transition-colors"
                    >
                      Explorar
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden space-y-4">
            {ecosystems.map((eco, index) => (
              <motion.div
                key={eco.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="flex gap-4">
                    <div className="text-4xl">{eco.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{eco.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{eco.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full py-2 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-semibold hover:bg-primary-500/30 transition-colors"
                      >
                        Explorar
                      </motion.button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Network Visualization Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GlassCard className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-500/30">
            <p className="text-gray-400">
              Estos ecosistemas están interconectados formando un sistema completo de innovación donde cada componente se potencia mutuamente.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
