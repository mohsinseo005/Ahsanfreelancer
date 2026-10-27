import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle2, Youtube, Facebook, AtSign } from 'lucide-react';
import { UCI_BUSINESS_INFO } from '../data/uciData.ts';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Consulta General / Cotización');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Canales de Comunicación Directa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Central de Despacho y Atención al Usuario
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Estamos atentos a sus requerimientos de emergencia, traslados programados y convenios institucionales las 24 horas del día.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Información Oficial Verificada</span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Emergency Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-600 text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Teléfono Urgencias 24/7 (Celular / WhatsApp):</div>
                    <a
                      href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
                      className="font-bold text-white hover:text-teal-400 text-base tabular-nums transition-colors block"
                    >
                      {UCI_BUSINESS_INFO.phoneEmergency}
                    </a>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-teal-400 shrink-0 border border-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Mesa Central Fija:</div>
                    <a
                      href={`tel:${UCI_BUSINESS_INFO.phoneLandlineClean}`}
                      className="font-bold text-slate-200 hover:text-white text-base tabular-nums transition-colors block"
                    >
                      {UCI_BUSINESS_INFO.phoneLandline}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-teal-400 shrink-0 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Base Central Operativa:</div>
                    <p className="font-medium text-slate-200">
                      {UCI_BUSINESS_INFO.address}
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Independencia, Región Metropolitana, Santiago
                    </span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-teal-400 shrink-0 border border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Horario de Despacho:</div>
                    <p className="font-semibold text-teal-300">
                      {UCI_BUSINESS_INFO.hours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-teal-400 shrink-0 border border-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Correo Electrónico:</div>
                    <a
                      href={`mailto:${UCI_BUSINESS_INFO.email}`}
                      className="font-medium text-slate-200 hover:text-teal-400 transition-colors"
                    >
                      {UCI_BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Social Media Channels */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Redes Sociales Oficiales
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={UCI_BUSINESS_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs"
                    aria-label="Canal oficial de YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>

                  <a
                    href={UCI_BUSINESS_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs"
                    aria-label="Página de Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={UCI_BUSINESS_INFO.socialLinks.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs"
                    aria-label="Perfil de Threads"
                  >
                    <AtSign className="w-4 h-4" />
                    <span>Threads</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Mock/Preview iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-52 relative">
              <iframe
                title="Ubicación UCI Ambulancias Escanilla 1000 Independencia"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=-33.4217,-70.6558&hl=es&z=15&output=embed"
                className="filter saturate-90"
              />
            </div>
          </div>

          {/* Contact & Dispatch Form Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Envío de Consulta o Solicitud Institucional
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Para convenios con empresas, seguros, cobertura de eventos masivos o traslados programados, complete el siguiente formulario.
            </p>

            {submitted ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl text-teal-900 space-y-3">
                <div className="flex items-center gap-2 font-bold text-teal-800">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span>Mensaje Recibido Correctamente</span>
                </div>
                <p className="text-sm text-teal-700">
                  Hemos registrado su solicitud de contacto. Un coordinador médico de turno se comunicará con usted al teléfono indicado a la brevedad.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-teal-800 underline hover:text-teal-900"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Rodrigo Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 XXXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@ejemplo.cl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Motivo o Servicio
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="Consulta General / Cotización">Consulta General / Cotización</option>
                      <option value="Traslado UCI Móvil">Traslado UCI Móvil</option>
                      <option value="Traslado Básico / Alta">Traslado Básico / Alta Médica</option>
                      <option value="Cobertura de Eventos / Empresas">Cobertura Médica de Eventos</option>
                      <option value="Traslado Interurbano a Regiones">Traslado Interurbano a Regiones</option>
                      <option value="Convenios Institucionales">Convenios Institucionales / Clínicas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Detalle del Requerimiento *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describa el diagnóstico, ubicación, fecha deseada o especificaciones clínicas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Formulario</span>
                  </button>

                  <a
                    href={`https://wa.me/56983853648?text=${encodeURIComponent(
                      `Hola UCI Ambulancias, mi nombre es ${name || 'un paciente'}, requiero coordinar: ${service}. Mi teléfono es ${phone}. Mensaje: ${message || 'Requiero contacto urgente.'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contactar Directo por WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
