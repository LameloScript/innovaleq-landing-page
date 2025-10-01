'use client';

import { motion } from 'framer-motion';
import LegalSection from '@/components/LegalSection';
import LegalHeroSection from '@/components/LegalHeroSection';
import { rgpdConformite } from '@/data/legalContent';

export default function RGPD() {
  return (
    <div>
      <LegalHeroSection
        title="RGPD"
        subtitle="Règlement Général sur la Protection des Données"
        lastUpdated={rgpdConformite.lastUpdated}
      />

      {rgpdConformite.sections.map((section, index) => (
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
          Exercer vos droits RGPD
        </h3>
        <p className="text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Délégué à la Protection des Données : Jean Martin
          <br />
          Email : Contact@innovatelq.sn
          <br />
          Téléphone : +225 0720140468
          <br />
          Adresse : Almadies Zone 4, Dakar, Senegal
          <br />
          <br />
          Pour toute réclamation : CNIL - 3 Place de Fontenoy, 75334 Paris Cedex 07
        </p>
      </motion.div>
    </div>
  );
}