'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/index';

export const VisionSection = () => {
  const visionPoints = [
    {
      title: 'Tecnología para Todos',
      description: 'Democratizar el acceso a tecnología avanzada',
    },
    {
      title: 'Sostenibilidad Digital',
      description: 'Computación responsable y amigable con el ambiente',
    },
    {
      title: 'Innovación Acelerada',
      description: 'Reducir ciclos de desarrollo y time-to-market',
    },
    {
      title: 'Impacto Social',
      description: 'Resolver problemas complejos de la humanidad',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-gray-300 mb-4">No desarrollamos</span>
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
              software convencional
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Creamos sistemas capaces de transformar industrias completas mediante datos, inteligencia y automatización.
          </motion.p>
        </motion.div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/30 to-secondary-500/30 border border-primary-500/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-400">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{point.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <GlassCard className="bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border-primary-500/40 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Únete a la Revolución Tecnológica</h3>
            <p className="text-gray-400 mb-6">
              Somos más que una empresa. Somos un movimiento hacia el futuro.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold hover:shadow-glow-lg transition-all"
            >
              Conecta con Nosotros
            </motion.a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
