export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Ventajas', href: '#diferencial' },
  { label: 'Servicios', href: '#capacidades' },
  { label: 'Framework', href: '#solucion' },
  { label: 'Casos', href: '#casos' },
  { label: 'Proceso', href: '#credibilidad' },
  { label: 'Contacto', href: '#contacto' },
];

export const diferenciales = [
  {
    title: 'Estrategia conectada a revenue',
    description:
      'Traducimos objetivos comerciales en arquitectura digital accionable para reducir fricción y aumentar oportunidades calificadas.',
    outcome: 'Mayor calidad de leads y ciclos comerciales más claros.',
  },
  {
    title: 'Diseño corporativo con intención',
    description:
      'Diseñamos interfaces sobrias y de alta confianza que ordenan el mensaje, priorizan decisiones y elevan percepción de marca.',
    outcome: 'Más credibilidad en reuniones, propuestas y demos.',
  },
  {
    title: 'Implementación escalable',
    description:
      'Construimos sobre bases técnicas sólidas para evolucionar web, ecommerce, automatizaciones y analítica sin rehacer todo cada 6 meses.',
    outcome: 'Menor costo de cambio y crecimiento sostenido.',
  },
];

export const capacidades = [
  {
    title: 'Arquitectura digital & consultoría',
    points: ['Diagnóstico ejecutivo de activos y embudo digital.', 'Definición de hoja de ruta por impacto y esfuerzo.'],
  },
  {
    title: 'Sitios corporativos orientados a conversión B2B',
    points: ['Narrativa comercial clara para tomadores de decisión.', 'Diseño UX/UI premium con jerarquía y CTAs estratégicos.'],
  },
  {
    title: 'Ecommerce y canales de venta',
    points: ['Optimización de experiencia de compra y catálogo.', 'Integraciones clave para operación y trazabilidad comercial.'],
  },
  {
    title: 'Automatización, datos y performance',
    points: ['Implementación de analítica y paneles para dirección.', 'Automatizaciones para marketing, ventas y operaciones.'],
  },
];

export const casos = [
  {
    name: 'Marmolería Pietra',
    challenge: 'Necesitaba posicionarse en proyectos premium y mejorar la calidad de las consultas.',
    result: 'Nuevo sitio con narrativa B2B y estructura de conversión por tipo de proyecto.',
    impact: '+41% en consultas calificadas en 90 días.',
  },
  {
    name: 'Corpicia',
    challenge: 'Tenía oferta técnica sólida pero comunicación digital dispersa y poco diferencial.',
    result: 'Reposicionamiento de propuesta y arquitectura de servicios para venta consultiva.',
    impact: 'Ciclos de venta más cortos y mayor tasa de reunión comercial.',
  },
  {
    name: 'Expansión regional B2B',
    challenge: 'Debía escalar a nuevas plazas sin perder consistencia de marca ni eficiencia operativa.',
    result: 'Ecosistema modular multicanal con governance de contenidos y medición.',
    impact: 'Despliegue regional en semanas, no meses.',
  },
];

export const credenciales = [
  {
    title: '1. Diagnóstico de negocio',
    description: 'Auditamos situación actual, puntos de fuga y oportunidades de captura de demanda.',
  },
  {
    title: '2. Blueprint de arquitectura',
    description: 'Diseñamos estructura, mensajes, journeys y stack tecnológico con prioridades concretas.',
  },
  {
    title: '3. Implementación por fases',
    description: 'Ejecutamos con entregables iterativos para generar valor temprano y controlar riesgos.',
  },
  {
    title: '4. Optimización continua',
    description: 'Medimos resultados, iteramos y alineamos evolución digital con objetivos comerciales.',
  },
];
