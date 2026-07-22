import { RetentionClient } from "@/types";

export const retentionClients: RetentionClient[] = [
  { id: "R001", nombre: "Carlos Mendoza",    empresa: "Northern Distribution", segmento: "Premium", riesgo: "Alto", score: 87, motivoPrincipal: "3 meses sin compras / competidor activo", accion: "Reunión ejecutiva + propuesta renovada", responsable: "Equipo Comercial A", impactoMensual: 28000, estado: "En progreso" },
  { id: "R002", nombre: "Laura Santillán",   empresa: "Las Pampas Freezer Plant", segmento: "Premium", riesgo: "Alto", score: 81, motivoPrincipal: "Reclamos de servicio sin resolver (x2)", accion: "Escalada a gerencia + plan de recuperación", responsable: "Equipo Comercial B", impactoMensual: 32000, estado: "Pendiente" },
  { id: "R003", nombre: "Martín Ruiz",        empresa: "Rivero Warehouses",      segmento: "Estándar", riesgo: "Alto", score: 76, motivoPrincipal: "Reducción de órdenes -60% últimos 90 días", accion: "Campaña de reactivación con descuento 15%", responsable: "Marketing", impactoMensual: 8000, estado: "Pendiente" },
  { id: "R004", nombre: "Sofía Herrera",      empresa: "Horizonte Construction", segmento: "Potencial", riesgo: "Medio", score: 55, motivoPrincipal: "Inactividad 35 días. Sin ticket abierto.", accion: "Contacto proactivo + caso de éxito relevante", responsable: "Equipo Comercial A", impactoMensual: 24000, estado: "En progreso" },
  { id: "R005", nombre: "Diego Peralta",      empresa: "Textil Sur SA",         segmento: "Nuevo",    riesgo: "Medio", score: 48, motivoPrincipal: "Solo 2 órdenes desde inicio. NPS bajo.", accion: "Sesión de onboarding + soporte personalizado", responsable: "Customer Success", impactoMensual: 9000, estado: "En progreso" },
  { id: "R006", nombre: "Ana Castro",         empresa: "Don Pedro Wholesaler",   segmento: "Premium", riesgo: "Alto", score: 69, motivoPrincipal: "Contactó soporte sin resolución satisfactoria", accion: "Escalada urgente + crédito de servicio", responsable: "Customer Success", impactoMensual: 26000, estado: "Pendiente" },
  { id: "R007", nombre: "Roberto Medina",     empresa: "Andina Commercial",      segmento: "Potencial", riesgo: "Medio", score: 42, motivoPrincipal: "Menor frecuencia de compra últimas 6 semanas", accion: "Newsletter personalizado + cross-promo", responsable: "Marketing", impactoMensual: 18000, estado: "Recuperado" },
  { id: "R008", nombre: "Fernanda Torres",    empresa: "Northern Electro Mendoza", segmento: "Premium", riesgo: "Bajo", score: 18, motivoPrincipal: "Alta satisfacción, compras regulares", accion: "Programa VIP + invitación a evento exclusivo", responsable: "Equipo Comercial B", impactoMensual: 78000, estado: "Recuperado" },
];

export const retentionKPIs = {
  clientesEnRiesgo: 6,
  impactoMensualTotal: 195000,
  recuperadosEsteMes: 2,
  tasaRecuperacion: 33,
  ahorroPotencial: 58500,
  accionesPendientes: 3,
};

export const evolucionRetencion = [
  { mes: "Dic", churn: 8.4, recuperados: 12 },
  { mes: "Ene", churn: 7.9, recuperados: 15 },
  { mes: "Feb", churn: 6.8, recuperados: 18 },
  { mes: "Mar", churn: 5.9, recuperados: 22 },
  { mes: "Abr", churn: 5.2, recuperados: 24 },
  { mes: "May", churn: 4.6, recuperados: 28 },
];
