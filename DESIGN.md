# Vision Wellbeing — Design System

## Typography

**Heading:** Instrument Serif (400)
**Body:** DM Sans (300, 400, 500, 700)
**Contrast type:** Structure (serif + geometric sans)

```css
:root {
  --font-heading: 'Instrument Serif', serif;
  --font-body: 'DM Sans', sans-serif;

  --text-xs: clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.35vw, 1.125rem);
  --text-lg: clamp(1.25rem, 1rem + 0.75vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1rem + 1.5vw, 2.25rem);
  --text-2xl: clamp(2rem, 1.2rem + 2.5vw, 3.5rem);
  --text-3xl: clamp(2.5rem, 1rem + 4vw, 5rem);
  --text-4xl: clamp(3rem, 1rem + 5.5vw, 6.5rem);
}
```

**Heading rules:**
- font-family: var(--font-heading)
- font-weight: 400 (Instrument Serif has natural elegance at regular weight)
- line-height: 1.1 for h1, 1.15 for h2, 1.2 for h3-h6
- letter-spacing: -0.02em on h1/h2, -0.01em on h3

**Body rules:**
- font-family: var(--font-body)
- font-weight: 300 for large body, 400 for default, 500 for emphasis, 700 for strong
- line-height: 1.7
- letter-spacing: 0

## Colours

```css
:root {
  /* Primary palette */
  --color-primary: #5B7553;
  --color-primary-dark: #3D5038;
  --color-primary-light: #7A9971;
  --color-accent: #C4956A;
  --color-accent-dark: #A67B52;
  --color-accent-light: #D4B08C;

  /* Backgrounds */
  --color-bg-dark: #0F1210;
  --color-bg-dark-elevated: #1A1F1C;
  --color-bg-light: #FAF8F5;
  --color-bg-cream: #F5F0EA;
  --color-bg-surface: #EFEBE5;

  /* Text */
  --color-text-primary: #1A1F1C;
  --color-text-secondary: #5A5F5C;
  --color-text-muted: #8A8F8C;
  --color-text-on-dark: #FAF8F5;
  --color-text-on-dark-muted: #A5A8A6;
  --color-text-on-primary: #FAF8F5;

  /* Borders & surfaces */
  --color-border: #DDD8D0;
  --color-border-light: #EBE7E1;
  --color-border-dark: #2A302C;

  /* Semantic */
  --color-success: #5B7553;
  --color-warning: #C4956A;
  --color-error: #B85450;
}
```

**Palette rationale:**
- Sage green primary (#5B7553) — growth, calm, nature, healing. Not clinical blue.
- Warm amber accent (#C4956A) — warmth, approachability, human touch.
- Near-black with green undertone (#0F1210) — rich, not cold. For dark sections.
- Warm cream (#FAF8F5) — softer than white, inviting, easy on eyes.

## Spacing

```css
:root {
  --space-xs: clamp(0.25rem, 0.2rem + 0.15vw, 0.5rem);
  --space-sm: clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem);
  --space-md: clamp(1rem, 0.8rem + 0.6vw, 1.5rem);
  --space-lg: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
  --space-xl: clamp(2rem, 1.2rem + 2.5vw, 4rem);
  --space-2xl: clamp(3rem, 1.5rem + 4vw, 6rem);
  --space-3xl: clamp(4rem, 2rem + 6vw, 8rem);
  --space-section: clamp(4rem, 2rem + 8vw, 8rem);
}
```

## Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 999px;
}
```

## Shadows

```css
:root {
  --shadow-sm: 0 1px 3px rgba(15, 18, 16, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 18, 16, 0.08);
  --shadow-lg: 0 8px 30px rgba(15, 18, 16, 0.12);
  --shadow-card-hover: 0 12px 40px rgba(15, 18, 16, 0.15);
}
```

## Animation & Motion

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.8s;
  --duration-entrance: 1s;
}
```

**Motion rules:**
- Section entrances: fade up (y: 40→0, opacity: 0→1), 0.8s, power2.out
- Card hover: translateY(-4px), shadow increase, 0.3s
- CTA hover: scale(1.03), color transition, 0.3s
- Nav link hover: underline slide-in from left, 0.3s
- Page transitions: fade, 0.5s, power2.inOut
- Stagger between items: 0.1s
- ScrollTrigger start: "top 85%"

## Layout

```css
:root {
  --container-max: 1280px;
  --container-padding: clamp(1.25rem, 1rem + 2vw, 3rem);
}
```

**Layout rules:**
- Max content width: 1280px, centered
- Section padding: var(--space-section) vertical
- Bento grids for card layouts (never 3 equal columns)
- Full-bleed sections for visual variety
- Mobile-first responsive breakpoints: 480px, 768px, 1024px, 1280px

## Vanta.js Configuration

```js
VANTA.FOG({
  el: '#hero-bg',
  mouseControls: false,
  touchControls: false,
  minHeight: 200,
  minWidth: 200,
  highlightColor: 0x5B7553,
  midtoneColor: 0x1A1F1C,
  lowlightColor: 0x0F1210,
  baseColor: 0x0F1210,
  speed: 0.8,
  zoom: 1.2
})
```

## Google Fonts Embed

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```
