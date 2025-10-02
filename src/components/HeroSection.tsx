'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen flex flex-col -mt-20 pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/back.avif')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Spacer */}
        <div className="flex-1 pt-8"></div>

        {/* Main Title + Bottom Sections */}
        <div className="w-full px-6 pb-16 relative">
          <div className="max-w-7xl mx-auto">
            {/* Animated Hero Image */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-30 z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="text-center mb-6 relative z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#f6a42b] text-center leading-tight tracking-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
                CRÉER. DÉVELOPPER. INNOVER
              </h1>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >

              {/* WEB & MOBILE */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border border-white/20 p-4 md:p-8 h-full flex flex-col hover:border-white/40 transition-all duration-300">
                  <div className="mb-auto">
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                      <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider" style={{fontFamily: 'Bebas Neue, cursive'}}>
                        WEB & MOBILE<br />DEVS
                      </h2>
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80 flex-shrink-0 ml-2 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:flex items-end justify-between mt-6">
                    <p className="text-white/90 text-base leading-relaxed flex-1 mr-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Solutions complètes pour votre business : sites web, applications mobiles avec fonctionnalités évolutives.
                    </p>
                    <svg
                      className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* GRAPHICS DESIGN */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border border-white/20 p-4 md:p-8 h-full flex flex-col hover:border-white/40 transition-all duration-300">
                  <div className="mb-auto">
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                      <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider" style={{fontFamily: 'Bebas Neue, cursive'}}>
                        GRAPHICS<br />DESIGN
                      </h2>
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80 flex-shrink-0 ml-2 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:flex items-end justify-between mt-6">
                    <p className="text-white/90 text-base leading-relaxed flex-1 mr-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Design graphique efficace alliant réactivité, compétences et méthodes de travail optimales.
                    </p>
                    <svg
                      className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* CYBERSÉCURITÉ */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border border-white/20 p-4 md:p-8 h-full flex flex-col hover:border-white/40 transition-all duration-300">
                  <div className="mb-auto">
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                      <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider" style={{fontFamily: 'Bebas Neue, cursive'}}>
                        CYBERSÉCURITÉ
                      </h2>
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80 flex-shrink-0 ml-2 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:flex items-end justify-between mt-6">
                    <p className="text-white/90 text-base leading-relaxed flex-1 mr-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Assistance sécurité : recherche de vulnérabilités sur applications Android, iOS et Web.
                    </p>
                    <svg
                      className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* CONSULTING */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border border-white/20 p-4 md:p-8 h-full flex flex-col hover:border-white/40 transition-all duration-300">
                  <div className="mb-auto">
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                      <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider" style={{fontFamily: 'Bebas Neue, cursive'}}>
                        CONSULTING
                      </h2>
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80 flex-shrink-0 ml-2 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:flex items-end justify-between mt-6">
                    <p className="text-white/90 text-base leading-relaxed flex-1 mr-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Conseil stratégique et accompagnement pour optimiser votre transformation digitale.
                    </p>
                    <svg
                      className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
      </section>

     
    </>
  );
}