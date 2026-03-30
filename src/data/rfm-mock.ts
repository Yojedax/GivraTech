import { RFMClient, SegmentStat, EvolucionMes } from "@/types";

export const rfmClients: RFMClient[] = [
  { id: "C001", nombre: "Valley Supermarkets", segmento: "Champions", recency: 3, frequency: 24, monetary: 182400, churnProb: 0.04, ultimaCompra: "2024-05-28", canal: "eCommerce", accionSugerida: "Exclusive VIP program + cross-sell", impactoPotencial: 45000 },
  { id: "C002", nombre: "Northern Distribution SA", segmento: "At Risk", recency: 62, frequency: 8, monetary: 94300, churnProb: 0.71, ultimaCompra: "2024-03-27", canal: "Branch", accionSugerida: "Urgent contact: contract renewal proposal", impactoPotencial: 28000 },
  { id: "C003", nombre: "Retail World South", segmento: "Loyal", recency: 14, frequency: 18, monetary: 137800, churnProb: 0.12, ultimaCompra: "2024-05-15", canal: "App", accionSugerida: "Product line expansion offer", impactoPotencial: 22000 },
  { id: "C004", nombre: "Rivero Warehouses", segmento: "Lost", recency: 180, frequency: 3, monetary: 28700, churnProb: 0.93, ultimaCompra: "2023-11-28", canal: "Phone", accionSugerida: "Reactivation campaign with special discount", impactoPotencial: 8000 },
  { id: "C005", nombre: "Pampa Logistics SRL", segmento: "Champions", recency: 7, frequency: 31, monetary: 245600, churnProb: 0.03, ultimaCompra: "2024-05-22", canal: "eCommerce", accionSugerida: "Referral program + volume benefit", impactoPotencial: 60000 },
  { id: "C006", nombre: "Andina Commercial", segmento: "Potential", recency: 21, frequency: 5, monetary: 41200, churnProb: 0.28, ultimaCompra: "2024-05-08", canal: "eCommerce", accionSugerida: "Nurturing: use case sending + personalized demo", impactoPotencial: 18000 },
  { id: "C007", nombre: "Las Pampas Freezer Plant", segmento: "At Risk", recency: 45, frequency: 12, monetary: 112000, churnProb: 0.58, ultimaCompra: "2024-04-14", canal: "Branch", accionSugerida: "Executive meeting: commercial agreement review", impactoPotencial: 32000 },
  { id: "C008", nombre: "Farmacity Regional", segmento: "Loyal", recency: 9, frequency: 22, monetary: 198700, churnProb: 0.09, ultimaCompra: "2024-05-20", canal: "App", accionSugerida: "Loyalty program + satisfaction survey", impactoPotencial: 35000 },
  { id: "C009", nombre: "Textil Sur SA", segmento: "New", recency: 18, frequency: 2, monetary: 15400, churnProb: 0.42, ultimaCompra: "2024-05-11", canal: "eCommerce", accionSugerida: "Personalized onboarding + getting started guide", impactoPotencial: 9000 },
  { id: "C010", nombre: "Horizonte Construction", segmento: "Potential", recency: 35, frequency: 6, monetary: 67800, churnProb: 0.35, ultimaCompra: "2024-04-24", canal: "Phone", accionSugerida: "Relevant case study + pilot offer", impactoPotencial: 24000 },
  { id: "C011", nombre: "Don Pedro Wholesaler", segmento: "At Risk", recency: 55, frequency: 9, monetary: 88500, churnProb: 0.64, ultimaCompra: "2024-04-04", canal: "Branch", accionSugerida: "Rescue call with improved value proposal", impactoPotencial: 26000 },
  { id: "C012", nombre: "Northern Electro Mendoza", segmento: "Champions", recency: 5, frequency: 28, monetary: 312400, churnProb: 0.02, ultimaCompra: "2024-05-24", canal: "App", accionSugerida: "Early access to new products + dedicated executive", impactoPotencial: 78000 },
];

export const segmentStats: SegmentStat[] = [
  { segmento: "Champions",   clientes: 3, revenue: 740400, churnAvg: 0.03, color: "#166534" },
  { segmento: "Loyal",      clientes: 2, revenue: 336500, churnAvg: 0.10, color: "#1d4ed8" },
  { segmento: "Potential", clientes: 2, revenue: 109000, churnAvg: 0.31, color: "#7c3aed" },
  { segmento: "At Risk",   clientes: 3, revenue: 294800, churnAvg: 0.64, color: "#b45309" },
  { segmento: "New",      clientes: 1, revenue: 15400,  churnAvg: 0.42, color: "#0891b2" },
  { segmento: "Lost",    clientes: 1, revenue: 28700,  churnAvg: 0.93, color: "#dc2626" },
];

export const evolucion: EvolucionMes[] = [
  { mes: "Nov", Champions: 18, Loyal: 32, "At Risk": 28, Lost: 12, New: 8, Potential: 22 },
  { mes: "Dec", Champions: 22, Loyal: 34, "At Risk": 24, Lost: 10, New: 14, Potential: 19 },
  { mes: "Jan", Champions: 25, Loyal: 31, "At Risk": 26, Lost: 11, New: 16, Potential: 21 },
  { mes: "Feb", Champions: 28, Loyal: 33, "At Risk": 22, Lost: 9,  New: 12, Potential: 24 },
  { mes: "Mar", Champions: 31, Loyal: 36, "At Risk": 20, Lost: 8,  New: 10, Potential: 26 },
  { mes: "Apr", Champions: 29, Loyal: 38, "At Risk": 23, Lost: 10, New: 13, Potential: 28 },
  { mes: "May", Champions: 33, Loyal: 40, "At Risk": 18, Lost: 7,  New: 11, Potential: 30 },
];
