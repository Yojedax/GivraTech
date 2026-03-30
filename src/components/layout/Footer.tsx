import Link from 'next/link'
import { Mail, Linkedin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-0)' }}>
      <div className="border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-wide py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--neon)' }}>Givra</span>Tech
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Data & AI consulting.<br />
              We turn information into decisions that drive impact.
            </p>
            <div className="mt-4 inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded border"
              style={{ borderColor: 'var(--border-neon)', color: 'var(--neon)', background: 'var(--neon-glow)' }}>
              From Data to Decision
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>Site</div>
              <ul className="space-y-2.5">
                {[['/', 'Home'],['/services','Services'],['/demos','Demos'],['/about','About'],['/contact','Contact']].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>Services</div>
              <ul className="space-y-2.5">
                {['Marketing & RFM','Churn Prediction','Geolocation','Logistics','Dashboards','AI Agents'].map(s => (
                  <li key={s}><span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>Ready to get started?</div>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Schedule a 30-minute exploratory call. No cost, no commitment.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-neon-sm"
              style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}>
              Book a Call <ArrowRight size={14} />
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <a href="mailto:hola@giatech.ai" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                <Mail size={14} /> hola@giatech.ai
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} GivraTech. All rights reserved.</p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}
