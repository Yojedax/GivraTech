import { industries } from '@/data/content'

export default function IndustriesSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface-0)' }}>
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <div className="badge badge-neon mb-4">Industries</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            We work with companies that have data and want more
          </h2>
          <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
            Our projects drive impact in operations, marketing, and customer analytics in sectors where data is an untapped strategic asset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="card p-6 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{ind.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{ind.name}</h3>
              </div>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ind.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {ind.useCases.map((uc) => (
                  <span key={uc} className="badge badge-neutral text-[10px]">{uc}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
