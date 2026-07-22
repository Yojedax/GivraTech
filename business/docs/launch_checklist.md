# Launch Checklist — Givra Tech

---

## PRE-LAUNCH CHECKLIST (Must Complete Before First Outreach)

Complete this checklist fully before sending your first cold message. These items are blocking.

### OFFER & POSITIONING

- [ ] **Audit scope finalized:** What exactly do you deliver? (RFM + churn + geo? Or just RFM + churn?)
- [ ] **Pricing decided:** Entry ($500) and Standard ($1,500) tiers defined and documented
- [ ] **ICP locked:** Target company size (e.g., $1M–20M ARR), industries (e-commerce, distribution), geographies (LatAm + USA)
- [ ] **Pain points identified:** Top 3 problems your ICP has (be specific: "Can't tell which customers will churn" not "data problems")
- [ ] **Unique angle captured:** Why choose Givra Tech vs. hiring a consultant or buying BI tool? (1-sentence answer, for your reference)
- [ ] **Audit outcome statement written:** What will they know/be able to do after your audit? (e.g., "Identify your top-value segment and why")
- [ ] **Objection handling planned:** Write 1-sentence answers to these objections:
  - "I don't have data ready"
  - "How do I know this works?"
  - "What if you find nothing useful?"
  - "How is this different from [competitor]?"
  - "I need to discuss with my team"

### INFRASTRUCTURE & TOOLS

- [ ] **GitHub private repo created:** Backup location for prompts, agents, playbooks
- [ ] **Airtable base created** with these tables:
  - [ ] Prospects (fields: company name, contact name, email, LinkedIn, industry, size, outreach date, source)
  - [ ] Outreach (fields: prospect ID, message channel, send date, reply date, status)
  - [ ] Research Queue (fields: company domain, research brief, status)
  - [ ] Proposals (fields: prospect ID, proposal date, amount, status)
  - [ ] Meetings (fields: prospect ID, call date, notes, outcome)
- [ ] **n8n account created** and Research Agent workflow tested
- [ ] **Claude API key obtained** and stored securely (in n8n secrets, not plaintext)
- [ ] **Email domain + professional address set up:** (e.g., founder@givrateach.com or your name)
- [ ] **Calendly account created** for discovery calls (link in every outreach message)
- [ ] **Gmail/email configured** to send from your professional address
- [ ] **Slack workspace** created (or use existing), n8n webhook configured for notifications
- [ ] **Data processing agreement (DPA) drafted or template found:** You'll need this before taking on clients
- [ ] **Terms of Service + Privacy Policy** (use template, customize for your business) — required before sending formal proposals

### CONTENT

- [ ] **Landing page written and deployed:** GitHub Pages, Carrd, or simple HTML
  - [ ] Hero section with headline, subheadline, CTA
  - [ ] Problem section (3-5 specific pain points)
  - [ ] Solution section (what audit is, why it's different)
  - [ ] Pricing section
  - [ ] Trust line / guarantees
- [ ] **Landing page is live and shareable:** URL works, no 404s, mobile-responsive
- [ ] **One-pager PDF created** ("The AI Growth Audit" — downloadable from landing page)
- [ ] **Email templates created:**
  - [ ] Cold email template (customize for each prospect but same structure)
  - [ ] First follow-up email (after 3 days, no reply)
  - [ ] Second follow-up email (after 7 days, still no reply)
  - [ ] Discovery call confirmation email
  - [ ] Proposal cover email
- [ ] **Discovery call script written** (5–7 key questions to ask, listen for pain points)
- [ ] **LinkedIn profile optimized:** Headline mentions "AI" + "data" + "growth", photo updated, tagline mentions audit
- [ ] **Loom video recorded:** 3-min "What You'll Get" overview (to send to prospects)
- [ ] **About/credentials statement written:** 2–3 sentence bio for email signatures and landing page (builds credibility)

### OUTREACH PREPARATION

- [ ] **First 20 target prospects researched:** Names, emails, LinkedIn URLs, company info (use Prospeo, RocketReach, or manual search)
- [ ] **Prospect database created:** Add to Airtable Prospects table
- [ ] **LinkedIn connection requests sent:** 10–20 prospects added as connections (wait 1 week before messaging)
- [ ] **Company research done:** For each prospect, one-liner on why you'd reach out to them (personalization angle)
- [ ] **Outreach messaging tested:** Show 3 draft emails to 1–2 trusted peers, get feedback on tone/clarity
- [ ] **Reply capture plan:** How will you track replies? (Gmail filters, Airtable automations, manual check 2x/day?)
- [ ] **Response time plan:** Commit to responding to all inbound inquiries within 24 hours

### GITHUB REPO

- [ ] **README.md created** with:
  - [ ] Overview of Givra Tech
  - [ ] Agent architecture diagram
  - [ ] Link to agents_spec.md
  - [ ] Quick setup guide (n8n + Airtable)
- [ ] **agents/ folder** with:
  - [ ] agents_spec.md (full specification)
  - [ ] Agent prompts (in separate .txt files, versioned)
- [ ] **docs/ folder** with:
  - [ ] landing_copy.md
  - [ ] 30day_plan.md
  - [ ] roadmap.md
  - [ ] launch_checklist.md
  - [ ] discovery_call_script.md
- [ ] **.gitignore created:** Include API keys, secrets, personal data
- [ ] **Git repo initialized and first commit:** All files committed, pushed to GitHub

### FINAL CHECKS

- [ ] **Test the full workflow:** Domain → research agent → personalization agent → proposal agent (dry run)
- [ ] **All tools connected:** Airtable ↔ n8n ↔ Claude API, no broken links
- [ ] **n8n error handling tested:** What happens if a tool fails mid-workflow?
- [ ] **Email deliverability checked:** Send test email to yourself from your professional address, goes to inbox (not spam)
- [ ] **Landing page SEO basics:** Title tag, meta description, H1 heading all filled in
- [ ] **Pricing stated clearly:** No vague "contact us" — prices visible on landing page and in every email
- [ ] **Legal basics covered:**
  - [ ] You own the model (not the cloud, not the code — the output/segments)
  - [ ] Client data is confidential and securely handled
  - [ ] Scope is clearly defined (what's included, what's not)

---

## LAUNCH WEEK CHECKLIST (Days 1–7)

Do these tasks in order. Each day has a focus. Don't move to Day 2 until Day 1 is done.

### DAY 1 (Monday): Setup Verification

**Morning (2 hours):**
- [ ] Start n8n server / verify all 3 agents load without errors
- [ ] Test Research Agent workflow: input 1 real company domain, see if output generates
- [ ] Test Airtable-n8n connection: trigger workflow from Airtable, confirm it runs
- [ ] Verify Claude API is working (check billing, make test call)

**Afternoon (1 hour):**
- [ ] Deploy landing page: verify it's live and mobile-responsive
- [ ] Test landing page form submission (if Typeform embedded)
- [ ] Check email setup: send test email from professional address to personal email

**Evening (30 min):**
- [ ] Review discovery call script one more time, memorize key questions
- [ ] Set reminder: "Week 1 KPI check: Day 7 evening"

### DAY 2 (Tuesday): Airtable & Outreach Setup

**Morning (1 hour):**
- [ ] Import first 20 target prospects into Airtable Prospects table
- [ ] Create Airtable view: "Ready to Outreach" (filter by status = cold, not messaged yet)
- [ ] Verify Calendly link works (add to email signature template)

**Afternoon (2 hours):**
- [ ] Research first 10 prospects: pull LinkedIn profiles, company info
- [ ] Add notes to Airtable: "Why we should reach out to [company]" for each
- [ ] Write 3 draft cold emails, share with 1 peer for feedback

**Evening (1 hour):**
- [ ] Finalize first batch of 10 emails (incorporate feedback)
- [ ] Schedule them for send (either today or tomorrow morning)

### DAY 3 (Wednesday): First Outreach Sent

**Morning (2 hours):**
- [ ] Send first 5 cold emails (manually, not automated — you need to monitor)
- [ ] Verify they landed in prospects' inboxes (not your testing, but if possible)
- [ ] Update Airtable: "Outreach" table, mark as sent with timestamp

**Afternoon (1 hour):**
- [ ] Send 5 LinkedIn DMs to first batch of prospects
- [ ] Update Airtable for each message sent
- [ ] Create Slack notification: track incoming replies

**Evening (30 min):**
- [ ] Monitor replies (expect 0–1 on first day)
- [ ] Check spam folder, verify emails aren't bouncing

### DAY 4 (Thursday): Content & Iteration

**Morning (1 hour):**
- [ ] Analyze first batch of sends: which emails resonated? (gauge from reply content, not just count)
- [ ] Record 3-min Loom video: "What is the AI Growth Audit" (use script)

**Afternoon (1.5 hours):**
- [ ] Send 5 more emails (adjust messaging based on Day 3 feedback)
- [ ] Send 5 more LinkedIn DMs
- [ ] Update Airtable

**Evening (30 min):**
- [ ] Review replies (if any). Reply to all same-day if questions.
- [ ] Note objections / questions for future messaging

### DAY 5 (Friday): Momentum & Follow-up

**Morning (1.5 hours):**
- [ ] Send final batch of 5–10 emails from first 20 prospects
- [ ] Send corresponding LinkedIn DMs
- [ ] Update Airtable

**Afternoon (1 hour):**
- [ ] Create first follow-up email template for non-responders
- [ ] Review replies received so far: any discovery calls booked? Document tone/questions.

**Evening (30 min):**
- [ ] Send Slack notification: "Week 1 outreach summary"
- [ ] Update personal notes: "What's working so far?"

### DAY 6 (Saturday): Research & Expansion

**Morning (1.5 hours):**
- [ ] Research next batch of 15–20 prospects (geographies, industries, company size)
- [ ] Add to Airtable
- [ ] Note "outreach angle" for each (why Givra Tech is relevant to them)

**Afternoon (30 min):**
- [ ] Review all replies from Week 1
- [ ] Create simple tracking: reply rate %, discovery calls booked

**Evening (optional):**
- [ ] Rest. You've done 10+ hours of work this week.

### DAY 7 (Sunday): Week 1 Review & Plan Week 2

**Morning (1 hour):**
- [ ] Pull Airtable report: How many outreach? How many replies? How many calls booked?
- [ ] Compare to target: 50+ messages, 15–20% reply rate (7–10 replies), 1–2 calls booked
- [ ] Analyze: Which messages got replies? Which didn't? What was the objection/question pattern?

**Afternoon (1 hour):**
- [ ] Update GitHub: Version 0.1 of prompts based on any learnings
- [ ] Document: "Week 1 Learnings" (what worked, what didn't)
- [ ] Plan Week 2: Adjust messaging? Expand geographies? Change targeting?

**Evening (30 min):**
- [ ] Update Calendly: Add any booked discovery calls to personal calendar
- [ ] Send yourself a memo: "Key priorities for Week 2"

---

## FIRST DISCOVERY CALL CHECKLIST

You booked a discovery call! Here's how to run it.

**Before the call (15 min prep):**
- [ ] Review prospect company: 2 min on their website
- [ ] Pull up Airtable record: see outreach angle, any prior notes
- [ ] Review discovery call script
- [ ] Test Zoom audio/video (if remote)
- [ ] Have blank notepad ready
- [ ] Close other tabs/notifications

**During the call (45 min):**
- [ ] **Intro (2 min):** "Thanks for jumping on. I'm [name], building Givra Tech. What I do is help e-commerce and distribution companies find revenue in their customer data. Sound relevant?"
- [ ] **Listen (3 min):** Let them talk. What brought them to this call?
- [ ] **Ask Core Question (5 min):** "Tell me about your biggest challenge with customer data right now."
  - [ ] Listen for: churn, acquisition waste, unclear segments, no single source of truth
  - [ ] Take notes on specific problems and numbers (if they mention them)
- [ ] **Ask Follow-up (3 min):** "How much revenue do you think is at risk?" or "What have you tried so far?" — this gauges urgency and sophistication
- [ ] **Ask Data Question (3 min):** "Do you have customer purchase history accessible? Where does it live?" (gauge data readiness)
- [ ] **Ask Decision Question (2 min):** "Who else would need to be involved in a decision like this?" (identify stakeholders)
- [ ] **Position the Audit (3 min):** "Here's what we typically do: [1-minute audit overview]. Takes 7 days, we deliver a report with segments, churn risk, and 3 specific actions. Price is $500–1,500 depending on scope."
- [ ] **Gauge Interest (2 min):** "Does this feel like something worth exploring?" — listen for YES, MAYBE, or NO
- [ ] **Next Steps (2 min):** If YES or MAYBE: "Great. I'm going to send you a proposal with what's included. Review in next 2 days, and we can jump on a quick call to finalize scope."
- [ ] **Thank & Close (2 min):** "Really appreciate your time. I'll send that proposal by EOD tomorrow."

**After the call (10 min):**
- [ ] Update Airtable Meetings table: call date, outcome (YES/MAYBE/NO), key notes
- [ ] Update Prospects table: status = "Discovery Call Completed", next step = "Send Proposal" (if MAYBE/YES)
- [ ] Add objections or questions to a shared doc (helps refine messaging)
- [ ] Send follow-up email within 1 hour:
  - [ ] Subject: "Thanks for the call—proposal attached"
  - [ ] Acknowledge 1 thing they said (builds rapport)
  - [ ] Attach proposal PDF
  - [ ] Include 2-min Loom walkthrough of proposal
  - [ ] Next step: "Review by [date], and let's finalize scope"

**Success metric:** If prospect says YES or MAYBE, you're on track. If they say NO, ask "What would change your mind?" — useful for future messaging.

---

## FIRST DELIVERY CHECKLIST

You got your first client! Here's how to deliver brilliantly.

**Kickoff (Day 1):**
- [ ] Send data intake form: email template with exact fields needed
  - [ ] Customer ID, purchase date, purchase amount, customer acquisition date, [any other fields if available]
  - [ ] CSV or direct database access? Ask and confirm format
  - [ ] Timeline: "Send by [date], we'll start analysis immediately"
- [ ] NDA/DPA signed: make sure legal basics are covered
- [ ] Kickoff call (30 min): confirm scope, data structure, delivery date
- [ ] Create Airtable entry: audit project with client name, scope, deadline

**Data Received (Day 2–3):**
- [ ] Confirm data received: quality check
  - [ ] [ ] All required fields present?
  - [ ] [ ] Data looks clean (no obvious errors)?
  - [ ] [ ] Row count reasonable for company size?
  - [ ] [ ] If messy: flag to client, scope += $250, timeline += 2 days
- [ ] Send client: "Data received, analysis begins now. Delivery [date]."

**Analysis (Days 4–5):**
- [ ] Run RFM analysis:
  - [ ] [ ] Calculate Recency (days since last purchase) per customer
  - [ ] [ ] Calculate Frequency (purchase count) per customer
  - [ ] [ ] Calculate Monetary value (total spend) per customer
  - [ ] [ ] Segment into 3–5 tiers (e.g., VIP, loyal, at-risk, inactive)
- [ ] Run churn analysis (if scope includes):
  - [ ] [ ] Identify customers inactive for 60–90 days
  - [ ] [ ] Estimate revenue at risk
  - [ ] [ ] Flag behavioral patterns in at-risk segment
- [ ] Generate strategic brief (use Proposal Agent)
  - [ ] [ ] 1-page report with segments, revenue per segment, top 3 actions

**Delivery (Day 6–7):**
- [ ] Final QA: Review report for typos, math errors, confusing language
- [ ] Send client:
  - [ ] [ ] Audit report PDF
  - [ ] [ ] Excel file with segment definitions + customer IDs (so they can action it)
  - [ ] [ ] 2-min Loom walkthrough of key findings
  - [ ] [ ] Calendar invite for strategy call (Day 7 or 8)
- [ ] Subject line: "[Company] AI Growth Audit—Report Enclosed"

**Strategy Call (Day 7–8, 60 min):**
- [ ] **Review findings (20 min):** Walk through segments, revenue per segment, churn findings
- [ ] **Explain actions (20 min):** "Here's what we recommend you do this month, in priority order"
  - [ ] Action 1 (highest ROI)
  - [ ] Action 2 (medium ROI)
  - [ ] Action 3 (learning/exploration)
- [ ] **Answer questions (15 min):** Let them ask anything
- [ ] **Next steps (5 min):**
  - [ ] "You own this model now—use it whenever you want"
  - [ ] "If you want hands-on help executing these actions, that's our Implementation offer. Want to chat about that?"
  - [ ] Set follow-up in 4 weeks: "Let's reconnect and see how things went"

**After Call:**
- [ ] [ ] Send thank-you email
- [ ] [ ] Create calendar reminder: 4-week follow-up
- [ ] [ ] Ask for testimonial: "Would you be willing to share feedback on the audit experience? 30 seconds on video or text."
- [ ] [ ] Ask for referral: "Do you know other companies in your network who'd benefit from this?"

**Success metrics:**
- [ ] Client says: "This is exactly what we needed" or "Now I know what to focus on"
- [ ] Client asks about implementation upsell or retainer follow-up
- [ ] Client gives testimonial
- [ ] Client refers someone

---

## ASSETS TO CREATE FIRST (Priority-Ranked by Impact-to-Effort)

Do these in this order. Each unlocks something for the next.

### Tier 1: Non-Negotiable (Do First)

1. **Landing page copy (English)** — 3 hours
   - *Impact:* Needed for every prospect reference. Clarifies your positioning.
   - *Effort:* Medium (write once, reuse forever)
   - *ROI:* 10:1 (saves repeated explanations)

2. **Research Agent (MVP)** — 4 hours
   - *Impact:* Saves 30 min per prospect (instead of manual research)
   - *Effort:* Medium (build once, run forever)
   - *ROI:* 8:1 (20 prospects = 10 hours saved)

3. **Cold email template** — 1 hour
   - *Impact:* Needed to send first outreach
   - *Effort:* Low
   - *ROI:* 20:1 (write once, send 100+ times)

4. **Landing page deployment** — 2 hours
   - *Impact:* Gives prospects something to see (builds credibility)
   - *Effort:* Low (GitHub Pages, Carrd, or Webflow)
   - *ROI:* 15:1 (reference in every message)

5. **Calendly setup** — 30 min
   - *Impact:* Removes friction from booking calls
   - *Effort:* Trivial
   - *ROI:* 50:1 (one extra call booked = breakeven)

### Tier 2: High-Leverage (Do Week 1)

6. **Outreach Personalization Agent** — 3 hours
   - *Impact:* Improves message quality + saves time
   - *Effort:* Medium
   - *ROI:* 6:1 (better reply rate)

7. **Discovery call script** — 1 hour
   - *Impact:* Standardizes your calls, improves close rate
   - *Effort:* Low
   - *ROI:* 25:1 (higher call quality)

8. **Proposal Generator Agent** — 2 hours
   - *Impact:* Turns calls into proposals automatically
   - *Effort:* Medium
   - *ROI:* 5:1 (saves time, improves close rate)

9. **Airtable base** — 2 hours
   - *Impact:* Tracks all prospects, automates workflows
   - *Effort:* Medium
   - *ROI:* 4:1 (saves manual tracking)

10. **One-pager PDF** — 1 hour
    - *Impact:* Sends to prospects as "quick read" (higher read rate than landing page)
    - *Effort:* Low
    - *ROI:* 12:1 (easier to share than link)

### Tier 3: Content / Social Proof (Do Week 2+)

11. **Loom video: "What You'll Get"** — 1 hour
    - *Impact:* Social proof + personality
    - *Effort:* Low (one take, minimal editing)
    - *ROI:* 8:1 (increases click rate)

12. **LinkedIn profile optimization** — 30 min
    - *Impact:* First impression for prospects researching you
    - *Effort:* Trivial
    - *ROI:* 30:1 (one extra profile view = one more lead)

13. **Email sequences (follow-up templates)** — 1 hour
    - *Impact:* Automates non-responders follow-up
    - *Effort:* Low
    - *ROI:* 6:1 (higher reply rate from multi-touch)

14. **Case study template** — 30 min
    - *Impact:* Ready to document first win
    - *Effort:* Trivial
    - *ROI:* 15:1 (one case study = big credibility boost)

15. **Spanish landing page** — 2 hours (after English is live)
    - *Impact:* Opens LatAm market
    - *Effort:* Medium (translation + adaptation)
    - *ROI:* 5:1 (only if targeting LatAm hard)

### Tier 4: Optimization (Do Month 2+)

16. **Content calendar** — 1 hour
    - *Impact:* Consistent publishing
    - *Effort:* Low
    - *ROI:* 3:1 (prevents sporadic effort)

17. **Loom script walkthrough: "How We Analyzed You"** — 1 hour
    - *Impact:* Proposal attachment (increases open/acceptance)
    - *Effort:* Low
    - *ROI:* 4:1 (higher proposal close rate)

18. **LinkedIn carousel template** — 1 hour
    - *Impact:* Reusable social content
    - *Effort:* Low
    - *ROI:* 3:1 (easier to publish)

19. **Video testimonials (client recordings)** — 30 min per video
    - *Impact:* Massive social proof
    - *Effort:* Medium (requires client buy-in)
    - *ROI:* 20:1 (if you have multiple)

20. **Blog posts or LinkedIn newsletter** — 2 hours per post
    - *Impact:* SEO + inbound
    - *Effort:* High (requires consistent effort)
    - *ROI:* 2:1 (long-term, takes months to compound)

---

## GO-LIVE DECISION CHECKLIST

Before you send that first message, answer these 5 questions:

1. **Can you explain the offer in 2 sentences without hemming/hawing?**
   - If NO: Your positioning isn't clear yet. Refine and try again.
   - If YES: You're ready.

2. **Do you have at least 3 examples (hypothetical or real) of companies with the problem you solve?**
   - If NO: Your ICP is too broad. Narrow down.
   - If YES: You're ready.

3. **Have you tested all 3 agents (Research, Outreach, Proposal) end-to-end without errors?**
   - If NO: Fix bugs, test again.
   - If YES: You're ready.

4. **Do you have a calendar invite link to share with prospects?**
   - If NO: Set up Calendly now (15 min).
   - If YES: You're ready.

5. **Are you committed to sending 50+ messages in Week 1 and responding to all replies same-day?**
   - If NO: Wait until you're ready. Half-effort outreach wastes time.
   - If YES: You're ready.

**If all 5 are YES: Launch Monday morning. Send first 5 messages before lunch.**

---

## TROUBLESHOOTING: COMMON LAUNCH ISSUES

### Issue: n8n agent is returning errors

**Solution:**
- [ ] Check Claude API key is correct (copy-paste again from dashboard)
- [ ] Verify internet connection to n8n server
- [ ] Reduce context window (fewer prior messages in prompt)
- [ ] Check n8n logs for specific error message
- [ ] Fallback: Do manual research + writing for first 5 prospects, debug agent in parallel

### Issue: Landing page isn't loading

**Solution:**
- [ ] Check domain is pointing correctly (DNS propagation can take 24 hours)
- [ ] Verify GitHub Pages URL: [username].github.io or custom domain
- [ ] Check for typos in landing page HTML/markdown
- [ ] Fallback: Use Carrd or Webflow (faster than GitHub Pages debugging)

### Issue: Cold emails going to spam

**Solution:**
- [ ] Check SPF/DKIM records are set up for your email domain (ask your email provider)
- [ ] Avoid spam trigger words: "FREE", "URGENT", "CLICK HERE"
- [ ] Send from personal email first (higher trust), not noreply@ address
- [ ] Use Airtable to track: which subject lines get opened? Which don't?
- [ ] Fallback: Switch to LinkedIn DMs only for Week 1, add emails in Week 2

### Issue: Getting 0 replies in Week 1

**Solution:**
- [ ] Check emails are actually sending (don't assume)
- [ ] Check spam folder on your end (verify bounces aren't happening)
- [ ] Review subject lines: are they specific to each prospect? Or generic?
- [ ] Review outreach angle: are you leading with their pain point, or your solution?
- [ ] Ask: are you targeting the right decision-maker? (check LinkedIn titles)
- [ ] Pivot: send 10 messages to LinkedIn only (might have better open rate)

### Issue: Landing page copy is confusing to people

**Solution:**
- [ ] Show to 3 people outside your industry, ask "What do I do?" — note their answers
- [ ] If they say "I don't know", simplify the headline
- [ ] If they say "Something with data", your positioning is on the right track
- [ ] Rewrite headline to be more specific: not "Find Growth in Data" but "Stop Wasting Ad Budget on the Wrong Customers"

---

## LAUNCH METRICS DASHBOARD (Track Daily)

Create a simple spreadsheet (or Airtable view) tracking these daily:

| Date | Emails Sent | LinkedIn DMs Sent | Total Outreach | Replies | Reply Rate | Calls Booked | Week Total |
|------|---|---|---|---|---|---|---|
| Day 1 | 5 | 5 | 10 | 0 | 0% | 0 | 10 |
| Day 2 | 5 | 5 | 10 | 0 | 0% | 0 | 20 |
| Day 3 | 5 | 5 | 10 | 1 | 10% | 0 | 30 |
| Day 4 | 5 | 5 | 10 | 2 | 20% | 1 | 40 |
| ... | ... | ... | ... | ... | ... | ... | ... |
| Day 7 | 5 | 5 | 10 | 8 | 80% | 2 | 70 |

**Watch for:**
- Reply rate trending up or down?
- Which channels (email vs. LinkedIn) performing better?
- Are reply rates compounding (more messages = more absolute replies) or staying flat (messaging isn't resonating)?

---
