import { LogisticsScenario, Punto } from "@/types";

export const puntos: Punto[] = [
  { id: "D1", nombre: "Central Warehouse", lat: -34.6037, lng: -58.4816, tipo: "deposito" },
  { id: "C1", nombre: "Customer Palermo", lat: -34.5886, lng: -58.4320, tipo: "cliente", demanda: 12 },
  { id: "C2", nombre: "Customer Belgrano", lat: -34.5608, lng: -58.4588, tipo: "cliente", demanda: 8 },
  { id: "C3", nombre: "Customer Caballito", lat: -34.6196, lng: -58.4456, tipo: "cliente", demanda: 15 },
  { id: "C4", nombre: "Customer Flores", lat: -34.6364, lng: -58.4632, tipo: "cliente", demanda: 10 },
  { id: "C5", nombre: "Customer Mataderos", lat: -34.6514, lng: -58.5108, tipo: "cliente", demanda: 7 },
  { id: "C6", nombre: "Customer Liniers", lat: -34.6404, lng: -58.5226, tipo: "cliente", demanda: 14 },
  { id: "C7", nombre: "Customer San Telmo", lat: -34.6215, lng: -58.3721, tipo: "cliente", demanda: 9 },
  { id: "C8", nombre: "Customer La Boca", lat: -34.6345, lng: -58.3628, tipo: "cliente", demanda: 11 },
];

export const scenarioAntes: LogisticsScenario = {
  label: "Before optimization",
  vehiculos: 5,
  distanciaTotal: 287,
  costoTotal: 48200,
  tiempoPromedio: 4.8,
  ocupacionPromedio: 54,
  rutas: [
    { id: "R1", vehiculo: "Truck 01", puntos: ["D1","C1","C7","C8","D1"], distancia: 64, tiempo: 5.2, costo: 10800, ocupacion: 48 },
    { id: "R2", vehiculo: "Truck 02", puntos: ["D1","C2","C3","D1"],       distancia: 58, tiempo: 4.6, costo: 9400,  ocupacion: 57 },
    { id: "R3", vehiculo: "Truck 03", puntos: ["D1","C4","C5","D1"],       distancia: 72, tiempo: 5.8, costo: 12100, ocupacion: 43 },
    { id: "R4", vehiculo: "Truck 04", puntos: ["D1","C6","D1"],            distancia: 54, tiempo: 4.3, costo: 9100,  ocupacion: 35 },
    { id: "R5", vehiculo: "Truck 05", puntos: ["D1","C3","D1"],            distancia: 39, tiempo: 4.1, costo: 6800,  ocupacion: 38 },
  ],
};

export const scenarioDespues: LogisticsScenario = {
  label: "After optimization",
  vehiculos: 3,
  distanciaTotal: 198,
  costoTotal: 33100,
  tiempoPromedio: 3.4,
  ocupacionPromedio: 81,
  rutas: [
    { id: "R1", vehiculo: "Truck 01", puntos: ["D1","C1","C2","C7","C8","D1"], distancia: 71, tiempo: 3.8, costo: 11800, ocupacion: 88 },
    { id: "R2", vehiculo: "Truck 02", puntos: ["D1","C3","C4","C5","D1"],       distancia: 74, tiempo: 3.6, costo: 12200, ocupacion: 80 },
    { id: "R3", vehiculo: "Truck 03", puntos: ["D1","C6","D1"],                 distancia: 53, tiempo: 2.8, costo: 9100,  ocupacion: 76 },
  ],
};

export const kpiComparacion = [
  { kpi: "Vehicles used", antes: 5, despues: 3, unidad: "", mejora: "-40%" },
  { kpi: "Total distance (km)", antes: 287, despues: 198, unidad: "km", mejora: "-31%" },
  { kpi: "Daily operational cost", antes: 48200, despues: 33100, unidad: "$", mejora: "-31%" },
  { kpi: "Average delivery time", antes: 4.8, despues: 3.4, unidad: "hrs", mejora: "-29%" },
  { kpi: "Average occupancy", antes: 54, despues: 81, unidad: "%", mejora: "+50%" },
];
