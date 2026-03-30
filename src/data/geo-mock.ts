import { GeoResult } from "@/types";

export const geoExamples: GeoResult[] = [
  {
    inputRaw: "Av. Corrientes 1234, Cap Federal",
    normalizada: "Av. Corrientes 1234, CABA, C1043AAZ",
    lat: -34.6037, lng: -58.3816,
    score: 97, confianza: "High", fuente: "Google Maps API",
    localidad: "Autonomous City of Buenos Aires", provincia: "CABA",
  },
  {
    inputRaw: "San Martin 456 piso 3 dpto B, bsas",
    normalizada: "Av. San Martín 456, Floor 3 Apt. B, CABA, C1416EAA",
    lat: -34.6180, lng: -58.4710,
    score: 88, confianza: "High", fuente: "HERE Maps",
    localidad: "Buenos Aires", provincia: "CABA",
  },
  {
    inputRaw: "Los Aromos 890, Rosario",
    normalizada: "Street Los Aromos 890, Rosario, S2000",
    lat: -32.9587, lng: -60.6930,
    score: 74, confianza: "Medium", fuente: "OpenStreetMap",
    problema: "Street name with multiple matches in Rosario",
    sugerencia: "Confirm neighborhood: Echesortu, Tablada or Alberdi?",
    localidad: "Rosario", provincia: "Santa Fe",
  },
  {
    inputRaw: "calle falsa 123, mendoza capital",
    normalizada: "",
    lat: 0, lng: 0,
    score: 18, confianza: "Low", fuente: "—",
    problema: "Address not found in any consulted source",
    sugerencia: "Request re-confirmation from customer. Possible loading error.",
    localidad: "Mendoza", provincia: "Mendoza",
  },
  {
    inputRaw: "Belgrano 200, Tucumán",
    normalizada: "Street Belgrano 200, San Miguel de Tucumán, T4000",
    lat: -26.8241, lng: -65.2226,
    score: 91, confianza: "High", fuente: "Google Maps API",
    localidad: "San Miguel de Tucumán", provincia: "Tucumán",
  },
  {
    inputRaw: "9 de Julio y Sarmiento, Córdoba",
    normalizada: "Corner 9 de Julio and Gral. Sarmiento, Córdoba, X5000",
    lat: -31.4167, lng: -64.1833,
    score: 82, confianza: "Medium", fuente: "HERE Maps",
    problema: "Valid intersection but without street number",
    sugerencia: "Assign street number for better accuracy",
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
  ahorroEstimado: "$ 2.4M in avoided failed deliveries",
};
