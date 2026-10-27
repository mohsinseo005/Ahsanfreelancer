import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ServiceModal } from './components/ServiceModal.tsx';
import { QuoteCalculator } from './components/QuoteCalculator.tsx';
import { FleetSection } from './components/FleetSection.tsx';
import { CoverageMapSection } from './components/CoverageMapSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { CertificationsSecuritySection } from './components/CertificationsSecuritySection.tsx';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton.tsx';
import { Footer } from './components/Footer.tsx';
import { ServiceDetail, SERVICES_DATA } from './data/uciData.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [quoteServicePrefill, setQuoteServicePrefill] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuoteServicePrefill(serviceTitle);
    }
    scrollToSection('cotizador');
  };

  const handleSelectService = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  // Scroll listener to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'flota', 'cobertura', 'cotizador', 'nosotros', 'faq', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Top Header & Emergency Bar */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Primary Action & Value Proposition */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreServices={() => scrollToSection('servicios')}
        />

        {/* 2. Asymmetric Bento Grid of 6 Specialized Clinical Services */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenQuote={handleOpenQuote}
        />

        {/* 3. Interactive Instant Transfer Coordinator & Cotizador */}
        <QuoteCalculator initialService={quoteServicePrefill} />

        {/* 4. Fleet and Electromedicine Technologies (Hamilton, Zoll, Stryker) */}
        <FleetSection />

        {/* 5. Geographic Coverage (Santiago Comunas & National Routes) */}
        <CoverageMapSection />

        {/* 6. About Us (15 Years Experience, Accreditation, Medical Staff) */}
        <AboutSection />

        {/* 7. Clinical & Financial FAQ Accordion */}
        <FaqSection />

        {/* 8. Contact, Base Location (Independencia), and Emergency Desk */}
        <ContactSection />

        {/* 9. Certificaciones y Seguridad Sanitaria (MINSAL, ISO, Superintendencia) */}
        <CertificationsSecuritySection />
      </main>

      {/* Real-time Floating WhatsApp Button with pre-filled urgent inquiries */}
      <FloatingWhatsAppButton />

      {/* Authoritative Regulatory Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Deep Service Modal / Detail Page Sheet */}
      <ServiceModal
        service={selectedService}
        onClose={handleCloseServiceModal}
        onSelectForQuote={(title) => handleOpenQuote(title)}
      />
    </div>
  );
}
