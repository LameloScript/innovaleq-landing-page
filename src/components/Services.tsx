'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ServicesProps } from '../types';

export default function Services({ minitext, heading, subtitle, services }: ServicesProps) {
  return (
    <section className="px-6 py-16 md:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-[200px] py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl shadow-lg shadow-black/10 mb-4">
            <span className="text-white/80 text-xs md:text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
              {minitext}
            </span>
          </div>
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-4 md:mb-6" style={{fontFamily: 'Bebas Neue, cursive'}}>
              {heading}
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Poppins, sans-serif'}}>
              {subtitle}
            </p>
          </div>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className={`space-y-4 md:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-2 md:px-3 py-1 bg-white/10 rounded-full text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-wide" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {service.category}
                </span>

                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm md:text-lg leading-relaxed max-w-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {service.description}
                </p>

                <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-900 flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-xs md:text-base leading-relaxed" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}