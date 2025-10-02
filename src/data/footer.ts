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
  description: "Un écosystème de startup tech africaines créant des solutions digitales à fort impact local pour la transformation numérique du continent.",
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
        { href: "https://www.linkedin.com/company/innovatelq/", label: "LinkedIn" },
        { href: "https://www.instagram.com/innovatelq_africa/profilecard/?igsh=YWRzZ3BtNDZuZmRk", label: "Instagram" },
        { href: "https://www.facebook.com/share/1F9DBS7iYC/?mibextid=wwXIfr", label: "Facebook" }
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