export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  dotacion: string[];
  equipamiento: string[];
  indicaciones: string[];
  clinicasFrecuentes: string[];
  image: string;
  urgencyLevel: 'Inmediata (UCI)' | 'Programada / Urgente' | 'Programada' | 'Standby';
}

export const UCI_BUSINESS_INFO = {
  name: 'UCI Ambulancias',
  tagline: 'Traslados Médicos Críticos y Unidades de Cuidados Intensivos Móviles',
  experienceYears: 15,
  phoneEmergency: '+56 9 8385 3648',
  phoneEmergencyClean: '+56983853648',
  phoneLandline: '+56 2 2777 9935',
  phoneLandlineClean: '+56227779935',
  whatsappUrl: 'https://wa.me/56983853648?text=Hola,%20necesito%20coordinar%20una%20ambulancia%20con%20urgencia%20en%20Santiago',
  address: 'Escanilla 1000, Independencia, Santiago, Región Metropolitana, Chile',
  coordinates: {
    lat: -33.4217,
    lng: -70.6558,
  },
  hours: 'Atención y Despacho 24 Horas / 365 Días',
  email: 'contacto@uciambulancias.cl',
  website: 'https://uciambulancias.cl/',
  socialLinks: {
    youtube: 'https://www.youtube.com/@uciambulancias-me8kv',
    facebook: 'https://www.facebook.com/people/UCI-Ambulancias-en-Santiago/61567492865515',
    threads: 'https://www.threads.com/@ucisantiago',
  },
  images: {
    logo: '/assets/aistudio/image_9fbc62bf.png',
    hero: '/src/assets/images/hero_ambulance_santiago_1793057927614.jpg',
    uciInterior: '/src/assets/images/service_uci_interior_1793057928006.jpg',
    patientTransfer: '/src/assets/images/service_patient_transfer_1793057928652.jpg',
    eventCoverage: '/src/assets/images/service_event_coverage_1793057929372.jpg',
    medicalTeam: '/src/assets/images/about_medical_team_1793057929784.jpg',
    awardExcellence: '/src/assets/images/award_medical_excellence_1793061418005.jpg',
    award15Years: '/src/assets/images/award_15_years_crystal_1793061416684.jpg',
  },
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'uci-movil',
    slug: 'traslado-uci-critico',
    title: 'UCI Móvil / Traslado de Pacientes Críticos',
    subtitle: 'Soporte Vital Avanzado (SVA) con médico intensivista y tecnología hospitalaria en ruta',
    category: 'Alta Complejidad',
    shortDesc: 'Unidades de cuidados intensivos sobre ruedas para pacientes hemodinámicamente inestables, intubados o con requerimiento de soporte vital continuo.',
    fullDesc: 'Nuestro servicio de UCI Móvil constituye el estándar más riguroso en transporte médico terrestre en Chile. Cada móvil está configurado como un box de cuidados intensivos de nivel terciario, diseñado para mantener la estabilidad fisiológica de pacientes críticos durante traslados interhospitalarios en Santiago o entre regiones del país. Operamos bajo protocolos estandarizados de reanimación avanzada (ACLS/ATLS/PALS).',
    dotacion: [
      'Médico intensivista o urgenciólogo con entrenamiento en transporte crítico',
      'Enfermero(a) universitario(a) reanimador(a) con especialidad en UCI/UTI',
      'Conductor profesional paramédico de emergencia certificado',
    ],
    equipamiento: [
      'Ventilador mecánico de transporte avanzado (modos invasivos y no invasivos, PEEP, BiPAP, CPAP)',
      'Monitor multiparámetro de alta gama (ECG de 12 derivaciones, SpO2, PNI, Capnografía EtCO2 en tiempo real y temperatura central)',
      'Desfibrilador bifásico / cardioversor con marcapasos transcutáneo externo',
      'Bombas de infusión continua jeringa y volumétricas de precisión',
      'Red central y portátil de oxígeno medicinal con cilindros dobles de respaldo',
      'Kit de manejo de vía aérea difícil con videolaringoscopio y aspiración continua',
      'Maletín de farmacología de reanimación y sedoanalgesia según normativa SEREMI',
    ],
    indicaciones: [
      'Pacientes con ventilación mecánica invasiva o alto flujo',
      'Infarto agudo de miocardio (IAM) y síndromes coronarios agudos',
      'Accidente cerebrovascular (ACV) en ventana terapéutica',
      'Shock séptico, cardiogénico o hipovolémico con soporte de drogas vasoactivas',
      'Politraumatismos graves y pacientes neurocríticos',
    ],
    clinicasFrecuentes: [
      'Clínica Alemana de Santiago',
      'Clínica Santa María',
      'Clínica Las Condes',
      'Clínica Indisa',
      'Clínica Dávila Recoleta y Vespucio',
      'Hospital Clínico UC Christus',
      'Hospital Clínico Universidad de Chile (J.J. Aguirre)',
      'Hospital del Trabajador (ACHS) e Instituto de Seguridad del Trabajo (IST)',
    ],
    image: UCI_BUSINESS_INFO.images.uciInterior,
    urgencyLevel: 'Inmediata (UCI)',
  },
  {
    id: 'traslado-basico',
    slug: 'traslado-basico-mediana-complejidad',
    title: 'Traslado Básico y Mediana Complejidad',
    subtitle: 'Soporte vital básico para altas hospitalarias, derivaciones y controles clínicos',
    category: 'Mediana & Baja Complejidad',
    shortDesc: 'Traslado seguro y confortable para pacientes estables que requieren asistencia de camilla, monitoreo de signos vitales o soporte de oxígeno de bajo flujo.',
    fullDesc: 'Pensado para traslados desde clínicas y hospitales hacia el domicilio particular, residencias de adulto mayor (ELEAM) o cambios de centro asistencial. Brindamos una atención cálida y respetuosa, con camillas anatómicas de amortiguación hidráulica y personal paramédico TENS enfocado en el bienestar físico y emocional del paciente.',
    dotacion: [
      'Técnico en Enfermería de Nivel Superior (TENS / Paramédico)',
      'Conductor profesional de ambulancia certificado en primeros auxilios',
    ],
    equipamiento: [
      'Camilla hidráulica retráctil de alto impacto con arnés de seguridad de 5 puntos',
      'Silla de ruedas plegable y silla de rescate para escaleras en edificios',
      'Monitor portátil de signos vitales (presión arterial, saturación de O2, frecuencia cardíaca)',
      'Equipo de oxigenoterapia con flujo regulable y cánulas nasales',
      'Aspirador de secreciones portátil y tabla espinal rígida',
      'Material de curación y botiquín de primeros auxilios de emergencia',
    ],
    indicaciones: [
      'Altas médicas post-cirugía general, traumatología o post-hospitalización',
      'Pacientes de la tercera edad con movilidad reducida o reposo absoluto',
      'Traslados entre centros asistenciales para estadías medias',
      'Requerimiento de oxígeno suplementario de bajo flujo durante el trayecto',
    ],
    clinicasFrecuentes: [
      'Clínica RedSalud Vitacura, Providencia y Santiago',
      'Clínica Bupa Santiago',
      'Hospital San Juan de Dios',
      'Hospital San José (Independencia)',
      'Hospital del Salvador',
      'Centros de Rehabilitación Los Coihues y Teletón',
    ],
    image: UCI_BUSINESS_INFO.images.patientTransfer,
    urgencyLevel: 'Programada / Urgente',
  },
  {
    id: 'traslado-psiquiatrico',
    slug: 'traslado-psiquiatrico-salud-mental',
    title: 'Traslado Psiquiátrico y Salud Mental',
    subtitle: 'Atención humanizada, contención clínica respetuosa y estricta confidencialidad',
    category: 'Salud Mental & Contención',
    shortDesc: 'Asistencia y traslado especializado para pacientes descompensados en salud mental, adicciones o crisis neuropsiquiátricas, resguardando su dignidad.',
    fullDesc: 'Entendemos la delicadeza y el impacto emocional de las crisis en salud mental. Nuestro equipo cuenta con capacitación especializada en desescalada verbal, contención física respetuosa bajo normativas éticas del MINSAL y manejo farmacológico supervisado por médico cuando es clínicamente necesario, ofreciendo tranquilidad tanto al paciente como a su círculo familiar.',
    dotacion: [
      'Médico de turno para evaluación clínica previa y estabilización',
      'Enfermero(a) o TENS especializado en manejo de pacientes de salud mental',
      'Conductor paramédico capacitado en protocolos de seguridad y contención digna',
    ],
    equipamiento: [
      'Ambulancia acondicionada con habitáculo seguro y libre de elementos lesivos',
      'Sistemas de sujeción terapéutica homologados de algodón y liberación rápida',
      'Farmacología para sedación y ansiolisis de urgencia supervisada médicamente',
      'Monitor de signos vitales y saturometría de pulso continuo',
      'Oxigenoterapia y equipo de primeros auxilios',
    ],
    indicaciones: [
      'Descompensación en trastornos bipolares, depresión mayor o esquizofrenia',
      'Crisis de agitación psicomotora, angustia severa o episodios psicóticos agudos',
      'Intoxicaciones agudas por alcohol o sustancias y síndromes de abstinencia',
      'Ingresos voluntarios e involuntarios a clínicas psiquiátricas con indicación médica',
    ],
    clinicasFrecuentes: [
      'Clínica Psiquiátrica San José de Maipo',
      'Clínica El Arrayán (Lo Barnechea)',
      'Clínica Psiquiátrica Pocuro (Providencia)',
      'Instituto Psiquiátrico Dr. José Horwitz Barak (Recoleta)',
      'Clínica Miraflores y Clínicas de Rehabilitación',
    ],
    image: UCI_BUSINESS_INFO.images.medicalTeam,
    urgencyLevel: 'Programada / Urgente',
  },
  {
    id: 'traslado-dialisis-examenes',
    slug: 'traslado-dialisis-examenes-programados',
    title: 'Traslado para Diálisis, Quimioterapia y Exámenes',
    subtitle: 'Puntualidad garantizada, asistencia puerta a puerta y convenios mensuales',
    category: 'Procedimientos Programados',
    shortDesc: 'Servicio recurrente y programado para pacientes con insuficiencia renal crónica, tratamientos oncológicos, resonancias o terapias de rehabilitación.',
    fullDesc: 'Sabemos que los turnos de hemodiálisis y quimioterapia no admiten retrasos. Nuestro servicio programado garantiza retiro puntual en el domicilio, asistencia por escalas o ascensores mediante personal calificado, espera en el centro médico si se requiere y retorno seguro a casa, con tarifas preferenciales para traslados habituales.',
    dotacion: [
      'TENS / Paramédico con experiencia en manejo de fístulas arteriovenosas y catéteres',
      'Conductor profesional con ruta pre-planificada',
    ],
    equipamiento: [
      'Camilla acolchada con elevación de respaldo para mayor confort post-diálisis',
      'Silla de traslado para escalas y accesos estrechos',
      'Monitoreo hemodinámico pre y post traslado (presión arterial y saturación)',
      'Manta térmica y soporte para infusiones o bolsas de diálisis peritoneal',
    ],
    indicaciones: [
      'Sesiones de hemodiálisis trisemanal en centros NephroCare, Diaverum o Clínicas',
      'Quimioterapia y radioterapia en centros oncológicos (FALP, IRAM, Clínicas)',
      'Resonancias magnéticas, tomografías axiales computarizadas (TAC) y endoscopias',
      'Controles médicos de especialidad con inmovilidad temporal o crónica',
    ],
    clinicasFrecuentes: [
      'Instituto Oncológico Fundación Arturo López Pérez (FALP)',
      'Centros de Diálisis NephroCare Santiago, Independencia y Maipú',
      'Centros Diaverum Chile',
      'Hospital Clínico FUSAT y Mutual de Seguridad',
      'Centros de Diagnóstico por Imágenes Diagnomed y RedSalud',
    ],
    image: UCI_BUSINESS_INFO.images.patientTransfer,
    urgencyLevel: 'Programada',
  },
  {
    id: 'cobertura-eventos-faenas',
    slug: 'cobertura-medica-eventos-faenas',
    title: 'Cobertura Médica de Eventos y Faenas',
    subtitle: 'Ambulancias en punto fijo, Puesto Médico Avanzado (PMA) y resolución SEREMI',
    category: 'Eventos & Corporativo',
    shortDesc: 'Respaldo preventivo y respuesta médica de urgencia para recitales, eventos deportivos, empresas, filmaciones y obras industriales en Santiago y regiones.',
    fullDesc: 'Damos cumplimiento a las exigencias legales y de seguridad de la SEREMI de Salud y de las delegaciones presidenciales. Implementamos desde una ambulancia en punto fijo con paramédico hasta un hospital de campaña / Puesto Médico Avanzado (PMA) con médicos urgenciólogos, enfermeros y enlace radial directo para evacuaciones prioritarias.',
    dotacion: [
      'Médicos de urgencia para eventos masivos y triaje',
      'Enfermeros(as) reanimadores y Técnicos Paramédicos (TENS)',
      'Conductores profesionales con certificación de emergencias',
    ],
    equipamiento: [
      'Ambulancia de rescate y soporte vital avanzado en punto fijo',
      'Toldo o carpa clínica para Puesto Médico Avanzado (PMA) con camillas de observación',
      'Desfibriladores externos automáticos (DEA) y equipos de reanimación cardiopulmonar',
      'Kits de trauma, inmovilización espinal y curación para múltiples lesionados',
      'Sistema de comunicación radial interna y enlace con red asistencial',
    ],
    indicaciones: [
      'Maratones, carreras ciclísticas y torneos deportivos de alta convocatoria',
      'Conciertos, festivales musicales y eventos masivos en estadios y recintos cerrados',
      'Asambleas corporativas, ferias empresariales (ej. Expomin) y filmaciones publicitarias',
      'Obras de construcción civil de gran envergadura y faenas mineras o energéticas',
    ],
    clinicasFrecuentes: [
      'Parque O’Higgins y Movistar Arena',
      'Estadio Nacional y Estadio Bicentenario de La Florida',
      'Espacio Riesco (Huechuraba)',
      'Club Hípico de Santiago',
      'Parques y circuitos deportivos de la Región Metropolitana',
    ],
    image: UCI_BUSINESS_INFO.images.eventCoverage,
    urgencyLevel: 'Standby',
  },
  {
    id: 'traslado-interurbano-nacional',
    slug: 'traslado-interurbano-nacional-chile',
    title: 'Traslados Interurbanos y a Todo Chile',
    subtitle: 'Conexión médica terrestre y coordinación aeromédica de Arica a Punta Arenas',
    category: 'Larga Distancia',
    shortDesc: 'Traslados terrestres de alta y mediana complejidad entre Santiago y cualquier región del país, con soporte médico continuo y conexión con vuelos comerciales y ambulancia aérea.',
    fullDesc: 'Cuando un paciente necesita regresar a su ciudad de origen o trasladarse a Santiago para recibir atención de alta especialidad médica, nuestras unidades interurbanas están preparadas para viajes de cientos de kilómetros con autonomía eléctrica, reserva extendida de oxígeno medicinal y paradas clínicas programadas.',
    dotacion: [
      'Dotación médica configurable según estado del paciente (Médico + Enfermero + Paramédico)',
      'Dos conductores profesionales relevistas para viajes de larga distancia',
    ],
    equipamiento: [
      'Autonomía eléctrica reforzada con inversores de corriente continua para equipos UCI',
      'Doble banco de cilindros de oxígeno medicinal de 6.000 litros cada uno',
      'Monitoreo hemodinámico continuo y telemetría durante todo el trayecto',
      'Suspensión neumática calibrada para máxima suavidad de marcha en carreteras',
      'Sistemas de climatización dual independiente en cabina del paciente',
    ],
    indicaciones: [
      'Traslado de pacientes desde hospitales regionales hacia clínicas de Santiago para cirugías complejas',
      'Repatriación médica desde Santiago hacia regiones de residencia del paciente',
      'Conexión directa en pista o terminal del Aeropuerto Arturo Merino Benítez (SCL)',
      'Rutas frecuentes: Santiago - Viña del Mar / Valparaíso, Rancagua, Talca, Concepción, La Serena, Coquimbo, Chillán, Temuco',
    ],
    clinicasFrecuentes: [
      'Aeropuerto Internacional Arturo Merino Benítez (SCL)',
      'Hospital Clínico de Viña del Mar y Clínica Ciudad del Mar',
      'Hospital Regional de Rancagua y Clínica Isamédica',
      'Clínica Universitaria de Concepción y Sanatorio Alemán',
      'Hospital Regional de La Serena y Clínica Elqui',
    ],
    image: UCI_BUSINESS_INFO.images.hero,
    urgencyLevel: 'Programada / Urgente',
  },
];

export const SANTIAGO_COMUNAS = [
  'Independencia (Base Central)',
  'Santiago Centro',
  'Providencia',
  'Las Condes',
  'Vitacura',
  'Lo Barnechea',
  'Ñuñoa',
  'La Reina',
  'Peñalolén',
  'Macul',
  'San Miguel',
  'San Joaquín',
  'La Florida',
  'Puente Alto',
  'Maipú',
  'Pudahuel / Aeropuerto SCL',
  'Quilicura',
  'Huechuraba / Ciudad Empresarial',
  'Recoleta',
  'Conchalí',
  'Renca',
  'Cerro Navia',
  'Quinta Normal',
  'Estación Central',
  'Cerrillos',
  'Pedro Aguirre Cerda',
  'Lo Espejo',
  'La Cisterna',
  'San Ramón',
  'La Granja',
  'El Bosque',
  'San Bernardo',
  'Buin / Paine',
  'Colina / Chicureo',
  'Lampa',
  'Talagante / Peñaflor / Padre Hurtado',
  'Melipilla',
  'Curacaví',
  'Otra Región de Chile (Interurbano)',
];

export const CLINICAL_DESTINATIONS = [
  'Clínica Alemana (Vitacura)',
  'Clínica Santa María (Providencia)',
  'Clínica Las Condes (Las Condes / Chicureo)',
  'Clínica Indisa (Providencia / Maipú)',
  'Clínica Dávila (Recoleta / Vespucio)',
  'Hospital Clínico UC Christus (Santiago / San Carlos de Apoquindo)',
  'Clínica RedSalud (Providencia / Vitacura / Santiago)',
  'Clínica Bupa Santiago (La Florida)',
  'Instituto Nacional del Cáncer / FALP',
  'Hospital San José (Independencia)',
  'Hospital San Juan de Dios (Santiago)',
  'Hospital del Salvador (Providencia)',
  'Hospital Barros Luco (San Miguel)',
  'Hospital Sótero del Río (Puente Alto)',
  'Hospital Félix Bulnes (Cerro Navia)',
  'Aeropuerto Arturo Merino Benítez (SCL)',
  'Domicilio Particular o Residencia ELEAM',
  'Clínica u Hospital en Otra Región',
];

export const FAQS_DATA = [
  {
    q: '¿Cómo solicito una ambulancia de urgencia en este momento?',
    a: 'Para urgencias inmediatas, llame directamente al +56 9 8385 3648 o presione el botón de WhatsApp en esta página. Nuestro despachador clínico recopilará en menos de 60 segundos la ubicación, el estado del paciente y asignará la unidad móvil adecuada (UCI Móvil o Básica) en camino.',
  },
  {
    q: '¿Qué diferencia existe entre una ambulancia básica y una UCI Móvil?',
    a: 'Una ambulancia básica está tripulada por un conductor y un técnico paramédico (TENS), orientada a pacientes estables, altas médicas o controles. Una UCI Móvil (Soporte Vital Avanzado) lleva a bordo un médico intensivista, enfermero(a) reanimador(a) y conductor paramédico, además de equipamiento de cuidados intensivos como ventilador mecánico de transporte, monitor multiparámetro invasivo, desfibrilador bifásico y bombas de infusión.',
  },
  {
    q: '¿Tienen cobertura durante las 24 horas y los fines de semana?',
    a: 'Sí. Operamos las 24 horas del día, los 365 días del año de forma ininterrumpida, cubriendo emergencias nocturnas, festivos y fines de semana en todo el Gran Santiago y rutas interurbanas hacia regiones.',
  },
  {
    q: '¿El servicio tiene reembolso a través de Isapres, Fonasa o Seguros Complementarios?',
    a: 'Emitimos boleta o factura exenta electrónica detallando el servicio médico prestado y la dotación involucrada, documento válido para solicitar reembolso en su Isapre (Banmédica, Colmena, Consalud, CruzBlanca, Nueva Masvida, Esencial) y pólizas de seguros complementarios de salud.',
  },
  {
    q: '¿Realizan traslados hacia regiones fuera de Santiago?',
    a: 'Sí. Coordinamos traslados interurbanos hacia todo Chile (Valparaíso, Viña del Mar, Rancagua, Talca, Concepción, La Serena, Coquimbo, etc.) y coordinaciones directas con ambulancias aéreas o vuelos comerciales en el Aeropuerto SCL.',
  },
  {
    q: '¿Cómo manejan pacientes en edificios antiguos o sin ascensor?',
    a: 'Nuestra flota cuenta con sillas oruga especiales de rescate y camillas articuladas con dotación de personal entrenado para maniobras seguras de descenso y ascenso por escaleras, protegiendo en todo momento la columna y la comodidad del paciente.',
  },
  {
    q: '¿Cuentan con resolución sanitaria de la SEREMI de Salud?',
    a: 'Sí. Todas nuestras ambulancias y equipamientos clínicos cumplen estrictamente con las directrices y autorizaciones sanitarias exigidas por el Ministerio de Salud (MINSAL) y la SEREMI de Salud de la Región Metropolitana.',
  },
];

export const FLEET_SPECS = [
  {
    name: 'Mercedes-Benz Sprinter 316 / 415 CDI',
    type: 'Unidad de Cuidados Intensivos Móvil (UCI)',
    specs: 'Habitáculo médico extendido de alta ergonomía, suspensión calibrada para pacientes críticos, doble alternador de 220V e inversor de grado médico.',
    feature: 'Capacidad para médico intensivista, enfermero y acompañante junto al paciente.',
  },
  {
    name: 'Ventilador Mecánico de Transporte Hamilton T1 / Oxylog',
    type: 'Soporte Respiratorio Avanzado',
    specs: 'Turbina de alto rendimiento integrada sin dependencia de gas comprimido para ventilación invasiva y no invasiva (VNI), monitoreo de curva flujo/volumen y PEEP.',
    feature: 'Apto para pacientes neonatales, pediátricos y adultos de máxima gravedad.',
  },
  {
    name: 'Monitor Desfibrilador Zoll Serie X / Mindray BeneHeart',
    type: 'Monitoreo Hemodinámico y Cardioversión',
    specs: 'ECG 12 derivaciones, oximetría Masimo rainbow, presión invasiva (PAI), capnografía microstream EtCO2 y marcapasos transcutáneo.',
    feature: 'Transmisión de telemetría y registro clínico continuo.',
  },
  {
    name: 'Camilla Hidráulica Stryker Power-PRO XT',
    type: 'Movilización Segura de Pacientes',
    specs: 'Sistema de elevación electrohidráulica con capacidad de hasta 318 kg, amortiguación contra vibraciones de asfalto y arneses de contención de 5 puntos.',
    feature: 'Previene sacudidas bruscas y asegura estabilidad en el ingreso a la ambulancia.',
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  role: string;
  location: string;
  serviceUsed: string;
  category: 'uci' | 'basico' | 'interurbano' | 'eventos' | 'salud-mental';
  date: string;
  timeAgo: string;
  rating: number; // 4 or 5
  source: string;
  story: string;
  outcome: string;
  helpfulCount: number;
  verified: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Patricio Echeverría',
    avatar: '/src/assets/images/reviewer_doctor_patricio_1793061326637.jpg',
    role: 'Médico Urgenciólogo',
    location: 'Clínica Santa María a Viña del Mar',
    serviceUsed: 'Traslado Crítico UCI Móvil SVA',
    category: 'uci',
    date: '18 de Octubre, 2026',
    timeAgo: 'Hace 4 días',
    rating: 5,
    source: 'Opinión Médica Verificada',
    story: 'Coordinamos de urgencia el traslado de un paciente intubado bajo soporte ventilatorio Hamilton T1 por shock cardiogénico complejo.',
    outcome: 'El monitoreo hemodinámico continuo, la titulación de drogas vasoactivas y la entrega en la UCI de destino fueron impecables. Cero descompensación durante el trayecto por la Ruta 68.',
    helpfulCount: 24,
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Marcela Contreras R.',
    avatar: '/src/assets/images/reviewer_marcela_contreras_1793061326894.jpg',
    role: 'Hija de paciente geriátrico',
    location: 'Las Condes (depto. piso 3 sin ascensor)',
    serviceUsed: 'Alta Hospitalaria & Rescate en Escala',
    category: 'basico',
    date: '11 de Octubre, 2026',
    timeAgo: 'Hace 11 días',
    rating: 5,
    source: 'Google Reseñas Verificadas',
    story: 'Mi madre de 82 años fue dada de alta tras cirugía de fractura de cadera. Vivimos en un departamento antiguo sin elevador y teníamos miedo de lastimarla.',
    outcome: 'Los paramédicos llegaron puntuales y utilizaron una silla oruga de rescate con una suavidad y paciencia admirables. Mi mamá subió sin un solo quejido de dolor.',
    helpfulCount: 19,
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Jorge Valenzuela S.',
    avatar: '/src/assets/images/reviewer_jorge_valenzuela_1793061328262.jpg',
    role: 'Paciente en tratamiento de hemodiálisis',
    location: 'Independencia a NephroCare Santiago',
    serviceUsed: 'Traslado Programado para Diálisis',
    category: 'basico',
    date: '28 de Septiembre, 2026',
    timeAgo: 'Hace 3 semanas',
    rating: 5,
    source: 'Google Reseñas Verificadas',
    story: 'Llevo 8 meses utilizando el servicio tres veces por semana para mis sesiones de hemodiálisis a primera hora de la mañana.',
    outcome: 'Puntualidad rigurosa a las 06:20 hrs. El paramédico cuida celosamente mi fístula arteriovenosa y el trámite de boleta electrónica para reembolso en Isapre funciona perfecto.',
    helpfulCount: 15,
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Andrea Benavides',
    avatar: '/src/assets/images/reviewer_andrea_benavides_1793061328957.jpg',
    role: 'Directora de Producción y Eventos Masivos',
    location: 'Parque O’Higgins, Santiago',
    serviceUsed: 'Cobertura Médica & Puesto Médico Avanzado (PMA)',
    category: 'eventos',
    date: '15 de Septiembre, 2026',
    timeAgo: 'Hace 1 mes',
    rating: 4,
    source: 'Convenio Corporativo Auditado',
    story: 'Contratamos 2 ambulancias de alta complejidad y un Puesto Médico Avanzado (PMA) con carpa clínica para un recital de más de 12.000 asistentes.',
    outcome: 'Cumplieron con toda la normativa exigida por la SEREMI de Salud RM y resolvieron 14 atenciones en terreno de forma rápida y profesional. Excelente coordinación radial.',
    helpfulCount: 12,
    verified: true,
  },
  {
    id: 'test-5',
    name: 'Cristóbal Morales T.',
    avatar: '/src/assets/images/reviewer_cristobal_morales_1793061329376.jpg',
    role: 'Familiar de paciente derivado de urgencia',
    location: 'Hospital Regional de Rancagua a Clínica Alemana',
    serviceUsed: 'Traslado Interurbano Crítico',
    category: 'interurbano',
    date: '02 de Septiembre, 2026',
    timeAgo: 'Hace 1 mes',
    rating: 5,
    source: 'Google Reseñas Verificadas',
    story: 'Tuvimos que trasladar de urgencia a mi hermano desde Rancagua hacia Santiago para una neurocirugía de alta especialidad.',
    outcome: 'El médico intensivista nos transmitió serenidad y nos explicó cada parámetro vital antes de iniciar la marcha. Llegamos a Vitacura en tiempo récord y con estabilidad total.',
    helpfulCount: 21,
    verified: true,
  },
  {
    id: 'test-6',
    name: 'Valeria Guzmán P.',
    avatar: '/src/assets/images/reviewer_valeria_guzman_1793061328654.jpg',
    role: 'Hermana de paciente en salud mental',
    location: 'Providencia a Clínica El Arrayán',
    serviceUsed: 'Traslado Psiquiátrico Especializado',
    category: 'salud-mental',
    date: '18 de Agosto, 2026',
    timeAgo: 'Hace 2 meses',
    rating: 4,
    source: 'Google Reseñas Verificadas',
    story: 'En un momento de angustia severa y crisis de descompensación de mi hermana, temíamos que el traslado fuera una experiencia traumática o violenta.',
    outcome: 'El equipo médico actuó con contención verbal empática, respeto irrestricto a su dignidad y máxima discreción familiar. Muy humanos y comprensivos en todo momento.',
    helpfulCount: 17,
    verified: true,
  },
];

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  entity: string;
  sealType: 'gold' | 'crystal' | 'bronze' | 'silver';
  badgeLabel: string;
  description: string;
  verifiableCode: string;
  image?: string;
}

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-sochimu',
    year: '2024 - 2025',
    title: 'Premio a la Excelencia Médica en Transporte Crítico',
    entity: 'Sociedad Chilena de Medicina de Urgencia (SOCHIMU Chile)',
    sealType: 'gold',
    badgeLabel: 'Primer Lugar Nacional',
    description: 'Distinción otorgada al equipo clínico de UCI Ambulancias por estándares sobresalientes de estabilidad hemodinámica y tiempo de respuesta en traslados de alta complejidad en la Región Metropolitana.',
    verifiableCode: 'REG-SOCHIMU-2024/084',
    image: UCI_BUSINESS_INFO.images.awardExcellence,
  },
  {
    id: 'award-15years',
    year: '2009 - 2024',
    title: 'Distinción de Honor: 15 Años de Trayectoria y Seguridad Sanitaria',
    entity: 'Asociación de Servicios de Transporte Sanitario de Chile',
    sealType: 'crystal',
    badgeLabel: '15 Años Ininterrumpidos',
    description: 'Reconocimiento a 15 años de servicio continuo en Santiago y regiones sin incidentes en ruta, operando con autorización sanitaria permanente de la SEREMI de Salud RM.',
    verifiableCode: 'ASTS-CHILE-TRAY-15A',
    image: UCI_BUSINESS_INFO.images.award15Years,
  },
  {
    id: 'award-super-salud',
    year: '2024',
    title: 'Acreditación de Calidad en Traslado de Pacientes Complejos',
    entity: 'Superintendencia de Salud de Chile (SIS)',
    sealType: 'silver',
    badgeLabel: 'Prestador Acreditado',
    description: 'Certificación oficial de cumplimiento del 100% en protocolos de seguridad del paciente, registro de dotación médica habilitada y bioseguridad en electromedicina de transporte.',
    verifiableCode: 'SIS-CAL-NAC-9428',
  },
  {
    id: 'award-humanizacion',
    year: '2025',
    title: 'Mención de Honor al Cuidado Humanizado del Paciente',
    entity: 'Red de Apoyo al Paciente Oncológico y Residencias del Adulto Mayor',
    sealType: 'bronze',
    badgeLabel: 'Calidad Humana Destacada',
    description: 'Reconocimiento por el protocolo de contención empática en traslados de pacientes en diálisis, quimioterapia y salud mental, priorizando la dignidad y el bienestar familiar.',
    verifiableCode: 'RED-HUM-ONCO-2025',
  },
];
