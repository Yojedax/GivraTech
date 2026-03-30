import { RetentionClient } from "@/types";

export const retentionClients: RetentionClient[] = [
  { id: "R001", nombre: "Carlos Mendoza",    empresa: "Northern Distribution", segmento: "Premium", riesgo: "High", score: 87, motivoPrincipal: "3 months without purchases / active competitor", accion: "Executive meeting + renewed proposal", responsable: "Commercial Team A", impactoMensual: 28000, estado: "In progress" },
  { id: "R002", nombre: "Laura Santillán",   empresa: "Las Pampas Freezer Plant", segmento: "Premium", riesgo: "High", score: 81, motivoPrincipal: "Unresolved service complaints (x2)", accion: "Escalation to management + recovery plan", responsable: "Commercial Team B", impactoMensual: 32000, estado: "Pending" },
  { id: "R003", nombre: "Martín Ruiz",        empresa: "Rivero Warehouses",      segmento: "Standard", riesgo: "High", score: 76, motivoPrincipal: "Order reduction -60% last 90 days", accion: "Reactivation campaign with 15% discount", responsable: "Marketing", impactoMensual: 8000, estado: "Pending" },
  { id: "R004", nombre: "Sofía Herrera",      empresa: "Horizonte Construction", segmento: "Potential", riesgo: "Medium", score: 55, motivoPrincipal: "Inactivity 35 days. No open ticket.", accion: "Proactive contact + relevant success case", responsable: "Commercial Team A", impactoMensual: 24000, estado: "In progress" },
  { id: "R005", nombre: "Diego Peralta",      empresa: "Textil Sur SA",         segmento: "New",    riesgo: "Medium", score: 48, motivoPrincipal: "Only 2 orders since start. Low NPS.", accion: "Onboarding session + personalized support", responsable: "Customer Success", impactoMensual: 9000, estado: "In progress" },
  { id: "R006", nombre: "Ana Castro",         empresa: "Don Pedro Wholesaler",   segmento: "Premium", riesgo: "High", score: 69, motivoPrincipal: "Contacted support without satisfactory resolution", accion: "Urgent escalation + service credit", responsable: "Customer Success", impactoMensual: 26000, estado: "Pending" },
  { id: "R007", nombre: "Roberto Medina",     empresa: "Andina Commercial",      segmento: "Potential", riesgo: "Medium", score: 42, motivoPrincipal: "Lower purchase frequency in last 6 weeks", accion: "Personalized newsletter + cross-promo", responsable: "Marketing", impactoMensual: 18000, estado: "Recovered" },
  { id: "R008", nombre: "Fernanda Torres",    empresa: "Northern Electro Mendoza", segmento: "Premium", riesgo: "Low", score: 18, motivoPrincipal: "High satisfaction, regular purchases", accion: "VIP program + exclusive event invitation", responsable: "Commercial Team B", impactoMensual: 78000, estado: "Recovered" },
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
