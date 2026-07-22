import { RFMClient, SegmentStat, EvolucionMes } from "@/types";

export const rfmClients: RFMClient[] = [
  { id: "C001", nombre: "Valley Supermarkets", segmento: "Campeones", recency: 3, frequency: 24, monetary: 182400, churnProb: 0.04, ultimaCompra: "2024-05-28", canal: "eCommerce", accionSugerida: "Programa VIP exclusivo + cross-sell", impactoPotencial: 45000 },
  { id: "C002", nombre: "Northern Distribution SA", segmento: "En Riesgo", recency: 62, frequency: 8, monetary: 94300, churnProb: 0.71, ultimaCompra: "2024-03-27", canal: "Sucursal", accionSugerida: "Contacto urgente: propuesta de renovación de contrato", impactoPotencial: 28000 },
  { id: "C003", nombre: "Retail World South", segmento: "Leales", recency: 14, frequency: 18, monetary: 137800, churnProb: 0.12, ultimaCompra: "2024-05-15", canal: "App", accionSugerida: "Oferta de expansión de línea de productos", impactoPotencial: 22000 },
  { id: "C004", nombre: "Rivero Warehouses", segmento: "Perdidos", recency: 180, frequency: 3, monetary: 28700, churnProb: 0.93, ultimaCompra: "2023-11-28", canal: "Teléfono", accionSugerida: "Campaña de reactivación con descuento especial", impactoPotencial: 8000 },
  { id: "C005", nombre: "Pampa Logistics SRL", segmento: "Campeones", recency: 7, frequency: 31, monetary: 245600, churnProb: 0.03, ultimaCompra: "2024-05-22", canal: "eCommerce", accionSugerida: "Programa de referencia + beneficio por volumen", impactoPotencial: 60000 },
  { id: "C006", nombre: "Andina Commercial", segmento: "Potencial", recency: 21, frequency: 5, monetary: 41200, churnProb: 0.28, ultimaCompra: "2024-05-08", canal: "eCommerce", accionSugerida: "Nurturing: envío de casos de uso + demo personalizado", impactoPotencial: 18000 },
  { id: "C007", nombre: "Las Pampas Freezer Plant", segmento: "En Riesgo", recency: 45, frequency: 12, monetary: 112000, churnProb: 0.58, ultimaCompra: "2024-04-14", canal: "Sucursal", accionSugerida: "Reunión ejecutiva: revisión de acuerdo comercial", impactoPotencial: 32000 },
  { id: "C008", nombre: "Farmacity Regional", segmento: "Leales", recency: 9, frequency: 22, monetary: 198700, churnProb: 0.09, ultimaCompra: "2024-05-20", canal: "App", accionSugerida: "Programa de lealtad + encuesta de satisfacción", impactoPotencial: 35000 },
  { id: "C009", nombre: "Textil Sur SA", segmento: "Nuevo", recency: 18, frequency: 2, monetary: 15400, churnProb: 0.42, ultimaCompra: "2024-05-11", canal: "eCommerce", accionSugerida: "Onboarding personalizado + guía de inicio", impactoPotencial: 9000 },
  { id: "C010", nombre: "Horizonte Construction", segmento: "Potencial", recency: 35, frequency: 6, monetary: 67800, churnProb: 0.35, ultimaCompra: "2024-04-24", canal: "Teléfono", accionSugerida: "Caso de estudio relevante + oferta piloto", impactoPotencial: 24000 },
  { id: "C011", nombre: "Don Pedro Wholesaler", segmento: "En Riesgo", recency: 55, frequency: 9, monetary: 88500, churnProb: 0.64, ultimaCompra: "2024-04-04", canal: "Sucursal", accionSugerida: "Llamada de rescate con propuesta de valor mejorada", impactoPotencial: 26000 },
  { id: "C012", nombre: "Northern Electro Mendoza", segmento: "Campeones", recency: 5, frequency: 28, monetary: 312400, churnProb: 0.02, ultimaCompra: "2024-05-24", canal: "App", accionSugerida: "Acceso anticipado a nuevos productos + ejecutivo dedicado", impactoPotencial: 78000 },
];

export const segmentStats: SegmentStat[] = [
  { segmento: "Campeones",   clientes: 3, revenue: 740400, churnAvg: 0.03, color: "#166534" },
  { segmento: "Leales",      clientes: 2, revenue: 336500, churnAvg: 0.10, color: "#1d4ed8" },
  { segmento: "Potencial", clientes: 2, revenue: 109000, churnAvg: 0.31, color: "#7c3aed" },
  { segmento: "En Riesgo",   clientes: 3, revenue: 294800, churnAvg: 0.64, color: "#b45309" },
  { segmento: "Nuevo",      clientes: 1, revenue: 15400,  churnAvg: 0.42, color: "#0891b2" },
  { segmento: "Perdidos",    clientes: 1, revenue: 28700,  churnAvg: 0.93, color: "#dc2626" },
];

export const evolucion: EvolucionMes[] = [
  { mes: "Nov", Campeones: 18, Leales: 32, "En Riesgo": 28, Perdidos: 12, Nuevo: 8, Potencial: 22 },
  { mes: "Dic", Campeones: 22, Leales: 34, "En Riesgo": 24, Perdidos: 10, Nuevo: 14, Potencial: 19 },
  { mes: "Ene", Campeones: 25, Leales: 31, "En Riesgo": 26, Perdidos: 11, Nuevo: 16, Potencial: 21 },
  { mes: "Feb", Campeones: 28, Leales: 33, "En Riesgo": 22, Perdidos: 9,  Nuevo: 12, Potencial: 24 },
  { mes: "Mar", Campeones: 31, Leales: 36, "En Riesgo": 20, Perdidos: 8,  Nuevo: 10, Potencial: 26 },
  { mes: "Abr", Campeones: 29, Leales: 38, "En Riesgo": 23, Perdidos: 10, Nuevo: 13, Potencial: 28 },
  { mes: "May", Campeones: 33, Leales: 40, "En Riesgo": 18, Perdidos: 7,  Nuevo: 11, Potencial: 30 },
];
