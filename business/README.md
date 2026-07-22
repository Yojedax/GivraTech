# Givra Tech — Business Playbook

> **Mission:** Turn B2B customer data into revenue decisions that prevent churn, reactivate lost clients, and surface hidden growth — in 7 days.

**Website:** givratech.com.ar
**Primary Offer:** AI Growth Audit ($500–$1,500 USD)
**Primary Market:** E-commerce, Retail, Distribution — Latin America & International
**Status:** Pre-launch → First client in 30 days

---

## Executive Summary

Givra Tech is a productized data science consultancy run by a single operator with deep expertise in RFM segmentation, churn detection, address geolocation, and AI automation. The business model is built around a clear entry offer (AI Growth Audit), a proven delivery methodology, and a content + outreach machine that generates qualified leads without depending on paid advertising or platform virality.

**The core insight:** Most companies with 1,000+ customers are sitting on significant hidden revenue — in customers about to churn, in inactive segments ready to reactivate, and in data quality problems silently draining margins. The AI Growth Audit surfaces all of this in 7 days with a concrete action plan.

**Revenue path:**
- Month 1: $500–1,500 (first paid audit, possibly free first delivery for validation)
- Month 2: $3,000–8,000 (2–4 audits + first implementation project)
- Month 3: $8,000–15,000 (audits + implementations + first retainer)
- Month 6+: $10,000+ MRR (retainer base + productized delivery)

---

## Offer Ladder

| Tier | Name | Price | Timeline | Core Value |
|------|------|-------|----------|------------|
| Entry | AI Growth Audit | $500–$1,500 | 7 days | Diagnosis: know exactly what's wrong and what to do |
| Core | Growth Implementation | $3,500–$8,000 | 30–60 days | Build the systems that act on the audit findings |
| Recurring | Data Intelligence Retainer | $1,200–$2,000/mo | Ongoing | Monthly monitoring, alerts, and optimization |

---

## Repository Structure

```
/business
├── README.md                    ← You are here (executive overview)
│
├── /strategy
│   ├── positioning.md           ← Market positioning, niches, value prop, offer ladder, commercial messaging
│   └── icp.md                   ← Ideal customer profiles, scoring rubric, qualification questions
│
├── /offers
│   └── offer_ai_growth_audit.md ← Complete offer spec: deliverables, checklist, templates, pricing
│
├── /content
│   ├── content_ideas.md         ← 30 content ideas with hooks, platforms, angles, CTAs
│   ├── video_scripts.md         ← 10 ready-to-record short video scripts (60–90 sec)
│   ├── linkedin_posts.md        ← 10 complete LinkedIn posts with hooks and CTAs
│   ├── carousel_outlines.md     ← 5 full carousel outlines with slide-by-slide copy
│   └── content_calendar.csv     ← 4-week content calendar (20 pieces, April 2026)
│
├── /outreach
│   └── outreach_templates.md    ← Cold outreach templates (see offer_ai_growth_audit.md for email templates)
│
├── /agents
│   └── agents_spec.md           ← Complete agent architecture: MVP tier, Growth tier, n8n blueprints
│
├── /docs
│   ├── landing_copy.md          ← Full landing page copy (English + Spanish)
│   ├── 30day_plan.md            ← Week-by-week 30-day execution plan with daily tasks
│   ├── roadmap.md               ← 90-day business roadmap with revenue targets
│   └── launch_checklist.md      ← Pre-launch + launch week + first client + first delivery checklists
│
└── /prompts
    └── prompts_master.md        ← 8 ready-to-use Claude prompts for analysis and business ops
```

---

## Quick Start: What To Do First

**Today:**
1. Read `strategy/positioning.md` — internalize the ICP and value prop
2. Read `offers/offer_ai_growth_audit.md` — know the product you're selling
3. Set up intake form (Typeform) using the data request template
4. Optimize your LinkedIn profile with the commercial message from positioning.md

**This Week:**
1. Create the landing page using copy from `docs/landing_copy.md`
2. Build your first outreach list (25–50 LinkedIn leads matching ICP in `strategy/icp.md`)
3. Record your first short video using Script #1 or #10 from `content/video_scripts.md`
4. Send first 15 outreach messages using templates from `offers/offer_ai_growth_audit.md`

**This Month:**
1. Land first discovery call (target: Week 2)
2. Deliver first audit (free or discounted for validation — target: Week 3)
3. Close first paid client (target: Week 4)
4. Build first automation: Research Agent + Outreach Agent (see `agents/agents_spec.md`)

Follow the day-by-day plan in `docs/30day_plan.md`.

---

## Commercial Messaging

**English:**
> Most businesses with a customer database are watching revenue walk out the door — not because they have bad products, but because they can't see which customers are about to churn, which to reactivate, and where growth is hiding. Givra Tech delivers a complete AI-powered audit of your customer data in 7 days: RFM segmentation, churn risk detection, and a prioritized action plan that turns insights into revenue.

**Spanish:**
> La mayoría de las empresas con base de clientes están perdiendo ingresos sin saberlo — no porque tengan malos productos, sino porque no pueden ver qué clientes están por irse, cuáles reactivar, y dónde está el crecimiento escondido. Givra Tech entrega un análisis completo de tus datos de clientes en 7 días: segmentación RFM, detección de riesgo de churn, y un plan de acción priorizado que convierte insights en ingresos.

---

## Key Assets To Create (In Order)

| Priority | Asset | Where | Status |
|----------|-------|--------|--------|
| 1 | LinkedIn profile optimized | LinkedIn | ☐ |
| 2 | Landing page live | givratech.com.ar/audit | ☐ |
| 3 | Intake form (Typeform) | typeform.com | ☐ |
| 4 | First video recorded + published | TikTok/Instagram/LinkedIn | ☐ |
| 5 | First outreach sequence sent (25 leads) | LinkedIn DM | ☐ |
| 6 | First discovery call script ready | Your notes | ☐ |
| 7 | Audit delivery template ready | Google Slides/Notion | ☐ |
| 8 | Loom account set up | loom.com | ☐ |
| 9 | Research Agent built in n8n | n8n | ☐ |
| 10 | Outreach Agent built in n8n | n8n | ☐ |

---

## Backlog (Prioritized)

### P0 — Must do before first outreach
- [ ] Finalize pricing and scope
- [ ] Write landing page (copy is ready — deploy it)
- [ ] Set up LinkedIn profile with commercial messaging
- [ ] Create data intake form
- [ ] Build ICP lead list (25–50 prospects)

### P1 — Must do in Week 1
- [ ] Publish first content piece
- [ ] Send first 15 outreach messages
- [ ] Record first short video
- [ ] Book first discovery call

### P2 — Do in Week 2–3
- [ ] Build Research Agent (n8n)
- [ ] Build Outreach Personalization Agent (n8n)
- [ ] Deliver first audit (validation)
- [ ] Write first case study

### P3 — After first paying client
- [ ] Build Proposal Generator Agent
- [ ] Create Implementation offer page
- [ ] Start content calendar consistency
- [ ] Set up simple CRM (Airtable free)

### P4 — Month 2–3
- [ ] Script Writing Agent
- [ ] Content Repurposing Agent
- [ ] Weekly Reporting Agent
- [ ] First retainer conversation

---

## 30-Day Revenue Target

| Week | Goal | Revenue Target |
|------|------|----------------|
| Week 1 | First discovery call booked | $0 |
| Week 2 | First audit proposal sent | $0 |
| Week 3 | First audit delivered (validation) | $0–$500 |
| Week 4 | First paid client closed | $500–$1,500 |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| No replies to cold outreach | High | High | A/B test messages, personalize harder, try different ICP |
| First audit takes too long to deliver | Medium | Medium | Use prompts from prompts_master.md to speed analysis |
| Price objection | High | Medium | Offer entry tier ($500), frame as ROI |
| Data quality from client unusable | Low | High | Strict data requirements in intake form |
| Content gets no traction | High | Low | Content is not the primary channel — outreach is |

---

*Last updated: March 2026 | Version 1.0*
