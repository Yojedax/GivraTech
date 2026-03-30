import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/content'

export const metadata = {
  title: 'Services — GivraTech',
  description: 'Data & AI solutions for logistics, retail and e-commerce.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16" style={{ background: 'var(--surface-0)' }}>
      {/* Header */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.06) 0%, transparent 60%)',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="badge mb-4" style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}>
              Services
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Each service is designed to deliver measurable impact
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We don't sell technology. We sell results. Each solution is structured around a concrete business problem and a measurable KPI.
            </p>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="card p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Left: title + problem */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xl w-10 h-10 flex items-center justify-center rounded-lg"
                      style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}
                    >
                      {service.icon}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((t) => (
                      <span key={t} className="badge badge-neon text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Middle: problem + solution */}
                <div className="lg:col-span-1 space-y-5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                      Problem
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                      Solution
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.solution}</p>
                  </div>
                </div>

                {/* Right: deliverables + impact */}
                <div className="lg:col-span-1 space-y-5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                      Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--neon)' }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{ background: 'var(--neon-glow)', borderLeft: '3px solid var(--neon)' }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--neon)' }}>
                      Expected Impact
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--neon-light)' }}>
                      {service.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 60%)',
        }} />
        <div className="container-tight text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Which one should we start with?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A 30-minute call is enough to identify the service with the highest ROI for your company.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:shadow-neon hover:-translate-y-0.5"
            style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
          >
            Book Exploratory Call <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
