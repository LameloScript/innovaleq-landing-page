'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface App {
  name: string;
  logo: string;
  description: string;
  link: string;
  logoSize?: {
    width: number;
    height: number;
  };
}

interface AppShowcaseProps {
  title: string;
  subtitle: string;
  apps: App[];
}

const AppShowcase: React.FC<AppShowcaseProps> = ({ title, subtitle, apps }) => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  return (
    <>
      <section
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/back-2.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              {subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {apps.map((app, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedApp(app)}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg flex items-center justify-center cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgb(255, 255, 255)" }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <div
                    className="relative mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      width: app.logoSize?.width || 128,
                      height: app.logoSize?.height || 128
                    }}
                  >
                    <Image
                      src={app.logo}
                      alt={app.name}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {app.name}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedApp(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none transition-colors"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <div
                className="relative mx-auto "
                style={{
                  width: selectedApp.logoSize?.width ? selectedApp.logoSize.width * 1.25 : 128,
                  height: selectedApp.logoSize?.height ? selectedApp.logoSize.height * 1.25 : 120
                }}
              >
                <Image
                  src={selectedApp.logo}
                  alt={selectedApp.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              {selectedApp.description}
            </p>

            <div className="flex justify-center">
              <a
                href={selectedApp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 inline-flex items-center gap-2"
              >
                Accéder au produit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppShowcase;