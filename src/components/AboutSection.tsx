import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Users,
  CheckCircle2,
  Star,
  MessageSquare,
  ThumbsUp,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Medal,
  Calendar,
  FileCheck
} from 'lucide-react';
import {
  UCI_BUSINESS_INFO,
  TESTIMONIALS_DATA,
  TestimonialItem,
  AWARDS_DATA,
  AwardItem
} from '../data/uciData.ts';

export const AboutSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [ratingFilter, setRatingFilter] = useState<'all' | '5' | '4'>('all');
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const toggleHelpful = (id: string) => {
    setHelpfulLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    const matchCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchRating = ratingFilter === 'all' || item.rating.toString() === ratingFilter;
    return matchCategory && matchRating;
  });

  return (
    <section id="nosotros" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* =========================================================================
            PART 1: INSTITUTIONAL FOUNDATION & 15 YEARS TRAYECTORIA
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Team Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
              <img
                src={UCI_BUSINESS_INFO.images.medicalTeam}
                alt="Equipo médico y paramédico de UCI Ambulancias en Santiago Chile"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/70 text-xs text-white shadow-lg">
                <div className="flex items-center gap-2 font-bold mb-1 text-teal-400">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>15 Años de Servicio Sanitario Ininterrumpido</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Cuerpo médico intensivista, enfermeros reanimadores y paramédicos TENS inscritos en el Registro Nacional de Prestadores de Salud.
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Base Independencia</span>
                  <span className="text-teal-300 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Resolución SEREMI RM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Clinical Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Vocación y Excelencia en Cuidados Críticos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              15 Años Custodiando la Vida en Cada Kilómetro de Chile
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              En <strong>UCI Ambulancias</strong> concebimos el transporte médico no como un simple traslado vehicular, sino como la prolongación exacta de una unidad de cuidados intensivos de alta complejidad sobre el asfalto. Desde 2009, hemos coordinado más de 1.200 traslados críticos interhospitalarios y domiciliarios en todo Santiago y hacia cada región del país.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5 font-bold text-slate-900 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <span>Dotación Acreditada SIS</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Médicos especialistas y enfermeros con registro activo en la Superintendencia de Salud (SIS Chile).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5 font-bold text-slate-900 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>Resolución Sanitaria SEREMI</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flota autorizada bajo el D.S. 283 y la Norma General Técnica N° 82 para ambulancias SVA y SVB.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5 font-bold text-slate-900 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span>Trato Humanizado y Digno</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contención empática y comunicación continua con los familiares durante emergencias y situaciones complejas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5 font-bold text-slate-900 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Enlace Clínico 24/7</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coordinación médica directa con médicos tratantes y jefaturas de UCI de las principales clínicas de Chile.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Esterilización hospitalaria certificada con luz UV-C y amonio cuaternario tras cada servicio.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Pólizas de seguro de responsabilidad civil médica y contra accidentes en carretera.</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: REALISTIC AWARDS & MEDICAL HONORS SECTION
        ========================================================================= */}
        <div className="pt-6">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Ambient backdrop glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
                <div className="max-w-2xl space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                    <Medal className="w-4 h-4 text-amber-400" />
                    <span>Premios y Distinciones Médicas Verificables</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
                    Reconocimientos a la Trayectoria y Seguridad Sanitaria
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Distinciones otorgadas por sociedades médicas, autoridades sanitarias y organismos gremiales que avalan 15 años de liderazgo en medicina prehospitalaria en Chile.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-2xl px-5 py-3">
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">Registro Sanitario</div>
                    <div className="text-sm font-bold text-amber-400 font-mono">SEREMI RM / SIS</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Physical Plaques and Awards Visual Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* 1. Brass & Mahogany Plaque: SOCHIMU Award */}
                <div className="group rounded-2xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-400/70 p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-amber-500/10">
                  <div className="space-y-5">
                    {/* Real Award Photo */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] group-hover:border-amber-500/50 transition-colors">
                      <img
                        src={UCI_BUSINESS_INFO.images.awardExcellence}
                        alt="Placa oficial Premio Excelencia Médica Transporte Crítico SOCHIMU Chile"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500/90 text-slate-950 font-black text-[11px] rounded-md tracking-wider uppercase backdrop-blur-xs shadow-md">
                        Primer Lugar 2024
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/85 text-amber-300 font-mono text-[10px] rounded border border-amber-400/30">
                        SOCHIMU Chile
                      </div>
                    </div>

                    {/* Plaque Metadata */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-1">
                        <span>Sociedad Chilena de Medicina de Urgencia</span>
                        <span className="font-mono text-[11px] text-slate-400">2024 - 2025</span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        Premio a la Excelencia Médica en Transporte Crítico
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Reconocimiento al estándar técnico de UCI Ambulancias en estabilidad hemodinámica continua, ventilación mecánica de alta complejidad en ruta y cero descompensaciones críticas en pacientes con shock cardiogénico y politraumatismos.
                      </p>
                    </div>
                  </div>

                  {/* Verification footer */}
                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 text-[11px]">
                      Folio: <strong className="text-amber-300">REG-SOCHIMU-2024/084</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 text-teal-400 text-[11px] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Placa Auditada
                    </span>
                  </div>
                </div>

                {/* 2. Crystal Trophy: 15 Años de Trayectoria */}
                <div className="group rounded-2xl bg-slate-900/90 border border-teal-500/30 hover:border-teal-400/70 p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-teal-500/10">
                  <div className="space-y-5">
                    {/* Real Trophy Photo */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] group-hover:border-teal-500/50 transition-colors">
                      <img
                        src={UCI_BUSINESS_INFO.images.award15Years}
                        alt="Trofeo de Cristal de Honor 15 Años de Trayectoria Transporte Sanitario Chile"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-teal-500/90 text-slate-950 font-black text-[11px] rounded-md tracking-wider uppercase backdrop-blur-xs shadow-md">
                        15 Años de Honor
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/85 text-teal-300 font-mono text-[10px] rounded border border-teal-400/30">
                        2009 - 2024
                      </div>
                    </div>

                    {/* Trophy Metadata */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-teal-400 font-semibold mb-1">
                        <span>Asociación Chilena de Transporte Sanitario</span>
                        <span className="font-mono text-[11px] text-slate-400">15 Años</span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        Distinción de Honor por Seguridad Sanitaria y Trayectoria
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Galardón conmemorativo por 15 años ininterrumpidos de servicio en Santiago y carreteras interurbanas, operando con un récord ejemplar de seguridad vial, rigor clínico y cumplimiento normativo ante el MINSAL y la SEREMI de Salud RM.
                      </p>
                    </div>
                  </div>

                  {/* Verification footer */}
                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 text-[11px]">
                      Certificado: <strong className="text-teal-300">ASTS-CHILE-TRAY-15A</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 text-teal-400 text-[11px] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Distinción Vigente
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Accreditations Strip (Superintendencia de Salud & Humanización) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {AWARDS_DATA.slice(2).map((award) => (
                  <div
                    key={award.id}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 flex items-start gap-4 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">
                          {award.badgeLabel}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{award.year}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{award.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{award.description}</p>
                      <div className="text-[10px] font-mono text-slate-400 pt-1">
                        Acreditación: <span className="text-slate-300 font-semibold">{award.verifiableCode}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 3: REALISTIC, ORGANIC REVIEWS & TESTIMONIALS SECTION
        ========================================================================= */}
        <div className="pt-6 space-y-8">
          {/* Header & Score Breakdown */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-teal-600" />
                <span>Opiniones y Testimonios Reales</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Historias Reales de Pacientes, Médicos y Familias
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Evaluaciones auténticas recopiladas tras traslados de urgencia, altas clínicas y derivaciones interurbanas en todo Chile.
              </p>
            </div>

            {/* Organic Rating Breakdown Box */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6 shrink-0">
              {/* Score Number */}
              <div className="text-center sm:pr-6 sm:border-r border-slate-200">
                <div className="text-4xl font-black text-slate-900 tracking-tight tabular-nums">4.9</div>
                <div className="flex items-center justify-center gap-0.5 text-amber-400 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">1.240 opiniones</div>
              </div>

              {/* Progress Bars for 5 Stars and 4 Stars */}
              <div className="w-full sm:w-52 space-y-2 text-xs">
                {/* 5 Stars bar */}
                <div className="flex items-center gap-2">
                  <span className="w-14 text-slate-600 text-[11px] font-medium flex items-center gap-0.5">
                    5 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '92%' }} />
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono w-7 text-right">92%</span>
                </div>

                {/* 4 Stars bar */}
                <div className="flex items-center gap-2">
                  <span className="w-14 text-slate-600 text-[11px] font-medium flex items-center gap-0.5">
                    4 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '8%' }} />
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono w-7 text-right">8%</span>
                </div>

                <div className="pt-1 text-[11px] text-teal-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>100% testimonios de servicios realizados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filtering Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl border border-slate-300/60 max-w-full overflow-x-auto">
              {[
                { id: 'all', label: 'Todos los Casos' },
                { id: 'uci', label: 'UCI Móvil Crítico' },
                { id: 'basico', label: 'Altas y Domicilio' },
                { id: 'interurbano', label: 'A Regiones' },
                { id: 'eventos', label: 'Eventos Masivos' },
                { id: 'salud-mental', label: 'Salud Mental' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    filterCategory === tab.id
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Rating pill selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium mr-1">Calificación:</span>
              <button
                onClick={() => setRatingFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                  ratingFilter === 'all'
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setRatingFilter('5')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                  ratingFilter === '5'
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                5 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </button>
              <button
                onClick={() => setRatingFilter('4')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                  ratingFilter === '4'
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                4 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Testimonials Cards Grid with Avatars, Organic Timestamps & 5/4 Stars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => {
              const isLiked = helpfulLiked[item.id] || false;
              const count = item.helpfulCount + (isLiked ? 1 : 0);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Row: User Avatar Portrait + Name + Source Badge */}
                    <div className="flex items-start gap-3.5">
                      {/* Real Reviewer Picture */}
                      <div className="relative shrink-0">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/30 shadow-xs group-hover:ring-teal-500 transition-all"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center ring-2 ring-white text-[10px]">
                          ✓
                        </div>
                      </div>

                      {/* Author Details & Source */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-900 truncate">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{item.role}</p>
                        <div className="flex items-center gap-1 text-[11px] text-teal-700 font-medium mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0" />
                          <span className="truncate">{item.source}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating Stars & Realistic Timestamp */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      {/* 5-star / 4-star display */}
                      <div className="flex items-center gap-1" aria-label={`${item.rating} de 5 estrellas`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= item.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-slate-200 text-slate-300'
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-xs font-bold text-slate-800">
                          {item.rating}.0
                        </span>
                      </div>

                      {/* Realistic Relative & Absolute Timestamp */}
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="font-medium text-slate-600">{item.timeAgo}</span>
                      </div>
                    </div>

                    {/* Story & Clinical Outcome */}
                    <div className="space-y-2 text-xs sm:text-sm">
                      <p className="text-slate-600 italic leading-relaxed">
                        "{item.story}"
                      </p>
                      <p className="text-slate-800 font-medium leading-relaxed bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Service Tag + Location + Helpful Toggle */}
                  <div className="pt-4 mt-5 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100/80 truncate max-w-[200px]">
                        {item.serviceUsed}
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <span className="truncate max-w-[170px] text-[11px] text-slate-500">
                        📍 {item.location}
                      </span>

                      {/* Helpful Button */}
                      <button
                        onClick={() => toggleHelpful(item.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                          isLiked
                            ? 'bg-teal-50 text-teal-800 border border-teal-200'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                        }`}
                        title="Marcar como reseña útil"
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-teal-700 text-teal-700' : ''}`} />
                        <span>Útil ({count})</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial Submission Strip */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 shrink-0">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  ¿Ha utilizado una ambulancia de nuestro equipo recientemente?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Su valoración ayuda a otras familias en momentos críticos a elegir con tranquilidad y certeza médica.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/56983853648?text=${encodeURIComponent(
                'Hola UCI Ambulancias, quisiera enviar mi opinión y valoración sobre la atención recibida.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-teal-400" />
              <span>Compartir Opinión con la Central</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

