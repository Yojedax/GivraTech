import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/content'

export default function ServicesSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <div className="badge badge-neon mb-4">Services</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Concrete solutions for every business challenge
          </h2>
          <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
            We work across six areas where data has direct and measurable impact on company results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={service.id} className="card p-7 flex flex-col gap-4 group" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-start gap-3">
                <span
                  className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}
                >
                  {service.icon}
                </span>
                <h3 className="font-display text-lg font-semibold leading-tight mt-0.5" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{service.problem}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="badge badge-neutral text-[10px]">{tag}</span>
                ))}
              </div>
              <div className="text-xs font-medium px-3 py-2 rounded-lg leading-relaxed" style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}>
                {service.impact.split('.')[0]}.
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: 'var(--neon)' }}>
            See all services in detail <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
