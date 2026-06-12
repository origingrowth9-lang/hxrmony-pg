'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/index';
import { TestimonialCard } from '@/components/TestimonialCard';

const testimonials = [
  {
    quote:
      'Harmony transformó completamente nuestro sistema educativo. Los resultados en retención de estudiantes fueron excepcionales.',
    author: 'Dra. María Gonzalez',
    role: 'Directora',
    company: 'Instituto Educativo Elite',
    avatar: '👩‍🎓',
    rating: 5,
  },
  {
    quote:
      'La solución de arquitectura de Harmony redujo nuestro tiempo de diseño en un 60%. Increíble precisión.',
    author: 'Arch. Pedro López',
    role: 'Principal Architect',
    company: 'Construcciones Futuro',
    avatar: '👨‍🏗️',
    rating: 5,
  },
  {
    quote:
      'Su tecnología de movilidad autónoma es la más avanzada que hemos visto. Perfecta integración.',
    author: 'Luis Martínez',
    role: 'VP Technology',
    company: 'MobileTech Solutions',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    quote:
      'El sistema de prevención de fraudes detectó anomalías que otros pasaron por alto. Excelente.',
    author: 'Ana Ruiz',
    role: 'Risk Officer',
    company: 'Banco Global',
    avatar: '👩‍💼',
    rating: 5,
  },
  {
    quote:
      'La plataforma de desarrollo aceleró nuestras iteraciones. El soporte técnico es de clase mundial.',
    author: 'DevTeam Lead',
    role: 'Engineering Manager',
    company: 'TechCorp Inc',
    avatar: '👨‍💻',
    rating: 5,
  },
  {
    quote:
      'Trabajar con Harmony fue transformacional. Su equipo entiende realmente el futuro de la tecnología.',
    author: 'Sofia Vargas',
    role: 'CEO',
    company: 'Innovation Labs',
    avatar: '👩‍💼',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-dark-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glow-lg rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Lo Que Nuestros Clientes Dicen"
          subtitle="Testimonios de empresas que confían en nuestra innovación"
        />

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} {...testimonial} index={index} />
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
              99.8%
            </h3>
            <p className="text-gray-400">Satisfacción de Clientes</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
              150+
            </h3>
            <p className="text-gray-400">Clientes Globales</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
              24/7
            </h3>
            <p className="text-gray-400">Soporte Técnico</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
