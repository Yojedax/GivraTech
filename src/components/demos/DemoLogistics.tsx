'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, RadarChart, Radar, PolarGrid, PolarAngleAxis, Legend } from 'recharts'
import { puntos, scenarioAntes, scenarioDespues, kpiComparacion } from '@/data/logistics-mock'

const radarData = [
  { metric: 'Occupancy',     before: 54, after: 81 },
  { metric: 'km Efficiency', before: 58, after: 85 },
  { metric: 'Compliance',    before: 70, after: 94 },
  { metric: 'Cost/Delivery', before: 52, after: 80 },
  { metric: 'Time',          before: 60, after: 82 },
]

export default function DemoLogistics() {
  const [showAfter, setShowAfter] = useState(false)
  const scenario = showAfter ? scenarioDespues : scenarioAntes

  const fmt = (n: number) => n >= 1000 ? `$${(n/1000).toFixed(0)}K` : `$${n}`

  return (
    <div className="space-y-6">
      {/* Toggle */}
      <div className="flex items-center gap-3">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Scenario:</span>
        <div className="flex rounded-xl p-1" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
          <button onClick={() => setShowAfter(false)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${!showAfter ? 'shadow-sm' : ''}`}
            style={!showAfter ? { background: 'var(--surface-2)', color: 'var(--text-primary)' } : { color: 'var(--text-secondary)' }}>
            Unoptimized
          </button>
          <button onClick={() => setShowAfter(true)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${showAfter ? 'shadow-sm' : ''}`}
            style={showAfter ? { background: '#00d4ff', color: '#000' } : { color: 'var(--text-secondary)' }}>
            With GivraTech
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label: 'Vehicles',        value: scenario.vehiculos,        unit: '' },
          { label: 'Distance',        value: scenario.distanciaTotal,   unit: ' km' },
          { label: 'Avg Time',     value: scenario.tiempoPromedio,   unit: ' hs' },
          { label: 'Daily Cost',     value: scenario.costoTotal,       unit: '', currency: true },
          { label: 'Occupancy',        value: scenario.ocupacionPromedio, unit: '%' },
        ].map(k => (
          <div key={k.label} className="card p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>{k.label}</div>
            <div className="text-xl font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
              {k.currency ? fmt(k.value) : `${k.value.toLocaleString()}${k.unit}`}
            </div>
            {showAfter && (
              <div className="text-[10px] font-semibold mt-1" style={{ color: '#00d4ff' }}>Optimized ✓</div>
            )}
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-5">
          <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Before vs After Comparison</div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>By key indicator</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={kpiComparacion} margin={{ top:0, right:10, left:-10, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="kpi" tick={{ fontSize: 9, fill: 'var(--text-muted)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="antes"   name="Unoptimized" fill="#556178" radius={[4,4,0,0]} />
              <Bar dataKey="despues" name="With GivraTech"   fill="#00d4ff" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card p-5">
          <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Efficiency Profile</div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Scale 0–100 by dimension</div>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData} margin={{ top:0, right:20, left:20, bottom:0 }}>
              <PolarGrid stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
              <Radar name="Unoptimized" dataKey="before" stroke="#556178" fill="#556178" fillOpacity={0.3} />
              <Radar name="With GivraTech"   dataKey="after"  stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.25} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Savings banner */}
      <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)' }}>
        <div className="text-black/70 text-xs font-semibold uppercase tracking-widest mb-3">Optimization Impact</div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {kpiComparacion.map(k => (
            <div key={k.kpi}>
              <div className="text-xl font-bold font-display text-black">{k.mejora}</div>
              <div className="text-xs text-black/60 mt-0.5">{k.kpi}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stops table */}
      <div className="card p-5">
        <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Delivery Points ({puntos.length})</div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                {['ID','Point','Coordinates','Type','Demand'].map(h => (
                  <th key={h} className="text-left pb-2.5 font-semibold uppercase tracking-widest text-[10px] pr-3" style={{ color: 'var(--text-secondary)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {puntos.map(p => (
                <tr key={p.id} className="border-b" style={{ borderColor: 'var(--border-light)' }}>
                  <td className="py-2.5 pr-3 font-mono" style={{ color: 'var(--text-muted)' }}>{p.id}</td>
                  <td className="pr-3 font-semibold" style={{ color: 'var(--text-primary)' }}>{p.nombre}</td>
                  <td className="pr-3 font-mono" style={{ color: 'var(--text-secondary)' }}>{p.lat.toFixed(4)}, {p.lng.toFixed(4)}</td>
                  <td className="pr-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: p.tipo === 'deposito' ? 'rgba(0,212,255,0.08)' : 'rgba(29,78,216,0.08)', color: p.tipo === 'deposito' ? '#00d4ff' : '#1d4ed8' }}>
                      {p.tipo === 'deposito' ? 'warehouse' : p.tipo}
                    </span>
                  </td>
                  <td className="pr-3" style={{ color: 'var(--text-secondary)' }}>{p.demanda ? `${p.demanda} u` : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
