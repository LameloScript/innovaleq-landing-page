// Types pour la section WhyChooseUs
export type SectionProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

export type AboutSectionProps = {
  heading: string;
  description: string;
};

export type WhyChooseUsProps = {
  heading: string;
  subtitle: string;
  sections: SectionProps[];
  minitext: string;
};



// Types pour la section Citation
export type CitationProps = {
  quote: string;
  author: string;
};

// Types pour le Footer
export type FooterLinkProps = {
  href: string;
  label: string;
};

export type FooterSectionProps = {
  title: string;
  links: FooterLinkProps[];
};

export type FooterProps = {
  logo: {
    src: string;
    alt: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  description: string;
  sections: FooterSectionProps[];
  bottomLinks: {
    copyright: string;
    madeBy: {
      label: string;
      href: string;
    };
  };
};

// Types pour le HeroSection
export type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type HeroSectionProps = {
  mainTitle: string;
  services: ServiceCardProps[];
};

// Types pour la section Services
export type ServiceProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
};

export type ServicesProps = {
  minitext: string;
  heading: string;
  subtitle: string;
  services: ServiceProps[];
};

// Types pour la section Etude de Cas
export type CaseStudyProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
};

export type EtudeCasProps = {
  minitext: string;
  heading: string;
  subtitle: string;
  casestudies: CaseStudyProps[];
};

// Types pour la section FAQ
export type FAQItemProps = {
  question: string;
  answer: string;
};

export type FAQProps = {
  minitext: string;
  heading: string;
  subtitle: string;
  questions: FAQItemProps[];
};

// Types pour la section Contact
export type ContactInfoProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export type ContactFormProps = {
  title: string;
  subjects: string[];
};

export type ContactProps = {
  minitext: string;
  heading: string;
  subtitle: string;
  contactInfo: ContactInfoProps[];
  form: ContactFormProps;
};