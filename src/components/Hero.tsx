import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, Award, Activity } from 'lucide-react';
import { UCI_BUSINESS_INFO } from '../data/uciData.ts';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section id="inicio" className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Background ambient medical glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Dispatch Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Anti-slop zero pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-400 tracking-wider uppercase">
              <span>Soporte Vital Avanzado</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>15 Años de Trayectoria Médica</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Santiago & Todo Chile</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.1] text-balance">
              Ambulancia en Santiago 24/7 | Traslados UCI y Particulares
            </h1>

            {/* Concrete Proposition Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Cuidado intensivo en ruta con dotación de médico intensivista, enfermero reanimador y equipamiento hospitalario avanzado. Despacho inmediato 24/7 en toda la Región Metropolitana y traslados interurbanos a clínicas de todo Chile.
            </p>

            {/* Direct Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all whitespace-nowrap shrink-0 group"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Llamar Urgencias: {UCI_BUSINESS_INFO.phoneEmergency}</span>
              </a>

              <a
                href={UCI_BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg hover:shadow-teal-400/20 transition-all whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Despachar por WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Cotizar Traslado</span>
              </button>
            </div>

            {/* Quick Dispatch Guarantee */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Disponibilidad 24 horas continuas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Resolución Sanitaria SEREMI RM</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Boleta reembolsable en Isapres</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant 16:9 Image Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={UCI_BUSINESS_INFO.images.hero}
                alt="Ambulancia UCI Móvil de alta complejidad en Santiago de Chile frente a clínica"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* In-photo contextual caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-white">Unidad de Cuidados Intensivos Móvil</span>
                  <span className="text-teal-400 font-medium">Santiago, Chile</span>
                </div>
                <p className="text-slate-400 mt-1 line-clamp-1">
                  Mercedes-Benz Sprinter equipada con ventilador mecánico Hamilton y monitor Zoll.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Quantitative Rigor Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400">
              <Award className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">15 Años</span>
            </div>
            <p className="text-xs text-slate-400">Trayectoria médica continua en traslados de alta complejidad.</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400">
              <Clock className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">24 / 7</span>
            </div>
            <p className="text-xs text-slate-400">Central telefónica y despacho activo los 365 días del año.</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">100%</span>
            </div>
            <p className="text-xs text-slate-400">Cumplimiento de estándares y autorización SEREMI de Salud.</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400">
              <Activity className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">Nacional</span>
            </div>
            <p className="text-xs text-slate-400">Gran Santiago y traslados terrestres a todas las regiones de Chile.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
