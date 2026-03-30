import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "marketing",
    icon: "Target",
    title: "Marketing Models and Segmentation",
    tags: ["Marketing"],
    problem: "Marketing teams allocate budget uniformly without knowing which customers have the highest purchase potential or abandonment risk.",
    solution: "We build RFM segmentation models, propensity scoring, and behavioral clustering that enable personalized commercial actions.",
    deliverables: ["RFM model with actionable segments", "Purchase propensity score", "Segment tracking dashboard", "Action playbook by segment"],
    impact: "30-40% reduction in acquisition cost. 20% increase in campaign conversion.",

  },
  {
    id: "churn",
    icon: "UserCheck",
    title: "Churn Prediction and Retention",
    tags: ["Retention"],
    problem: "Companies lose customers without prior warning signals, responding reactively and too late.",
    solution: "Predictive abandonment models with 2-8 weeks advance notice, integrated into commercial management workflows.",
    deliverables: ["Churn predictive model (ML)", "Weekly at-risk customer list", "Individual risk score", "Action recommendation per customer"],
    impact: "Recovery of 15-25% of at-risk customers. Annual churn reduction of 8-18 percentage points.",

  },
  {
    id: "geo",
    icon: "MapPin",
    title: "Geolocation and Address Quality",
    tags: ["Geolocation"],
    problem: "Address databases with errors, duplicates, and inconsistent formats cause delivery failures, avoidable logistics costs, and unreliable coverage metrics.",
    solution: "Normalization, geocoding, and address quality scoring pipeline with complete traceability of each record.",
    deliverables: ["Quality score per address", "Normalized and geocoded address", "Database audit report", "Automatable pipeline"],
    impact: "60-80% reduction in failed deliveries due to address. Immediate improvement in customer database quality.",

  },
  {
    id: "logistica",
    icon: "Truck",
    title: "Logistics Optimization",
    tags: ["Logistics"],
    problem: "Delivery routes are designed manually or using historical criteria, without considering actual demand, vehicle constraints, or time windows.",
    solution: "Combinatorial optimization algorithms (VRP) that minimize distance, cost, and time while maintaining full coverage.",
    deliverables: ["Optimized routing model", "Dynamic vehicle assignment", "Scenario simulator", "Operational efficiency KPIs"],
    impact: "15-30% savings in logistics cost. 20% reduction in average delivery time.",

  },
  {
    id: "dashboards",
    icon: "BarChart3",
    title: "Dashboards and KPI Monitoring",
    tags: ["Analytics"],
    problem: "Decision-making relies on static reports with multi-day delays and no drill-down capability or automatic alerts.",
    solution: "Design and implementation of executive and operational dashboards connected to real-time data sources, with configurable alerts.",
    deliverables: ["Interactive executive dashboard", "Threshold-based automatic alerts", "Integration with existing data sources", "KPI documentation"],
    impact: "70% reduction in report preparation time. Decisions based on current data.",

  },
  {
    id: "ia",
    icon: "Bot",
    title: "AI and Agent Automation",
    tags: ["Artificial Intelligence"],
    problem: "High-volume repetitive tasks consume qualified team time: classification, summaries, responses, information extraction.",
    solution: "Design and implementation of AI agents with LLMs to automate workflows, integrated with existing company systems.",
    deliverables: ["Custom AI agent", "Integration with CRM / ERP / email", "Monitoring and control dashboard", "Team training"],
    impact: "Automation of 60-80% of repetitive tasks. Free up human capacity for higher-value work.",

  },
];
