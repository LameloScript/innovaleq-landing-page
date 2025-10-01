import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animation du code 404 */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-bebas leading-none text-white animate-pulse drop-shadow-2xl">
            404
          </h1>
          <div className="absolute inset-0 bg-white opacity-30 blur-3xl -z-10"></div>
        </div>

        {/* Message d'erreur */}
        <h2 className="text-3xl md:text-5xl font-bebas text-black mb-4">
          Page introuvable
        </h2>
        <p className="text-gray-600 text-lg mb-8 font-poppins">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* Bouton de retour */}
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-white text-black border-2 border-black font-poppins font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Retour à l&apos;accueil
        </Link>

        {/* Liens utiles */}
        <div className="mt-12 flex justify-center gap-6 text-sm font-poppins">
          <Link href="/#services" className="text-gray-600 hover:text-black transition-colors">
            Services
          </Link>
          <Link href="/#about" className="text-gray-600 hover:text-black transition-colors">
            À propos
          </Link>
          <Link href="/#contact" className="text-gray-600 hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
