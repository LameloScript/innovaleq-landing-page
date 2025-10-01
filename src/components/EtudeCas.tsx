import { EtudeCasProps } from '../types';

export default function EtudeCas({ minitext, heading, subtitle, casestudies }: EtudeCasProps) {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-full max-w-[200px] mx-auto py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl shadow-lg shadow-black/10 mb-4">
            <span className="text-white/80 text-xs md:text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
              {minitext}
            </span>
          </div>

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
            {heading}
          </h2>

          <p className="text-sm md:text-lg leading-relaxed text-white/80 max-w-3xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casestudies.map((study, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/10 rounded-full text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-wide mb-3 md:mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {study.category}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight" style={{fontFamily: 'Bebas Neue, cursive'}}>
                    {study.title}
                  </h3>

                  <p className="text-white/70 text-xs md:text-base leading-relaxed mb-3 md:mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {study.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-white/60" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {study.duration}
                    </span>

                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}