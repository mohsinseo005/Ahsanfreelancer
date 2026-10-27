import React from 'react';
import { Truck, Activity, ShieldCheck, HeartPulse, Sparkles, Wind } from 'lucide-react';
import { FLEET_SPECS, UCI_BUSINESS_INFO } from '../data/uciData.ts';

export const FleetSection: React.FC = () => {
  return (
    <section id="flota" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text / Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Estándar Biomédico Hospitalario
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Flota de Alta Complejidad y Electromedicina de Última Generación
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              No adaptamos furgones comerciales; nuestras unidades son ambulancias diseñadas desde fábrica con especificaciones europeas de habitabilidad clínica, amortiguación neumática y duplicidad en sistemas de soporte vital.
            </p>

            <div className="space-y-4 pt-2">
              {FLEET_SPECS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-teal-700">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.specs}
                  </p>
                  <p className="text-xs text-teal-800 font-medium mt-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{item.feature}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Carrier: Ambulance Interior Photo & Key Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src={UCI_BUSINESS_INFO.images.uciInterior}
                alt="Interior de ambulancia UCI móvil de alta complejidad con ventilador mecánico y monitor"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60 text-xs text-slate-300">
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span>Habitáculo Clínico Certificado</span>
                  <span className="text-teal-400">100% Grado Hospitalario</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Ambiente presurizado, iluminación quirúrgica LED, tomas de vacío y oxígeno dual, e inversor senoidal puro de 220V para equipos médicos sensibles.
                </p>
              </div>
            </div>

            {/* Quick feature callouts */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <Wind className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                <div className="text-xs font-bold text-slate-900">12.000 L O2</div>
                <div className="text-[11px] text-slate-500">Reserva de oxígeno</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <HeartPulse className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                <div className="text-xs font-bold text-slate-900">ACLS / PALS</div>
                <div className="text-[11px] text-slate-500">Protocolos vigentes</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <Activity className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                <div className="text-xs font-bold text-slate-900">Telemetría</div>
                <div className="text-[11px] text-slate-500">Enlace en tiempo real</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
