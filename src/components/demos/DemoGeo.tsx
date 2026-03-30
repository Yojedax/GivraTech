'use client'

import { useState } from 'react'
import { Search, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import { geoExamples, auditoriaSummary } from '@/data/geo-mock'

export default function DemoGeo() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult]   = useState<typeof geoExamples[0] | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (addr: string) => {
    setInputValue(addr)
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      const found = geoExamples.find(g => g.inputRaw.toLowerCase().includes(addr.toLowerCase().split(',')[0].toLowerCase()))
        ?? geoExamples[Math.floor(Math.random() * geoExamples.length)]
      setResult(found)
      setLoading(false)
    }, 900)
  }

  const confColor = (s: number) => s >= 85 ? '#166534' : s >= 60 ? '#d97706' : '#dc2626'
  const aud = auditoriaSummary

  return (
    <div className="space-y-6">
      {/* Audit stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total processed', value: aud.total.toLocaleString(), color: 'var(--text-primary)' },
          { label: '✓ High confidence', value: `${aud.pctAlta}%`, color: '#166534' },
          { label: '~ Medium confidence', value: `${aud.pctMedia}%`, color: '#d97706' },
          { label: '↓ Low confidence', value: `${aud.pctBaja}%`, color: '#dc2626' },
        ].map(s => (
          <div key={s.label} className="card p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
            <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Savings */}
      <div className="px-5 py-4 rounded-xl text-sm font-medium" style={{ background: 'rgba(0,212,255,0.05)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.12)' }}>
        💡 Estimated impact: <strong>{aud.ahorroEstimado}</strong> — from reducing failed deliveries and improving database quality.
      </div>

      {/* Search */}
      <div className="card p-5">
        <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Address Normalizer</div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && inputValue && handleSearch(inputValue)}
              placeholder="Enter an address, e.g: Broadway 1234, New York"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-colors"
              style={{ borderColor: 'var(--border-light)', background: 'var(--surface-0)', color: 'var(--text-primary)' }}
              onFocus={(e) => (e.target.style.borderColor = '#00d4ff')} />
          </div>
          <button onClick={() => inputValue && handleSearch(inputValue)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: '#00d4ff', color: '#000' }}>
            Normalize
          </button>
        </div>
        <div className="mt-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest mr-2" style={{ color: 'var(--text-secondary)' }}>Examples:</span>
          {geoExamples.map(g => (
            <button key={g.inputRaw} onClick={() => handleSearch(g.inputRaw)}
              className="text-xs mr-3 mb-1 hover:underline" style={{ color: '#00d4ff' }}>
              {g.inputRaw.substring(0, 30)}…
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="card p-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: '#00d4ff', borderTopColor: 'transparent' }} />
            Checking database and geocoding…
          </div>
        </div>
      )}

      {result && !loading && (
        <div className="card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Normalization Result</div>
            <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{result.inputRaw}</div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: result.score >= 85 ? '#0a3d1f' : result.score >= 60 ? '#3d2d0a' : '#3d0a0a' }}>
            {result.score >= 85
              ? <CheckCircle size={18} style={{ color: '#166534' }} />
              : result.score >= 60
              ? <AlertTriangle size={18} style={{ color: '#d97706' }} />
              : <XCircle size={18} style={{ color: '#dc2626' }} />}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest"
                style={{ color: result.score >= 85 ? '#166534' : result.score >= 60 ? '#d97706' : '#dc2626' }}>
                {result.confianza} confidence
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Source: {result.fuente}</div>
            </div>
          </div>

          {/* Score bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span style={{ color: 'var(--text-muted)' }}>Confidence score</span>
              <span className="font-bold font-mono" style={{ color: confColor(result.score) }}>{result.score}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${result.score}%`, background: confColor(result.score) }} />
            </div>
          </div>

          {result.normalizada && (
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>Normalized</div>
                <div className="text-xs" style={{ color: 'var(--text-primary)' }}>{result.normalizada}</div>
              </div>
              <div className="p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>Geographic Data</div>
                <div className="text-xs space-y-0.5" style={{ color: 'var(--text-secondary)' }}>
                  <div>Province: <span style={{ color: 'var(--text-primary)' }}>{result.provincia}</span></div>
                  <div>City: <span style={{ color: 'var(--text-primary)' }}>{result.localidad}</span></div>
                  <div>Coords: <span style={{ color: 'var(--text-primary)' }} className="font-mono">{result.lat.toFixed(4)}, {result.lng.toFixed(4)}</span></div>
                </div>
              </div>
            </div>
          )}

          {result.problema && (
            <div className="flex items-start gap-2 p-3 rounded-xl text-xs" style={{ background: '#3d2d0a' }}>
              <AlertTriangle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#d97706' }} />
              <div>
                <div className="font-semibold" style={{ color: '#d97706' }}>Note:</div>
                <div style={{ color: '#d97706' }} className="mt-0.5">{result.problema}</div>
                {result.sugerencia && <div style={{ color: '#d97706' }} className="mt-1">→ {result.sugerencia}</div>}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quality bars */}
      <div className="card p-5">
        <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Database Quality Distribution</div>
        <div className="space-y-3">
          {[
            { label: 'High confidence', value: aud.alta, pct: aud.pctAlta, color: '#166534' },
            { label: 'Medium confidence', value: aud.media, pct: aud.pctMedia, color: '#d97706' },
            { label: 'Low confidence', value: aud.baja, pct: aud.pctBaja, color: '#dc2626' },
          ].map(bar => (
            <div key={bar.label} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span style={{ color: 'var(--text-secondary)' }}>{bar.label}</span>
                <span className="font-mono font-semibold" style={{ color: 'var(--text-primary)' }}>{bar.value.toLocaleString()} ({bar.pct}%)</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-700 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${bar.pct}%`, background: bar.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
