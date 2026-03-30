'use client'

import { useState } from 'react'
import { Globe, Sparkles, ArrowRight, Loader2 } from 'lucide-react'

interface TransformResult {
  original: string
  improved: string
  improvements: string[]
  useCases: { title: string; description: string; kpi: string }[]
  estimate: string
}

// Fallback responses by detected industry from URL
function generateFallback(url: string): TransformResult {
  const lower = url.toLowerCase()

  const isLogistica = lower.includes('logis') || lower.includes('transport') || lower.includes('envio') || lower.includes('distrib') || lower.includes('flota') || lower.includes('cargo')
  const isRetail = lower.includes('retail') || lower.includes('tienda') || lower.includes('shop') || lower.includes('store') || lower.includes('moda') || lower.includes('ropa')
  const isEcommerce = lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('market') || lower.includes('venta')
  const isRestaurant = lower.includes('restaurant') || lower.includes('gastro') || lower.includes('food') || lower.includes('comida') || lower.includes('menu')
  const isSalud = lower.includes('salud') || lower.includes('medic') || lower.includes('clinic') || lower.includes('health') || lower.includes('farma')

  if (isLogistica) {
    return {
      original: 'Logistics and distribution company with regional operations. Currently manages routes and fleets manually or semi-automatically, with limited visibility on real-time performance.',
      improved: 'With GivraTech, your logistics operation would have intelligent routing that reduces costs up to 38%, real-time dashboards to monitor fleet and SLAs, and predictive models that anticipate demand spikes and delivery failures before they occur.',
      improvements: [
        'Route optimization with algorithms: -38% cost per delivery and +42% fleet utilization',
        'Real-time operational dashboard: complete visibility of fleet, deliveries and KPIs by zone',
        'Demand prediction: anticipate weekly volumes with 85%+ precision to plan resources',
        'Automatic SLA alerts: detect at-risk deliveries before they fail and reassign proactively',
      ],
      useCases: [
        { title: 'Route Optimization', description: 'Algorithms that minimize distance, time and cost while considering time windows, vehicle capacity and traffic restrictions.', kpi: '-38% logistics cost, +42% utilization' },
        { title: 'Operational Dashboard', description: 'Executive panel with fleet KPIs, deliveries by zone, real-time SLA and automatic alerts for the team.', kpi: '100% visibility of operations in real-time' },
        { title: 'Demand Prediction', description: 'ML model that predicts delivery volumes by zone and day, enabling fleet and staff planning in advance.', kpi: '+85% precision in weekly forecast' },
        { title: 'Address Quality', description: 'Normalization and geocoding of address database to eliminate failed deliveries due to dirty data.', kpi: '-60% failed deliveries due to incorrect address' },
      ],
      estimate: 'For a mid-size logistics company, typical initial investment ranges USD 15,000–35,000 with visible ROI in the first 60-90 days of operation.',
    }
  }

  if (isRetail || isEcommerce) {
    return {
      original: 'Retail or e-commerce company with active catalog and customer base. Currently marketing campaigns are generic and there is no segmentation based on actual purchase behavior.',
      improved: 'With GivraTech, you would have automatic RFM segmentation that identifies your best customers and those at risk, personalized campaigns with up to 4x conversion, and an early churn alert system that protects your revenue.',
      improvements: [
        'Automatic RFM segmentation: classify entire base into actionable segments in real-time',
        'Personalized campaigns by segment: up to 4x conversion vs generic campaigns',
        'Churn model: identify at-risk customers 30 days before they leave',
        'Recommendation engine: products suggested by profile, +22% in average ticket',
      ],
      useCases: [
        { title: 'RFM Segmentation', description: 'Automatic customer classification by Recency, Frequency and Monetary value for precise commercial actions.', kpi: 'Up to 4x conversion in segmented campaigns' },
        { title: 'Churn Prediction', description: 'Predictive model that identifies at-risk customers and generates recommended actions by profile.', kpi: '-32% abandonment rate in first 3 months' },
        { title: 'Recommendation Engine', description: 'Personalized product suggestions based on customer history and profile, integrated into site or email.', kpi: '+22% average ticket per session' },
        { title: 'Marketing Dashboard', description: 'Centralized panel with LTV, CAC, retention rate and campaign performance by segment.', kpi: 'Data-driven decision-making, not intuition' },
      ],
      estimate: 'For retail or e-commerce, typical initial investment is USD 12,000–28,000 with first measurable campaign results in 4–6 weeks.',
    }
  }

  if (isRestaurant) {
    return {
      original: 'Food business with in-person and/or delivery operations. Stock management, demand prediction and customer loyalty are done reactively and manually.',
      improved: 'With GivraTech, you would have demand prediction by day and time to reduce waste, frequent customer segmentation for precise loyalty programs, and operational dashboards showing profitability by product and location.',
      improvements: [
        'Daily demand prediction: reduce waste up to 30% with more accurate purchasing',
        'Frequent customer segmentation: identify best customers and act on them',
        'Profitability dashboard: margins by product, peak hours and performance by location',
        'Review and feedback analysis: automatic processing to detect satisfaction patterns',
      ],
      useCases: [
        { title: 'Demand Forecast', description: 'Predictive model that anticipates covers and orders by day, time and event to optimize stock and staff.', kpi: '-30% waste, -15% procurement cost' },
        { title: 'Smart Loyalty', description: 'Customer base segmentation and personalized campaigns to increase visit frequency.', kpi: '+25% visit frequency in active customers' },
        { title: 'Operational Dashboard', description: 'Real-time panel with sales, margins, occupancy and key KPIs by location and period.', kpi: 'Complete business visibility in one place' },
        { title: 'Feedback Analysis', description: 'Automatic processing of reviews and surveys to detect problems before they escalate.', kpi: '+18% average NPS in first 60 days' },
      ],
      estimate: 'For the food sector, typical initial investment is USD 8,000–20,000 with visible operational results in the first 4 weeks.',
    }
  }

  if (isSalud) {
    return {
      original: 'Healthcare organization with clinical and/or administrative operations. Appointment management, patient follow-up and reporting processes are done manually or with disconnected systems.',
      improved: 'With GivraTech, you would have predictive models to anticipate no-shows and optimize schedules, integrated clinical and administrative dashboards, and alert systems that improve patient follow-up and reduce no-shows.',
      improvements: [
        'No-show prediction: reduce no-shows up to 35% with smart reminders',
        'Schedule optimization: maximize office and professional occupancy',
        'Clinical-administrative dashboard: real-time KPIs for care, times and profitability',
        'Patient segmentation: identify risk profiles and prioritize active follow-up',
      ],
      useCases: [
        { title: 'No-Show Prediction', description: 'Model that predicts which patients are likely to miss appointments and activates personalized reminders.', kpi: '-35% appointment no-show rate' },
        { title: 'Schedule Optimization', description: 'Smart appointment assignment that maximizes professional occupancy and reduces wait times.', kpi: '+28% effective schedule occupancy' },
        { title: 'Integrated Dashboard', description: 'Unified panel with care metrics, times, satisfaction and profitability by specialty.', kpi: '40% reduction in manual reporting time' },
        { title: 'Patient Segmentation', description: 'Automatic classification by frequency, clinical risk and value for prioritized follow-up actions.', kpi: '+20% in chronic treatment adherence' },
      ],
      estimate: 'For healthcare organizations, typical initial investment is USD 18,000–40,000 with first measurable operational impacts in 6–10 weeks.',
    }
  }

  // Generic fallback
  return {
    original: 'Company with digital operations and active database. Currently analysis, reporting and decision-making processes are done manually, without leveraging the predictive potential of available information.',
    improved: 'With GivraTech, your company would have real-time executive dashboards, predictive models tailored to your key KPIs, and automations that free your team from repetitive tasks to focus on value-generating work.',
    improvements: [
      'Centralized executive dashboard: all key KPIs in one place, updated in real-time',
      'Custom predictive model: anticipate customer, operations or demand behavior',
      'Reporting automation: eliminate manual time spent consolidating data and generating reports',
      'Data quality pipeline: clean and structure your database so every decision relies on reliable data',
    ],
    useCases: [
      { title: 'Executive Dashboard', description: 'Centralized panel with the most relevant business KPIs, automatically updated from existing data sources.', kpi: '-70% time on manual reporting' },
      { title: 'Core Predictive Model', description: 'Custom algorithm that anticipates your most critical business KPI: churn, demand, operational risk or conversion.', kpi: '+25–40% precision vs current methods' },
      { title: 'Process Automation', description: 'Identification and automation of the 3 manual processes with highest impact: reports, alerts and data flows.', kpi: '-60% operational time on repetitive tasks' },
      { title: 'Data Quality Foundation', description: 'Pipeline for cleaning, normalization and integration of data sources to guarantee quality in every analysis.', kpi: 'Database ready for AI in 4–6 weeks' },
    ],
    estimate: 'For mid-size companies, typical initial investment ranges USD 10,000–25,000 with first visible impact deliverable in the first 4 weeks of the project.',
  }
}

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str.startsWith('http') ? str : `https://${str}`)
    return url.hostname.includes('.')
  } catch {
    return false
  }
}

export default function DemoTransformer() {
  const [url, setUrl]         = useState('')
  const [result, setResult]   = useState<TransformResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [tab, setTab]         = useState<'vision' | 'usecases'>('vision')
  const [urlError, setUrlError] = useState('')

  const handleTransform = async () => {
    const trimmed = url.trim()
    if (!trimmed) return

    if (!isValidUrl(trimmed)) {
      setUrlError('Enter a valid URL, for example: https://www.yoursite.com')
      return
    }

    setUrlError('')
    setLoading(true)
    setError('')
    setResult(null)

    // Try the real API first; fall back to frontend simulation if unavailable
    try {
      const res = await fetch('/api/transform-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmed }),
      })
      if (!res.ok) throw new Error('API unavailable')
      const data = await res.json()
      setResult(data)
      setTab('vision')
    } catch {
      // Simulate realistic delay then show frontend-generated response
      await new Promise((r) => setTimeout(r, 2200))
      setResult(generateFallback(trimmed))
      setTab('vision')
    } finally {
      setLoading(false)
    }
  }

  const applyExample = (ex: { url: string }) => {
    setUrl(ex.url)
    setUrlError('')
  }

  const exampleSites = [
    { label: 'Logistics / Distribution', url: 'https://www.logistics-example.com' },
    { label: 'Retail / Online Store',    url: 'https://www.store-example.com' },
    { label: 'E-Commerce',               url: 'https://www.ecommerce-example.com' },
  ]

  return (
    <div className="space-y-6">
      {/* Explanation */}
      <div className="p-5 rounded-xl border-l-4" style={{ background: 'rgba(0,212,255,0.04)', borderColor: '#00d4ff' }}>
        <div className="flex items-start gap-3">
          <Sparkles size={18} style={{ color: '#00d4ff', flexShrink: 0, marginTop: 2 }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>AI Website Transformer</div>
            <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
              Enter your current website URL. Our AI analyzes your industry and business processes to generate a concrete vision of how your company would look with data & AI solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="card p-5">
        <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Analyze your website</div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setUrlError('') }}
              onKeyDown={(e) => e.key === 'Enter' && handleTransform()}
              placeholder="https://www.yoursite.com"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-colors"
              style={{
                borderColor: urlError ? '#f87171' : 'var(--border-light)',
                background: 'var(--surface-0)',
                color: 'var(--text-primary)',
              }}
              onFocus={(e) => { if (!urlError) e.target.style.borderColor = '#00d4ff' }}
              onBlur={(e) => { if (!urlError) e.target.style.borderColor = 'var(--border-light)' }}
            />
          </div>
          <button
            onClick={handleTransform}
            disabled={loading || !url.trim()}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            style={{ background: '#00d4ff', color: 'var(--surface-0)' }}
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
            {loading ? 'Analyzing…' : 'Transform with AI'}
          </button>
        </div>

        {urlError && (
          <p className="text-xs mt-2" style={{ color: '#f87171' }}>{urlError}</p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest mr-1" style={{ color: 'var(--text-secondary)' }}>Examples:</span>
          {exampleSites.map((ex) => (
            <button
              key={ex.url}
              onClick={() => applyExample(ex)}
              className="text-xs px-2 py-0.5 rounded hover:opacity-80 transition-opacity"
              style={{ color: '#00d4ff' }}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="card p-10 text-center">
          <Loader2 size={28} className="animate-spin mx-auto mb-3" style={{ color: '#00d4ff' }} />
          <div className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Analyzing your site…</div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Identifying industry, processes and AI opportunities</div>
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div className="space-y-5">
          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl w-fit" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
            {[
              { key: 'vision',    label: 'Transformed vision' },
              { key: 'usecases', label: 'Use cases' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
                style={tab === t.key
                  ? { background: 'var(--surface-2)', color: '#00d4ff' }
                  : { color: 'var(--text-secondary)' }
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'vision' && (
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={16} style={{ color: '#00d4ff' }} />
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Your company with data & AI</div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{result.improved}</p>
                <div className="space-y-2">
                  {result.improvements.map((imp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: '#00d4ff', color: 'var(--surface-0)' }}>
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{imp}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,153,204,0.1) 100%)', border: '1px solid var(--border-neon)' }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--neon)' }}>
                  Investment estimate
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{result.estimate}</p>
              </div>
            </div>
          )}

          {tab === 'usecases' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.useCases.map((uc, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: 'rgba(0,212,255,0.07)', color: '#00d4ff' }}>
                      UC{String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{uc.description}</p>
                  <div className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,212,255,0.05)', color: '#00d4ff' }}>
                    📈 {uc.kpi}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Want to see this implemented in your company?</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>A 30-minute meeting is enough to validate the impact.</div>
            </div>
            <a href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-neon" style={{ background: '#00d4ff', color: 'var(--surface-0)' }}>
              Schedule a meeting <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
