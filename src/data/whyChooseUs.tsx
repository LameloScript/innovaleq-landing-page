import { WhyChooseUsProps } from '../types';

export const whyChooseUsData: WhyChooseUsProps = {
  heading: "L'EXCELLENCE QUI FAIT LA DIFFÉRENCE",
  subtitle: "Découvrez les avantages qui nous distinguent et font de nous le partenaire idéal pour votre transformation digitale.",
  minitext: "🤗 |  Pourquoi nous choisir ?",
  sections: [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      heading: "Technologies de pointe",
      description:
        "Nous maîtrisons les frameworks les plus récents et les architectures cloud modernes pour créer des applications scalables et performantes. Notre veille technologique constante nous permet d'adopter les meilleures solutions du marché.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      heading: "Sécurité renforcée",
      description:
        "La cybersécurité est au cœur de nos préoccupations. Nous implémentons des protocoles de sécurité avancés, effectuons des audits réguliers et appliquons les standards internationaux pour protéger vos données sensibles et votre infrastructure.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      heading: "Livraison rapide",
      description:
        "Grâce à nos méthodologies agiles et notre expertise technique, nous respectons les délais tout en maintenant une qualité irréprochable. Notre processus de développement optimisé garantit une mise sur le marché accélérée.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      heading: "Support dédié",
      description:
        "Une équipe dédiée vous accompagne avant, pendant et après le développement. Nous proposons un support technique réactif, des formations personnalisées et une maintenance proactive pour assurer la pérennité de vos solutions.",
    },
  ],
};