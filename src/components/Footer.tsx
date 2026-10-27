import React from 'react';
import { ShieldCheck, Phone, MapPin, Mail, Youtube, Facebook, AtSign, Clock, ArrowUp } from 'lucide-react';
import { UCI_BUSINESS_INFO } from '../data/uciData.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={UCI_BUSINESS_INFO.images.logo}
                alt="Logo Oficial UCI Ambulancias"
                className="w-10 h-10 object-contain drop-shadow-sm rounded-full bg-white p-0.5"
              />
              <span className="text-white font-extrabold text-lg tracking-tight">
                UCI AMBULANCIAS CHILE
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Servicio líder en ambulancias UCI móviles y traslados de alta y mediana complejidad. 15 años de trayectoria médica ininterrumpida al servicio de la salud en la Región Metropolitana y todo el país.
            </p>

            <div className="flex items-center gap-3 text-slate-300">
              <a
                href={UCI_BUSINESS_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:bg-red-600 transition-colors"
                aria-label="YouTube oficial UCI Ambulancias"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={UCI_BUSINESS_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook oficial UCI Ambulancias"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={UCI_BUSINESS_INFO.socialLinks.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Threads oficial UCI Ambulancias"
              >
                <AtSign className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Link Col */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Servicios Clínicos
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  UCI Móvil / Traslado Crítico
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Traslado Básico & Altas Médicas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Traslado Psiquiátrico & Crisis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Diálisis, Quimio y Exámenes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cobertura Médica de Eventos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors text-left"
                >
                  Traslados Interurbanos a Regiones
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage & Nav Col */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navegación & Cobertura
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('flota')}
                  className="hover:text-white transition-colors"
                >
                  Flota y Equipamiento
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cobertura')}
                  className="hover:text-white transition-colors"
                >
                  Cobertura Comunal Santiago
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cotizador')}
                  className="hover:text-white transition-colors"
                >
                  Cotizador de Traslado
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors"
                >
                  Nuestra Trayectoria (15 Años)
                </button>
              </li>
              <li>
                <a
                  href="#certificaciones"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('certificaciones');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-teal-400"
                >
                  Certificaciones y Seguridad
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Contacto 24/7
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="tabular-nums text-white font-semibold">
                  {UCI_BUSINESS_INFO.phoneEmergency}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span className="tabular-nums">
                  {UCI_BUSINESS_INFO.phoneLandline}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Escanilla 1000, Independencia, Santiago</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Servicio 24 Horas / 365 Días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Accreditation */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong>Aviso de Salud Pública:</strong> UCI Ambulancias es una empresa privada de transporte médico de emergencia y traslados de alta y mediana complejidad autorizada por la SEREMI de Salud de la Región Metropolitana. Para emergencias en la vía pública o requerimientos de rescate público general del Estado de Chile, los usuarios también pueden llamar al Servicio de Atención Médica de Urgencia (SAMU 131).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              © 2009 – {new Date().getFullYear()} UCI Ambulancias (uciambulancias.cl). 15 años de experiencia. Todos los derechos reservados.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
