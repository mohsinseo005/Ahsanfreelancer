import React from 'react';
import { ArrowUpRight, Shield, Stethoscope, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICES_DATA, ServiceDetail, UCI_BUSINESS_INFO } from '../data/uciData.ts';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenQuote }) => {
  return (
    <section id="servicios" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Catálogo de Servicios Médicos en Chile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Soluciones Médicas Especializadas para Cada Nivel de Complejidad
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Cada traslado cuenta con dotación humana acreditada, tecnología electromédica validada por la autoridad sanitaria y seguros de responsabilidad civil médica en todo el territorio nacional.
          </p>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const isMarquee = idx === 0; // UCI Móvil gets marquee prominence

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl border border-slate-200 hover:border-teal-500/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden ${
                  isMarquee ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Service Photo with contrast scrim */}
                  <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Unboxed Metadata on image bottom */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="font-semibold text-teal-300">
                        {service.category}
                      </span>
                      <span className="text-slate-300">
                        {service.urgencyLevel}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Dotación Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                        Dotación médica a bordo:
                      </div>
                      <div className="text-slate-600 pl-5">
                        {service.dotacion[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/50">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors py-2 whitespace-nowrap shrink-0"
                  >
                    <span>Ver ficha clínica completa</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      Cotizar
                    </button>
                    <a
                      href={`https://wa.me/56983853648?text=${encodeURIComponent(
                        `Hola, requiero información y traslado para el servicio de: ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
                      title="Consultar por WhatsApp"
                      aria-label="Consultar por WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ¿No está seguro del nivel de complejidad que requiere el paciente?
            </h3>
            <p className="text-sm text-slate-300">
              Nuestro equipo médico de despacho realiza el triaje clínico telefónico inmediato para asignar la ambulancia y dotación correcta.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
              className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow transition-colors whitespace-nowrap shrink-0"
            >
              Consultar con Médico de Turno
            </a>
            <a
              href={UCI_BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow transition-colors whitespace-nowrap shrink-0"
            >
              WhatsApp Inmediato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
