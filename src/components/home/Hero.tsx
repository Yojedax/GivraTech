import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ background: 'var(--surface-0)' }}>
      {/* Gradient background effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.08) 0%, transparent 55%),
                          radial-gradient(ellipse at 20% 80%, rgba(124,58,237,0.06) 0%, transparent 45%)`,
      }} />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
      }} />

      <div className="container-wide relative z-10 py-24 lg:py-32">
        {/* Two-column layout: text left, card right — card never overlaps title */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Left: main content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: 'var(--border-neon)', color: 'var(--neon)', background: 'var(--neon-glow)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: 'var(--neon)' }} />
              Consulting · Data & AI
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-8"
              style={{ color: 'var(--text-primary)' }}>
              Your data<br />
              <span className="gradient-text">already holds</span>
              <br />
              the answer.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl leading-relaxed max-w-xl mb-10 font-light" style={{ color: 'var(--text-secondary)' }}>
              We help logistics, retail, and e-commerce companies turn their information into concrete decisions: less churn, lower operating costs, and increased conversion from day one.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <Link href="/demos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-neon hover:-translate-y-0.5"
                style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}>
                See Interactive Demos <ArrowRight size={15} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                Book a Call
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-sm">
              {[
                { value: '-38%', label: 'Logistics Cost' },
                { value: '-32%', label: 'Churn Rate' },
                { value: '4x',   label: 'Conversion' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-display font-extrabold mb-0.5" style={{ color: 'var(--neon)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: alert card — only on xl+, in its own column, never overlaps */}
          <div className="hidden xl:flex items-center justify-center">
            <div className="w-full max-w-sm card p-6 animate-fade-in animate-neon-pulse">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Real-time Alert</span>
                <span className="badge" style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171' }}>⚠ High Risk</span>
              </div>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>3 customers at churn risk</p>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Potential loss: $1.69M / year</p>
              <div className="space-y-2">
                {['Constructora Del Plata', 'LogiGroup Argentina', 'Distribuidora Sur'].map((c) => (
                  <div key={c} className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg" style={{ background: 'var(--surface-3)' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{c}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full risk-high">High</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t text-center" style={{ borderColor: 'var(--border)' }}>
                <span className="text-xs font-semibold" style={{ color: 'var(--neon)' }}>See Recommended Actions →</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
      </div>
    </section>
  )
}
