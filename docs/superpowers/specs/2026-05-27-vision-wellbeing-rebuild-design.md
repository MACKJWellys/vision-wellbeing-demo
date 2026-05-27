# Vision Wellbeing — Site Rebuild Design Spec

**Date:** 2026-05-27
**Client:** Jack Wells / Vision Wellbeing
**URL:** visionwellbeing.co.uk
**Type:** Rebuild of existing site using web agency system

---

## 1. Business Context

Jack Wells is a solo CBT therapist (MSc Psychological Therapies, University of Edinburgh, distinction) based in Edinburgh, delivering online CBT sessions UK-wide. He is working toward BABCP accreditation under clinical supervision and has active NHS-funded research involvement.

**Services:**
- Online CBT therapy (50 min video sessions) — £80/session
- Block booking: 5 sessions for £350 (saves £50)
- Free 15-minute consultation (no obligation)
- Specialisms: anxiety, perfectionism, health anxiety, OCD, performance pressure, low mood/burnout, insomnia, panic
- Additional: anger, social anxiety, phobias, self-esteem, life adjustment

**Booking system:** Setmore (visionjackwells.setmore.com)
- 3 products: free consultation, single session (£80), block of 5 (£350)
- Currently uses outbound links to Setmore booking pages

**Contact:** jack@visionwellbeing.co.uk, Edinburgh-based

---

## 2. Competitive Analysis Summary

**Competitors researched:**
- ThinkCBT (thinkcbt.com) — £85/session, BABCP accredited team, multi-therapist clinic, free CBT workbook download, Zoom/Skype/Teams delivery
- OxfordCBT (oxfordcbt.co.uk) — Multi-therapist clinic, JaneApp booking, self-assessment quiz funnel, step-by-step booking process
- AnxietyTherapist (anxietytherapist.co.uk) — £70/session, solo practitioner, BUPA preferred provider, WhatsApp booking available
- Onebright (onebright.com) — Corporate-focused, 87% recovery rate stats, enterprise scale

**Industry standards (must match):**
- Clear pricing visible upfront
- Free initial consultation / assessment
- BABCP or equivalent accreditation prominently displayed
- Condition-specific pages explaining how CBT helps each issue
- Testimonials with context
- FAQ section addressing common concerns
- Online session logistics explanation

**Gaps in competitor sites (our opportunities):**
- Most competitor sites look dated, template-heavy, text-wall-heavy
- No competitors have interactive CBT tools or resources
- Few have structured content marketing (articles, guides)
- No competitors use modern motion/animation — all feel static and clinical
- Most lack a clear funnel; they just list services
- ThinkCBT has a free workbook download (lead magnet) — Jack can beat this with his existing courses and toolkit

**Differentiators for Vision Wellbeing:**
- Researcher + therapist (unique credibility angle)
- Existing content library (20+ articles, 2 courses, toolkit)
- Specialism in young people alongside adults
- Modern, premium design vs clinical/dated competitors
- Edinburgh / University of Edinburgh pedigree
- Block booking as "pre-commitment is the intervention" framing

---

## 3. Funnel Strategy

**Funnel type:** A — Service business
**Goal:** Free consultation booked → paid sessions → block booking upsell

### Funnel map:

| Page | Stage | Primary Action | Exit Path |
|------|-------|---------------|-----------|
| index.html | Awareness + Consideration | Book free consultation | → Setmore consultation |
| the-therapy.html | Consideration (deep) | Book free consultation | → Setmore consultation |
| fees.html | Conversion | Book session or block | → Setmore booking |
| resources.html | Awareness (SEO entry) | Read content → explore site | → index or fees |
| 404.html | Recovery | Return to homepage | → index.html |

### Revenue-generating elements (minimum 3):

1. **Free consultation as low-friction entry** — zero-commitment 15-min call, every CTA defaults to this for cold traffic
2. **Block booking upsell** — framed as "pre-commitment is the intervention," visible on fees page and as secondary CTA on homepage
3. **Lead capture via Edinburgh waitlist** — email collection for future in-person sessions
4. **Resource library as SEO funnel** — articles drive organic traffic, each article has booking CTA at bottom
5. **FAQ near conversion point** — addresses top 3 objections (accreditation, online effectiveness, session count) directly above booking CTAs

### Top 3 objections at conversion point:
1. "Is he properly qualified?" → MSc with distinction from UoE, clinical supervision, active research
2. "Does online therapy actually work?" → Research backing, testimonials specific to online experience
3. "How many sessions will I need?" → Transparent 8-16 range, regular progress reviews, planned ending

---

## 4. Pages & Structure

### 4.1 index.html (Homepage)

**Sections in order:**
1. **Preloader** — subtle brand animation, 1-2s
2. **Hero** — PAS copy targeting worry/overthinking, portrait of Jack, "Book my free consultation" primary CTA + "See pricing" secondary, rotating problem words (worry, overthinking, low mood, etc.), credential badges (UoE, research, supervised practice)
3. **Social proof strip** — 5.0 Google rating, review count, "Currently accepting new clients"
4. **What I help with** — Bento grid (NOT 3 equal cards) showcasing 4-5 key specialisms with short descriptions, links to the-therapy.html sections
5. **How it works** — 3-step visual: Free consultation → Structured sessions → Lasting skills
6. **Testimonials** — Carousel or staggered cards, 6 testimonials with initials and context
7. **About Jack** — Photo, short bio, credentials, research involvement, link to full therapy page
8. **Pricing snapshot** — 3-tier cards (consultation/single/block) with Setmore CTAs
9. **Final CTA** — "You don't need to have it all figured out" messaging, consultation booking
10. **Footer** — Links, contact, crisis support notice, privacy

### 4.2 the-therapy.html

**Sections in order:**
1. **Hero** — "Therapy that helps you understand the pattern and change it" — existing copy is excellent, keep the tone
2. **Table of contents** — Anchor links to sections (matches existing I/II/III structure)
3. **What CBT can help with** — 8 expandable/accordion treatment areas (anxiety, perfectionism, health anxiety, OCD, performance, low mood, insomnia, panic) + "I also work with" section. Each with a consultation CTA.
4. **How CBT works** — The CBT cycle diagram (thoughts → feelings → body → action), 4-step process
5. **Inside a session** — What to expect, collaborative format, practical tools
6. **CTA section** — Pricing + booking

### 4.3 fees.html

**Sections in order:**
1. **Hero** — "Book 5 sessions. Save £50." — block booking value proposition
2. **3-tier pricing** — Free consultation / £80 single / £350 block of 5. Setmore embedded booking widget for primary tier, links for others.
3. **Contact form** — Name, email, message. "Send my message" CTA. Privacy line.
4. **FAQ accordion** — Where sessions take place, how many needed, concessions, accreditation status
5. **Edinburgh waitlist** — Email capture for future in-person sessions

### 4.4 resources.html

**Sections in order:**
1. **Hero** — "Articles & Techniques" — free practical guides
2. **Featured courses** — PAUSE (mindfulness) and MAP (activation) cards with thumbnails
3. **Article grid** — Filterable/browsable grid with thumbnails, titles, dates. Structure only — links to existing article URLs on current site, or placeholder article template
4. **CBT Toolkit** — Link/card to the interactive toolkit
5. **CTA section** — "Ready to take the next step?" with booking links

### 4.5 404.html

Branded error page with nav, "Page not found" message, link back to homepage.

---

## 5. Design Direction

### Base design system:
Browse design-systems/design-md/ for a calm, measured aesthetic. Candidates: Calm (if available), or adapt from a clean system like Linear, Notion, or Claude. The therapy context calls for warmth and trust, not cold minimalism.

### Colour palette direction:
- Rich dark background sections (#0a0a0a, #111827) for premium feel
- Warm accent (sage green or soft amber) — not clinical blue
- Cream/warm white for light sections
- Subtle surface variations for depth

### Typography:
- Distinctive serif for headings (warmth, authority — something like DM Serif Display, Playfair Display, or Instrument Serif)
- Clean geometric sans for body (readability — something like DM Sans, Outfit, or Sora)
- clamp() fluid scale throughout
- Weight extremes: 300 + 800

### Vanta.js:
Fog effect with brand colours — subtle, warm. Fits wellness/therapy aesthetic. CSS gradient fallback.

### Motion:
- Lenis smooth scroll
- GSAP ScrollTrigger entrance animations on every section
- Barba.js page transitions
- Hero: word rotation animation (cycling through problem words)
- Testimonials: subtle horizontal scroll or stagger
- Preloader: brand-coloured, simple, 1-2s

---

## 6. Setmore Integration

**Approach:** Hybrid
- **Fees page:** Embed Setmore booking widget for seamless in-page booking experience
- **All other pages:** Direct links to Setmore booking URLs for CTAs
- **3 Setmore product links:**
  - Free consultation: `https://visionjackwells.setmore.com/jack?step=time-slot&products=9b8e3f21-fd3f-41d1-9a35-ec38ef55fbab&type=service&staff=c648bc15-9ebc-4edb-b005-f11704cbebda&staffSelected=false`
  - Single session (£80): `https://visionjackwells.setmore.com/jack?step=time-slot&products=add1c933-565c-43f8-a48a-627d3268f527&type=service&staff=c648bc15-9ebc-4edb-b005-f11704cbebda&staffSelected=false`
  - Block of 5 (£350): `https://visionjackwells.setmore.com/jack?step=time-slot&products=f72fdfc0-674b-4a8e-91c4-eb9300688630&type=service&staff=c648bc15-9ebc-4edb-b005-f11704cbebda&staffSelected=false`

---

## 7. SEO & Technical

- LocalBusiness JSON-LD schema on every page (type: ProfessionalService)
- FAQ schema on fees page and therapy page
- AggregateRating schema (5.0, 24 reviews)
- Unique title/meta per page: "Page | Vision Wellbeing — Online CBT Therapy UK"
- OG tags, Twitter cards, canonical URLs
- Primary keyword: "online CBT therapy UK"
- Secondary: "CBT therapist Edinburgh", "online CBT for anxiety", "CBT for young people UK"

---

## 8. Deployment

**Target:** GitHub Pages
- Create repo `vision-wellbeing-demo` under MACKJWellys account
- Push static files to `main` branch
- Enable GitHub Pages from repo settings
- Demo URL: `https://mackjwellys.github.io/vision-wellbeing-demo/`

---

## 9. Content & Copy

- Generate all copy using PAS framework from conversion-copy skill
- Match Jack's existing tone: warm, measured, specific, honest — knowledgeable friend, not corporate brochure
- First-person CTAs throughout ("Book my session", "Get my free consultation")
- Real numbers: 5.0 Google rating, 24 reviews, MSc with distinction, 8-16 sessions typical
- No AI-slop words (elevate, transform, seamless, journey, etc.)
- Resources page: structure only, no full article content

---

## 10. Media

- Jack's portrait: source from existing site (images/jack-portrait-secondary.png)
- Step illustrations: source from existing site (step-stepping-stones, paper-boat, thread)
- Therapy hero art: source from existing site
- Article thumbnails: source from existing site
- Course thumbnails: source from existing site
- Stock photography: Unsplash/Pexels for any gaps (search: therapy session, calm workspace, notebook pen, mindfulness)
- All images: WebP with lazy loading and explicit dimensions
