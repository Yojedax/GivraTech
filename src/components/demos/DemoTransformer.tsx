'use client'

import { useState } from 'react'
import { Globe, Sparkles, ArrowRight, Loader2 } from 'lucide-react'

interface TransformResult {
  original: string
  improved: string
  improvements: string[]
  useCases: { title: string; description: string; kpi: string }[]
  estimate: string
}

// Fallback responses by detected industry from URL
function generateFallback(url: string): TransformResult {
  const lower = url.toLowerCase()

  const isLogistica = lower.includes('logis') || lower.includes('logística') || lower.includes('transport') || lower.includes('envio') || lower.includes('envío') || lower.includes('distrib') || lower.includes('flota') || lower.includes('cargo')
  const isRetail = lower.includes('retail') || lower.includes('tienda') || lower.includes('shop') || lower.includes('store') || lower.includes('moda') || lower.includes('ropa')
  const isEcommerce = lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('market') || lower.includes('venta')
  const isRestaurant = lower.includes('restaurant') || lower.includes('gastro') || lower.includes('food') || lower.includes('comida') || lower.includes('menu')
  const isSalud = lower.includes('salud') || lower.includes('medic') || lower.includes('clinic') || lower.includes('health') || lower.includes('farma')

  if (isLogistica) {
    return {
      original: 'Empresa de logística y distribución con operaciones regionales. Actualmente gestiona rutas y flotas de manera manual o semiautomática, con visibilidad limitada del desempeño en tiempo real.',
      improved: 'Con GivraTech, tu operación logística tendría ruteo inteligente que reduce costos hasta 38%, paneles en tiempo real para monitorear flota y SLAs, y modelos predictivos que anticipan picos de demanda y fallos de entrega antes de que ocurran.',
      improvements: [
        'Optimización de rutas con algoritmos: -38% costo por entrega y +42% utilización de flota',
        'Panel operacional en tiempo real: visibilidad completa de flota, entregas y KPIs por zona',
        'Predicción de demanda: anticipa volúmenes semanales con precisión 85%+ para planificar recursos',
        'Alertas SLA automáticas: detecta entregas en riesgo antes de fallar y reasigna proactivamente',
      ],
      useCases: [
        { title: 'Optimización de Rutas', description: 'Algoritmos que minimizan distancia, tiempo y costo considerando ventanas de tiempo, capacidad de vehículos y restricciones de tráfico.', kpi: '-38% costo logístico, +42% utilización' },
        { title: 'Panel Operacional', description: 'Panel ejecutivo con KPIs de flota, entregas por zona, SLA en tiempo real y alertas automáticas para el equipo.', kpi: '100% visibilidad de operaciones en tiempo real' },
        { title: 'Predicción de Demanda', description: 'Modelo ML que predice volúmenes de entrega por zona y día, permitiendo planificación de flota y personal anticipada.', kpi: '+85% precisión en pronóstico semanal' },
        { title: 'Calidad de Direcciones', description: 'Normalización y geocodificación de base de direcciones para eliminar entregas fallidas por datos deficientes.', kpi: '-60% entregas fallidas por dirección incorrecta' },
      ],
      estimate: 'Para una empresa de logística de tamaño medio, la inversión inicial típica es USD 15,000–35,000 con ROI visible en los primeros 60-90 días de operación.',
    }
  }

  if (isRetail || isEcommerce) {
    return {
      original: 'Empresa retail o e-commerce con catálogo activo y base de clientes. Actualmente las campañas de marketing son genéricas y no hay segmentación basada en comportamiento de compra real.',
      improved: 'Con GivraTech, tendrías segmentación RFM automática que identifica tus mejores clientes y los en riesgo, campañas personalizadas con hasta 4x de conversión, y un sistema de alertas de churn temprano que protege tu ingresos.',
      improvements: [
        'Segmentación RFM automática: clasifica toda la base en segmentos accionables en tiempo real',
        'Campañas personalizadas por segmento: hasta 4x de conversión vs campañas genéricas',
        'Modelo de churn: identifica clientes en riesgo 30 días antes de que se vayan',
        'Motor de recomendación: productos sugeridos por perfil, +22% en ticket promedio',
      ],
      useCases: [
        { title: 'Segmentación RFM', description: 'Clasificación automática de clientes por Recencia, Frecuencia y Valor Monetario para acciones comerciales precisas.', kpi: 'Hasta 4x conversión en campañas segmentadas' },
        { title: 'Predicción de Churn', description: 'Modelo predictivo que identifica clientes en riesgo y genera acciones recomendadas por perfil.', kpi: '-32% tasa de abandono en primeros 3 meses' },
        { title: 'Motor de Recomendación', description: 'Sugerencias personalizadas de productos basadas en historial y perfil del cliente, integradas en sitio o email.', kpi: '+22% ticket promedio por sesión' },
        { title: 'Panel de Marketing', description: 'Panel centralizado con LTV, CAC, tasa de retención y desempeño de campañas por segmento.', kpi: 'Toma de decisiones basada en datos, no intuición' },
      ],
      estimate: 'Para retail o e-commerce, la inversión inicial típica es USD 12,000–28,000 con primeros resultados de campaña medibles en 4–6 semanas.',
    }
  }

  if (isRestaurant) {
    return {
      original: 'Negocio de alimentos con operaciones presenciales y/o de entrega. Gestión de stock, predicción de demanda y lealtad del cliente se hacen reactivamente y manualmente.',
      improved: 'Con GivraTech, tendrías predicción de demanda por día y hora para reducir desperdicio, segmentación de clientes frecuentes para programas de lealtad precisos, y paneles operacionales mostrando rentabilidad por producto y ubicación.',
      improvements: [
        'Predicción diaria de demanda: reduce desperdicio hasta 30% con compras más precisas',
        'Segmentación de clientes frecuentes: identifica mejores clientes y actúa sobre ellos',
        'Panel de rentabilidad: márgenes por producto, horas pico y desempeño por ubicación',
        'Análisis de reseñas y feedback: procesamiento automático para detectar patrones de satisfacción',
      ],
      useCases: [
        { title: 'Pronóstico de Demanda', description: 'Modelo predictivo que anticipa cobertura y órdenes por día, hora y evento para optimizar stock y personal.', kpi: '-30% desperdicio, -15% costo de compras' },
        { title: 'Lealtad Inteligente', description: 'Segmentación de base de clientes y campañas personalizadas para aumentar frecuencia de visitas.', kpi: '+25% frecuencia de visitas en clientes activos' },
        { title: 'Panel Operacional', description: 'Panel en tiempo real con ventas, márgenes, ocupación y KPIs clave por ubicación y período.', kpi: 'Visibilidad completa del negocio en un lugar' },
        { title: 'Análisis de Feedback', description: 'Procesamiento automático de reseñas y encuestas para detectar problemas antes de que escalen.', kpi: '+18% NPS promedio en primeros 60 días' },
      ],
      estimate: 'Para el sector de alimentos, la inversión inicial típica es USD 8,000–20,000 con resultados operacionales visibles en las primeras 4 semanas.',
    }
  }

  if (isSalud) {
    return {
      original: 'Organización de salud con operaciones clínicas y/o administrativas. Gestión de citas, seguimiento de pacientes y procesos de reportes se hacen manualmente o con sistemas desconectados.',
      improved: 'Con GivraTech, tendrías modelos predictivos para anticipar inasistencias y optimizar agendas, paneles clínico-administrativos integrados, y sistemas de alertas que mejoran el seguimiento de pacientes y reducen no-shows.',
      improvements: [
        'Predicción de inasistencias: reduce no-shows hasta 35% con recordatorios inteligentes',
        'Optimización de agenda: maximiza ocupación de consultorio y profesional',
        'Panel clínico-administrativo: KPIs en tiempo real para atención, tiempos y rentabilidad',
        'Segmentación de pacientes: identifica perfiles de riesgo y prioriza seguimiento activo',
      ],
      useCases: [
        { title: 'Predicción de Inasistencias', description: 'Modelo que predice qué pacientes probablemente falten a citas y activa recordatorios personalizados.', kpi: '-35% tasa de inasistencias a citas' },
        { title: 'Optimización de Agenda', description: 'Asignación inteligente de citas que maximiza ocupación profesional y reduce tiempos de espera.', kpi: '+28% ocupación efectiva de agenda' },
        { title: 'Panel Integrado', description: 'Panel unificado con métricas de atención, tiempos, satisfacción y rentabilidad por especialidad.', kpi: '40% reducción en tiempo de reportes manuales' },
        { title: 'Segmentación de Pacientes', description: 'Clasificación automática por frecuencia, riesgo clínico y valor para acciones de seguimiento priorizado.', kpi: '+20% en adherencia a tratamientos crónicos' },
      ],
      estimate: 'Para organizaciones de salud, la inversión inicial típica es USD 18,000–40,000 con primeros impactos operacionales medibles en 6–10 semanas.',
    }
  }

  // Generic fallback
  return {
    original: 'Empresa con operaciones digitales y base de datos activa. Actualmente los procesos de análisis, reportería y toma de decisiones se hacen manualmente, sin aprovechar el potencial predictivo de la información disponible.',
    improved: 'Con GivraTech, tu empresa tendría paneles ejecutivos en tiempo real, modelos predictivos adaptados a tus KPIs clave, y automatizaciones que liberen tu equipo de tareas repetitivas para enfocarse en trabajo generador de valor.',
    improvements: [
      'Panel ejecutivo centralizado: todos los KPIs clave en un lugar, actualizado en tiempo real',
      'Modelo predictivo personalizado: anticipa comportamiento de clientes, operaciones o demanda',
      'Automatización de reportería: elimina tiempo manual en consolidación de datos y generación de reportes',
      'Pipeline de calidad de datos: limpia y estructura tu base de datos para que cada decisión se base en datos confiables',
    ],
    useCases: [
      { title: 'Panel Ejecutivo', description: 'Panel centralizado con los KPIs empresariales más relevantes, actualizado automáticamente desde fuentes de datos existentes.', kpi: '-70% tiempo en reportes manuales' },
      { title: 'Modelo Predictivo Principal', description: 'Algoritmo personalizado que anticipa tu KPI empresarial más crítico: churn, demanda, riesgo operacional o conversión.', kpi: '+25–40% precisión vs métodos actuales' },
      { title: 'Automatización de Procesos', description: 'Identificación y automatización de los 3 procesos manuales con mayor impacto: reportes, alertas y flujos de datos.', kpi: '-60% tiempo operacional en tareas repetitivas' },
      { title: 'Fundación de Calidad de Datos', description: 'Pipeline para limpieza, normalización e integración de fuentes de datos para garantizar calidad en cada análisis.', kpi: 'Base de datos lista para IA en 4–6 semanas' },
    ],
    estimate: 'Para empresas de tamaño medio, la inversión inicial típica es USD 10,000–25,000 con primer entregable de impacto visible en las primeras 4 semanas del proyecto.',
  }
}

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str.startsWith('http') ? str : `https://${str}`)
    return url.hostname.includes('.')
  } catch {
    return false
  }
}

export default function DemoTransformer() {
  const [url, setUrl]         = useState('')
  const [result, setResult]   = useState<TransformResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [tab, setTab]         = useState<'vision' | 'usecases'>('vision')
  const [urlError, setUrlError] = useState('')

  const handleTransform = async () => {
    const trimmed = url.trim()
    if (!trimmed) return

    if (!isValidUrl(trimmed)) {
      setUrlError('Ingresa una URL válida, por ejemplo: https://www.tudominio.com')
      return
    }

    setUrlError('')
    setLoading(true)
    setError('')
    setResult(null)

    // Try the real API first; fall back to frontend simulation if unavailable
    try {
      const res = await fetch('/api/transform-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmed }),
      })
      if (!res.ok) throw new Error('API unavailable')
      const data = await res.json()
      setResult(data)
      setTab('vision')
    } catch {
      // Simulate realistic delay then show frontend-generated response
      await new Promise((r) => setTimeout(r, 2200))
      setResult(generateFallback(trimmed))
      setTab('vision')
    } finally {
      setLoading(false)
    }
  }

  const applyExample = (ex: { url: string }) => {
    setUrl(ex.url)
    setUrlError('')
  }

  const exampleSites = [
    { label: 'Logística / Distribución', url: 'https://www.logistics-example.com' },
    { label: 'Retail / Tienda Online',    url: 'https://www.store-example.com' },
    { label: 'E-Commerce',               url: 'https://www.ecommerce-example.com' },
  ]

  return (
    <div className="space-y-6">
      {/* Explanation */}
      <div className="p-5 rounded-xl border-l-4" style={{ background: 'rgba(0,212,255,0.04)', borderColor: '#00d4ff' }}>
        <div className="flex items-start gap-3">
          <Sparkles size={18} style={{ color: '#00d4ff', flexShrink: 0, marginTop: 2 }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Transformador de Sitios Web con IA</div>
            <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
              Ingresa la URL de tu sitio web actual. Nuestro IA analiza tu industria y procesos de negocio para generar una visión concreta de cómo se vería tu empresa con soluciones de datos e IA.
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="card p-5">
        <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Analiza tu sitio web</div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setUrlError('') }}
              onKeyDown={(e) => e.key === 'Enter' && handleTransform()}
              placeholder="https://www.tudominio.com"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-colors"
              style={{
                borderColor: urlError ? '#f87171' : 'var(--border-light)',
                background: 'var(--surface-0)',
                color: 'var(--text-primary)',
              }}
              onFocus={(e) => { if (!urlError) e.target.style.borderColor = '#00d4ff' }}
              onBlur={(e) => { if (!urlError) e.target.style.borderColor = 'var(--border-light)' }}
            />
          </div>
          <button
            onClick={handleTransform}
            disabled={loading || !url.trim()}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            style={{ background: '#00d4ff', color: 'var(--surface-0)' }}
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
            {loading ? 'Analizando…' : 'Transformar con IA'}
          </button>
        </div>

        {urlError && (
          <p className="text-xs mt-2" style={{ color: '#f87171' }}>{urlError}</p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest mr-1" style={{ color: 'var(--text-secondary)' }}>Ejemplos:</span>
          {exampleSites.map((ex) => (
            <button
              key={ex.url}
              onClick={() => applyExample(ex)}
              className="text-xs px-2 py-0.5 rounded hover:opacity-80 transition-opacity"
              style={{ color: '#00d4ff' }}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="card p-10 text-center">
          <Loader2 size={28} className="animate-spin mx-auto mb-3" style={{ color: '#00d4ff' }} />
          <div className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Analizando tu sitio…</div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Identificando industria, procesos y oportunidades de IA</div>
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div className="space-y-5">
          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl w-fit" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
            {[
              { key: 'vision',    label: 'Visión Transformada' },
              { key: 'usecases', label: 'Casos de Uso' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
                style={tab === t.key
                  ? { background: 'var(--surface-2)', color: '#00d4ff' }
                  : { color: 'var(--text-secondary)' }
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'vision' && (
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={16} style={{ color: '#00d4ff' }} />
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Tu empresa con datos e IA</div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{result.improved}</p>
                <div className="space-y-2">
                  {result.improvements.map((imp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: '#00d4ff', color: 'var(--surface-0)' }}>
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{imp}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,153,204,0.1) 100%)', border: '1px solid var(--border-neon)' }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--neon)' }}>
                  Estimación de Inversión
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{result.estimate}</p>
              </div>
            </div>
          )}

          {tab === 'usecases' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.useCases.map((uc, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: 'rgba(0,212,255,0.07)', color: '#00d4ff' }}>
                      UC{String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{uc.description}</p>
                  <div className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,212,255,0.05)', color: '#00d4ff' }}>
                    📈 {uc.kpi}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>¿Quieres ver esto implementado en tu empresa?</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Una reunión de 30 minutos es suficiente para validar el impacto.</div>
            </div>
            <a href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-neon" style={{ background: '#00d4ff', color: 'var(--surface-0)' }}>
              Agendar una reunión <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
