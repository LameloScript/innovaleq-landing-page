import { ServicesProps } from '../types';

export const servicesData: ServicesProps = {
  minitext: "NOS SERVICES",
  heading: "Solutions innovantes pour votre croissance",
  subtitle: "Nous accompagnons nos clients avec des services sur mesure qui transforment leurs défis en opportunités de succès.",
  services: [
    {
      title: "Web & Mobile Devs",
      category: "WEB & MOBILE DEVS",
      description: "Solutions complètes pour votre business : développement de sites web modernes et applications mobiles avec fonctionnalités évolutives adaptées à vos besoins métier et à votre croissance.",
      image: "/web-mobile.avif",
      features: [
        "Sites web responsifs optimisés SEO avec technologies modernes (React, Next.js)",
        "Applications mobiles natives iOS et Android avec UX/UI soignée",
        "Fonctionnalités évolutives et architecture modulaire pour une maintenance facilitée",
        "Intégration API, bases de données et systèmes de paiement sécurisés",
        "Tests automatisés et déploiement continu pour une qualité garantie"
      ]
    },
    {
      title: "Graphics Design",
      category: "GRAPHICS DESIGN",
      description: "Design graphique efficace alliant créativité, réactivité et compétences techniques avec des méthodes de travail collaboratives optimales pour un résultat professionnel.",
      image: "/grapich.avif",
      features: [
        "Identité visuelle complète : logo, charte graphique et supports de communication",
        "Interfaces utilisateur modernes et intuitives centrées sur l'expérience utilisateur",
        "Design système cohérent pour une identité digitale forte",
        "Méthodes de travail agiles avec validation itérative et feedback continu",
        "Livrables multi-supports : print, web, mobile et réseaux sociaux"
      ]
    },
    {
      title: "Cybersécurité",
      category: "CYBERSÉCURITÉ",
      description: "Assistance sécurité spécialisée : audit complet, recherche proactive de vulnérabilités et renforcement de la sécurité sur applications Android, iOS et Web.",
      image: "/cybersecurite.avif",
      features: [
        "Audit de sécurité approfondi des applications mobiles et web",
        "Tests de pénétration OWASP avec méthodologie reconnue",
        "Analyse du code source et recherche de vulnérabilités critiques",
        "Plan de remédiation détaillé avec priorisation des risques",
        "Formation équipes et sensibilisation aux bonnes pratiques sécuritaires"
      ]
    },
    {
      title: "Consulting",
      category: "CONSULTING",
      description: "Conseil stratégique personnalisé et accompagnement expert pour optimiser votre transformation digitale avec une vision long terme et des solutions pragmatiques.",
      image: "/consulting.avif",
      features: [
        "Stratégie de transformation digitale alignée sur vos objectifs business",
        "Accompagnement personnalisé avec expertise sectorielle adaptée",
        "Audit et optimisation des processus métier existants",
        "Roadmap technologique détaillée avec planning et budget prévisionnels",
        "Change management et formation des équipes aux nouveaux outils"
      ]
    }
  ]
};