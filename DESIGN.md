# Design Brief

## Vision
Premium B2B SaaS landing for Manazen corporate gifting & employee rewards. Professional, trustworthy, data-driven. Cyan and dark teal palette with geometric precision, circuit board patterns, dashed-line journey elements. Benchmarks: Linear, Stripe, Vercel.

## Palette (OKLCH)
| Token | L | C | H | Use |
|-------|---|---|---|-----|
| primary | 70 | 0.15 | 200 | CTAs, highlights, hero accent |
| secondary | 30 | 0.12 | 200 | Dark backgrounds, structural hierarchy |
| accent | 60 | 0.20 | 195 | Hover, active states, emphasis |
| background | 98 | 0 | 0 | Page base (light mode) |
| muted | 93 | 0 | 0 | Subtle backgrounds, dividers |
| foreground | 12 | 0 | 0 | Primary text |
| border | 88 | 0 | 0 | Subtle lines, card edges |

## Typography
- **Display**: Space Grotesk (geometric, bold, headlines)
- **Body**: Plus Jakarta Sans (humanist, readable, approachable)
- **Mono**: JetBrains Mono (code, data labels)

## Structural Zones
| Zone | Background | Border | Shadow | Note |
|------|------------|--------|--------|------|
| Header | card (white) | border-b | none | Fixed nav, logo + links |
| Hero | gradient-hero | none | none | 80vh, circuit pattern, dashed journey |
| Sections | muted/bg alternate | none | none | Pillar cards, pricing, features |
| Cards | card (white) | border | shadow-card | 8px radius, grid layout |
| CTAs | primary | primary border | shadow-elevated | 24px radius, lifted state |
| Footer | secondary | none | none | Dark teal background |

## Shape Language
Radius: 0px (structural), 8px (cards), 24px (CTAs) | Borders: 1px subtle, 2px primary on action

## Motion
Smooth 0.3s cubic-bezier on all interactive elements, shadow-elevated on hover, no bounce.

## Aesthetic
Circuit board SVG pattern (40px grid, 5% opacity), dashed-line pillar connectors, geometric alignment, card hierarchy via shadow/border, whitespace-rich, data-driven color coding.

## Dark Mode
Cyan/teal remain dominant. Backgrounds invert to dark neutrals, text near-white, borders gain cyan tint (L28 C0.02 H200).

## Signature Detail
Dashed cyan lines connect pillar cards to journey flow; circuit board subtle grid overlay in hero and footer zones.
