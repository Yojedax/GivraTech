'use client'

import { useState } from 'react'
import { Mail, Linkedin, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

const challenges = [
  'Churn / Retención de Clientes',
  'Segmentación y Marketing',
  'Optimización Logística',
  'Calidad de Datos / Direcciones',
  'Dashboard y Monitoreo de KPIs',
  'Automatización con IA',
  'Otro Desafío',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    cargo: '',
    desafio: '',
    mensaje: '',
  })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.nombre || !form.email || !form.empresa) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://formsubmit.co/ajax/yojeda@givratech.com.ar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nueva llamada exploratoria — ${form.empresa}`,
          _template: 'table',
          Nombre: form.nombre,
          Empresa: form.empresa,
          Email: form.email,
          Cargo: form.cargo,
          Desafio: form.desafio,
          Mensaje: form.mensaje,
        }),
      })
      const data = await res.json()
      if (data.success === true || data.success === 'true') {
        setSent(true)
      } else {
        setError('No pudimos enviar tu mensaje. Escribinos a hola@givratech.com.ar')
      }
    } catch {
      setError('No pudimos enviar tu mensaje. Escribinos a hola@givratech.com.ar')
    }
    setLoading(false)
  }

  const inputStyle: React.CSSProperties = {
    borderColor: 'var(--border-light)',
    background: 'var(--surface-3)',
    color: 'var(--text-primary)',
  }

  return (
    <div className="pt-16" style={{ background: 'var(--surface-0)' }}>
      {/* Header */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <div className="badge mb-4" style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}>
              Contacto
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Comenzamos con una conversación
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Sin costo, sin compromiso. 30 minutos para entender tu desafío y evaluar juntos si podemos generar impacto.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="card p-10 text-center">
                <CheckCircle size={40} className="mx-auto mb-4" style={{ color: 'var(--neon)' }} />
                <h2 className="font-display text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  ¡Recibimos tu mensaje!
                </h2>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  El equipo de GivraTech se comunicará en las próximas 24 horas para agendar tu llamada exploratoria.
                </p>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Mientras tanto, puedes explorar nuestros <a href="/demos" style={{ color: 'var(--neon)' }} className="underline">demos interactivos</a>.
                </div>
              </div>
            ) : (
              <div className="card p-8">
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                  Cuéntanos sobre tu desafío
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Nombre *
                    </label>
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Empresa *
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Cargo
                    </label>
                    <input
                      name="cargo"
                      value={form.cargo}
                      onChange={handleChange}
                      placeholder="Director, Gerente, CTO..."
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Desafío Principal
                  </label>
                  <select
                    name="desafio"
                    value={form.desafio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                    style={inputStyle}
                  >
                    <option value="">Selecciona el área de mayor impacto</option>
                    {challenges.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Cuéntanos más (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Descripción del contexto, qué datos tienes, qué decisiones necesitas tomar..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.nombre || !form.email || !form.empresa}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
                >
                  {loading ? (
                    <><Loader2 size={15} className="animate-spin" /> Enviando...</>
                  ) : (
                    <>Agendar Llamada Exploratoria <ArrowRight size={15} /></>
                  )}
                </button>

                {error && (
                  <p className="text-xs text-center mt-3" style={{ color: '#ef4444' }}>
                    {error}
                  </p>
                )}

                <p className="text-xs text-center mt-3" style={{ color: 'var(--text-muted)' }}>
                  Sin spam. Solo nos comunicamos para agendar la llamada.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* What to expect */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Qué pasa ahora</h3>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'Confirmación dentro de 24 horas hábiles' },
                  { step: '02', text: '30 minutos de llamada exploratoria gratuita' },
                  { step: '03', text: 'Evaluación rápida del impacto potencial para tu empresa' },
                  { step: '04', text: 'Propuesta concreta si hay una afinidad real' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3 items-start">
                    <span
                      className="flex-shrink-0 text-[10px] font-bold w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}
                    >
                      {s.step}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact direct */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: 'var(--surface-2)', borderColor: 'var(--border-light)' }}
            >
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Contacto Directo</h3>
              <div className="space-y-3">
                <a
                  href="mailto:hola@givratech.com.ar"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Mail size={16} style={{ color: 'var(--neon)' }} />
                  hola@givratech.com.ar
                </a>
                <a
                  href="https://www.linkedin.com/company/givratech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Linkedin size={16} style={{ color: 'var(--neon)' }} />
                  GivraTech on LinkedIn
                </a>
              </div>
            </div>

            {/* Tag */}
            <div
              className="p-5 rounded-2xl text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.1) 100%)', border: '1px solid var(--border-neon)' }}
            >
              <div className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--neon)' }}>
                &ldquo;From Data to Decision&rdquo;
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>GivraTech · Data & AI</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
