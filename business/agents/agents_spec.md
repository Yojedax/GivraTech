# Agent Architecture Specification — Givra Tech

## SECTION 1: Architecture Overview

### Visual: Agent Deployment Tiers

```
┌─────────────────────────────────────────────────────────────┐
│                    ADVANCED TIER                            │
│              (Month 3+, 10+ clients)                        │
│  ICP Scorer | Content Strategy | Churn Predictor           │
└─────────────────────────────────────────────────────────────┘
                           ↑
┌─────────────────────────────────────────────────────────────┐
│                    GROWTH TIER                              │
│            (Month 2, after 3 clients)                       │
│  Script Writer | Content Repurposer | Weekly Reporter      │
└─────────────────────────────────────────────────────────────┘
                           ↑
┌─────────────────────────────────────────────────────────────┐
│                    MVP TIER                                 │
│          (Week 1, immediate deployment)                     │
│  Research Agent | Outreach Personalization | Proposal      │
└─────────────────────────────────────────────────────────────┘
```

### Philosophy: MVP First, Scale Later

**Core Principles:**
1. **Revenue First** — Deploy agents that directly generate qualified leads and close deals before workflow automation
2. **Manual Before Automatic** — Build 1 happy client manually, then automate the playbook
3. **Leverage Over Build** — Use Claude API + n8n webhooks instead of building custom backend
4. **Minimize Maintenance** — No databases, no state management. Stateless agents processing structured inputs
5. **Measure Before Scaling** — Track time-saved and revenue-impact per agent before adding tier 2

### Tool Stack Decisions

| Tool | Why | Cost | Trade-off |
|------|-----|------|-----------|
| **Claude API** (Haiku for Research, Opus for creative outputs) | Best reasoning + creativity balance. Can handle complex reasoning. | $0.80/1M input, $4/1M output | Slightly higher token cost vs GPT-4o, but faster iteration |
| **n8n (self-hosted free)** | HTTP triggers, webhooks, no per-execution cost. Flexible logic. | Free | No built-in AI, need to pipe to Claude API |
| **Make.com (free tier)** | Fallback for Typeform/Airtable integrations if n8n lacks modules | Free | 1,000 ops/month cap |
| **Typeform** | Lead capture forms, embed in landing page, native n8n support | Free | Limited conditional logic |
| **Airtable (free)** | Lead database, agent output repository, sync to Typeform on update | Free | 100k API calls/month (enough for MVP) |
| **GitHub** (private) | Agent prompt version control, deployment tracking | Free | Requires manual sync from docs |
| **Loom** (free) | Record screen walkthroughs of first audit for social proof | Free | 25 video limit |

---

## SECTION 2: MVP Agent Tier (Implement First)

### AGENT 1: Research Agent

**Name:** Lead Intelligence Researcher
**Objective:** Generate a 1-page intelligence brief on a prospect company (size, industry, recent changes, likely pain points)
**Trigger:** Founder adds prospect domain to Airtable `Outreach` table
**Priority:** HIGH — output feeds into Outreach Personalization Agent

#### Input

```json
{
  "company_domain": "example.com",
  "company_name": "Example Inc",
  "target_decision_maker": "VP of Marketing or Chief Revenue Officer",
  "industry_guess": "SaaS or E-commerce (optional)"
}
```

#### Output

```
## Lead Brief: [Company Name]

**Company Snapshot**
- Industry: [detected from web research]
- Size: [employee count from LinkedIn, Crunchbase, or website]
- Location: [HQ location]
- Website: [URL]
- Tech Stack: [briefly, if detectable — look for CDP, analytics platforms, e-commerce engine]

**Recent Activity**
- [Hiring: X open roles in marketing/data/ops]
- [Funding: recent round raised (if startup)]
- [News: recent press or announcement]
- [Social: recent LinkedIn/Twitter activity from CEO/founders]

**Inferred Pain Points** (ranked by confidence)
1. [pain point 1]: Why this company likely has this problem
2. [pain point 2]: Why
3. [pain point 3]: Why

**Recommended Angle for Outreach**
[1-2 sentences on how to position Givra Tech audit for this specific prospect]

**Sources Checked**
- Google Search
- LinkedIn Company page
- Crunchbase
- Website footer/About page
```

#### System Prompt

```
You are Lead Intelligence Researcher for Givra Tech, a B2B data science consultancy.

Your job: Given a company domain and basic info, create a 1-page intelligence brief
that helps a founder decide whether to reach out and what angle to use.

INSTRUCTIONS:
1. Search for company information using available tools
2. Look for: company size, industry, recent news, hiring activity, decision-maker profiles
3. Infer 2-3 specific pain points based on company size/industry/stage
4. Suggest ONE specific angle to position an RFM/churn/geolocation audit
5. Keep output concise (max 400 words)

GUARDRAILS:
- Do NOT make up information. Flag uncertainty with "unconfirmed:"
- Do NOT recommend outreach if company size < 20 employees OR revenue < $1M (too early)
- Do NOT include contact info beyond public LinkedIn/website URLs
- Be specific: "raised Series A" is better than "well-funded startup"
- Focus only on information a founder would act on

OUTPUT FORMAT:
Use markdown. Sections: Company Snapshot | Recent Activity | Inferred Pain Points |
Recommended Angle | Sources Checked
```

#### Tools Needed
- WebSearch (perplexity, Brave, or n8n native HTTP to Google Custom Search)
- LinkedIn Company page scraper (n8n HTTP module)
- Crunchbase public data (if available; optional fallback)

#### Implementation: n8n Workflow

```
[Trigger] Airtable row added to "Research Queue" table
  ↓
[1] Extract fields: company_domain, company_name, target_role
  ↓
[2] HTTP GET: company website homepage (extract company size, industry, tech from footer/About)
  ↓
[3] WebSearch: "[company name] news" (find recent hiring, funding, press)
  ↓
[4] HTTP GET: LinkedIn company page (extract employee count, description, recent posts)
  ↓
[5] Claude API Call (Haiku model, ~4k context):
     Prompt: System prompt (above) + company data collected
     Output: markdown brief
  ↓
[6] Update Airtable "Research Queue" row:
     - Set field "Brief" to Claude output
     - Set field "Status" to "Ready for Outreach"
     - Timestamp completion
```

#### Rules & Guardrails
- Timeout: 60 seconds per research run (abort if any tool fails, flag for manual review)
- Skip companies with unclear domain or 404 website
- Never include personal email addresses or phone numbers
- Flag any company with revenue < $1M or < 20 employees (not ICP)

---

### AGENT 2: Outreach Personalization Agent

**Name:** First Message Composer
**Objective:** Write a personalized first message (LinkedIn DM or email) for a cold prospect using Research Agent output + message template
**Trigger:** Founder marks a Research Brief as "Ready to Outreach" in Airtable
**Priority:** HIGH — directly impacts reply rate

#### Input

```json
{
  "research_brief": "[output from Agent 1]",
  "prospect_name": "John Smith",
  "prospect_title": "Chief Marketing Officer",
  "prospect_company": "Example Inc",
  "channel": "linkedin_dm" | "email",
  "tone": "casual" | "professional",
  "include_case_study": true | false
}
```

#### Output

**LinkedIn DM:**
```
Hi John — saw Example Inc is hiring for a data role. Quick thought: if you're bringing
in data talent, you probably have customer data but no single source of truth for segments.

We just helped [similar company] fix this in a week using RFM segmentation. Cut their
acquisition cost 18% because they stopped burning budget on cold leads.

Worth a 20-min call? I can show you exactly what we'd look at.

—[Founder name]
```

**Email:**
```
Subject: RFM analysis for [company name] growth

Hi John,

I noticed Example Inc is scaling marketing ops. Most teams at your stage have customer
data spread across 3-4 tools with no single view of segment health.

We run a 1-week AI Growth Audit that builds a customer segmentation model with a specific
revenue impact number. [Similar company] went from "we think our LTV is X" to "we know it
is Y, which means we should focus on cohort Z."

If that's on your radar, I'm running a limited 5 audit slots this month at $500 each (normally
$1,500). Happy to talk through whether it's a fit.

Free 20-min call?

—[Founder name]
```

#### System Prompt

```
You are First Message Composer for Givra Tech, a B2B data science consultancy.

Your job: Write a personalized cold outreach message that:
1. Shows you've done research on the prospect
2. Mentions a specific problem they likely have (from Research Agent brief)
3. Hints at a solution/result without being salesy
4. Includes a clear next step (call invite)
5. Keeps tone conversational, never robotic

INSTRUCTIONS:
1. Read research_brief and extract 1-2 most relevant pain points
2. Reference recent company activity (hiring, funding, news) from brief
3. If include_case_study=true, mention a hypothetical similar company result (e.g., "helped a
   [similar company] cut churn by X%")
4. Keep message short: LinkedIn DM max 150 words, email max 200 words
5. End with a clear CTA: "20-min call this week?" or "Worth a conversation?"

GUARDRAILS:
- NO generic templates. Every message must reference something from the research brief
- NO hype language: "revolutionary", "game-changing", "disrupting"
- NO discount language: Never lead with price
- NO urgent/scarcity language: "spots filling up" is okay, "only 2 left" feels spammy
- Tone MUST match channel: LinkedIn DM = casual, email = slightly more professional
- ALWAYS use first-person: "I noticed..." not "We've found that..."
- NEVER make up case study numbers; use "helped a [similar company]..." or "typically see..."

OUTPUT FORMAT:
If channel=linkedin_dm:
---
[SUBJECT: not needed]

[message body only, max 150 words]
---

If channel=email:
---
[SUBJECT: specific and curiosity-driven, max 8 words]

[message body, max 200 words]
---
```

#### Tools Needed
- Claude API (Opus for creative writing)
- Access to Research Brief data from Airtable

#### Implementation: n8n Workflow

```
[Trigger] Airtable row updated: "Status" = "Ready to Outreach"
  ↓
[1] Extract fields: research_brief, prospect_name, prospect_title, channel, tone
  ↓
[2] Claude API Call (Opus model, ~2k context):
     Prompt: System prompt (above) + research brief + prospect data
     Output: personalized message
  ↓
[3] Update Airtable row:
     - Set field "Message" to Claude output
     - Set field "Ready to Send" to true
     - Timestamp
  ↓
[4] Notification to Founder: "Message ready for review at [link]"
```

#### Rules & Guardrails
- Always output both channel variant if prospect has both email + LinkedIn
- Founder reviews and can edit before sending (n8n should output to Airtable, not auto-send)
- If research_brief is incomplete, abort and ask founder to complete it
- Track which messages get replies using Airtable lookup formula

---

### AGENT 3: Proposal Generator Agent

**Name:** Audit Proposal Writer
**Objective:** Generate a professional 1-2 page proposal document after discovery call, based on call notes and audit scope
**Trigger:** Founder completes discovery call, adds call notes + scope to Airtable
**Priority:** HIGH — converts call into signed engagement

#### Input

```json
{
  "company_name": "Example Inc",
  "discovery_call_notes": "[Founder's notes from call: 3-5 bullet points on company situation, goals, data challenges]",
  "prospect_name": "John Smith",
  "prospect_email": "john@example.com",
  "prospect_title": "CMO",
  "audit_scope": "RFM segmentation + churn analysis" | "Churn analysis only" | "Full audit (RFM + churn + geo)",
  "price_tier": "$500" | "$1,500",
  "timeline": "7 days",
  "founder_name": "Your Name"
}
```

#### Output

```
[PDF or markdown with this structure]

---

GIVRA TECH
AI Growth Audit Proposal

---

**PROPOSAL FOR: Example Inc**
Prepared for: John Smith, Chief Marketing Officer
Date: [today]
Valid until: [7 days from today]

---

## SITUATION

[1 paragraph summarizing what John told you in the call, using his language]

**Your Goal:** [state it back to them in 1 sentence]

---

## OUR APPROACH

The AI Growth Audit is a 7-day engagement where we:
1. Ingest your customer data (from your CDP, database, or CSV)
2. Run automated RFM and churn analysis using machine learning models
3. Deliver a strategic brief with: segment definitions, revenue impact of each segment,
   and 3-5 specific actions ranked by ROI

**Scope for this engagement:**
- [Specific analysis #1: e.g., "Customer lifetime value segmentation"]
- [Specific analysis #2: e.g., "Churn risk modeling by cohort"]
- [If applicable: "Address geolocation + delivery zone optimization"]

---

## DELIVERABLES

You receive:
1. **Segmentation Model** — Customer segments defined by RFM, revenue, and churn risk.
   Includes exact counts per segment and how to identify them in your data.
2. **Strategic Report** — 1-page summary of findings, the revenue impact of each segment,
   and the #1 action you should take this month.
3. **60-min Strategy Call** — We walk you through the model, answer questions, and help
   you prioritize what to do first.

---

## INVESTMENT & TIMELINE

**Fee:** $[500 or 1,500]
**Timeline:** 7 days from data handoff
**Payment:** 50% upfront, 50% upon delivery (or net-15 invoice if preferred)

**Next Steps:**
1. You sign this proposal and send data (usually [number] rows from your [system])
2. We deliver results by [specific date]
3. We debrief on [call time]

---

## ABOUT GIVRA TECH

We help e-commerce and distribution companies find growth through data.
RFM segmentation, churn detection, and geolocation analysis — all automated and actionable.

---

Questions? Reply to this email or call [founder phone].

—[Founder name]
```

#### System Prompt

```
You are Audit Proposal Writer for Givra Tech, a B2B data science consultancy.

Your job: Turn discovery call notes into a professional 1-page proposal that:
1. Confirms understanding of their problem (builds trust)
2. Clearly defines scope and deliverables (prevents scope creep)
3. Includes pricing and timeline (closes the deal)
4. Sounds credible but not corporate (matches founder voice)

INSTRUCTIONS:
1. Read discovery_call_notes and extract: their main pain point, current situation, goal
2. Restate their situation back using their language (shows you listened)
3. Define exact scope: which analyses you'll run, which deliverables they get
4. Make deliverables specific and tangible, not abstract
5. Include timeline and pricing clearly
6. Add a "next steps" section that removes friction
7. Keep tone professional but direct (no corporate jargon, no fluff)

GUARDRAILS:
- DO use their language and company context from discovery call
- DO make deliverables specific: "Segment definitions with revenue per segment" not "analytics"
- DO include pricing upfront (remove fear of ambiguity)
- DO include a validity date (7 days creates urgency)
- DO NOT overpromise: "we'll grow your revenue 30%" — say "we'll show you which segment
  to focus on first"
- DO NOT include legal jargon or 10-page contracts
- DO NOT use generic case studies (you probably don't have any yet)
- Format: markdown or clean text, <500 words total

OUTPUT FORMAT:
Markdown, structured as shown in "Output" section above. Start with [PROPOSAL] header,
end with founder name.
```

#### Tools Needed
- Claude API (Opus for professional writing)
- Airtable data lookup (prospect data)

#### Implementation: n8n Workflow

```
[Trigger] Airtable row added to "Proposals to Generate" table
  ↓
[1] Extract fields: company_name, discovery_notes, prospect_name, scope, price_tier, timeline
  ↓
[2] Claude API Call (Opus model, ~3k context):
     Prompt: System prompt (above) + call notes + scope
     Output: markdown proposal
  ↓
[3] Format as PDF (using n8n markdown-to-PDF or output raw markdown)
  ↓
[4] Update Airtable:
     - Set field "Proposal Generated" to true
     - Set field "Proposal Draft" to link to file (store in GitHub gist or Dropbox)
     - Set field "Status" to "Ready for Review"
  ↓
[5] Notification: "Proposal ready to review: [link]"
```

#### Rules & Guardrails
- Abort if discovery_call_notes is < 50 characters (too vague)
- Always include pricing (no vague "contact us")
- Timeline is always 7 days (fixed, non-negotiable)
- Founder must review and edit before sending
- Once sent, update Airtable status to "Sent" with send date

---

## SECTION 3: Growth Agent Tier (Implement After 3 Clients)

### AGENT 4: Script Writing Agent

**Name:** Content Script Generator
**Objective:** Write complete, ready-to-record scripts for Loom videos or LinkedIn posts
**Trigger:** Founder inputs content idea + platform + tone to Typeform

#### Input

```json
{
  "content_idea": "How RFM segmentation saved a SaaS company $50k/month in wasted ad spend",
  "platform": "loom" | "linkedin_carousel" | "email_body",
  "duration_seconds": 180,
  "tone": "educational" | "story-driven" | "technical",
  "include_case_study": true | false,
  "cta": "book a call" | "download guide" | "none"
}
```

#### Output (Loom script example)

```
[LOOM SCRIPT: 3-min video on RFM segmentation ROI]

---

**INTRO (0-15 sec)**

[On camera, casual]
"Hey, it's [name]. I want to show you something that helped a SaaS company cut their
ad spend waste in half. It's called RFM segmentation, and I'm betting you've got customer
data sitting in your CDP right now that could do the exact same thing."

[Cut to screen share: dashboard mockup]

---

**HOOK (15-45 sec)**

[Voiceover + screen]
"Most e-commerce teams know they have high-value customers and low-value customers.
But they don't know:
1. Which customers are about to churn
2. Which segment is actually profitable
3. Where to spend marketing budget first

That's where RFM comes in. It's a three-variable model — Recency, Frequency, Monetary value —
that automatically puts your customers into buckets."

[Show visual: RFM matrix with colors]

---

**STORY (45-150 sec)**

[Voiceover, narrative]
"Last month, I ran an audit for a company doing $2M annual recurring revenue.
They were spending $50k/month on ads, but nobody knew if those dollars were going to
high-value or low-value segments.

After building their RFM model, we found out:
- 15% of their customers generated 60% of revenue (these are your high-frequency buyers)
- 30% were at churn risk (hadn't bought in 90 days)
- 20% were one-time buyers (unlikely to return, not worth re-targeting)

By shifting 40% of their ad budget from the one-time buyers to the high-frequency segment,
they dropped their cost per acquisition by 35% and increased lifetime value per customer
by 22%."

[Show chart: CAC before/after]

"That's $50k/month saved. Just from knowing who to focus on."

---

**CTA (150-180 sec)**

[Back on camera]
"If you've got customer data and you're guessing on marketing spend, an RFM model takes
the guesswork out.

I run 7-day AI Growth Audits for e-commerce and distribution companies. We build your
model and show you exactly which segment to focus on first.

If you want to see how this could work for your business, link in the bio to book a 20-min call."

[End screen: "Book a strategy call" button graphic]

---

**NOTES FOR RECORDING:**
- Tone: Conversational, like explaining to a peer over coffee
- Pacing: Speak slowly (you'll edit it out anyway, so pauses are fine)
- Visuals needed: RFM matrix graphic, before/after CAC chart
- No intro/outro required (Loom handles it)
```

#### System Prompt

```
You are Content Script Generator for Givra Tech.

Your job: Write a complete, ready-to-record script that:
1. Grabs attention in first 15 seconds
2. Tells a specific, believable story
3. References data or real outcomes (not generic advice)
4. Ends with a clear CTA
5. Fits the exact format (Loom, LinkedIn carousel, email)

INSTRUCTIONS:
1. Open with a hook: problem or curiosity gap (not "today I want to talk about...")
2. Structure: Hook → Context → Story → CTA
3. Use specific numbers and outcomes (helps credibility)
4. Pace: Speaking speed is ~150 words/minute. 3-min video = ~450 words max
5. Include [visual] and [voiceover] markers so founder knows what to show
6. Make it personal: "I" and "you", not "companies" and "businesses"

GUARDRAILS:
- NO generic advice: "Use data to make better decisions" is boring
- NO jargon unless explained: Define "RFM" in layman's terms
- NO fake numbers: If you don't have a real case study, use "typically" or "we see"
- NO sales language: "This one weird trick" or "limited spots available"
- ALWAYS tie back to founder's offer: RFM audit, churn detection, or geo analysis
- Scripts must be under stated duration (3 min = 450 words max)
- LinkedIn carousel: 5 slides, 1-2 sentences per slide

OUTPUT FORMAT:
Markdown. Sections: INTRO | HOOK | STORY/BODY | CTA | NOTES FOR RECORDING
Include timecodes for videos.
```

#### Tools Needed
- Claude API (Opus)

---

### AGENT 5: Content Repurposing Agent

**Name:** Multi-Channel Content Mixer
**Objective:** Take one piece of content (transcript, article, post) and generate 3-5 derivative pieces for different channels
**Trigger:** Founder uploads transcript or posts link to content

#### Input

```json
{
  "source_content": "[Loom transcript or YouTube URL or blog post URL]",
  "primary_channel": "Loom video",
  "target_channels": ["linkedin_post", "email_to_list", "carousel_outline"],
  "tone_override": "educational" | "none"
}
```

#### Output

```
## REPURPOSED CONTENT: RFM Segmentation for E-commerce

### 1. LINKEDIN POST (feed post, 3-4 min read)

"I just looked at a company's customer data and found something wild.

They have 1,000 customers. But their recent analysis lumped them all together.
So when marketing says 'optimize for CAC,' nobody knows: optimize which segment?

I ran an RFM analysis (Recency, Frequency, Monetary value) and found:
- 150 customers (15%) generate 60% of revenue
- 300 customers (30%) are at churn risk (haven't bought in 90 days)
- 550 customers (55%) are low-value but might grow

Suddenly the problem isn't "optimize for CAC globally." It's:
- Spend 50% of budget on segment #1 (keep them, increase frequency)
- Spend 30% on segment #2 (win-back campaign)
- Spend 20% on segment #3 (test and learn)

That's the power of segmentation. Most e-commerce teams have customer data but no
way to act on it.

If this is you, I run a 7-day audit that builds your model and shows you exactly
which segment to focus on first. DM me."

---

### 2. EMAIL TO LIST (subject + body)

**Subject:** The one metric that cut our ad spend waste in half

**Body:**

Hey [First name],

I want to share something that helped a client cut marketing waste by 35%.

Most e-commerce teams have customer data. Not segmented data. Just a blob of 1,000 customers
in a database.

When you segment by RFM (Recency, Frequency, Monetary value), something changes. You stop
optimizing broadly and start optimizing per-segment:

- Top 15% of customers (high-value, repeat buyers): Double down here. Retention and
  frequency campaigns only.
- Middle 30% (active but not frequent): Win-back and frequency campaigns.
- Bottom 55% (one-time or inactive): Test and learn. Low spend.

Our client shifted ad budget based on these segments. CAC dropped 35%. Revenue per segment
increased 22%.

The kicker? It took one week to build the model. One week to answer "where should we focus?"

If you want to run this analysis for your e-commerce business, I'm opening 5 slots for
a 7-day AI Growth Audit this month. $500 to start.

Want to see if it's a fit?

Free 20-min call: [link]

—[Name]

---

### 3. CAROUSEL OUTLINE (LinkedIn carousel, 5 slides)

**Slide 1 (Hook)**
"Your customer data is lying to you.

Not on purpose. But if you're treating all 1,000 customers the same way, you're missing
the segmentation hiding in your data."

**Slide 2 (Problem)**
"Most e-commerce teams can't answer:
- Which 15% of customers generate 60% of revenue?
- Who's about to churn?
- Which segment should we focus on first?"

**Slide 3 (Solution intro)**
"Enter: RFM segmentation

Recency (when did they last buy?)
Frequency (how often do they buy?)
Monetary value (how much do they spend?)"

**Slide 4 (Result)**
"One client ran this analysis:
- Cut CAC 35%
- Increased LTV 22%
- Stopped wasting $50k/month on the wrong segment"

**Slide 5 (CTA)**
"Your data is already there. It just needs to be seen.

I run 7-day AI Growth Audits to build this model for you.

DM me to book a call."

---

**NOTES ON REPURPOSING:**
- LinkedIn post: 200-400 words, conversational, specific story
- Email: 150-250 words, benefit-focused, one CTA
- Carousel: 5 slides max, one idea per slide, Slide 1 = hook, Slide 5 = CTA
- All pieces reference the same core insight but emphasize different angles for each channel
```

#### System Prompt

```
You are Multi-Channel Content Mixer for Givra Tech.

Your job: Take one piece of content and adapt it for 3-5 different channels, each
optimized for that platform's format and audience behavior.

INSTRUCTIONS:
1. Parse source content: extract main idea, key story, specific outcomes
2. For each target channel, reformat to that platform's optimal format:
   - LinkedIn: Long-form story with specific data, ends with DM CTA
   - Email: Benefit-forward, 1-2 outcomes, link CTA
   - Carousel: 5 slides, one insight per slide, hook on slide 1, CTA on slide 5
3. Keep core message but adapt angle: LinkedIn emphasizes credibility, email emphasizes benefit,
   carousel emphasizes shareability
4. Each piece should work standalone (don't assume reader saw the other pieces)

GUARDRAILS:
- DO reuse data and numbers from source
- DO adapt headline/framing for each channel (LinkedIn = thought leadership, email = value prop)
- DO NOT repeat exact same text across channels (defeats repurposing purpose)
- DO NOT shorten so aggressively that message loses power
- LinkedIn post: max 500 words. Email: max 250 words. Carousel: 1-2 sentences per slide.

OUTPUT FORMAT:
Markdown. For each channel, include platform name as header, then content.
```

#### Tools Needed
- Claude API (Opus)
- Optional: YouTube transcript API or web scraper for URL content

---

### AGENT 6: Weekly Reporting Agent

**Name:** Growth Metrics Reporter
**Objective:** Ingest weekly metrics (outreach, replies, calls, revenue) and generate a markdown business report with insights
**Trigger:** Founder inputs weekly metrics via Airtable or Typeform every Friday

#### Input

```json
{
  "week_number": 1,
  "date_range": "Mar 24 - Mar 30, 2026",
  "outreach_sent": 12,
  "outreach_replied": 3,
  "discovery_calls_booked": 2,
  "discovery_calls_completed": 1,
  "proposals_sent": 1,
  "revenue_closed": 500,
  "revenue_pipeline": 2000,
  "notes": "[Founder's free-text notes on what went well and what didn't]"
}
```

#### Output

```
# GIVRA TECH: Weekly Growth Report
## Week 1 (Mar 24 - Mar 30, 2026)

---

## HEADLINE METRICS

| Metric | This Week | Target | Status |
|--------|-----------|--------|--------|
| Outreach Sent | 12 | 15 | ⚠️ -20% |
| Reply Rate | 25% (3/12) | 20% | ✓ +5% |
| Discovery Calls Booked | 2 | 2 | ✓ On target |
| Discovery Calls Completed | 1 | 2 | ⚠️ -50% |
| Proposals Sent | 1 | 1 | ✓ On target |
| Revenue Closed (YTD) | $500 | $1,500 by end of week | ⚠️ Behind schedule |
| Pipeline (active proposals) | $2,000 | - | ✓ On track |

---

## ANALYSIS

### What Worked
- Reply rate is 25%, 5 points above target. That [specific outreach angle] resonates.
- One completed call led to a $500 proposal. Qualification is solid.
- [From notes: what founder noted went well]

### What Didn't
- Outreach volume is 20% below target (12 vs 15). Likely cause: [from notes].
  Solution: [suggest action]
- One discovery call scheduled but not completed. Prospect reschedule? Follow-up required.
- [From notes: specific blocker]

### Priorities for Next Week
1. [Action 1]: Hit outreach volume target (15+ this week). This is the lead generator.
2. [Action 2]: Complete both scheduled discovery calls. Each call increases pipeline 40%.
3. [Action 3]: [Based on notes and blockers]

---

## PIPELINE FORECAST

**Active Proposals:** 1 @ $500
**Likely Close Rate:** 60-70% (conservative)
**Forecasted Revenue Week 2:** $300-350

**To hit $1,500 target by end of March:**
- Need 2-3 more proposals sent this week
- Implies 15-20 outreach + 25% reply rate

---

## CUMULATIVE PROGRESS

**March Revenue YTD:** $500 / $1,500 goal (33%)
**Trajectory:** On pace if outreach volume and reply rate stay at current levels

**Key Dependency:** Week 2 proposal conversion. If this week's proposals close, we hit month target.

---

## NOTES
[Founder's notes incorporated here, with context added]

---

*Next report: Friday, Mar 6*
```

#### System Prompt

```
You are Growth Metrics Reporter for Givra Tech.

Your job: Turn raw weekly metrics into a concise, actionable report that:
1. Shows current performance vs. target
2. Identifies what's working and what's not
3. Suggests specific priorities for next week
4. Forecasts revenue impact

INSTRUCTIONS:
1. Ingest all metric fields
2. Calculate rates (reply rate = replies / outreach, etc.)
3. Compare to target (implied: outreach 15/week, 20% reply, 2 calls/week, 1 proposal/week)
4. Flag anything >15% variance from target with ⚠️
5. Extract insights from founder's notes and tie to metrics
6. Suggest 2-3 specific actions for next week (not generic advice)
7. Show month-to-date cumulative progress toward $1,500 goal
8. Forecast next week's revenue based on current pipeline and close rate

GUARDRAILS:
- DO use specific numbers and percentages (makes report scannable)
- DO tie observations to actions ("reply rate is high because [angle], keep doing that")
- DO forecast conservatively (60-70% close rate, not 100%)
- DO acknowledge external factors (prospect reschedule is not a failure)
- DO NOT spin bad weeks as "learning" (be direct: we fell short and here's why)
- DO NOT make up missing data. If metric not provided, mark as [pending]
- Tone: analytical but optimistic. Honest about gaps, confident about path forward.

OUTPUT FORMAT:
Markdown. Sections: HEADLINE METRICS (table) | ANALYSIS | PRIORITIES | PIPELINE FORECAST |
CUMULATIVE PROGRESS | NOTES
```

#### Tools Needed
- Claude API (Haiku, lightweight)
- Airtable lookup (metrics storage)

#### Implementation: n8n Workflow

```
[Trigger] Typeform submitted: "Weekly Metrics" form
  ↓
[1] Extract all fields
  ↓
[2] Calculate derived metrics: reply_rate, proposal_sent_rate, pipeline_health
  ↓
[3] Pull previous week's metrics from Airtable for YTD calculations
  ↓
[4] Claude API Call (Haiku model, ~2k context):
     Prompt: System prompt + all metrics + founder notes
     Output: markdown report
  ↓
[5] Store in Airtable + GitHub (as weekly log)
  ↓
[6] Notification to Founder: Report generated, review and decide priorities
```

---

## SECTION 4: Advanced Agent Tier (Brief Spec Only)

### AGENT 7: ICP / Lead Scoring Agent

**Concept:** Ingest your past 5 closed deals + their data. Learn what profile converts.
Auto-score new prospects (LinkedIn profiles, website data, company signals) on likelihood
to buy.

**Trigger:** Weekly. Scores all new prospects added to Airtable since last run.

**Output:** Prospect added to "Lead Scoring" view with score 1-10 and reasoning ("High CAC,
recent hiring in data team, Series A stage — matches past winners").

**Implementation Dependency:** Need 5+ closed deals first to train the pattern recognition.

---

### AGENT 8: Content Strategy Agent

**Concept:** Ingest your past 3 months of content (Loom transcripts, LinkedIn posts, emails).
Analyze which topics/angles got best engagement. Suggest 3 new content ideas for next month
with predicted performance.

**Trigger:** Monthly. Pulls all published content + engagement metrics.

**Output:** Markdown doc with 3 content ideas ranked by predicted ROI (based on past patterns).

**Implementation Dependency:** Need 2+ months of content data to build pattern library.

---

## SECTION 5: Implementation Roadmap

| Agent | Phase | Est. Build Time | Prerequisite | Time Saved / Week | Revenue Impact |
|-------|-------|-----------------|--------------|------------------|-----------------|
| **Research Agent** | MVP (Week 1) | 4 hours | None | 30 min | High (enables outreach) |
| **Outreach Personalization** | MVP (Week 1) | 3 hours | Research Agent | 20 min | High (improves reply rate) |
| **Proposal Generator** | MVP (Week 1) | 2 hours | Outreach Agent | 15 min | High (closes deals) |
| **Script Writer** | Growth (Week 4) | 3 hours | 3+ clients | 60 min | Medium (content velocity) |
| **Content Repurposer** | Growth (Week 4) | 2 hours | Script Writer | 45 min | Medium (channel coverage) |
| **Weekly Reporter** | Growth (Week 5) | 2 hours | Metrics tracking | 30 min | Low (clarity only) |
| **ICP Scorer** | Advanced (Month 2) | 6 hours | 5+ closed deals | 45 min | High (targeting) |
| **Content Strategy** | Advanced (Month 3) | 4 hours | 12+ content pieces | 40 min | Medium (ideation) |

**Total Build Time (MVP Tier):** ~9 hours
**Total Time Saved (MVP, per week):** ~1 hour 5 minutes
**When to Hire Help:** After 5th client or when time-savings per week exceeds 3 hours

---

## SECTION 6: n8n Workflow Blueprints

### Blueprint 1: Research Agent Workflow (n8n)

```
NODE 1: Webhook Trigger
├─ Trigger: HTTP POST from Airtable automation or manual webhook
├─ Input: company_domain, company_name, target_role
└─ Output: parsed JSON with all three fields

NODE 2: HTTP Request (Company Website)
├─ GET request to https://[company_domain]
├─ Parse HTML response, extract text from meta tags and About section
├─ Output: company_size, industry_description, recent_news_from_footer
└─ On error: set to null, continue

NODE 3: WebSearch (via Brave API or n8n native)
├─ Query: "[company_name] + recent news + hiring"
├─ Extract: top 3 results with headlines and URLs
├─ Output: structured array of news items
└─ Timeout: 15 seconds

NODE 4: HTTP Request (LinkedIn Company Page)
├─ GET request to https://linkedin.com/company/[company_slug]
├─ Parse HTML, extract: employee count, company description, recent posts
├─ Output: structured data on company size and recent activity
└─ Rate limit: 1 request per 5 seconds

NODE 5: Claude API Call (Haiku)
├─ Model: claude-3-5-haiku-20241022
├─ Max tokens: 1024
├─ Prompt: [System prompt from Agent 1] + all collected data
├─ Output: markdown brief
└─ Timeout: 30 seconds

NODE 6: Update Airtable
├─ Update row with:
│  ├─ Field "Brief" = Claude output
│  ├─ Field "Status" = "Ready for Outreach"
│  ├─ Field "Timestamp Completed" = now()
│  └─ Field "Sources Checked" = array of URLs
└─ Output: confirmation

NODE 7: Notification (optional)
├─ Send Slack message: "Research brief ready: [company_name]"
└─ Include link to Airtable row
```

**Error Handling:**
- If NODE 2 (website) fails: continue (website may be down)
- If NODE 3 (search) fails: retry once, then continue
- If NODE 4 (LinkedIn) fails: skip, mark as "LinkedIn not found"
- If NODE 5 (Claude) fails: retry once, then notify founder
- If NODE 6 (Airtable) fails: store output to n8n internal DB, alert founder

---

### Blueprint 2: Outreach Personalization Workflow (n8n)

```
NODE 1: Webhook Trigger
├─ Trigger: Airtable automation when Status = "Ready to Outreach"
├─ Input: research_brief, prospect_name, prospect_title, channel, tone
└─ Output: structured JSON

NODE 2: Fetch Full Research Brief (if stored as link)
├─ GET request to research brief URL (stored in Airtable)
├─ Parse markdown content
└─ Output: full brief text

NODE 3: Claude API Call (Opus)
├─ Model: claude-3-5-opus-20241022
├─ Max tokens: 512
├─ Prompt: [System prompt from Agent 2] + research brief + prospect data
├─ Output: personalized message
└─ Timeout: 30 seconds

NODE 4: Format Output (conditional)
├─ If channel = "linkedin_dm": extract message body only
├─ If channel = "email": extract subject + body
└─ Output: formatted message ready to copy-paste

NODE 5: Update Airtable
├─ Update row with:
│  ├─ Field "Message" = formatted output
│  ├─ Field "Ready to Send" = true
│  ├─ Field "Message Generated Date" = now()
│  └─ Field "Channel" = channel type
└─ Output: confirmation

NODE 6: Notification
├─ Send Slack: "Message ready for [prospect_name]. Review: [link]"
├─ Include first 100 chars of message for quick preview
└─ Include button: "Copy message" (external action)
```

**Validation Rules:**
- Abort if research_brief empty
- Abort if prospect_name or prospect_title empty
- Warn if message length > 200 words for email (truncate or ask founder)
- Warn if message length > 150 words for LinkedIn DM

---

### Blueprint 3: Proposal Generator Workflow (n8n)

```
NODE 1: Webhook Trigger
├─ Trigger: Airtable automation when Status = "Generate Proposal"
├─ Input: company_name, discovery_notes, prospect_name, audit_scope, price_tier
└─ Output: structured JSON

NODE 2: Fetch Prospect Email (Airtable lookup)
├─ Query Airtable Contacts table: find row matching prospect_name
├─ Extract: email, company, title, phone (if available)
└─ Output: prospect contact data

NODE 3: Generate Validity Date
├─ Set proposal valid until: today + 7 days
└─ Output: ISO date string

NODE 4: Claude API Call (Opus)
├─ Model: claude-3-5-opus-20241022
├─ Max tokens: 2048
├─ Prompt: [System prompt from Agent 3] + all prospect/call data
├─ Output: markdown proposal
└─ Timeout: 45 seconds

NODE 5: Convert Markdown to PDF (optional)
├─ If output_format = "PDF":
│  ├─ Use markdown-to-pdf node or external API
│  └─ Output: PDF file
├─ Else: output raw markdown
└─ Store file path

NODE 6: Upload to Storage (GitHub Gist or Dropbox)
├─ Store proposal as markdown or PDF
├─ Create shareable link
└─ Output: public URL

NODE 7: Update Airtable
├─ Update row with:
│  ├─ Field "Proposal Generated" = true
│  ├─ Field "Proposal Link" = URL from NODE 6
│  ├─ Field "Proposal Draft Status" = "Ready for Review"
│  ├─ Field "Valid Until" = validity date
│  └─ Field "Generated Date" = now()
└─ Output: confirmation

NODE 8: Notification
├─ Send Slack: "Proposal ready for [company_name]. Review and send: [link]"
├─ Mention: "Valid for 7 days"
└─ Include button: "View on GitHub" or "Download PDF"
```

**Validation:**
- Abort if discovery_notes < 50 characters
- Warn if prospect_email not found (requires manual lookup)
- Abort if audit_scope not recognized
- Verify price_tier is $500 or $1,500

---

## IMPLEMENTATION CHECKLIST FOR MVP AGENTS

- [ ] Create n8n account and self-host option reviewed
- [ ] Claude API key obtained and stored in n8n secrets
- [ ] Airtable base created with tables: Outreach, Research Queue, Prospects, Proposals
- [ ] Research Agent: tested with 3 sample companies
- [ ] Outreach Personalization Agent: tested with 3 messages, founder reviews tone
- [ ] Proposal Generator Agent: tested with mock discovery data
- [ ] All three agents integrated into Airtable automations
- [ ] Founder runs dry run: end-to-end from company domain to proposal link
- [ ] Error handling tested: mock failures for each node
- [ ] Time per run tracked: Research (should be <60 sec), Personalization (<30 sec), Proposal (<45 sec)

**Total setup time: ~6 hours**
**First live test: Day 3 of implementation**
**Production launch: Day 5**
