import { GeoResult } from "@/types";

export const geoExamples: GeoResult[] = [
  {
    inputRaw: "Av. Corrientes 1234, Cap Federal",
    normalizada: "Av. Corrientes 1234, CABA, C1043AAZ",
    lat: -34.6037, lng: -58.3816,
    score: 97, confianza: "Alta", fuente: "Google Maps API",
    localidad: "Ciudad Autónoma de Buenos Aires", provincia: "CABA",
  },
  {
    inputRaw: "San Martin 456 piso 3 dpto B, bsas",
    normalizada: "Av. San Martín 456, Piso 3 Dpto. B, CABA, C1416EAA",
    lat: -34.6180, lng: -58.4710,
    score: 88, confianza: "Alta", fuente: "HERE Maps",
    localidad: "Buenos Aires", provincia: "CABA",
  },
  {
    inputRaw: "Los Aromos 890, Rosario",
    normalizada: "Calle Los Aromos 890, Rosario, S2000",
    lat: -32.9587, lng: -60.6930,
    score: 74, confianza: "Media", fuente: "OpenStreetMap",
    problema: "Nombre de calle con múltiples coincidencias en Rosario",
    sugerencia: "Confirmar barrio: Echesortu, Tablada o Alberdi?",
    localidad: "Rosario", provincia: "Santa Fe",
  },
  {
    inputRaw: "calle falsa 123, mendoza capital",
    normalizada: "",
    lat: 0, lng: 0,
    score: 18, confianza: "Baja", fuente: "—",
    problema: "Dirección no encontrada en ninguna fuente consultada",
    sugerencia: "Solicitar reconfirmación del cliente. Posible error de carga.",
    localidad: "Mendoza", provincia: "Mendoza",
  },
  {
    inputRaw: "Belgrano 200, Tucumán",
    normalizada: "Calle Belgrano 200, San Miguel de Tucumán, T4000",
    lat: -26.8241, lng: -65.2226,
    score: 91, confianza: "Alta", fuente: "Google Maps API",
    localidad: "San Miguel de Tucumán", provincia: "Tucumán",
  },
  {
    inputRaw: "9 de Julio y Sarmiento, Córdoba",
    normalizada: "Esquina 9 de Julio y Gral. Sarmiento, Córdoba, X5000",
    lat: -31.4167, lng: -64.1833,
    score: 82, confianza: "Media", fuente: "HERE Maps",
    problema: "Intersección válida pero sin número de calle",
    sugerencia: "Asignar número de calle para mayor precisión",
    localidad: "Córdoba", provincia: "Córdoba",
  },
];

export const auditoriaSummary = {
  total: 12847,
  alta: 8241,
  media: 2914,
  baja: 1692,
  pctAlta: 64.2,
  pctMedia: 22.7,
  pctBaja: 13.1,
  ahorroEstimado: "$ 2.4M en entregas fallidas evitadas",
};
