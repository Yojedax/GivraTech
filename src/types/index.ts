// ── Services ──────────────────────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  title: string;
  problem: string;
  solution: string;
  deliverables: string[];
  impact: string;
  tags: string[];
}

// ── RFM / Marketing Demo ──────────────────────────────────────────────
export interface RFMClient {
  id: string;
  nombre: string;
  segmento: RFMSegment;
  recency: number;
  frequency: number;
  monetary: number;
  churnProb: number;
  ultimaCompra: string;
  canal: Canal;
  accionSugerida: string;
  impactoPotencial: number;
}
export type RFMSegment = "Champions" | "Loyal" | "At Risk" | "Lost" | "New" | "Potential";
export type Canal = "eCommerce" | "Store" | "App" | "Phone";

export interface SegmentStat {
  segmento: RFMSegment;
  clientes: number;
  revenue: number;
  churnAvg: number;
  color: string;
}

export interface EvolucionMes {
  mes: string;
  Champions: number;
  Loyal: number;
  "At Risk": number;
  Lost: number;
  New: number;
  Potential: number;
}

// ── Geo Demo ──────────────────────────────────────────────────────────
export interface GeoResult {
  inputRaw: string;
  normalizada: string;
  lat: number;
  lng: number;
  score: number;
  confianza: "High" | "Medium" | "Low";
  fuente: string;
  problema?: string;
  sugerencia?: string;
  localidad: string;
  provincia: string;
}

// ── Logistics Demo ────────────────────────────────────────────────────
export interface Punto {
  id: string;
  nombre: string;
  lat: number;
  lng: number;
  tipo: "deposito" | "cliente";
  demanda?: number;
}

export interface Ruta {
  id: string;
  vehiculo: string;
  puntos: string[];
  distancia: number;
  tiempo: number;
  costo: number;
  ocupacion: number;
}

export interface LogisticsScenario {
  label: string;
  vehiculos: number;
  distanciaTotal: number;
  costoTotal: number;
  tiempoPromedio: number;
  ocupacionPromedio: number;
  rutas: Ruta[];
}

// ── Retention Demo ────────────────────────────────────────────────────
export interface RetentionClient {
  id: string;
  nombre: string;
  empresa: string;
  segmento: string;
  riesgo: "High" | "Medium" | "Low";
  score: number;
  motivoPrincipal: string;
  accion: string;
  responsable: string;
  impactoMensual: number;
  estado: "Pending" | "In progress" | "Recovered" | "Lost";
}
