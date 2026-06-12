'use client';

import { motion } from 'framer-motion';
import { AnimatedBackground, Particles } from '@/components/index';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <Particles count={30} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-glow-lg rounded-full filter blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-sm rounded-full filter blur-3xl opacity-15 animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent animate-pulse">
              Construimos la tecnología
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent">
              detrás del futuro
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Desarrollamos sistemas inteligentes para educación, arquitectura, movilidad, desarrollo y finanzas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#ecosystems"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(91, 117, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg hover:shadow-glow-lg transition-all duration-300"
              role="button"
              tabIndex={0}
              aria-label="Explorar nuestros ecosistemas de innovación"
            >
              Explorar Ecosistema
            </motion.a>

            <motion.a
              href="#technologies"
              whileHover={{ scale: 1.05, borderColor: 'rgba(91, 117, 255, 1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border-2 border-primary-500/50 text-primary-400 font-bold text-lg hover:bg-primary-500/10 transition-all duration-300"
              role="button"
              tabIndex={0}
              aria-label="Ver nuestras tecnologías avanzadas"
            >
              Ver Tecnologías
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
