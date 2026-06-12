'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/index';
import { TeamMember } from '@/components/TeamMember';

const team = [
  {
    id: 'ceo',
    name: 'Dr. Carlos Mendez',
    role: 'CEO & Founder',
    bio: 'Visionario en tecnología disruptiva con 20 años de experiencia en innovación empresarial.',
    avatar: '👨‍💼',
    socials: [
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
    ],
  },
  {
    id: 'cto',
    name: 'Sofia Rodriguez',
    role: 'CTO',
    bio: 'Experta en arquitectura de sistemas distribuidos y machine learning aplicado.',
    avatar: '👩‍💻',
    socials: [
      { name: 'LinkedIn', url: '#' },
      { name: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'cfo',
    name: 'Juan Torres',
    role: 'CFO',
    bio: 'Especialista en finanzas cuantitativas y gestión de inversión tecnológica.',
    avatar: '👨‍💼',
    socials: [
      { name: 'LinkedIn', url: '#' },
    ],
  },
  {
    id: 'research',
    name: 'Dr. Maria Chen',
    role: 'Head of Research',
    bio: 'Directora de investigación con doctorado en IA y publicaciones en top-tier venues.',
    avatar: '👩‍🔬',
    socials: [
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
    ],
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="relative py-20 md:py-32 bg-dark-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-glow-sm rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestro Equipo"
          subtitle="Líderes en innovación tecnológica con visión global"
        />

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Team Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un equipo de expertos apasionados por transformar el futuro. Combinamos décadas de experiencia
            en tecnología, investigación y emprendimiento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
