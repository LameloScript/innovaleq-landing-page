'use client';

import { motion } from 'framer-motion';
import LegalSection from '@/components/LegalSection';
import LegalHeroSection from '@/components/LegalHeroSection';
import { politiqueSecurite } from '@/data/legalContent';

export default function PolitiqueSecurite() {
  return (
    <div>
      {/* Hero Section */}
      <LegalHeroSection
        title="Politique de Sécurité"
        lastUpdated={politiqueSecurite.lastUpdated}
      />

      {politiqueSecurite.sections.map((section, index) => (
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
          Contact Sécurité
        </h3>
        <p className="text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Pour signaler un incident de sécurité :
          <br />
          Email : Contact@innovatelq.sn
          <br />
          Téléphone : +225 0720140468
          <br />
          Réponse garantie sous 24h pour les incidents critiques
        </p>
      </motion.div>
    </div>
  );
}