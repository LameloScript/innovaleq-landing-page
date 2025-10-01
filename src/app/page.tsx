import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import CitationSection from "../components/CitationSection";
import WhyChooseUs from "../components/WhyChooseUs";
//import EtudeCas from "../components/EtudeCas";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import CTASection from "../components/CTASection";
import AppShowcase from "../components/AppShowcase";
//import Footer from "../components/Footer";
import { whyChooseUsData } from "../data/whyChooseUs";
import { citationData } from "../data/citation";
import { servicesData } from "../data/services";
//import { etudeCasData } from "../data/etudeCas";
import { faqData } from "../data/faq";
import { contactData } from "../data/contact";
import { appShowcaseData } from "../data/appShowcase";

export default function Home() {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <CitationSection {...citationData} />
      <WhyChooseUs {...whyChooseUsData} />
      <div id="services">
        <Services {...servicesData} />
      </div>
      <CTASection />
      {/* <div id="portfolio">
        <EtudeCas {...etudeCasData} />
      </div> */}
      <AppShowcase {...appShowcaseData} />
      <FAQ {...faqData} />
      <div id="contact">
        <Contact {...contactData} />
      </div>
      

    </div>
  );
}
