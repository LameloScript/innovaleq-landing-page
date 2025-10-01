"use client";

import Image from 'next/image';
import { FooterProps } from '../types';

export default function Footer({ logo, contact, description, sections, bottomLinks }: FooterProps) {
  return (
    <footer className="bg-black text-white" style={{fontFamily: 'Poppins, sans-serif'}}>
      {/* Section haute avec logo et contact */}
      <div className="border-b border-t pt-4 pb-4 border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image src={logo.src} alt={logo.alt} width={112} height={112} className="h-28 w-auto" />
            </div>

            {/* Contact info */}
            <div className="text-right">
              <div className="text-xl font-semibold mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>{contact.phone}</div>
              <div className="text-white/80 text-base" style={{fontFamily: 'Poppins, sans-serif'}}>{contact.email}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Colonne gauche - Description */}
          <div className="pr-2">
            <p className="text-white/90 text-base leading-relaxed max-w-md pr-18" style={{fontFamily: 'Poppins, sans-serif'}}>
              {description}
            </p>
          </div>

          {/* Colonnes de navigation à droite */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-bold text-lg mb-6" style={{fontFamily: 'Bebas Neue, cursive'}}>{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-white/70 hover:text-white transition-colors text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bas */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
              {bottomLinks.copyright}
            </div>
            <div className="flex items-center gap-6">
              <a href={bottomLinks.madeBy.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                {bottomLinks.madeBy.label}
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-base" style={{fontFamily: 'Poppins, sans-serif'}}
              >
                Retour en haut
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}