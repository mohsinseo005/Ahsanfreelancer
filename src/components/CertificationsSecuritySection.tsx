import React, { useState } from 'react';
import { ShieldCheck, Award, FileCheck2, HeartPulse, Sparkles, CheckCircle2, ChevronRight, X, ExternalLink, Shield } from 'lucide-react';

interface CertificationBadge {
  id: string;
  name: string;
  entity: string;
  code: string;
  category: string;
  scope: string;
  details: string[];
  iconType: 'minsal' | 'iso9001' | 'superintendencia' | 'iso45001' | 'aha' | 'bioseguridad';
}

const CERTIFICATIONS: CertificationBadge[] = [
  {
    id: 'minsal-seremi',
    name: 'Resolución Sanitaria SEREMI de Salud RM',
    entity: 'Ministerio de Salud de Chile (MINSAL)',
    code: 'Res. Ex. N° 014822 / D.S. 283',
    category: 'Autorización Sanitaria Oficial',
    scope: 'Habilitación oficial para transporte sanitario terrestre de emergencia, ambulancias de soporte vital básico (SVB) y soporte vital avanzado (SVA / UCI Móvil).',
    details: [
      'Inspección físico-técnica y sanitaria favorable de todas las unidades móviles',
      'Cumplimiento de la Norma General Técnica N° 82 de Transporte Sanitario Terrestre',
      'Dotación médica con directores técnicos médicos acreditados',
      'Botiquín de estupefacientes y medicamentos de reanimación autorizado por el ISP',
    ],
    iconType: 'minsal',
  },
  {
    id: 'iso-9001',
    name: 'Certificación ISO 9001:2015',
    entity: 'International Organization for Standardization',
    code: 'ISO 9001:2015 Quality Management',
    category: 'Gestión de Calidad en Salud',
    scope: 'Sistemas de gestión de calidad aplicados a la coordinación telefónica, despacho en ruta, calibración de electromedicina y seguridad del paciente trasladado.',
    details: [
      'Protocolo estandarizado de triaje clínico de despacho en menos de 60 segundos',
      'Trazabilidad en tiempo real y registro digital continuo de parámetros vitales',
      'Mantenimiento preventivo y calibración certificada de ventiladores y monitores',
      'Encuestas de satisfacción continua a familiares y centros asistenciales',
    ],
    iconType: 'iso9001',
  },
  {
    id: 'super-salud',
    name: 'Superintendencia de Salud de Chile',
    entity: 'Registro de Prestadores Institucionales',
    code: 'Prestador Acreditado SIS Chile',
    category: 'Acreditación Asistencial',
    scope: 'Inscripción en el Registro Público de Prestadores de Salud. Médicos intensivistas y enfermeros universitarios con registro activo de especialidad.',
    details: [
      '100% de la dotación médica registrada en la Superintendencia de Salud',
      'Validación de competencias profesionales de reanimación y enfermería intensiva',
      'Boletas y facturas electrónicas formalmente aptas para reembolsos Isapre y seguros',
      'Protocolos de consentimiento informado y derechos del paciente (Ley 20.584)',
    ],
    iconType: 'superintendencia',
  },
  {
    id: 'iso-45001',
    name: 'Certificación ISO 45001:2018',
    entity: 'Occupational Health and Safety Standard',
    code: 'ISO 45001:2018 Safety Systems',
    category: 'Seguridad en Operaciones Sanitarias',
    scope: 'Norma internacional para la prevención de riesgos y protección de la tripulación médica y acompañantes durante rescates de alta velocidad y traslados.',
    details: [
      'Capacitación periódica en conducción evasiva y defensiva de ambulancias de urgencia',
      'Camillas electrohidráulicas Stryker que evitan riesgos de caídas y sobrecargas',
      'Elementos de protección personal (EPP) y habitáculos con blindaje biológico',
      'Seguro de responsabilidad civil médica y seguro contra accidentes en ruta',
    ],
    iconType: 'iso45001',
  },
  {
    id: 'aha-acls',
    name: 'Protocolos Internacionales AHA / ERC',
    entity: 'American Heart Association & ATLS',
    code: 'ACLS · PALS · PHTLS Certified Crew',
    category: 'Estándar Clínico Internacional',
    scope: 'Dotación médica certificada en Soporte Vital Cardiovascular Avanzado (ACLS), Soporte Pediátrico Avanzado (PALS) y Soporte Prehospitalario en Trauma (PHTLS).',
    details: [
      'Capacidad de manejo avanzado de vía aérea (intubación y videolaringoscopía)',
      'Desfibrilación, cardioversión sincrónica y marcapasos transcutáneo de urgencia',
      'Protocolo de código infarto IAM y ventana de revascularización en ACV',
      'Algoritmos actualizados según directrices internacionales de reanimación',
    ],
    iconType: 'aha',
  },
  {
    id: 'bioseguridad-reas',
    name: 'Protocolo de Bioseguridad REAS (MINSAL)',
    entity: 'D.S. N° 6/2009 Residuos Hospitalarios',
    code: 'Grado Quirúrgico & Esterilización UV-C',
    category: 'Bioseguridad y Control de Infecciones',
    scope: 'Esterilización e higiene de grado hospitalario de ambulancias tras cada traslado para prevenir infecciones asociadas a la atención de salud (IAAS).',
    details: [
      'Nebulización con amonio cuaternario de 5ta generación y luz germicida UV-C',
      'Manejo y retiro certificado de residuos con riesgo biológico y cortopunzantes',
      'Filtros antibacterianos HEPA en sistemas de climatización del habitáculo',
      'Protocolo especial de aislamiento para pacientes inmunodeprimidos u oncológicos',
    ],
    iconType: 'bioseguridad',
  },
];

export const CertificationsSecuritySection: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<CertificationBadge | null>(null);

  return (
    <section id="certificaciones" className="bg-slate-900 text-white border-t border-slate-800 py-16 relative overflow-hidden">
      {/* Decorative ambient grid & gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -top-24 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4 text-teal-400" />
            <span>Marco Regulatorio y Excelencia Hospitalaria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
            Certificaciones Sanitarias y Estándares de Seguridad
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Nuestras ambulancias, dotación humana y procedimientos clínicos operan bajo estricto apego a las resoluciones del <strong>Ministerio de Salud de Chile</strong>, normativas <strong>ISO de calidad</strong> y directrices de reanimación internacional.
          </p>
        </div>

        {/* 6 Certification Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedBadge(cert)}
              className="group bg-slate-950/80 hover:bg-slate-950 rounded-2xl p-5 border border-slate-800 hover:border-teal-400/80 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Badge Top Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-teal-400/50 flex items-center justify-center text-teal-400 shrink-0 transition-colors">
                    {cert.iconType === 'minsal' && (
                      <div className="text-center font-black text-xs leading-none text-red-400">
                        <span className="block text-[9px] text-slate-400 font-mono">CL</span>
                        MINSAL
                      </div>
                    )}
                    {cert.iconType === 'iso9001' && (
                      <div className="text-center font-black text-xs leading-none text-teal-300">
                        <span className="block text-[8px] text-slate-400 font-mono">ISO</span>
                        9001
                      </div>
                    )}
                    {cert.iconType === 'superintendencia' && (
                      <div className="text-center font-black text-xs leading-none text-blue-400">
                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                      </div>
                    )}
                    {cert.iconType === 'iso45001' && (
                      <div className="text-center font-black text-xs leading-none text-amber-300">
                        <span className="block text-[8px] text-slate-400 font-mono">ISO</span>
                        45001
                      </div>
                    )}
                    {cert.iconType === 'aha' && (
                      <div className="text-center font-black text-xs leading-none text-red-500">
                        <HeartPulse className="w-5 h-5 text-red-400" />
                      </div>
                    )}
                    {cert.iconType === 'bioseguridad' && (
                      <div className="text-center font-black text-xs leading-none text-emerald-400">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                      </div>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                      {cert.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.code}
                    </span>
                  </div>
                </div>

                {/* Badge Title & Scope */}
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors mb-1.5">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {cert.scope}
                </p>
              </div>

              {/* View Criteria Trigger */}
              <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-teal-400 transition-colors">
                <span className="font-medium text-[11px]">Ver criterios técnicos de cumplimiento</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Verification Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <p className="text-slate-300">
              Documentación sanitaria vigente, pólizas de seguro de transporte de pacientes y resoluciones SEREMI disponibles para auditoría clínica por Isapres, clínicas y empresas en convenio.
            </p>
          </div>

          <div className="text-slate-400 text-right whitespace-nowrap shrink-0">
            <span className="font-semibold text-white">Base Escanilla 1000: </span>
            <span className="text-teal-400">Acreditación SEREMI RM</span>
          </div>
        </div>
      </div>

      {/* Modal for Technical Compliance Details */}
      {selectedBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
          onClick={() => setSelectedBadge(null)}
        >
          <div
            className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl text-white space-y-5 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
                {selectedBadge.category}
              </span>
              <h3 className="text-xl font-bold text-white pr-8">
                {selectedBadge.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {selectedBadge.entity} · {selectedBadge.code}
              </p>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
              {selectedBadge.scope}
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Criterios de Verificación y Cumplimiento Activo:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedBadge.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Estado: <strong className="text-teal-300">Vigente y Auditado</strong></span>
              <button
                onClick={() => setSelectedBadge(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
