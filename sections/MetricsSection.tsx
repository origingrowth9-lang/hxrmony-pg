'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SectionTitle, GlassCard } from '@/components/index';
import { metrics } from '@/lib/data';

const AnimatedCounter = ({ value, unit, duration = 2 }: { value: number; unit: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      if (progress <= 1) {
        setDisplayValue(Math.floor(value * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  const formatValue = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
      {formatValue(displayValue)}{unit}
    </span>
  );
};

export const MetricsSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-dark-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-glow-lg rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-sm rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Métricas de Impacto"
          subtitle="Números que demuestran nuestro compromiso con la excelencia"
        />

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="text-center h-full flex flex-col items-center justify-center">
                <div className="mb-4">
                  <AnimatedCounter value={metric.value} unit={metric.unit} />
                </div>
                <p className="text-gray-400 text-sm font-medium">{metric.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="border-primary-500/50 bg-gradient-to-r from-primary-500/5 to-secondary-500/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Crecimiento Anual</h3>
                <p className="text-gray-400">Incremento del 150% en usuarios y capacidad</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Alcance Global</h3>
                <p className="text-gray-400">Presencia en 25 países y 6 continentes</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Inversión en I+D</h3>
                <p className="text-gray-400">40% de ingresos dedicados a investigación</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
