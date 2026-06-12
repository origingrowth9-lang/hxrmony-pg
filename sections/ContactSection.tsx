'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle, GlassCard } from '@/components/index';
import { validateContactForm } from '@/lib/validation';
import type { ContactFormData } from '@/types/index';

export const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    projectObjective: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      projectObjective: '',
    });

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-glow-lg rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Conecta con Nosotros"
          subtitle="Cuéntanos sobre tu próximo proyecto innovador"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlassCard className="border-primary-500/30">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-400 mb-6">Nos pondremos en contacto pronto. Gracias por tu interés en harmony.</p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 rounded-lg bg-primary-500/20 text-primary-400 font-semibold hover:bg-primary-500/30 transition-colors"
                >
                  Enviar otro mensaje
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border transition-all text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-500/50 focus:ring-red-500'
                        : 'border-primary-500/20 focus:ring-primary-500'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    required
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border transition-all text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.company
                        ? 'border-red-500/50 focus:ring-red-500'
                        : 'border-primary-500/20 focus:ring-primary-500'
                    }`}
                  />
                  {errors.company && (
                    <p id="company-error" className="text-red-400 text-xs mt-1">
                      {errors.company}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo Electrónico <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border transition-all text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500'
                        : 'border-primary-500/20 focus:ring-primary-500'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                {/* Project Objective */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="projectObjective" className="block text-sm font-medium text-gray-300 mb-2">
                    Objetivo del Proyecto <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="projectObjective"
                    name="projectObjective"
                    value={formData.projectObjective}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto y qué buscas lograr..."
                    rows={5}
                    required
                    aria-describedby={errors.projectObjective ? 'objective-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border transition-all text-white placeholder-gray-500 focus:outline-none focus:ring-2 resize-none ${
                      errors.projectObjective
                        ? 'border-red-500/50 focus:ring-red-500'
                        : 'border-primary-500/20 focus:ring-primary-500'
                    }`}
                  />
                  {errors.projectObjective && (
                    <p id="objective-error" className="text-red-400 text-xs mt-1">
                      {errors.projectObjective}
                    </p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Info */}
                <p className="text-xs text-gray-500 text-center">
                  Nos comprometemos a proteger tu privacidad. Lee nuestra política de privacidad.
                </p>
              </form>
            )}
          </GlassCard>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '📍',
              title: 'Ubicación',
              content: 'San Francisco, CA',
            },
            {
              icon: '📧',
              title: 'Email',
              content: 'hello@harmony.tech',
            },
            {
              icon: '🕐',
              title: 'Disponibilidad',
              content: 'Lunes a Viernes, 9-17 UTC',
            },
          ].map((info, index) => (
            <GlassCard key={info.title} hover={false} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="text-sm font-semibold text-gray-300 mb-1">{info.title}</h3>
                <p className="text-primary-400">{info.content}</p>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
