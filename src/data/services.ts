import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "marketing",
    icon: "Target",
    title: "Modelos de Marketing y Segmentación",
    tags: ["Marketing"],
    problem: "Los equipos de marketing asignan presupuesto uniformemente sin saber qué clientes tienen mayor potencial de compra o riesgo de abandono.",
    solution: "Construimos modelos de segmentación RFM, scoring de propensión y clustering conductual que habilitan acciones comerciales personalizadas.",
    deliverables: ["Modelo RFM con segmentos accionables", "Score de propensión de compra", "Dashboard de seguimiento de segmentos", "Playbook de acciones por segmento"],
    impact: "Reducción de 30-40% en costo de adquisición. Aumento del 20% en conversión de campaña.",

  },
  {
    id: "churn",
    icon: "UserCheck",
    title: "Predicción de Churn y Retención",
    tags: ["Retención"],
    problem: "Las empresas pierden clientes sin señales previas de alerta, respondiendo de forma reactiva y demasiado tarde.",
    solution: "Modelos predictivos de abandono con aviso de 2-8 semanas, integrados en flujos de gestión comercial.",
    deliverables: ["Modelo predictivo de churn (ML)", "Lista semanal de clientes en riesgo", "Score de riesgo individual", "Recomendación de acción por cliente"],
    impact: "Recuperación del 15-25% de clientes en riesgo. Reducción anual de churn de 8-18 puntos porcentuales.",

  },
  {
    id: "geo",
    icon: "MapPin",
    title: "Geolocalización y Calidad de Direcciones",
    tags: ["Geolocalización"],
    problem: "Las bases de datos de direcciones con errores, duplicados y formatos inconsistentes causan fallos de entrega, costos logísticos evitables y métricas de cobertura poco confiables.",
    solution: "Pipeline de normalización, geocodificación y scoring de calidad de dirección con trazabilidad completa de cada registro.",
    deliverables: ["Score de calidad por dirección", "Dirección normalizada y geocodificada", "Reporte de auditoría de base de datos", "Pipeline automatizable"],
    impact: "Reducción de 60-80% en entregas fallidas por dirección. Mejora inmediata en calidad de base de datos de clientes.",

  },
  {
    id: "logistica",
    icon: "Truck",
    title: "Optimización de Logística",
    tags: ["Logística"],
    problem: "Las rutas de entrega se diseñan manualmente o usando criterios históricos, sin considerar demanda real, restricciones de vehículos o ventanas de tiempo.",
    solution: "Algoritmos de optimización combinatoria (VRP) que minimizan distancia, costo y tiempo manteniendo cobertura completa.",
    deliverables: ["Modelo de ruteo optimizado", "Asignación dinámica de vehículos", "Simulador de escenarios", "KPIs de eficiencia operacional"],
    impact: "Ahorros de 15-30% en costo logístico. Reducción del 20% en tiempo promedio de entrega.",

  },
  {
    id: "dashboards",
    icon: "BarChart3",
    title: "Dashboards y Monitoreo de KPIs",
    tags: ["Analítica"],
    problem: "La toma de decisiones se basa en reportes estáticos con retrasos de varios días sin capacidad de análisis detallado o alertas automáticas.",
    solution: "Diseño e implementación de dashboards ejecutivos y operacionales conectados a fuentes de datos en tiempo real, con alertas configurables.",
    deliverables: ["Dashboard ejecutivo interactivo", "Alertas automáticas por umbral", "Integración con fuentes de datos existentes", "Documentación de KPIs"],
    impact: "Reducción del 70% en tiempo de preparación de reportes. Decisiones basadas en datos actuales.",

  },
  {
    id: "ia",
    icon: "Bot",
    title: "Automatización con IA y Agentes",
    tags: ["Inteligencia Artificial"],
    problem: "Tareas repetitivas de alto volumen consumen tiempo del equipo calificado: clasificación, resúmenes, respuestas, extracción de información.",
    solution: "Diseño e implementación de agentes IA con LLMs para automatizar flujos de trabajo, integrados con sistemas existentes de la empresa.",
    deliverables: ["Agente IA personalizado", "Integración con CRM / ERP / email", "Dashboard de monitoreo y control", "Capacitación del equipo"],
    impact: "Automatización del 60-80% de tareas repetitivas. Libera capacidad humana para trabajo de mayor valor.",

  },
];
