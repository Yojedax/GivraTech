export const services = [
  {
    id: 'marketing',
    icon: '◎',
    title: 'Marketing Models & Segmentation',
    problem: 'Generic campaigns burn budgets. Without intelligent segmentation, customer acquisition cost scales and conversion drops.',
    solution: 'Scoring models, RFM segmentation, and purchase propensity that identify who to reach, with what message, and when.',
    deliverables: ['Propensity scoring model', 'Automated RFM segmentation', 'Campaign performance dashboard', 'API for integration'],
    impact: 'Up to 35% reduction in customer acquisition cost. Conversion increase in segmented campaigns from 2x to 4x.',
    tags: ['ML', 'Segmentation', 'ROI'],
  },
  {
    id: 'retencion',
    icon: '◈',
    title: 'Churn Prediction & Retention',
    problem: 'Retaining a customer costs 5x less than acquiring one. Yet most companies act too late.',
    solution: 'Predictive churn models that identify early abandonment signals and suggest personalized actions by customer.',
    deliverables: ['Churn prediction model', 'Customer risk score', 'Automatic recommended actions', 'Real-time alerts'],
    impact: '20-40% reduction in churn rate. Recovery of at-risk revenue before losses materialize.',
    tags: ['Retention', 'AI', 'CRM'],
  },
  {
    id: 'geo',
    icon: '◉',
    title: 'Geolocation & Address Quality',
    problem: 'Incorrect addresses cause failed deliveries, costly returns, and bad data that contaminates downstream analysis.',
    solution: 'Normalization and geocoding pipeline that validates, corrects, and enriches each address with coordinates, confidence score, and source.',
    deliverables: ['Address normalization engine', 'Per-record confidence score', 'Database quality audit', 'Real-time REST API for integration'],
    impact: 'Up to 94% validation rate. 60% reduction in failed deliveries. Clean, georeferenced customer database.',
    tags: ['Data', 'Quality', 'Geocoding'],
  },
  {
    id: 'logistica',
    icon: '◆',
    title: 'Logistics Optimization',
    problem: 'Manual routes cause fuel overconsumption, underutilized vehicles, and missed delivery windows.',
    solution: 'Route optimization and load assignment algorithms that minimize distance, time, and cost while respecting operational constraints.',
    deliverables: ['Optimized routing engine', 'Real-time operations dashboard', 'Scenario simulator', 'Fleet system integration'],
    impact: '30-40% reduction in logistics costs. 25% increase in fleet utilization. More deliveries with the same vehicles.',
    tags: ['Optimization', 'Logistics', 'Routes'],
  },
  {
    id: 'dashboards',
    icon: '▣',
    title: 'Dashboards & KPI Monitoring',
    problem: 'Data exists but scattered across silos. Without a unified view, decisions are made late with incomplete information.',
    solution: 'Data pipelines + executive dashboards that consolidate heterogeneous sources into one actionable, real-time view.',
    deliverables: ['Unified data architecture', 'Executive and operational dashboards', 'Automatic threshold alerts', 'Automated export and reporting'],
    impact: 'From days to minutes in report generation. Decisions based on current data, not intuition.',
    tags: ['Analytics', 'BI', 'Real-time'],
  },
  {
    id: 'agentes',
    icon: '◬',
    title: 'AI Automation & Agents',
    problem: 'High-volume repetitive tasks consume team time that should focus on higher-value decisions.',
    solution: 'Custom AI agents that automate complex workflows: analysis, classification, and information synthesis.',
    deliverables: ['Custom AI agents', 'Integration with existing systems', 'Supervision and control panel', 'Documentation and knowledge transfer'],
    impact: '70-90% automation of repetitive operational tasks. Error reduction and response times from hours to seconds.',
    tags: ['Generative AI', 'Agents', 'Automation'],
  },
]

export const industries = [
  { id: 'logistica', name: 'Logistics & Distribution', icon: '🚚', description: 'We optimize fleets, routes, and delivery processes to reduce costs and improve service levels.', useCases: ['Route optimization', 'Demand prediction', 'Fleet control', 'Operational KPIs'] },
  { id: 'retail', name: 'Retail & Distribution', icon: '🏪', description: 'We segment customers, predict demand, and optimize product mix to maximize margins.', useCases: ['RFM & segmentation', 'Stock forecasting', 'Dynamic pricing', 'Basket analysis'] },
  { id: 'ecommerce', name: 'E-Commerce', icon: '🛒', description: 'We reduce abandonment, improve conversion, and activate the right users at the right time.', useCases: ['Churn prediction', 'Recommendations', 'Address quality', 'Campaign attribution'] },
  { id: 'marketing', name: 'Marketing Teams', icon: '📊', description: 'We transform campaign budgets into measurable conversions with propensity models and smart audiences.', useCases: ['Propensity scoring', 'Dynamic segmentation', 'Campaign ROI', 'Look-alike audiences'] },
  { id: 'customer', name: 'Customer Analytics', icon: '👥', description: 'We build a 360° customer view that enables personalized experiences and anticipates needs.', useCases: ['Customer journey', 'LTV prediction', 'Predictive NPS', 'Abandonment signals'] },
  { id: 'operaciones', name: 'Operations', icon: '⚙️', description: 'We automate processes, detect inefficiencies, and monitor operational KPIs in real-time.', useCases: ['Workflow automation', 'Anomaly detection', 'Management control', 'Executive reporting'] },
]

export const testimonials = [
  { id: 'T01', name: 'Hernán Villanueva', role: 'Commercial Director', company: 'Distribuidora Atlántica', industry: 'Logistics', quote: 'In three months we went from making intuition-based decisions to having a real-time alerts dashboard. The reduction in logistics costs was immediate and measurable.' },
  { id: 'T02', name: 'Marcela Ríos', role: 'Marketing Manager', company: 'RetailNow Argentina', industry: 'Retail', quote: 'The segmentation model let us identify exactly which customers to call before they left. Churn rate dropped 28% in the first quarter.' },
  { id: 'T03', name: 'Pablo Acosta', role: 'CTO', company: 'E-Commerce Express', industry: 'E-Commerce', quote: 'What we valued most was that the team understands both data and business. They didn\'t deliver a model, they delivered a solution our team could use from day one.' },
]

export const faqs = [
  { question: 'Do we need perfectly organized data to get started?', answer: 'No. Most of our projects begin with a data quality assessment. Part of our work is cleaning, structuring, and enriching existing information before building any models.' },
  { question: 'How long does it take to see results?', answer: 'Depending on the project, first quick wins can be observed between 4-8 weeks. We prioritize delivering incremental value from the first iterations, not at the end of a long project.' },
  { question: 'Do solutions integrate with our current systems?', answer: 'Yes. We design solutions to integrate with existing systems: CRM, ERP, e-commerce platforms, etc. We deliver APIs, connectors, and documentation to facilitate adoption.' },
  { question: 'Do you work with companies that don\'t have an internal data team?', answer: 'It\'s our primary use case. We act as the company\'s external data team: from infrastructure to models to visualization, covering the entire stack.' },
  { question: 'How is project ROI measured?', answer: 'Before starting, we jointly define impact KPIs: cost savings, conversion increase, churn reduction, etc. All solutions are designed to be measurable from the start.' },
]

export const techStack = [
  { name: 'Python', category: 'Languages' }, { name: 'SQL', category: 'Languages' },
  { name: 'scikit-learn', category: 'ML' }, { name: 'XGBoost', category: 'ML' }, { name: 'PyTorch', category: 'ML' },
  { name: 'LangChain', category: 'Generative AI' }, { name: 'OpenAI / Anthropic', category: 'Generative AI' },
  { name: 'dbt', category: 'Data Engineering' }, { name: 'Airflow', category: 'Data Engineering' },
  { name: 'BigQuery', category: 'Cloud' }, { name: 'Snowflake', category: 'Cloud' }, { name: 'AWS', category: 'Cloud' },
  { name: 'Looker Studio', category: 'Visualization' }, { name: 'Power BI', category: 'Visualization' },
  { name: 'Next.js', category: 'Frontend' },
]
