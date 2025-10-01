export default function CTASection() {
  return (
    <section className="relative py-20 px-20 overflow-hidden bg-black">
      <div
        className=" inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/back-2.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="border-2 md:border-4 border-white/20 p-6 md:p-8 bg-black/20 backdrop-blur-sm rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
            PRÊT À TRANSFORMER VOTRE VISION ?
          </h2>

          <div className="space-y-4 md:space-y-6 text-white/80" style={{fontFamily: 'Poppins, sans-serif'}}>
            <p className="text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
              Contactez-nous aujourd&apos;hui et découvrez comment nous pouvons donner vie à vos projets digitaux
              avec des solutions innovantes et sur mesure.
            </p>


          </div>

          <div className="mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button className="group bg-white text-black px-8 py-3 md:px-12 md:py-4 text-sm md:text-lg font-semibold hover:bg-white/90 transition-all duration-300 border-2 border-white flex items-center gap-2 md:gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                Démarrer un projet
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="group border-2 border-white text-white px-8 py-3 md:px-12 md:py-4 text-sm md:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 md:gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                Nous contacter
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}