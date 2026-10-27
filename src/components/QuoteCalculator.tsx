import React, { useState, useEffect } from 'react';
import { Calculator, Send, Phone, CheckCircle2, AlertCircle, Clock, Stethoscope, MapPin, Building, MessageSquare } from 'lucide-react';
import { SANTIAGO_COMUNAS, CLINICAL_DESTINATIONS, UCI_BUSINESS_INFO } from '../data/uciData.ts';

interface QuoteCalculatorProps {
  initialService?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialService }) => {
  const [serviceType, setServiceType] = useState('UCI Móvil (Soporte Vital Avanzado)');
  const [origin, setOrigin] = useState('Santiago Centro');
  const [destination, setDestination] = useState('Clínica Santa María (Providencia)');
  const [timing, setTiming] = useState<'inmediato' | 'hoy' | 'programado'>('inmediato');
  const [scheduledDate, setScheduledDate] = useState('');
  const [patientNeeds, setPatientNeeds] = useState<string[]>(['Camilla de rescate']);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  const toggleNeed = (need: string) => {
    if (patientNeeds.includes(need)) {
      setPatientNeeds(patientNeeds.filter((n) => n !== need));
    } else {
      setPatientNeeds([...patientNeeds, need]);
    }
  };

  // Determine medical crew recommendation
  const getCrewRecommendation = () => {
    if (serviceType.includes('UCI') || serviceType.includes('Crítico')) {
      return 'Médico Intensivista + Enfermero(a) Reanimador(a) + Conductor Paramédico TENS';
    }
    if (serviceType.includes('Psiquiátrico')) {
      return 'Médico de turno + Enfermero especialista en salud mental + Paramédico';
    }
    if (serviceType.includes('Eventos')) {
      return 'Médico urgenciólogo + Paramédicos en punto fijo + Ambulancia SVA';
    }
    return 'Técnico en Enfermería Superior (TENS) + Conductor de ambulancia certificado';
  };

  const getEstimatedResponseTime = () => {
    if (timing === 'inmediato') {
      return '15 a 35 minutos según tráfico y comuna en Gran Santiago';
    }
    if (timing === 'hoy') {
      return 'Coordinación con ventana de 1 hora hoy mismo';
    }
    return 'Reserva confirmada en fecha y hora programada';
  };

  const generateWhatsAppMessage = () => {
    const text = `*SOLICITUD DE TRASLADO MÉDICO - UCI AMBULANCIAS*
----------------------------------------
*Servicio:* ${serviceType}
*Origen:* ${origin}
*Destino:* ${destination}
*Urgencia:* ${timing === 'inmediato' ? '🚨 INMEDIATO (Ahora)' : timing === 'hoy' ? 'Hoy en las próximas horas' : `Programado: ${scheduledDate || 'Por coordinar'}`}
*Requerimientos:* ${patientNeeds.length > 0 ? patientNeeds.join(', ') : 'Ninguno especificado'}
*Contacto:* ${contactName || 'No indicado'}
*Teléfono:* ${contactPhone || 'No indicado'}
*Observaciones:* ${notes || 'Sin observaciones adicionales'}
----------------------------------------
_Generado desde uciambulancias.cl para despacho de turno._`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waUrl = `https://wa.me/56983853648?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
            Coordinación y Cotizador 24/7
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Coordine su Traslado Médico en Segundos
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Complete los datos del paciente y destino para calcular la dotación médica requerida y enviar la ficha directa al despachador de turno por WhatsApp o teléfono.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Tipo de Servicio Requerido
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-400 transition-colors"
                >
                  <option value="UCI Móvil (Soporte Vital Avanzado)">
                    UCI Móvil / Traslado Crítico (Soporte Vital Avanzado)
                  </option>
                  <option value="Traslado Básico y Mediana Complejidad">
                    Traslado Básico y Altas Hospitalarias (Soporte Básico)
                  </option>
                  <option value="Traslado Psiquiátrico y Salud Mental">
                    Traslado Psiquiátrico y Salud Mental (Contención Especializada)
                  </option>
                  <option value="Diálisis y Exámenes Programados">
                    Traslado para Diálisis / Quimioterapia / Exámenes
                  </option>
                  <option value="Cobertura Médica de Eventos">
                    Cobertura Médica de Eventos / Standby en Faena
                  </option>
                  <option value="Traslado Interurbano a Todo Chile">
                    Traslado Interurbano / Larga Distancia (Todo Chile)
                  </option>
                </select>
              </div>

              {/* Origin & Destination Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    Comuna u Origen
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  >
                    {SANTIAGO_COMUNAS.map((comuna, idx) => (
                      <option key={idx} value={comuna}>
                        {comuna}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-teal-400" />
                    Destino o Centro Médico
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  >
                    {CLINICAL_DESTINATIONS.map((dest, idx) => (
                      <option key={idx} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Urgency Timing */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  Prioridad del Despacho
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTiming('inmediato')}
                    className={`p-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                      timing === 'inmediato'
                        ? 'bg-red-950 border-red-500 text-red-200 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    🚨 Urgencia Inmediata
                  </button>
                  <button
                    type="button"
                    onClick={() => setTiming('hoy')}
                    className={`p-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                      timing === 'hoy'
                        ? 'bg-teal-950 border-teal-500 text-teal-200 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Hoy en unas horas
                  </button>
                  <button
                    type="button"
                    onClick={() => setTiming('programado')}
                    className={`p-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                      timing === 'programado'
                        ? 'bg-blue-950 border-blue-500 text-blue-200 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Programar Fecha
                  </button>
                </div>

                {timing === 'programado' && (
                  <div className="mt-3">
                    <input
                      type="date"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                )}
              </div>

              {/* Patient Needs Checklist */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Requerimientos Específicos del Paciente
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'Oxigenoterapia',
                    'Ventilación Mecánica',
                    'Camilla de rescate',
                    'Silla de ruedas para escalas',
                    'Monitoreo continuo',
                    'Aislamiento de contacto',
                  ].map((need, idx) => {
                    const isSelected = patientNeeds.includes(need);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => toggleNeed(need)}
                        className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'bg-teal-950 border-teal-400 text-teal-200 font-medium'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-teal-400' : 'text-slate-600'
                          }`}
                        />
                        <span>{need}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Nombre de Contacto o Familiar *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carolina Muñoz"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Teléfono Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 XXXX XXXX"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Observaciones Clínicas o Indicaciones de Acceso (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej. Paciente operado de cadera, piso 4 sin ascensor, requiere aviso previo 15 min."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-lg hover:shadow-teal-400/20 transition-all flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Solicitud a Despacho por WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Clinical Dispatch Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Calculator className="w-4 h-4 text-teal-400" />
                Resumen de Coordinación Médica
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-xs">Servicio Seleccionado:</div>
                  <div className="font-bold text-teal-300 mt-0.5">{serviceType}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-xs">Punto de Origen:</div>
                    <div className="font-semibold text-white mt-0.5">{origin}</div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-xs">Punto de Destino:</div>
                    <div className="font-semibold text-white mt-0.5">{destination}</div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 text-xs flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                    Dotación Recomendada:
                  </div>
                  <div className="font-medium text-slate-200">
                    {getCrewRecommendation()}
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 text-xs flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    Tiempo de Respuesta Estimado:
                  </div>
                  <div className="font-medium text-slate-200">
                    {getEstimatedResponseTime()}
                  </div>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
                  className="w-full py-3 px-4 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>¿Prefiere hablar? Llame al {UCI_BUSINESS_INFO.phoneEmergency}</span>
                </a>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Atención médica inmediata disponible las 24 horas del día.
                </p>
              </div>
            </div>

            {/* Trust and Certifications reminder */}
            <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Garantía Sanitaria y Reembolso
              </div>
              <p>
                Todos nuestros servicios emiten documentación válida para reembolso en Isapres y seguros complementarios de salud. Unidades autorizadas por SEREMI de Salud RM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
