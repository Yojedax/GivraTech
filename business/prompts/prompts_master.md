# Givra Tech: Master Prompts Library

A collection of battle-tested prompts for AI-powered customer analysis, segmentation, and business insights. Copy-paste ready. Each prompt includes use case, the full prompt text, and expected output format.

---

## PROMPT 1: Data Quality Audit

### Title
Customer Database Quality Assessment

### Use Case
When you receive customer data from a client, run this prompt to identify data issues before analysis. Outputs a quality scorecard showing: completeness %, duplicates, data type mismatches, suspicious entries (negative revenue, impossible dates, etc.), and recommendations for cleanup.

### The Prompt

```
You are a data quality analyst. I'm giving you a CSV export of customer data from an e-commerce business.

Analyze the dataset and provide a comprehensive quality audit. Here's the data:

[PASTE DATA HERE OR DESCRIBE THE DATASET]

Please evaluate:

1. **Completeness**: What % of records have complete data for each key field (customer ID, email, name, phone, address, purchase history)?

2. **Duplicates**: Are there duplicate customer records? Look for: same email, same name+address, same phone, same customer ID appearing multiple times.

3. **Data Type Consistency**:
   - Dates: Are they in consistent format (YYYY-MM-DD)? Any impossible dates (future dates, year 1900, etc.)?
   - Revenue: Any negative values (refunds)? Any zero/null values? Any outliers (suspiciously high)?
   - Phone: Are they formatted consistently? Any invalid entries?

4. **Logical Inconsistencies**:
   - Customers with revenue but no transaction history (or vice versa)
   - Last purchase date after "today"
   - Address fields with placeholder text or test data

5. **Red Flags**:
   - Test records (names like "Test Customer", emails like "test@test.com")
   - Obvious fake data (phone "123-456-7890", address "123 Main St")
   - Extreme outliers (customers with $1M+ revenue if typical is $100-1K)

Provide output as:

---

**Data Quality Audit Report**

**Overall Quality Score: [X]/100**

**Completeness by Field:**
- Customer ID: Y% complete
- Email: Y% complete
- Name: Y% complete
- Phone: Y% complete
- Address: Y% complete
- Purchase history: Y% complete

**Duplicates Found:**
- Exact duplicates: N records
- Likely duplicates (same email, different name): N records
- Details: [List specific examples]

**Data Type Issues:**
- Invalid dates: N records [Examples]
- Invalid revenue: N records [Examples]
- Invalid phone: N records [Examples]

**Logical Issues:**
- Records with revenue but no transaction: N
- Impossible data (future dates, etc.): N
- Outliers (>3 std dev): N [Examples]

**Red Flags & Test Data:**
- Test records found: [List]
- Placeholder data: [List]

**Recommendations (Priority Order):**
1. [Do this first]
2. [Do this second]
3. [Do this third]

**Estimated Effort to Clean:**
- Quick (1-2 hours): Deduplicate, remove test records
- Medium (2-8 hours): Standardize date formats, phone formats
- Complex (8+ hours): Address validation, merge fragmented data

**Overall Recommendation:**
The data is [Ready to analyze / Needs cleaning / Requires significant prep]. Recommend [action] before proceeding with segmentation.
```

### Expected Output Format

A structured audit report with:
- Overall quality score (0-100)
- Field-by-field completeness %
- Count of duplicates + examples
- Data type issues + examples
- Logical inconsistencies
- Recommended cleanup actions + priority

---

## PROMPT 2: RFM Segmentation

### Title
Customer RFM Segmentation & Segment Profiles

### Use Case
Transform transaction data into RFM segments. This outputs: customer segments (Champions, Loyal, At-Risk, New, etc.), segment-level metrics, customer list with segment assignments, and narrative profiles explaining each segment's characteristics.

### The Prompt

```
You are a customer analytics expert specializing in RFM (Recency, Frequency, Monetary) segmentation.

I have customer transaction data and want to segment my customer base into actionable behavioral groups. Here's my data:

[PASTE CUSTOMER + TRANSACTION DATA]

Context:
- Today's date: [DATE]
- I want to focus on last 12 months of transactions
- Business model: [e-commerce / subscription / retail / etc.]

Please perform RFM segmentation:

**Recency (R):** Days since last purchase
- High R (0-30 days): Recently active
- Mid R (31-90 days): Moderately active
- Low R (91-180 days): Inactive
- Very Low R (180+ days): Dormant

**Frequency (F):** Number of purchases in last 12 months
- High F (quartile 4): 10+ purchases
- Mid-High F (quartile 3): 6-9 purchases
- Mid-Low F (quartile 2): 2-5 purchases
- Low F (quartile 1): 1 purchase

**Monetary (M):** Total revenue per customer in 12 months
- High M (quartile 4): Top 25% by spend
- Mid-High M (quartile 3): 50-75th percentile
- Mid-Low M (quartile 2): 25-50th percentile
- Low M (quartile 1): Bottom 25% by spend

**OUTPUT REQUIRED:**

1. **RFM Segment Table:**
For each of the 8-16 segments, provide:
- Segment name (e.g., "Champions", "At-Risk", "New")
- Number of customers
- % of total customer base
- Total revenue from segment
- % of total revenue
- Average revenue per customer
- Average order value
- Repeat purchase rate (%)
- Days since last purchase (avg)
- Recommended action/strategy

Format as a table:
| Segment | # Customers | % Customers | $ Revenue | % Revenue | Avg $/Customer | AOV | Repeat % | Recommendation |

2. **Segment Profiles** (narrative, 2-3 sentences per segment):
For each major segment (4-6), describe:
- Who they are (behavioral profile)
- Their value (revenue, loyalty)
- Their risk (likelihood to churn)
- Recommended strategy (how to engage them)

Example format:
**Champions (High R, High F, High M)**
Champions are your best customers. They buy frequently (avg 12x/yr), recently (last 15 days), and spend highly ($1,200+ annually). They represent 5% of your customer base but 42% of revenue. Strategy: Prioritize retention. Offer exclusive benefits, early access to new products, VIP support.

3. **Customer List with Segment Assignment:**
For each customer, provide:
- Customer ID / Email
- Total revenue (12 months)
- Purchase frequency
- Days since last purchase
- RFM Segment assignment
- Risk level (Low / Medium / High churn risk)

4. **Key Insights:**
- Which segment is largest by customer count?
- Which segment drives most revenue?
- Which segments are growing/shrinking?
- Which segments have highest churn risk?
- Top 3 opportunities for revenue growth (by segment)?

5. **Segmentation Quality Metrics:**
- Does the segmentation make intuitive sense?
- Are the segments distinct or overlapping?
- Any surprising findings?
```

### Expected Output Format

1. **RFM Segment Summary Table** (8-16 rows):
   - Segment name | Count | % | Revenue | % of Revenue | Avg/Customer | AOV | Repeat Rate | Strategy

2. **Narrative Segment Profiles** (2-3 sentences each for top 5-6 segments)

3. **Customer-Level Data** (downloadable):
   - Customer ID, Revenue, Frequency, Recency (days), RFM Segment, Risk Level

4. **Key Insights** (5-7 bullet points)

---

## PROMPT 3: Churn Risk Detection

### Title
Customer Churn Risk Scoring & At-Risk Identification

### Use Case
Identify customers most likely to churn in the next 30-90 days. Outputs: churn risk scores (0-100) for each customer, cohort analysis showing aggregate churn risk, top 100 at-risk customers by revenue impact, and actionable insights on common churn signals.

### The Prompt

```
You are a customer retention analyst. I want to identify which of my customers are at highest risk of churning (not making a purchase) in the next 90 days.

Here's my customer transaction data:

[PASTE CUSTOMER + TRANSACTION HISTORY]

Context:
- Today's date: [DATE]
- Analysis period: Last 18 months of data
- I define "churn" as: No purchase for 90+ days (can adjust based on your business)
- Business: [e-commerce / retail / subscription / etc.]

Please create a churn risk model:

**Churn Signals to Consider:**
1. **Time Since Last Purchase**: Customers with no purchase in 60+ days are higher risk than those active last 30 days
2. **Purchase Frequency Decline**: Customers whose purchase frequency has decreased significantly (used to buy monthly, now quarterly)
3. **Revenue Decline**: Customers whose average order value or total spending has decreased 30%+ YoY
4. **Historical Engagement**: Customers with historically low engagement are lower-value churn targets
5. **Purchase Consistency**: Customers with erratic purchase patterns are higher churn risk than consistent buyers

**Churn Risk Score Calculation:**
Assign each customer a score 1-100 based on:
- Last purchase recency (0-30 days = 10 risk points, 30-60 days = 30 pts, 60-90 days = 60 pts, 90+ days = 90 pts)
- Frequency decline (vs their historical pattern): 10-30 bonus points if declining
- Revenue decline (vs historical avg): 10-20 bonus points if spending down 30%+
- Historical value (customers with >$1K lifetime spend get -10 pt penalty = we care more about retention)
- Engagement consistency (erratic patterns +15 pts)

Normalize to 1-100 scale.

**OUTPUT REQUIRED:**

1. **Churn Risk Distribution:**
- # of customers by risk level:
  - Very High Risk (71-100): X customers, $Y revenue at risk
  - High Risk (51-70): X customers, $Y revenue at risk
  - Medium Risk (31-50): X customers, $Y revenue at risk
  - Low Risk (1-30): X customers, $Y revenue at risk

2. **Top 100 At-Risk Customers (sorted by revenue at risk):**
| Rank | Customer | Email | Last Purchase | Days Since | Frequency Trend | Churn Risk Score | Revenue at Risk | Recommended Action |

3. **At-Risk by Segment:**
- Show churn risk broken down by RFM segment (if you have that from previous analysis)
- Which segments have highest churn risk?
- How many high-value customers are at risk?

4. **Churn Cohort Analysis:**
- Analyze customers who actually churned historically (no purchase in 90+ days)
- What % of customers hit "high risk" before churning?
- What's the average lead time between "high risk score" and actual churn?
- What signals best predicted churn in the past?

5. **Risk Insights:**
- Total revenue currently at risk: $X (from high + very high risk customers)
- If top 100 at-risk customers churn, revenue lost: $Y
- If we recover 20% of at-risk customers, incremental revenue: $Z
- Most common characteristics of at-risk customers: [list top 3-4]

6. **Reactivation Recommendations:**
For top 10-20 at-risk customers, suggest:
- Most appropriate reactivation offer (% discount, free shipping, etc.)
- Recommended channel (email, SMS, retargeting ad)
- Messaging angle (incentive-based vs. win-back vs. we-miss-you tone)

**Churn Risk Model Caveats:**
- This is based on historical behavior, not external factors (competitor, new features, etc.)
- Some churn is natural/expected; not all churn is preventable
- High risk score ≠ guaranteed churn; it's probability-based
```

### Expected Output Format

1. **Churn Risk Distribution** (counts by risk level)
2. **Top 100 At-Risk Customers** (table with risk score, revenue at risk, recommended action)
3. **Segment-Level Churn Risk** (if applicable)
4. **Cohort Analysis** (historical validation of model)
5. **Key Insights** (total $ at risk, recovery potential, common patterns)

---

## PROMPT 4: Address Normalization & Geolocation

### Title
Address Standardization & Geographic Revenue Analysis

### Use Case
Clean messy address data, standardize formats, and analyze revenue concentration by geography. Outputs: standardized address list, geographic revenue breakdown, concentration risk analysis, and regional insights.

### The Prompt

```
You are a data quality and geolocation specialist. I have customer addresses that are messy and inconsistent. I need to:

1. Standardize format
2. Identify likely duplicates (same person, different address variations)
3. Analyze revenue concentration by region
4. Identify underserved/overserved territories

Here's my data:

[PASTE CUSTOMER + ADDRESS + REVENUE DATA]

Context:
- Primary country: [Argentina / Brazil / Mexico / etc.]
- I'm mostly focused on: [Cities / Regions / States]
- Business model: E-commerce / Retail / [other]

Please perform:

**PART 1: Address Standardization**

Normalize all addresses to consistent format:
- Address format: [Street Number], [Street Name], [Apartment/Suite] - [City], [State/Province] [Postal Code]
- Country abbreviation: [XX]
- Phone standardization: +[Country Code] [Area Code] [Number]

Create a mapping table showing: Original Address → Standardized Address

Flag issues:
- Missing city/state
- Incomplete postal codes
- Abbreviation inconsistencies (St vs Street, Ave vs Avenue)
- Special characters or typos

**PART 2: Duplicate Detection**

Identify likely duplicate customers:
- Same address, different names (possible spouse/cohabitant or data entry error)
- Same name, different addresses (possible moved or data error)
- Same phone, different address
- Very similar names + same address (misspellings)

Flag for review (don't auto-merge):
- High confidence duplicates: X records
- Medium confidence: Y records
- Details: [List with confidence % for each]

**PART 3: Geographic Revenue Analysis**

Break down revenue by geography:

**By City:**
| City | # Customers | % of Total | Revenue | % of Total | Avg $/Customer |
[Table]

**By State/Region:**
| Region | # Customers | % of Total | Revenue | % of Total | Avg $/Customer |
[Table]

**By Country (if multi-country):**
| Country | # Customers | % of Total | Revenue | % of Total | Avg $/Customer |
[Table]

**PART 4: Geographic Insights**

1. **Concentration Risk:**
   - Top 5 cities represent: X% of customers and Y% of revenue
   - Geographic diversity score: [comment on whether revenue is concentrated or well-distributed]

2. **High-Value Territories:**
   - Highest revenue per customer: [City/Region]
   - Best geographic growth rate (YoY customer growth): [City/Region]

3. **Underserved Opportunities:**
   - Largest cities with lowest customer concentration (growth opportunity)
   - Regions with low AOV but high customer count (opportunity to upsell)

4. **Geographic Gaps:**
   - Major cities with <5% customer base (potential expansion target)
   - Regions where you have customers but low repeat rate

**PART 5: Recommendations**

- Consolidate X duplicate addresses (minor merge opportunity)
- Recommend geographic focus for next growth push: [Region]
- Consider regional product/pricing adjustments: [Specific recommendations]

**Data Quality Notes:**
- Addresses with missing postal code: X%
- Addresses needing manual review: X%
- Confidence in geocoding accuracy: [High / Medium / Low]
```

### Expected Output Format

1. **Address Standardization Mapping** (Original → Standardized)
2. **Duplicate Detection Report** (list with confidence %)
3. **Geographic Revenue Breakdown** (by city, region, country)
4. **Geographic Insights** (concentration, gaps, opportunities)
5. **Action Items** (merge duplicates, focus regions, etc.)

---

## PROMPT 5: Revenue Opportunity Identification

### Title
Strategic Revenue Opportunities Analysis

### Use Case
Combine RFM, churn, and customer data to identify the 5 highest-impact revenue plays. Outputs: opportunity list ranked by potential ROI, target customer segment for each, execution roadmap, and revenue impact projections.

### The Prompt

```
You are a growth strategist. Based on customer data analysis (RFM, churn, segments), I want to identify the top 5 revenue-generating opportunities I can execute in the next 90 days.

Here's my analysis data:

- RFM Segments: [Paste segment breakdown + customer counts]
- Churn data: [Top at-risk customers, risk scores]
- Customer metrics: [AOV, repeat rate, LTV, acquisition cost if available]
- Business context: [Annual revenue, monthly customer acquisition, growth goals]

Context:
- My biggest bottleneck is currently: [churn / AOV / repeat rate / acquisition / other]
- I want to focus on: [Revenue growth / Customer retention / Operational efficiency]
- Budget for execution: [Tight / Moderate / Flexible]

Please identify the top 5 opportunities:

**Methodology:**
Rank by:
1. **Revenue Potential:** How much incremental $ could this generate?
2. **Execution Complexity:** How hard is it to execute? (Effort vs Impact)
3. **Probability of Success:** Based on segment characteristics, how likely to work?
4. **Speed to Revenue:** How fast can we see results?
5. **Strategic Alignment:** Does it align with business priorities?

**FOR EACH OPPORTUNITY, PROVIDE:**

**Opportunity 1: [Opportunity Name]**

- **Target Segment:** [Which RFM/customer segment]
- **# of Customers:** X
- **Current Behavior:** [How they currently act; why they're targets]
- **Opportunity:** [What's the specific revenue play?]
- **Revenue Potential:** $X-Y range (with assumptions stated)
- **Success Metric:** [Specific KPI to measure; e.g., "5% conversion rate" or "15% repeat lift"]
- **Why It Works:** [2-3 sentences on why this segment will respond]
- **Execution Steps:**
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
  4. [Step 4]
- **Timeline:** [Weeks to execute; when results visible]
- **Required Resources:** [Tools, budget, team effort]
- **Risk/Blockers:** [What could go wrong?]
- **Confidence Level:** [High / Medium / Low] + why

**Examples of opportunities to consider:**
1. VIP Reactivation: Target high-value customers at churn risk with personalized win-back campaign
2. New Customer Retention: Target customers in first 30 days with nurture sequence to improve repeat rate
3. Cross-Sell Campaign: Target customers buying Product A with offers for Product B (which they rarely buy)
4. AOV Upsell: Target mid-tier customers with bundle/volume offers to increase order value
5. Geographic Expansion: Target underserved regions with localized marketing
6. Segment-Specific Retention: Target "Loyal but Small Spenders" with upgrade incentives
7. Referral Program: Target VIP/Champions with referral incentives
8. Win-Back Campaign: Target inactive (90+ days) customers with time-limited incentive

You are not limited to these; use the data to identify best opportunities for THIS business.

**PART 2: Opportunity Prioritization**

Create a prioritized table:

| Rank | Opportunity | Target Segment | # Customers | Revenue Potential | Effort | Success Probability | Rank Score |
[Table from high to low rank]

**PART 3: 90-Day Implementation Roadmap**

Month 1: [Opportunity 1 + Opportunity 2 soft launch]
Month 2: [Scale winners from Month 1 + launch Opportunity 3-4]
Month 3: [Optimize and scale best performers; prepare for Month 4]

For each phase: Specific initiatives, owner, success metrics, expected revenue impact

**PART 4: Total Opportunity Summary**

- Sum of all 5 opportunities (potential): $X-Y range
- Conservative estimate (assuming 70% success rate): $Z
- If we execute Opportunities 1-3 only: $A-B range
- Break-even point for investment: X days / Y customers

**PART 5: Quick Wins vs. Long-Plays**

- Quick wins (visible results in 1-4 weeks): [Which opportunities]
- Long-term plays (results in 4-12 weeks): [Which opportunities]
- Recommend starting with: [Which opportunity first and why]
```

### Expected Output Format

1. **Opportunity 1-5 Detailed Profiles** (each with segments, revenue potential, execution steps)
2. **Prioritization Table** (ranked by ROI/effort/probability)
3. **90-Day Roadmap** (timeline, phases, expected outcomes)
4. **Total Addressable Opportunity** (conservative + aggressive revenue estimates)

---

## PROMPT 6: Executive Report Draft

### Title
Customer Intelligence Executive Summary Generation

### Use Case
Turn raw analysis data into executive-friendly language. Outputs: report sections ready to copy-paste into a professional PDF (executive summary, key findings, insights, recommendations).

### The Prompt

```
You are a business intelligence writer and strategist. I have customer analytics data that I need to turn into an executive-friendly report for my client.

Here's the raw analysis:

[PASTE KEY METRICS, SEGMENTS, OPPORTUNITIES, CHURN DATA]

Client context:
- Company: [Name]
- Industry: [E-commerce / Retail / etc.]
- Annual Revenue: $X
- Customer base size: Y customers
- Key challenge: [What we're solving for]

Please write report sections that are:
- **Clear:** No jargon. Explain RFM if we use it. Use analogies if helpful.
- **Data-Driven:** Include specific numbers and percentages
- **Actionable:** Every finding connects to a "so what" and "what to do about it"
- **Professional:** Confident tone. No hedging. No filler.
- **Executive-Level:** Assume CMO-level reader; they care about revenue impact, not methodology

**WRITE THESE SECTIONS:**

**1. EXECUTIVE SUMMARY (1 page, this sells the entire report)**

Format:
---
**EXECUTIVE SUMMARY**

[OPENING PARAGRAPH: The Problem]
Your customer base is showing three concerning patterns: (1) High churn rate, (2) Concentrated revenue, (3) Stagnant repeat purchase rate. While you've grown customer acquisition, existing customer retention is deteriorating, leaving significant revenue on the table.

[KEY FINDINGS: 3 bullet points]
- Finding 1 with specific number/metric
- Finding 2 with specific number/metric
- Finding 3 with specific number/metric

[OPPORTUNITY: The big picture]
You have $X in revenue-generating opportunities within your existing customer base over the next 90 days. This comes from three plays: (1) reactivating high-value customers at churn risk, (2) improving new customer retention, (3) increasing average order value through targeted upselling. These are not speculative—they're based on observed customer behavior patterns in your data.

[RECOMMENDATION]
We recommend focusing on opportunities 1 and 2 simultaneously in Month 1, with quick wins visible by Week 4. Expected impact: $X-Y incremental revenue.

[CALL TO ACTION]
The attached roadmap outlines the exact steps, timeline, and success metrics for each initiative.
---

**2. KEY FINDINGS (1 page)**

Format:
---
**KEY FINDINGS**

**Finding 1: Customer Retention is Your Biggest Leak**
You're losing 45% of your customer base annually. While this is common in e-commerce, it's also your biggest revenue opportunity. In your case, churn is driven by [specific reason from data]. This means most of the problem is recoverable.
- Current churn rate: 45% annually
- Estimated revenue at risk: $Y/year
- Recovery potential: If you reduce churn to 35%, incremental revenue: $Z/year

**Finding 2: Your Best Customers Are At Risk**
Your top 200 customers (high-value segment) show early churn signals. [Specific signal from data, e.g., "Last purchase 60+ days ago despite historical pattern of 30-day intervals"]. Losing these customers would impact [revenue impact].
- Top-200 customer segment revenue: $Y annual (Z% of total revenue)
- # at churn risk right now: X
- Revenue at immediate risk: $X
- Recovery: A targeted reactivation campaign could recover 20-30% of these customers = $Y incremental

**Finding 3: New Customers Aren't Sticking**
Customers acquired in the last 90 days have a 35% repeat purchase rate within 30 days of first purchase. This is [low/high/medium] compared to [benchmark or your historical average]. [Specific insight about why they're not repeating].
- New customer repeat rate (30 days): 35%
- Historical repeat rate (mature customers): 60%
- Gap (improvement opportunity): 25% lift possible
- Revenue impact of 10% improvement in new customer repeat: $X additional

---

**3. STRATEGIC INSIGHTS (1-2 pages)**

Format:
---
**STRATEGIC INSIGHTS**

**Insight 1: Revenue is Concentrated in Too Few Customers**
Your top 10 customers represent [X%] of revenue. While they're highly valuable, this concentration creates risk. If any of them leave, your business is impacted significantly. [Specific insight about these customers—are they at risk? stable?]

**Insight 2: Geographic Opportunity**
Your customers are concentrated in [City/Region], representing [X%] of revenue. However, [Other Region] has [number of customers] but only [Y%] of revenue per customer. This suggests either: (a) lower product-market fit in that region, or (b) an underserved market with expansion opportunity.

**Insight 3: Segment Maturity Varies Widely**
Your customer base is not uniform. [Segment A] customers buy [frequently/infrequently] with [high/low] AOV. [Segment B] is different: [behavior]. This means your marketing approach should differ by segment. One-size-fits-all campaigns are leaving money on the table.

---

**4. REVENUE OPPORTUNITIES (1-2 pages)**

Format:
---
**REVENUE OPPORTUNITIES**

We identified five high-impact opportunities totaling $X-Y in potential incremental revenue over 90 days:

**Opportunity 1: VIP Reactivation**
Target: 200 high-value customers showing churn signals
Action: Launch personalized win-back sequence (email + SMS + retargeting)
Expected revenue: $150K (if 20% respond to offer; avg recovery $750/customer)
Timeline: Week 1 launch; results by Week 4

**Opportunity 2: New Customer Retention**
Target: 400 customers in first 30 days; currently have 35% repeat rate
Action: Implement post-purchase nurture sequence + incentivized repeat offer
Expected revenue: $60K (if repeat rate improves from 35% to 50%; avg AOV $150)
Timeline: Week 1 launch; results by Week 3

[Continue for Opp 3-5]

**Total Addressable Opportunity:** $XXX-XXXX over 90 days
**Conservative Estimate (60% execution success):** $XXX

---

**5. 90-DAY ROADMAP (1-2 pages, visual + narrative)**

Format:
---
**ROADMAP: 90-Day Execution Plan**

**Month 1: Foundation & Quick Wins**

Week 1-2:
- Launch VIP Reactivation campaign (Opportunity 1)
- Segment new customer cohort; prepare retention sequence (Opportunity 2)
- Success metrics: Track email opens, click rates, response rates daily

Week 3-4:
- Analyze early results from Opp 1; optimize if needed
- Launch new customer retention sequence (Opportunity 2)
- Begin development of cross-sell offers (Opportunity 3)

**Expected Revenue: $15K-25K**

**Month 2: Scale & Expand**

Week 5-6:
- Scale winning variations of Opp 1 + Opp 2
- Launch limited AOV upsell test with small subset (Opportunity 3)
- Prepare segment-specific offers (Opportunity 4)

Week 7-8:
- Full rollout of Opp 3 (cross-sell)
- Launch Opportunity 4 (segment-specific offers)
- Monitor all initiatives for performance

**Expected Revenue: $40K-60K**

**Month 3: Optimize & Prepare Next Quarter**

Week 9-10:
- Full optimization of all live campaigns
- Deep analysis of what's working best
- Prepare quarterly planning with learnings

Week 11-12:
- Scale winners to remaining audience
- Plan for next quarter opportunities
- Prepare client for retainer/ongoing optimization

**Expected Revenue: $30K-50K**

**Total 90-Day Revenue Projection: $85K-135K**

---

**6. APPENDIX: Methodology & Definitions (1 page)**

Format:
---
**METHODOLOGY**

**Data Sources:**
- Customer master file: [Date, # of records]
- Transaction history: [Date range, # of transactions]
- Email engagement data: [If used]

**Analysis Period:** [Date range; typically 12-24 months]

**Key Definitions:**
- **Churn:** No purchase in [90] days (customizable; this is the standard for your industry)
- **RFM Segmentation:**
  - Recency: Days since last purchase
  - Frequency: Number of purchases in 12 months
  - Monetary: Total revenue in 12 months
- **Repeat Rate:** % of customers who made 2+ purchases in the analysis period
- **At-Risk:** Customers scoring 71-100 on our churn probability model

**Model Limitations:**
This analysis is based on historical behavior and assumes past patterns continue. External factors (new competitors, product changes, market conditions) may affect results. This is probabilistic analysis, not guaranteed prediction.

---

Tone throughout:
- Confident (not hedged)
- Specific (not generic)
- Action-oriented (every finding + what to do)
- Data-driven (numbers, not opinions)
- Executive-level (clear, no jargon, focused on impact)
```

### Expected Output Format

1. **Executive Summary** (1 page, polished prose)
2. **Key Findings** (1 page, 3-4 findings with numbers)
3. **Strategic Insights** (1-2 pages, narrative)
4. **Revenue Opportunities** (1-2 pages, table + descriptions)
5. **90-Day Roadmap** (1-2 pages, timeline + expected outcomes)
6. **Appendix: Methodology** (0.5-1 page)

---

## PROMPT 7: Cold Outreach Personalization

### Title
Personalized Sales Message Generation (Based on Company Research)

### Use Case
Take company research (website, LinkedIn, industry) and generate personalized cold outreach messages that reference specific details, show you've done research, and create relevance. Outputs: 3-5 unique message variations to test.

### The Prompt

```
You are a growth specialist writing personalized sales outreach to e-commerce businesses.

I've researched this prospect. Here's what I found:

**Prospect Information:**
- Company name: [Name]
- Industry: [E-commerce / Retail / etc.]
- Website: [URL]
- Company size: [X employees]
- Recent news/signals: [Funded / Hired CMO / Launched new product / etc.]
- LinkedIn profile: [Title, description if available]
- Website signals: [What does their site tell us? E.g., "Shopify store, selling athletic wear, 50+ SKUs, mobile-first design"]
- Content signals: [What are they posting about? E.g., "Talking a lot about customer retention, running sales, scaling operations"]
- Pain signals: [Any hints of problems? E.g., "Pricing page gone or unclear", "Old blog posts", "Hiring for growth role"]

**My offer summary:**
I help e-commerce businesses reduce churn by [X%] and find hidden revenue in their customer database using AI-powered segmentation and predictive analytics. Typical client adds $[XXK]-$[XXXK] in incremental revenue in 90 days.

**My positioning:**
I'm not a generic growth consultant. I specialize in customer data: RFM segmentation, churn prediction, personalized retention playbooks. I focus on existing customer revenue, not acquisition.

**Task:**

Write 3-5 variations of a personalized LinkedIn message or email that:

1. **Shows Research:** Reference specific detail from their company/site (not generic)
2. **Establishes Credibility:** Briefly mention relevant experience or past results (but keep humble)
3. **Creates Relevance:** Connect their situation to the problem we solve (based on signals you found)
4. **Opens the Door:** Ask for brief conversation or next step (low friction ask)
5. **No Hard Sell:** Not pushy. Curious tone. They should feel you're genuinely interested in their situation.

**FOR EACH MESSAGE:**

**Message Variant 1: [Specific Angle]**
[Write the message]

**Rationale:** [Why this approach; what signals from research we're responding to]

**Best for:** [Type of prospect this works for; when to use]

**Expected response rate:** [Low / Medium / High]

---

**GUIDANCE FOR TONE:**
- Be specific (not generic)
- Be human (not corporate-speak)
- Be curious (ask questions, don't tell)
- Be humble (don't claim you're the best)
- Be relevant (show you understand their business)
- Keep it short (2-3 sentences for LinkedIn, 3-4 for email)

**EXAMPLES OF WHAT TO REFERENCE:**
- Their recent product launch: "Saw you just launched the [Product] line—excited to see the expansion"
- Their hiring: "Noticed you hired a CMO last month; definitely a growth mindset move"
- Their content: "Your recent post about [Topic] resonated; we help with exactly that"
- Their website: "Love your site; super clean design. One thing I noticed—your repeat customer rate seems like an untapped opportunity"
- Their funding/news: "Saw you raised $X; scaling fast, which means customer retention becomes critical"
- Their stated challenges: "On your team page, you mention 'focus on customer retention'; that's our jam"

**AVOID:**
- Generic openers ("Hope this finds you well")
- Obvious copy-paste ("I help companies like yours...")
- Asking for too much ("Can we jump on a 30-min call?")
- Leading with your product ("We offer RFM segmentation...")
- Flattery without substance ("Love what you're doing!")
```

### Expected Output Format

1. **Message Variant 1** + Rationale + Best For + Expected Response Rate
2. **Message Variant 2** + Rationale + Best For + Expected Response Rate
3. **Message Variant 3** + Rationale + Best For + Expected Response Rate
4. [Optional] **Message Variant 4-5** + Rationale

---

## PROMPT 8: Discovery Call Summary & Key Extraction

### Title
Sales Discovery Call Transcript Analysis

### Use Case
After a discovery call, paste the transcript and extract: prospect's main challenges, budget indicators, timeline, decision-making process, deal size hints, and qualification score. Outputs: structured summary + qualification recommendation.

### The Prompt

```
You are a sales analyst. I just had a discovery call with a prospect. Here's the transcript:

[PASTE TRANSCRIPT]

Please analyze and extract:

**PART 1: Key Information**

**Prospect Profile:**
- Name: [From transcript or manual input]
- Title: [From transcript]
- Company: [From transcript]
- Company size: [Employees, revenue estimates, customer base size]

**Decision Making:**
- Who else needs to approve this? [Identified decision-makers besides this person]
- What's their role in the decision? [Do they decide, or do they influence?]
- Timeline for decision: [When will they decide? Any deadlines mentioned?]
- Urgency level: [High / Medium / Low - based on language and context]

---

**PART 2: Problem & Motivation**

**Main Challenge (in their words):**
[Exact quote or close paraphrase of biggest pain]

**Secondary Challenges:**
[Other challenges mentioned]

**Current Approach:**
[How are they currently trying to solve this? What have they tried?]

**Why It Matters to Them:**
[What's the consequence if they don't solve this? Revenue loss? Time waste? Risk?]

---

**PART 3: Budget & Resources**

**Budget Indicators:**
- Hard budget mentioned: [$ amount if stated]
- Budget flexibility: [Fixed / Flexible / Unknown]
- Budget owner: [Who controls budget? Same person or different?]
- Budget cycle: [When does budget reset? Any time pressure?]
- Past spending on similar solutions: [What have they spent before?]

**Budget Confidence Level:** [High confidence / Medium / Guessing]

---

**PART 4: Buying Process**

**Type of Process:**
- Is this formal (RFP, vendor comparison) or informal (exploratory)?
- Are they comparing vendors? [Who else are they talking to?]
- Have they bought similar services before?

**Timeline to Decision:**
- When do they want to decide? [Specific date if mentioned]
- When would they want to start (if they buy)? [ASAP / in X weeks / specific date]

**Approval Steps:**
[Who needs to approve? In what order? Any gatekeepers?]

---

**PART 5: Fit Assessment**

**How Well Does Our Solution Fit?**

Our solution is designed for: [Brief description of ideal customer]

This prospect:
- ✓ Fits well / ⚠ Partial fit / ✗ Poor fit [Choose one]

**Reasons for fit/misfit:**
- [Reason 1]
- [Reason 2]
- [Reason 3]

---

**PART 6: Qualification Scoring**

Score on 1-10 for each dimension (10 = perfect, 1 = terrible):

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Problem-Solution Fit** | X/10 | Does our solution actually solve their problem? |
| **Budget Authority** | X/10 | Can they actually approve budget? Or is it uncertain? |
| **Timeline** | X/10 | Is timeline realistic (30-60 days)? Or is it vague? |
| **Urgency** | X/10 | Do they actually care? Or just exploring? |
| **Decision Process** | X/10 | Is process clear? Or multiple blockers? |
| **Relationship Quality** | X/10 | Did I build rapport? Do they trust me? |

**Overall Qualification Score:** [Average of above] / 10

---

**PART 7: Next Steps & Recommendation**

**What They Said They'd Do:**
[Next action they committed to; timeline]

**What I Said I'd Do:**
[Your next action; proposed timeline]

**Red Flags (if any):**
[Anything concerning? Misalignment? Budget doubt? Slow timeline?]

**Green Flags:**
[Anything encouraging? Urgency? Budget ready? Multiple stakeholders engaged?]

**Recommendation:**

**Move to Proposal?** [Yes / Maybe / No] + Why
**If Yes:** Propose by [Date]; emphasize [Key value prop based on call]
**If Maybe:** [What needs to happen before we propose?]
**If No:** [Add to nurture sequence; revisit when X condition changes]

---

**PART 8: Follow-Up Actions**

To-Do List:
- [ ] Send follow-up email within 24 hours referencing [specific thing from call]
- [ ] Include: [PDF, case study, data, pricing, other resource]
- [ ] Follow up with proposal by: [Date]
- [ ] If no response by [Date], send follow-up #2

**Email Outline for Follow-Up:**
---
Subject: [Brief recap of conversation]

Hi [Name],

Thanks for taking time to chat about [their main challenge]. A few thoughts from our call:

[1-2 key insights from your conversation]

I mentioned [specific thing you discussed]—attached is [relevant resource] that might help.

Next step: [What's the next step? Do they need to share data? Review something? Schedule another call?]

Let me know if you have questions.
[Your name]
---
```

### Expected Output Format

1. **Prospect Profile** (name, title, company, size)
2. **Main Challenge** (problem statement + why it matters)
3. **Budget & Timeline** (budget confidence, timeline clarity)
4. **Buying Process** (formal vs informal, competitors, approval steps)
5. **Fit Assessment** (how well our solution fits)
6. **Qualification Scoring** (scores on 6 dimensions; overall score 1-10)
7. **Recommendation** (Move to proposal? If yes/maybe/no, why)
8. **Follow-Up Actions** (to-do list + email template)

---

## How to Use This Prompts Library

1. **Copy the prompt text** from the section you need
2. **Paste into Claude or your preferred AI** (ChatGPT, Claude, etc.)
3. **Replace [BRACKETS]** with your specific data
4. **Run the analysis**
5. **Take the output** and use it directly in reports, emails, or follow-ups

**Time Estimates:**
- Data Quality Audit: 5-10 minutes
- RFM Segmentation: 10-15 minutes
- Churn Detection: 10-15 minutes
- Address Normalization: 5-10 minutes
- Opportunity Identification: 15-20 minutes
- Executive Report Draft: 20-30 minutes
- Personalized Outreach: 5-10 minutes per message
- Discovery Call Summary: 10-15 minutes

**Pro Tips:**
- Run Data Quality Audit first (always)
- Use output from one prompt as input to the next
- Keep all outputs in a shared folder per client
- Test prompts on your own data first before using with clients
- Update prompts based on what works best for your specific market

