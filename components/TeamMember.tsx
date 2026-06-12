'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

interface Team {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: { name: string; url: string }[];
}

interface TeamMemberProps {
  member: Team;
  index: number;
}

export const TeamMember = ({ member, index }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard hover className="h-full flex flex-col items-center text-center group">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-4xl mb-4 shadow-glow-lg"
        >
          {member.avatar}
        </motion.div>

        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>

        {/* Role */}
        <p className="text-sm text-primary-400 font-semibold mb-3">{member.role}</p>

        {/* Bio */}
        <p className="text-gray-400 text-sm flex-1 mb-4">{member.bio}</p>

        {/* Socials */}
        {member.socials && member.socials.length > 0 && (
          <div className="flex gap-3">
            {member.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 hover:bg-primary-500/40 transition-colors"
                title={social.name}
              >
                {social.name.charAt(0).toUpperCase()}
              </motion.a>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
};
