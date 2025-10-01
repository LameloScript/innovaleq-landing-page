'use client';

import { motion } from 'framer-motion';
import LegalSection from '@/components/LegalSection';
import LegalHeroSection from '@/components/LegalHeroSection';
import { politiqueConfidentialite } from '@/data/legalContent';

export default function PolitiqueConfidentialite() {
  return (
    <div>
      <LegalHeroSection
        title="Politique de Confidentialité"
        subtitle="Comprendre comment nous protégeons vos données personnelles"
        lastUpdated={politiqueConfidentialite.lastUpdated}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mt-8"
      >
        <p
          className="text-white/60 text-sm mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Dernière mise à jour : {politiqueConfidentialite.lastUpdated}
        </p>
      </motion.div>

      {politiqueConfidentialite.sections.map((section, index) => (
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
          Contact DPO
        </h3>
        <p className="text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Délégué à la Protection des Données
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