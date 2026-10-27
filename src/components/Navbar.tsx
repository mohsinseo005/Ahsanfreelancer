import React, { useState } from 'react';
import { Phone, Menu, X, MessageSquare, ShieldCheck, Ambulance, ArrowRight } from 'lucide-react';
import { UCI_BUSINESS_INFO } from '../data/uciData.ts';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'flota', label: 'Flota UCI' },
    { id: 'cobertura', label: 'Cobertura' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'faq', label: 'Preguntas' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 font-bold text-teal-400">
              <Ambulance className="w-3.5 h-3.5" />
              Despacho Clínico 24/7 Gran Santiago & Regiones
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden md:inline text-slate-400 font-medium">
              15 años de trayectoria · SEREMI de Salud RM
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-slate-400">Central Telefónica:</span>
            <a
              href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
              className="text-white hover:text-teal-400 transition-colors flex items-center gap-1.5 font-bold tabular-nums"
            >
              <Phone className="w-3 h-3 text-red-500 animate-pulse" />
              <span>{UCI_BUSINESS_INFO.phoneEmergency}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header adhering strictly to selector target */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs">
        {/* div#root > div > header > div:nth-of-type(1) - styled with background-color: #ffffff */}
        <div
          style={{ backgroundColor: '#ffffff' }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="flex items-center justify-between gap-2 sm:gap-6 lg:gap-8 h-20">
            {/* Zone 1: Brand Mark with Official Logo and Clean Typography */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('inicio');
              }}
              className="flex items-center gap-2.5 sm:gap-3.5 text-slate-900 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-0.5 sm:p-1"
            >
              <div className="relative shrink-0">
                <img
                  src={UCI_BUSINESS_INFO.images.logo}
                  alt="Logo Oficial UCI Ambulancias"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-1">
                  <span className="text-slate-950 font-black tracking-tight text-base sm:text-xl sm:text-[1.35rem]">
                    UCI AMBULANCIAS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-teal-700 tracking-wider uppercase">
                  <span>SANTIAGO</span>
                  <span className="text-slate-300">·</span>
                  <span>CHILE</span>
                </div>
              </div>
            </a>

            {/* Zone 2: Crisp Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 ${
                      isActive ? 'text-teal-700 font-bold' : ''
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Executive Medical Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Emergency Call Button */}
              <a
                href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 group"
                aria-label="Llamar a Urgencias"
              >
                <Phone className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                <span className="hidden xs:inline sm:inline">Urgencias</span>
              </a>

              {/* Coordinator Button */}
              <button
                onClick={onOpenQuote}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
                <span>Coordinar Traslado</span>
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors shrink-0"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <a
                href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
                className="flex items-center justify-center gap-2 p-2.5 text-xs font-bold text-white bg-red-600 rounded-xl shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Llamar Urgencias
              </a>
              <a
                href={UCI_BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 text-xs font-bold text-slate-950 bg-teal-400 rounded-xl shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp 24/7
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-teal-50 text-teal-800'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Abrir Cotizador de Traslado</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span className="flex items-center gap-1 text-teal-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Resolución Sanitaria SEREMI RM
              </span>
              <span>Escanilla 1000, Independencia</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
