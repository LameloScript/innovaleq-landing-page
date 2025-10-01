'use client';

import { motion } from 'framer-motion';
import { LegalSection as LegalSectionType } from '../types/legal';

interface LegalSectionProps {
  section: LegalSectionType;
  index: number;
}

export default function LegalSection({ section, index }: LegalSectionProps) {
  const renderContent = () => {
    if (Array.isArray(section.content)) {
      return (
        <ul className="space-y-2">
          {section.content.map((item, i) => (
            <li key={i} className="text-white/80 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-white/80 leading-relaxed">{section.content}</p>;
  };

  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-2xl md:text-3xl font-bold text-white mb-4"
        style={{ fontFamily: 'Bebas Neue, cursive' }}
      >
        {section.title}
      </h2>
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        {renderContent()}
      </div>
    </motion.section>
  );
}