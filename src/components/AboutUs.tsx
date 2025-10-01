'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
              À PROPOS DE NOUS
            </h2>
            <div className="space-y-4 md:space-y-6 text-white/80" style={{fontFamily: 'Poppins, sans-serif'}}>
              <p className="text-sm md:text-lg leading-relaxed">
                Nous sommes une équipe passionnée de créateurs numériques dédiée à transformer vos idées en solutions innovantes.
                Notre expertise couvre le développement web et mobile, le design graphique, la cybersécurité et le conseil stratégique.
              </p>

              <p className="text-sm md:text-lg leading-relaxed">
                Notre mission : donner vie à vos projets avec des solutions sur mesure qui dépassent vos attentes
                et propulsent votre activité vers de nouveaux horizons.
              </p>
            </div>

            {/* Values as Bullet Points */}
            <div className="mt-6 md:mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6" style={{fontFamily: 'Bebas Neue, cursive'}}>
                NOS VALEURS
              </h3>
              <ul className="space-y-3 md:space-y-4 text-white/80 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Innovation :</span> Nous restons à la pointe des technologies pour offrir des solutions avant-gardistes et performantes.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Qualité :</span> Chaque projet est réalisé avec le plus grand soin et selon les standards les plus élevés de l&apos;industrie.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Collaboration :</span> Nous travaillons en étroite collaboration avec nos clients pour garantir leur pleine satisfaction.
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-lg overflow-hidden border border-white/20">
              <img
                src="/aboutus.avif"
                alt="À propos de nous"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 md:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">

            <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white" style={{fontFamily: 'Bebas Neue, cursive'}}>
              NOS CHIFFRES CLÉS
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>
                50+
              </div>
              <p className="text-white/70 font-medium text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                Projets Réalisés
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>
                100%
              </div>
              <p className="text-white/70 font-medium text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                Clients Satisfaits
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>
                5+
              </div>
              <p className="text-white/70 font-medium text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                Années d&apos;Expérience
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>
                24/7
              </div>
              <p className="text-white/70 font-medium text-xs md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                Support Client
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}