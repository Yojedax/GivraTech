'use client'

import { useState } from 'react'
import DemoRFM from '@/components/demos/DemoRFM'
import DemoGeo from '@/components/demos/DemoGeo'
import DemoLogistics from '@/components/demos/DemoLogistics'
import DemoRetention from '@/components/demos/DemoRetention'
import DemoTransformer from '@/components/demos/DemoTransformer'
import { TrendingUp, MapPin, Truck, Users, Sparkles } from 'lucide-react'

const demos = [
  {
    id: 'rfm',
    icon: TrendingUp,
    title: 'Marketing y RFM',
    subtitle: 'Segmentación y churn',
    problem: 'Campañas genéricas que no convierten y clientes que se van sin aviso.',
    solution: 'Segmentación RFM automática con scores de propensión y acciones recomendadas por cliente.',
    value: 'Hasta 4x conversión y -32% tasa de churn.',
  },
  {
    id: 'geo',
    icon: MapPin,
    title: 'Geolocalización',
    subtitle: 'Calidad de direcciones',
    problem: 'Bases de datos de direcciones sucias que causan entregas fallidas y costos ocultos.',
    solution: 'Normalización, validación y geocodificación con score de confianza por registro.',
    value: 'Hasta 94% validación. -60% en entregas fallidas.',
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logística',
    subtitle: 'Optimización de rutas',
    problem: 'Rutas manuales con vehículos subutilizados y costos logísticos fuera de control.',
    solution: 'Algoritmos de ruteo que minimizan distancia, tiempo y costo respetando restricciones operacionales.',
    value: '-38% en costos logísticos. +42% en utilización de flota.',
  },
  {
    id: 'retention',
    icon: Users,
    title: 'Retención',
    subtitle: 'Acciones comerciales',
    problem: 'Clientes estratégicos que disminuyen uso sin que el equipo lo note hasta que se van.',
    solution: 'Monitoreo de señales de riesgo con acciones sugeridas por cliente y dashboard ejecutivo.',
    value: 'Alertas tempranas. Recuperación del 70% de ingresos en riesgo.',
  },
  {
    id: 'transformer',
    icon: Sparkles,
    title: 'AI Transformer',
    subtitle: 'Tu empresa con IA',
    problem: '¿Cómo se vería tu empresa si realmente implementaras datos e IA?',
    solution: 'Ingresa tu URL del sitio web y nuestra IA genera una visión concreta de la transformación posible.',
    value: 'Visión personalizada + casos de uso + estimación de inversión.',
    highlight: true,
  },
]

export default function DemosPage() {
  const [activeDemo, setActiveDemo] = useState('rfm')
  const active = demos.find((d) => d.id === activeDemo)!

  return (
    <div className="pt-16" style={{ background: 'var(--surface-0)' }}>
      {/* Header */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.08) 0%, transparent 55%)',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="badge mb-4" style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}>
              Demos Interactivos
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Toca los datos.<br />
              <span className="gradient-text">Entiende el impacto.</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Cinco demos interactivos con datos realistas. Explora las soluciones que construiríamos para tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Demo selector + content */}
      <section className="section-pad">
        <div className="container-wide">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {demos.map((demo) => {
              const Icon = demo.icon
              return (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    demo.highlight && activeDemo !== demo.id ? 'ring-1 ring-neon/30' : ''
                  }`}
                  style={activeDemo === demo.id
                    ? { background: 'var(--neon)', color: 'var(--surface-0)', borderColor: 'transparent' }
                    : { background: 'var(--surface-2)', color: 'var(--text-secondary)', borderColor: 'var(--border-light)' }
                  }
                >
                  <Icon size={15} />
                  {demo.title}
                  {demo.highlight && (
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                      style={activeDemo === demo.id
                        ? { background: 'rgba(0,0,0,0.2)', color: 'white' }
                        : { background: 'var(--neon-glow)', color: 'var(--neon)' }
                      }
                    >
                      IA
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Active demo header */}
          <div
            className="p-6 rounded-2xl mb-6 grid grid-cols-1 lg:grid-cols-3 gap-5"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border-light)' }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Problema</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{active.problem}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Solución</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{active.solution}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--neon)' }}>
                Valor Empresarial
              </div>
              <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--neon)' }}>
                {active.value}
              </p>
            </div>
          </div>

          {/* Demo content */}
          {activeDemo === 'rfm'         && <DemoRFM />}
          {activeDemo === 'geo'         && <DemoGeo />}
          {activeDemo === 'logistics'   && <DemoLogistics />}
          {activeDemo === 'retention'   && <DemoRetention />}
          {activeDemo === 'transformer' && <DemoTransformer />}
        </div>
      </section>
    </div>
  )
}
