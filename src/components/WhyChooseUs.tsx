'use client';

import { motion } from 'framer-motion';
import { WhyChooseUsProps } from '../types';

export default function WhyChooseUs({ heading, subtitle, sections, minitext }: WhyChooseUsProps) {
  return (
    <section className="px-6 py-16 md:py-24 lg:py-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-[260px] py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl shadow-lg shadow-black/10 mb-4">
            <span className="text-xs md:text-sm text-white/80" style={{fontFamily: 'Poppins, sans-serif'}}>
              {minitext}
            </span>
          </div>
          <div className="mb-12 md:mb-24 w-full">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white" style={{fontFamily: 'Bebas Neue, cursive'}}>
              {heading}
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Poppins, sans-serif'}}>
              {subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 xl:gap-16 w-full">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="text-left border border-white/20 rounded-2xl p-4 md:p-6 bg-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4 md:mb-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white" style={{fontFamily: 'Bebas Neue, cursive'}}>
                    {section.heading}
                  </h3>
                  <div className="ml-4 md:ml-6 flex-shrink-0">
                    {section.icon}
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

