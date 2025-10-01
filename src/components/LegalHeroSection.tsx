'use client';

interface LegalHeroSectionProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
}

export default function LegalHeroSection({
  title,
  subtitle,
  lastUpdated
}: LegalHeroSectionProps) {
  return (
    <section className="relative flex flex-col  overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10  flex flex-col">
        

        {/* Main Title + Bottom Section */}
        <div className="w-full px-6 pb-16 relative">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-6 relative z-10">
              <h1
                className="text-4xl md:text-6xl lg:text-8xl font-black text-white text-center leading-tight tracking-tight"
                style={{fontFamily: 'Bebas Neue, cursive'}}
              >
                {title}
              </h1>

              {subtitle && (
                <p
                  className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mt-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {subtitle}
                </p>
              )}

              {lastUpdated && (
                <p
                  className="text-white/60 text-sm md:text-base mt-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Dernière mise à jour : {lastUpdated}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}