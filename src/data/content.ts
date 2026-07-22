export const services = [
  {
    id: 'marketing',
    icon: '◎',
    title: 'Modelos de Marketing y Segmentación',
    problem: 'Las campañas genéricas queman presupuestos. Sin segmentación inteligente, el costo de adquisición de clientes escala y la conversión cae.',
    solution: 'Modelos de scoring, segmentación RFM y propensión de compra que identifican a quién contactar, con qué mensaje y cuándo.',
    deliverables: ['Modelo de propensión de compra', 'Segmentación RFM automatizada', 'Dashboard de rendimiento de campaña', 'API para integración'],
    impact: 'Reducción de hasta el 35% en costo de adquisición. Aumento de conversión en campañas segmentadas de 2x a 4x.',
    tags: ['ML', 'Segmentación', 'ROI'],
  },
  {
    id: 'retencion',
    icon: '◈',
    title: 'Predicción de Churn y Retención',
    problem: 'Retener un cliente cuesta 5x menos que adquirir uno. Sin embargo, la mayoría de las empresas actúan demasiado tarde.',
    solution: 'Modelos predictivos de churn que identifican señales tempranas de abandono y sugieren acciones personalizadas por cliente.',
    deliverables: ['Modelo de predicción de churn', 'Score de riesgo del cliente', 'Acciones recomendadas automáticas', 'Alertas en tiempo real'],
    impact: 'Reducción de 20-40% en tasa de churn. Recuperación de ingresos en riesgo antes de que se materialicen pérdidas.',
    tags: ['Retención', 'IA', 'CRM'],
  },
  {
    id: 'geo',
    icon: '◉',
    title: 'Geolocalización y Calidad de Direcciones',
    problem: 'Las direcciones incorrectas causan entregas fallidas, devoluciones costosas y datos deficientes que contaminan análisis posteriores.',
    solution: 'Pipeline de normalización y geocodificación que valida, corrige y enriquece cada dirección con coordenadas, score de confianza y fuente.',
    deliverables: ['Motor de normalización de direcciones', 'Score de confianza por registro', 'Auditoría de calidad de base de datos', 'API REST en tiempo real para integración'],
    impact: 'Tasa de validación de hasta 94%. Reducción del 60% en entregas fallidas. Base de datos de clientes limpia y georeferenciada.',
    tags: ['Datos', 'Calidad', 'Geocodificación'],
  },
  {
    id: 'logistica',
    icon: '◆',
    title: 'Optimización de Logística',
    problem: 'Las rutas manuales causan sobconsumo de combustible, vehículos subutilizados y ventanas de entrega perdidas.',
    solution: 'Algoritmos de optimización de rutas y asignación de cargas que minimizan distancia, tiempo y costo respetando restricciones operacionales.',
    deliverables: ['Motor de ruteo optimizado', 'Dashboard de operaciones en tiempo real', 'Simulador de escenarios', 'Integración con sistemas de flota'],
    impact: 'Reducción de 30-40% en costos logísticos. Aumento del 25% en utilización de flota. Más entregas con los mismos vehículos.',
    tags: ['Optimización', 'Logística', 'Rutas'],
  },
  {
    id: 'dashboards',
    icon: '▣',
    title: 'Dashboards y Monitoreo de KPIs',
    problem: 'Los datos existen pero están dispersos en silos. Sin una vista unificada, las decisiones se toman tarde con información incompleta.',
    solution: 'Pipelines de datos + dashboards ejecutivos que consolidan fuentes heterogéneas en una vista accionable y en tiempo real.',
    deliverables: ['Arquitectura de datos unificada', 'Dashboards ejecutivos y operacionales', 'Alertas automáticas por umbral', 'Exportación y reportes automatizados'],
    impact: 'De días a minutos en generación de reportes. Decisiones basadas en datos actuales, no en intuición.',
    tags: ['Analítica', 'BI', 'Tiempo real'],
  },
  {
    id: 'agentes',
    icon: '◬',
    title: 'Automatización con IA y Agentes',
    problem: 'Tareas repetitivas de alto volumen consumen tiempo del equipo que debería enfocarse en decisiones de mayor valor.',
    solution: 'Agentes IA personalizados que automatizan flujos de trabajo complejos: análisis, clasificación y síntesis de información.',
    deliverables: ['Agentes IA personalizados', 'Integración con sistemas existentes', 'Panel de supervisión y control', 'Documentación y transferencia de conocimiento'],
    impact: 'Automatización del 70-90% de tareas operacionales repetitivas. Reducción de errores y tiempos de respuesta de horas a segundos.',
    tags: ['IA Generativa', 'Agentes', 'Automatización'],
  },
]

export const industries = [
  { id: 'logistica', name: 'Logística y Distribución', icon: '🚚', description: 'Optimizamos flotas, rutas y procesos de entrega para reducir costos y mejorar niveles de servicio.', useCases: ['Optimización de rutas', 'Predicción de demanda', 'Control de flota', 'KPIs operacionales'] },
  { id: 'retail', name: 'Retail y Distribución', icon: '🏪', description: 'Segmentamos clientes, predecimos demanda y optimizamos mix de productos para maximizar márgenes.', useCases: ['RFM y segmentación', 'Pronóstico de stock', 'Precios dinámicos', 'Análisis de canasta'] },
  { id: 'ecommerce', name: 'E-Commerce', icon: '🛒', description: 'Reducimos abandono, mejoramos conversión y activamos los usuarios correctos en el momento correcto.', useCases: ['Predicción de churn', 'Recomendaciones', 'Calidad de direcciones', 'Atribución de campaña'] },
  { id: 'marketing', name: 'Equipos de Marketing', icon: '📊', description: 'Transformamos presupuestos de campaña en conversiones medibles con modelos de propensión y audiencias inteligentes.', useCases: ['Scoring de propensión', 'Segmentación dinámica', 'ROI de campaña', 'Audiencias look-alike'] },
  { id: 'customer', name: 'Analítica de Clientes', icon: '👥', description: 'Construimos una vista 360° del cliente que habilita experiencias personalizadas y anticipa necesidades.', useCases: ['Journey del cliente', 'Predicción de LTV', 'NPS predictivo', 'Señales de abandono'] },
  { id: 'operaciones', name: 'Operaciones', icon: '⚙️', description: 'Automatizamos procesos, detectamos ineficiencias y monitoreamos KPIs operacionales en tiempo real.', useCases: ['Automatización de flujos', 'Detección de anomalías', 'Control de gestión', 'Reportes ejecutivos'] },
]

export const testimonials = [
  { id: 'T01', name: 'Hernán Villanueva', role: 'Director Comercial', company: 'Distribuidora Atlántica', industry: 'Logística', quote: 'En tres meses pasamos de tomar decisiones basadas en intuición a tener un dashboard de alertas en tiempo real. La reducción en costos logísticos fue inmediata y medible.' },
  { id: 'T02', name: 'Marcela Ríos', role: 'Responsable de Marketing', company: 'RetailNow Argentina', industry: 'Retail', quote: 'El modelo de segmentación nos permitió identificar exactamente qué clientes llamar antes de que se fueran. La tasa de churn cayó 28% en el primer trimestre.' },
  { id: 'T03', name: 'Pablo Acosta', role: 'CTO', company: 'E-Commerce Express', industry: 'E-Commerce', quote: 'Lo que más valoramos fue que el equipo entiende tanto datos como negocio. No nos entregaron un modelo, entregaron una solución que nuestro equipo pudo usar desde el primer día.' },
]

export const faqs = [
  { question: '¿Necesitamos datos perfectamente organizados para comenzar?', answer: 'No. La mayoría de nuestros proyectos comienzan con una evaluación de calidad de datos. Parte de nuestro trabajo es limpiar, estructurar y enriquecer la información existente antes de construir cualquier modelo.' },
  { question: '¿Cuánto tiempo tarda en ver resultados?', answer: 'Según el proyecto, los primeros logros rápidos se pueden observar entre 4-8 semanas. Priorizamos entregar valor incremental desde las primeras iteraciones, no al final de un proyecto largo.' },
  { question: '¿Las soluciones se integran con nuestros sistemas actuales?', answer: 'Sí. Diseñamos soluciones para integrar con sistemas existentes: CRM, ERP, plataformas de e-commerce, etc. Entregamos APIs, conectores y documentación para facilitar la adopción.' },
  { question: '¿Trabajan con empresas que no tienen equipo interno de datos?', answer: 'Es nuestro caso de uso principal. Actuamos como equipo de datos externo de la empresa: desde infraestructura hasta modelos y visualización, cubriendo todo el stack.' },
  { question: '¿Cómo se mide el ROI del proyecto?', answer: 'Antes de comenzar, definimos conjuntamente KPIs de impacto: ahorros en costos, aumento de conversión, reducción de churn, etc. Todas las soluciones están diseñadas para ser medibles desde el inicio.' },
]

export const techStack = [
  { name: 'Python', category: 'Languages' }, { name: 'SQL', category: 'Languages' },
  { name: 'scikit-learn', category: 'ML' }, { name: 'XGBoost', category: 'ML' }, { name: 'PyTorch', category: 'ML' },
  { name: 'LangChain', category: 'Generative AI' }, { name: 'OpenAI / Anthropic', category: 'Generative AI' },
  { name: 'dbt', category: 'Data Engineering' }, { name: 'Airflow', category: 'Data Engineering' },
  { name: 'BigQuery', category: 'Cloud' }, { name: 'Snowflake', category: 'Cloud' }, { name: 'AWS', category: 'Cloud' },
  { name: 'Looker Studio', category: 'Visualization' }, { name: 'Power BI', category: 'Visualization' },
  { name: 'Next.js', category: 'Frontend' },
]
