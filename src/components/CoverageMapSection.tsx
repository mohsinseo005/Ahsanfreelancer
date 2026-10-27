import React from 'react';
import { MapPin, Navigation, Building2, Phone, Compass, CheckCircle2 } from 'lucide-react';
import { UCI_BUSINESS_INFO } from '../data/uciData.ts';

export const CoverageMapSection: React.FC = () => {
  const zonas = [
    {
      nombre: 'Sector Norte & Base Operativa',
      comunas: ['Independencia (Base Central)', 'Recoleta', 'Conchalí', 'Huechuraba', 'Quilicura', 'Renca'],
      clinicas: ['Hospital San José', 'Hospital Roberto del Río', 'Clínica Dávila Recoleta', 'Instituto Psiquiátrico'],
    },
    {
      nombre: 'Sector Oriente',
      comunas: ['Providencia', 'Las Condes', 'Vitacura', 'Lo Barnechea', 'La Reina', 'Ñuñoa'],
      clinicas: ['Clínica Alemana', 'Clínica Las Condes', 'Clínica Santa María', 'Clínica Indisa', 'RedSalud Vitacura'],
    },
    {
      nombre: 'Santiago Centro & Poniente',
      comunas: ['Santiago Centro', 'Estación Central', 'Quinta Normal', 'Pudahuel', 'Maipú', 'Cerro Navia'],
      clinicas: ['Hospital Clínico UC Christus', 'Hospital San Juan de Dios', 'FALP Oncológico', 'Clínica RedSalud Santiago'],
    },
    {
      nombre: 'Sector Sur & Cordillera',
      comunas: ['San Miguel', 'San Joaquín', 'La Florida', 'Puente Alto', 'La Cisterna', 'San Bernardo'],
      clinicas: ['Hospital Barros Luco', 'Hospital Sótero del Río', 'Clínica Bupa Santiago', 'Clínica Dávila Vespucio'],
    },
    {
      nombre: 'Zonas Periféricas & Provincias',
      comunas: ['Colina / Chicureo', 'Lampa', 'Talagante', 'Peñaflor', 'Melipilla', 'Buin / Paine'],
      clinicas: ['Clínica Las Condes Chicureo', 'Clínica Alemana Chicureo', 'Centros Médicos Provinciales'],
    },
    {
      nombre: 'Traslados Interurbanos a Regiones',
      comunas: ['Valparaíso / Viña del Mar', 'Rancagua / San Fernando', 'La Serena / Coquimbo', 'Talca / Maule', 'Concepción / Biobío'],
      clinicas: ['Conexión Aeropuerto SCL', 'Hospital Clínico Viña del Mar', 'Clínica Ciudad del Mar', 'Clínica Universitaria'],
    },
  ];

  return (
    <section id="cobertura" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Localización y Despacho en Chile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Cobertura Integral en Toda la Región Metropolitana y Rutas Nacionales
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Nuestra base de operaciones estratégica en <strong>Escanilla 1000, Independencia</strong> permite salidas expeditas por Autopista Central (Ruta 5), Costanera Norte y Américo Vespucio, reduciendo los tiempos de respuesta hacia cualquier clínica u hogar.
          </p>
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {zonas.map((zona, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-500/80 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">
                    {zona.nombre}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    Comunas y Sectores:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {zona.comunas.join(' · ')}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    Centros Médicos de Conexión:
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {zona.clinicas.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  Despacho 24/7
                </span>
                <a
                  href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
                  className="hover:underline text-slate-900"
                >
                  Consultar Tiempo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Base Map / Address Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
              Base Central de Operaciones
            </div>
            <h3 className="text-2xl font-bold text-white">
              Escanilla 1000, Independencia, Santiago
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ubicación privilegiada en el polo de salud de la zona norte de Santiago (a minutos de Clínica Dávila, Hospital San José, Hospital Roberto del Río y Facultad de Medicina de la Universidad de Chile), con conexión inmediata hacia las autopistas de alta velocidad de la capital.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-teal-400" />
                Coordenadas: 33.4217° S, 70.6558° W
              </span>
              <span>·</span>
              <span>Región Metropolitana de Santiago, Chile</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={`tel:${UCI_BUSINESS_INFO.phoneEmergencyClean}`}
              className="py-3 px-5 text-center text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar a Despacho: {UCI_BUSINESS_INFO.phoneEmergency}</span>
            </a>
            <a
              href={UCI_BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 text-center text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              <span>Coordinar Despacho por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
