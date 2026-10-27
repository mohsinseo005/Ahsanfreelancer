import React from 'react';
import { X, CheckCircle2, Shield, Stethoscope, Activity, Building, Phone, MessageSquare } from 'lucide-react';
import { ServiceDetail, UCI_BUSINESS_INFO } from '../data/uciData.ts';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectForQuote }) => {
  if (!service) return null;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hola UCI Ambulancias, requiero coordinar el servicio de *${service.title}* en Santiago. ¿Me pueden indicar disponibilidad y valores?`
    );
    window.open(`https://wa.me/56983853648?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="relative bg-slate-900 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">
            {service.category} · {service.urgencyLevel}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-balance pr-8">
            {service.title}
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-xl">
            {service.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Photo Banner */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 h-56 sm:h-64 bg-slate-100">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-semibold">Protocolo de Atención Médica Garantizado</span>
              <span className="text-slate-200 block text-[11px]">Personal certificado bajo normativas sanitarias vigentes en Chile</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-600" />
              Descripción Clínica y Alcance
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Dotación Médica */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-teal-600" />
              Dotación de Personal a Bordo
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {service.dotacion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipamiento Electromédico */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-600" />
              Equipamiento Técnico y Electromedicina
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {service.equipamiento.map((eq, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
                  <span className="text-teal-700 font-bold">·</span>
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indicaciones Clínicas */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
              Indicaciones y Patologías Habituales
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-slate-700">
              {service.indicaciones.map((ind, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-slate-300 rounded px-2.5 py-1 font-medium"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Centros de Referencia */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-teal-600" />
              Clínicas y Hospitales Frecuentes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {service.clinicasFrecuentes.join(' · ')}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            <span>Coordinación 24/7: </span>
            <span className="font-bold text-slate-800">{UCI_BUSINESS_INFO.phoneEmergency}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onSelectForQuote(service.title);
                onClose();
              }}
              className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Completar Cotización
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              Pedir por WhatsApp
            </button>
            <a
              href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
              className="px-4 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" />
              Llamar Urgente
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
