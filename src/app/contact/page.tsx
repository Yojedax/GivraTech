'use client'

import { useState } from 'react'
import { Mail, Linkedin, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

const challenges = [
  'Churn / Customer Retention',
  'Segmentation & Marketing',
  'Logistics Optimization',
  'Data / Address Quality',
  'Dashboard & KPI Monitoring',
  'AI Automation',
  'Other Challenge',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.nombre || !form.email || !form.empresa) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSent(true)
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
              Contact
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              We start with a conversation
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              No cost, no commitment. 30 minutes to understand your challenge and evaluate together if we can drive impact.
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
                  We received your message!
                </h2>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  The GivraTech team will reach out within the next 24 hours to schedule your exploratory call.
                </p>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  In the meantime, you can explore our <a href="/demos" style={{ color: 'var(--neon)' }} className="underline">interactive demos</a>.
                </div>
              </div>
            ) : (
              <div className="card p-8">
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                  Tell us about your challenge
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Name *
                    </label>
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Company *
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Company name"
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
                      Title
                    </label>
                    <input
                      name="cargo"
                      value={form.cargo}
                      onChange={handleChange}
                      placeholder="Director, Manager, CTO..."
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Main Challenge
                  </label>
                  <select
                    name="desafio"
                    value={form.desafio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-cyan-500"
                    style={inputStyle}
                  >
                    <option value="">Select the area of highest impact</option>
                    {challenges.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Tell us more (optional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Context description, what data you have, what decisions you need to make..."
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
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Book Exploratory Call <ArrowRight size={15} /></>
                  )}
                </button>

                <p className="text-xs text-center mt-3" style={{ color: 'var(--text-muted)' }}>
                  No spam. We only contact you to schedule the call.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* What to expect */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>What happens next</h3>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'Get confirmation within 24 business hours' },
                  { step: '02', text: '30 minutes of free exploratory call' },
                  { step: '03', text: 'Quick assessment of potential impact for your company' },
                  { step: '04', text: 'Concrete proposal if there\'s real fit' },
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
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Direct Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:hola@giatech.ai"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Mail size={16} style={{ color: 'var(--neon)' }} />
                  hola@giatech.ai
                </a>
                <a
                  href="https://linkedin.com"
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
