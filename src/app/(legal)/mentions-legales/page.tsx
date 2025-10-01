'use client';

import { motion } from 'framer-motion';
import LegalSection from '@/components/LegalSection';
import LegalHeroSection from '@/components/LegalHeroSection';
import { mentionsLegales } from '@/data/legalContent';

export default function MentionsLegales() {
  return (
    <div>
      <LegalHeroSection
        title="Mentions Légales"
        lastUpdated={mentionsLegales.lastUpdated}
      />

      {mentionsLegales.sections.map((section, index) => (
        <LegalSection key={index} section={section} index={index} />
      ))}

      <motion.div
        className="mt-12 p-6 border border-white/20 rounded-lg bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-white/70 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Numéro de TVA intracommunautaire : FR 01 901 234 567
          <br />
          Tribunal d&apos;immatriculation : Tribunal de Commerce de Paris
        </p>
      </motion.div>
    </div>
  );
}