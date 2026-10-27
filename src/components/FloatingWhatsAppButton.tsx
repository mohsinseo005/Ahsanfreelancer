import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Ambulance, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { UCI_BUSINESS_INFO } from '../data/uciData.ts';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Update current Santiago local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-CL', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const quickInquiries = [
    {
      label: '🚨 Urgencia Inmediata (UCI Móvil)',
      text: 'Hola UCI Ambulancias, requiero una ambulancia UCI Móvil con urgencia para un paciente crítico en Santiago. ¿Tienen móvil disponible?',
    },
    {
      label: '🚑 Traslado Básico / Alta Médica',
      text: 'Hola, necesito coordinar un traslado médico básico para una alta médica / paciente estable en Santiago.',
    },
    {
      label: '📍 Cotizar Traslado a Clínica',
      text: 'Hola UCI Ambulancias, deseo consultar valor y disponibilidad para un traslado hacia centro médico en Santiago.',
    },
    {
      label: '🛣️ Traslado Interurbano a Regiones',
      text: 'Hola, requiero información para un traslado médico terrestre fuera de Santiago / hacia regiones.',
    },
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customMessage.trim() || 'Hola UCI Ambulancias, requiero coordinar una ambulancia con urgencia en Santiago.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/56983853648?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Expandable Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Ventana de chat WhatsApp para urgencias médicas"
          className="mb-3 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header styled with Navy Blue & Medical Teal */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center text-teal-300">
                  <Ambulance className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
              </div>

              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                  Despacho Médico 24/7
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/80">
                    En línea
                  </span>
                </h3>
                <p className="text-xs text-slate-300">
                  UCI Ambulancias Santiago · {currentTime ? `${currentTime} hrs` : 'Chile'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body & Pre-filled Inquiries */}
          <div className="p-4 bg-slate-50 space-y-3.5 max-h-[60vh] overflow-y-auto text-xs">
            {/* Operator Greeting Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm space-y-1.5 text-slate-700">
              <p className="font-medium text-slate-900 text-xs">
                ¡Hola! Bienvenido a la Central de Despacho de UCI Ambulancias.
              </p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Seleccione el tipo de urgencia médica para abrir WhatsApp con los datos listos, o escriba su mensaje directo al despachador de turno.
              </p>
              <div className="text-[10px] text-slate-400 flex items-center gap-1 pt-1">
                <Clock className="w-3 h-3 text-teal-600" />
                <span>Tiempo de respuesta promedio: menos de 60 segundos</span>
              </div>
            </div>

            {/* Quick Inquiries List */}
            <div className="space-y-1.5 pt-1">
              <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Consultas Rápidas Pre-llenadas:
              </span>
              {quickInquiries.map((inq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(inq.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-400 text-slate-800 font-medium transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="line-clamp-1">{inq.label}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Freeform Message Input */}
            <div className="pt-2">
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                O redacte su mensaje personalizado:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ej. Necesito ambulancia en Las Condes..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
                <button
                  onClick={() => handleSend()}
                  className="p-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-bold transition-colors shrink-0 shadow-sm"
                  aria-label="Enviar por WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="pt-1 text-[10px] text-slate-500 flex items-center justify-between border-t border-slate-200">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-teal-600" />
                Atención Médica 24/7
              </span>
              <span className="tabular-nums font-semibold text-slate-700">
                {UCI_BUSINESS_INFO.phoneEmergency}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Real-time Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat directo de WhatsApp para urgencias médicas'}
        aria-expanded={isOpen}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-200 border-2 border-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
      >
        {/* Pulse beacon for real-time status */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-slate-950" />
        </span>

        {/* WhatsApp Icon */}
        <div className="text-white transition-transform group-hover:scale-110">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>

        {/* Label */}
        <div className="hidden sm:flex flex-col text-left leading-tight pr-1">
          <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-bold">
            Chat Urgencias
          </span>
          <span className="text-xs font-extrabold text-white whitespace-nowrap">
            WhatsApp 24/7
          </span>
        </div>
      </button>
    </div>
  );
};
