# Funnel Strategy — Vision Wellbeing

## 1. Funnel Type

**Type A — Service Business**
Goal: Free consultation booked → paid CBT sessions → block booking retention

## 2. Funnel Map

| Page | Stage | Primary Action | Exit Path |
|------|-------|---------------|-----------|
| index.html | Awareness + Consideration | Book free consultation | → Setmore consultation booking |
| the-therapy.html | Consideration (deep dive) | Book free consultation | → Setmore consultation booking |
| fees.html | Conversion | Book session or block of 5 | → Setmore session/block booking |
| resources.html | Awareness (SEO entry point) | Read content → explore site | → index.html or fees.html |
| 404.html | Recovery | Return to homepage | → index.html |

## 3. Revenue Elements (5 chosen)

### 3.1 Free consultation as low-friction entry
**Placement:** Primary CTA on every page, sticky mobile bar, hero section
**Why:** Zero-cost, zero-commitment 15-minute video call eliminates the biggest barrier (fear of committing). Every competitor offers this — it's table stakes.

### 3.2 Block booking upsell
**Placement:** Fees page (middle tier, "Best value" badge), secondary CTA on homepage pricing snapshot
**Why:** "Pre-commitment is the intervention" — framing the block booking as therapeutic, not commercial. £350 for 5 sessions (£70 effective) vs £80 single. Protects continuity and revenue.

### 3.3 Edinburgh in-person waitlist (lead capture)
**Placement:** Bottom of fees page, subtle mention in footer
**Why:** Captures email addresses from interested local clients. Builds a retargetable audience for the in-person launch. Low-effort, high-value lead gen.

### 3.4 Resource library as SEO funnel
**Placement:** Resources page, linked from footer and nav
**Why:** 20+ articles on anxiety, perfectionism, OCD, panic etc. drive organic search traffic. Each article ends with a booking CTA. Visitors arrive for information, stay for trust, convert to consultation.

### 3.5 FAQ near conversion point
**Placement:** Fees page, directly above booking CTAs
**Why:** Addresses the final 3 objections (accreditation, online effectiveness, session count) right at the moment of decision. Reduces drop-off at the conversion point.

## 4. Top 3 Objections at Conversion Point

| Objection | How Addressed |
|-----------|---------------|
| "Is he properly qualified?" | MSc with distinction from University of Edinburgh, active NHS research, working toward BABCP accreditation under accredited supervision — displayed prominently in hero and about sections |
| "Does online therapy actually work?" | Research-backed evidence, specific testimonials mentioning online effectiveness (J.P.: "I didn't expect online therapy to work this well"), article on online vs in-person CBT in resources |
| "How long will this take / cost me?" | Transparent 8-16 session range, "planned ending" messaging, block booking option with savings, progress reviewed session by session — no open-ended commitment |

## 5. Email / Lead Capture Strategy

**Primary:** Edinburgh in-person waitlist (email capture on fees page)
**Secondary:** Resources act as organic lead gen — visitors who read articles are pre-qualified; the CTA at the end of each article converts warm traffic to consultation bookings
**Future potential:** Email newsletter from article content, but not built into this version — focus on direct booking conversion first

## CTA Hierarchy (enforced on every page)

| Level | Type | Styling | Example |
|-------|------|---------|---------|
| Primary | Book free consultation | Filled button, high-contrast accent colour | "Book my free consultation" |
| Secondary | See pricing / learn more | Ghost/outline button | "See pricing →" |
| Tertiary | Trust builder | Text link | "Read what clients say →" |

## Analytics Hooks

All CTAs tagged with data-attributes for future tracking:
- `data-track="cta-primary"` on all consultation booking links
- `data-track="cta-secondary"` on pricing/learn-more links
- `data-funnel-stage="awareness|consideration|conversion"` on all CTAs
- `data-track="lead-capture"` on waitlist form
- `data-track="session-view"` on pricing cards
