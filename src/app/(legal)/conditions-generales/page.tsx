'use client';

import { motion } from 'framer-motion';
import LegalSection from '@/components/LegalSection';
import LegalHeroSection from '@/components/LegalHeroSection';
import { conditionsGenerales } from '@/data/legalContent';

export default function ConditionsGenerales() {
  return (
    <div>
      {/* Hero Section */}
      <LegalHeroSection
        title="Conditions Générales"
        lastUpdated={conditionsGenerales.lastUpdated}
      />

      {conditionsGenerales.sections.map((section, index) => (
        <LegalSection key={index} section={section} index={index} />
      ))}

      <motion.div
        className="mt-12 p-6 border border-white/20 rounded-lg bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-xl font-bold text-white mb-3"
          style={{ fontFamily: 'Bebas Neue, cursive' }}
        >
          Contact
        </h3>
        <p className="text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Pour toute question concernant ces conditions générales :
          <br />
          Email : Contact@innovatelq.sn
          <br />
          Téléphone : +225 0720140468
          <br />
          Adresse : Almadies Zone 4, Dakar, Senegal
        </p>
      </motion.div>
    </div>
  );
}