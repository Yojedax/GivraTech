'use client'

import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend,
} from 'recharts'
import { rfmClients, segmentStats, evolucion } from '@/data/rfm-mock'

const segmentColors: Record<string, string> = {
  Champions: '#166534', Loyal: '#1d4ed8', 'At Risk': '#d97706',
  Potential: '#7c3aed', New: '#0891b2', Lost: '#dc2626',
}
const churnByCanal = [
  { canal: 'eCommerce', churn: 0.28 }, { canal: 'App', churn: 0.18 },
  { canal: 'Store', churn: 0.45 }, { canal: 'Phone', churn: 0.57 },
]

export default function DemoRFM() {
  const [activeSeg, setActiveSeg] = useState('All')
  const [activeCanal, setActiveCanal] = useState('All')

  const filtered = rfmClients.filter(c =>
    (activeSeg === 'All' || c.segmento === activeSeg) &&
    (activeCanal === 'All' || c.canal === activeCanal)
  )
  const topRisk = [...rfmClients].sort((a,b) => b.churnProb - a.churnProb).slice(0,5)
  const fmt = (n: number) => n >= 1000000 ? `$${(n/1000000).toFixed(1)}M` : n >= 1000 ? `$${(n/1000).toFixed(0)}K` : `$${n}`

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {segmentStats.map(seg => (
          <button key={seg.segmento}
            onClick={() => setActiveSeg(activeSeg === seg.segmento ? 'All' : seg.segmento)}
            className={`card p-4 text-left cursor-pointer transition-all ${activeSeg === seg.segmento ? 'ring-2 ring-neon' : ''}`}
            style={activeSeg === seg.segmento ? { borderColor: 'var(--neon)' } : {}}>
            <div className="w-2 h-2 rounded-full mb-2" style={{ background: segmentColors[seg.segmento] ?? '#888' }} />
            <div className="text-[10px] mb-0.5" style={{ color: 'var(--text-muted)' }}>{seg.segmento}</div>
            <div className="text-lg font-bold font-mono" style={{ color: 'var(--text-primary)' }}>{seg.clientes}</div>
            <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{fmt(seg.revenue)}</div>
            <div className="text-[10px] font-semibold mt-1"
              style={{ color: seg.churnAvg > 0.5 ? '#dc2626' : seg.churnAvg > 0.2 ? '#d97706' : '#166534' }}>
              Churn {(seg.churnAvg*100).toFixed(0)}%
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-5">
          <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Segment Evolution</div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Last 6 months</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={evolucion} margin={{ top:0, right:10, left:-20, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="mes" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="Champions" stroke="#166534" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="Loyal" stroke="#1d4ed8" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="At Risk" stroke="#d97706" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="Lost" stroke="#dc2626" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card p-5">
          <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Churn by Channel</div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Average abandonment rate</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={churnByCanal} margin={{ top:0, right:10, left:-20, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="canal" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickFormatter={v => `${(v*100).toFixed(0)}%`} />
              <Tooltip formatter={(v: number) => [`${(v*100).toFixed(1)}%`, 'Churn']} />
              <Bar dataKey="churn" fill="#00d4ff" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Customer Details</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{filtered.length} customers</div>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['All','eCommerce','App','Store','Phone'].map(ch => (
              <button key={ch} onClick={() => setActiveCanal(ch)}
                className={`demo-tab text-xs py-1.5 px-3 ${activeCanal===ch?'active':''}`}>{ch}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                {['Customer','Segment','Channel','Recency','Monetary','Churn %','Suggested Action'].map(h => (
                  <th key={h} className="text-left pb-3 text-[10px] font-semibold uppercase tracking-widest pr-3" style={{ color: 'var(--text-secondary)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b transition-colors" style={{ borderColor: 'var(--border-light)', background: 'hover:rgba(0,212,255,0.03)' }}>
                  <td className="py-3 pr-3">
                    <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{c.nombre}</div>
                    <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.id}</div>
                  </td>
                  <td className="pr-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${segmentColors[c.segmento]??'#888'}18`, color: segmentColors[c.segmento]??'#888' }}>
                      {c.segmento}
                    </span>
                  </td>
                  <td className="pr-3" style={{ color: 'var(--text-secondary)' }}>{c.canal}</td>
                  <td className="pr-3" style={{ color: 'var(--text-secondary)' }}>{c.recency}d</td>
                  <td className="pr-3 font-mono" style={{ color: 'var(--text-primary)' }}>{fmt(c.monetary)}</td>
                  <td className="pr-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-10 h-1.5 rounded-full bg-gray-700 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${c.churnProb*100}%`, background: c.churnProb>0.6?'#dc2626':c.churnProb>0.35?'#d97706':'#166534' }} />
                      </div>
                      <span className="text-[10px] font-semibold" style={{ color: c.churnProb>0.6?'#dc2626':c.churnProb>0.35?'#d97706':'#166534' }}>
                        {(c.churnProb*100).toFixed(0)}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3" style={{ color: 'var(--text-secondary)', maxWidth: '192px', lineHeight: '1.5' }}>{c.accionSugerida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-5">
        <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Top 5 — Highest Risk</div>
        <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Require immediate action</div>
        <div className="space-y-2.5">
          {topRisk.map((c, i) => (
            <div key={c.id} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--surface-1)' }}>
              <span className="text-xs font-bold w-5 text-center" style={{ color: 'var(--text-muted)' }}>{i+1}</span>
              <div className="flex-1">
                <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{c.nombre}</div>
                <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.segmento} · {c.canal}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold" style={{ color: '#dc2626' }}>{(c.churnProb*100).toFixed(0)}% risk</div>
                <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{fmt(c.monetary)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
