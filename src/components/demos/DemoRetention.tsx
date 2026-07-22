'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts'
import { retentionClients, retentionKPIs, evolucionRetencion } from '@/data/retention-mock'
import { ChevronDown, ChevronUp, Zap } from 'lucide-react'

const riskStyle = {
  Alto:  { bg: '#3d0a0a', color: '#c0392b' },
  Medio: { bg: '#3d2d0a', color: '#d68910' },
  Bajo:  { bg: '#0a3d1f', color: '#1e8449' },
}

const estadoStyle: Record<string, { bg: string; color: string }> = {
  'En progreso': { bg: '#0a1f3d', color: '#1d4ed8' },
  'Pendiente':  { bg: '#3d2d0a', color: '#d97706' },
  'Recuperado': { bg: '#0a3d1f', color: '#166534' },
}

function ClientRow({ c }: { c: typeof retentionClients[0] }) {
  const [open, setOpen] = useState(false)
  const rs = riskStyle[c.riesgo as keyof typeof riskStyle] ?? riskStyle.Bajo
  const es = estadoStyle[c.estado] ?? estadoStyle['Pendiente']

  return (
    <>
      <tr className="border-b cursor-pointer transition-colors" style={{ borderColor: 'var(--border-light)', background: 'hover:rgba(0,212,255,0.03)' }} onClick={() => setOpen(!open)}>
        <td className="py-3 pr-3">
          <div className="font-semibold text-xs" style={{ color: 'var(--text-primary)' }}>{c.nombre}</div>
          <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.empresa}</div>
        </td>
        <td className="pr-3">
          <div className="flex items-center gap-1.5">
            <div className="w-14 h-1.5 rounded-full bg-gray-700 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.score}%`, background: rs.color }} />
            </div>
            <span className="text-xs font-mono font-bold" style={{ color: rs.color }}>{c.score}</span>
          </div>
        </td>
        <td className="pr-3">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: rs.bg, color: rs.color }}>{c.riesgo}</span>
        </td>
        <td className="pr-3">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: es.bg, color: es.color }}>{c.estado}</span>
        </td>
        <td className="pr-3 text-xs font-mono" style={{ color: 'var(--text-primary)' }}>
          ${c.impactoMensual.toLocaleString()}/mes
        </td>
        <td className="pr-3 text-xs" style={{ color: 'var(--text-muted)' }}>{c.responsable}</td>
        <td>{open ? <ChevronUp size={14} style={{ color: 'var(--text-muted)' }} /> : <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />}</td>
      </tr>
      {open && (
        <tr style={{ background: 'var(--surface-1)' }}>
          <td colSpan={7} className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-secondary)' }}>Motivo del Riesgo</div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{c.motivoPrincipal}</p>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-secondary)' }}>Acción Sugerida</div>
                <div className="flex items-start gap-2">
                  <Zap size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#00d4ff' }} />
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)' }}>{c.accion}</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default function DemoRetention() {
  const kpis = retentionKPIs

  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {[
          { label: 'Clientes en Riesgo',  value: kpis.clientesEnRiesgo,                              color: '#c0392b' },
          { label: 'Impacto Mensual',     value: `$${(kpis.impactoMensualTotal/1000).toFixed(0)}K`,  color: '#e67e22' },
          { label: 'Recuperados',         value: kpis.recuperadosEsteMes,                             color: '#1e8449' },
          { label: 'Tasa de Recuperación',   value: `${kpis.tasaRecuperacion}%`,                        color: '#2980b9' },
          { label: 'Ahorro Potencial',    value: `$${(kpis.ahorroPotencial/1000).toFixed(0)}K`,      color: '#166534' },
          { label: 'Acciones Pendientes', value: kpis.accionesPendientes,                             color: '#d97706' },
        ].map(k => (
          <div key={k.label} className="card p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>{k.label}</div>
            <div className="text-2xl font-bold font-mono" style={{ color: k.color }}>{k.value}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-5">
          <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Evolución del Churn</div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Tasa mensual (%)</div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={evolucionRetencion} margin={{ top:0, right:10, left:-20, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="mes" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <Tooltip />
              <Line type="monotone" dataKey="churn"       name="Churn %"      stroke="#dc2626" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="recuperados" name="Recuperados"   stroke="#166534" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-5">
          <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Puntuación de Riesgo por Cliente</div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>0 = sin riesgo · 100 = churn inminente</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={retentionClients.map(c => ({ name: c.nombre.split(' ')[0], score: c.score, fill: riskStyle[c.riesgo as keyof typeof riskStyle]?.color ?? '#888' }))}
              margin={{ top:0, right:10, left:-20, bottom:0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
              <YAxis domain={[0,100]} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <Tooltip formatter={(v: number) => [`${v}/100`, 'Puntuación']} />
              <Bar dataKey="score" radius={[4,4,0,0]} fill="#00d4ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="card p-5">
        <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Detalles de Cuenta</div>
        <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Haz clic en un cliente para ver el motivo y la acción recomendada</div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                {['Cliente','Puntuación','Riesgo','Estado','Impacto/Mes','Responsable',''].map(h => (
                  <th key={h} className="text-left pb-2.5 font-semibold uppercase tracking-widest text-[10px] pr-3" style={{ color: 'var(--text-secondary)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {retentionClients.map(c => <ClientRow key={c.id} c={c} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
