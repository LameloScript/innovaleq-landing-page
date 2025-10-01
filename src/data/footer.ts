import { FooterProps } from '../types';

export const footerData: FooterProps = {
  logo: {
    src: "/logo.avif",
    alt: "Innovatelq"
  },
  contact: {
    phone: "+225 07 20 14 04 68",
    email: "Contact@innovatelq.sn"
  },
  description: "Experts en développement web, mobile et cybersécurité pour votre transformation digitale.",
  sections: [
    {
      title: "Navigation",
      links: [
        { href: "#", label: "Services" },
        { href: "#", label: "Contact" },
        { href: "#", label: "À propos" }
      ]
    },
    {
      title: "Suivez-nous",
      links: [
        { href: "#", label: "LinkedIn" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "GitHub" }
      ]
    },
    {
      title: "Légal",
      links: [
        { href: "/conditions-generales", label: "Conditions générales" },
        { href: "/politique-confidentialite", label: "Politique de confidentialité" },
        { href: "/mentions-legales", label: "Mentions légales" },
        { href: "/rgpd", label: "RGPD" },
        { href: "/politique-securite", label: "Politique de sécurité" }
      ]
    }
  ],
  bottomLinks: {
    copyright: "Copyright © Innovatelq 2025",
    madeBy: {
      label: "Made ❤️ by LeClick",
      href: "https://www.leclick.ci"
    }
  }
};