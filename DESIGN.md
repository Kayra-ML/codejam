---
name: Zscript Cloud
description: Cloud gaming platform — cinematic dark UI, violet accent, Xbox Game Pass energy
colors:
  bg-base: "#030304"
  bg-surface: "#0A0A0C"
  bg-elevated: "#121214"
  accent: "#8B5CF6"
  accent-bright: "#A78BFA"
  accent-dim: "#6D28D9"
  text-primary: "#FFFFFF"
  text-secondary: "#D4D4D8"
  text-muted: "#A1A1AA"
  success: "#22C55E"
  warning: "#F59E0B"
  error: "#EF4444"
  border: "#27272A"
typography:
  display:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: 16px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: 16px
  card:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Zscript Cloud

## Overview
Zscript Cloud is a cloud gaming platform for players who want AAA games without hardware. The visual language is cinematic and dark — closer to Xbox Game Pass and a night-time cinema lobby than a SaaS dashboard. One violet accent. No neon glow soup. Motion is motivated: hero entry, scroll reveal, hover physics on cards.

Audience: Turkish-speaking gamers, 16–35. Tone: direct, confident, no gamer-bro slang, no AI poetry.

## Colors
- **bg-base (#09090B):** Page canvas. Off-black, never pure #000.
- **bg-surface (#18181B):** Cards, elevated sections.
- **accent (#8B5CF6):** The only brand color. CTAs, active states, Pro plan highlight, focus rings.
- **accent-bright (#A78BFA):** Hover on accent surfaces.
- **text-primary / text-secondary:** Hierarchy. Body never drops below zinc-400 on dark.

Locked dark theme. No light-mode section inversions.

## Typography
Outfit for everything readable. JetBrains Mono only for live stats (ping, FPS, resolution). Display headlines track tight. No serif. No Inter.

## Layout
Max content width 1400px. Section padding ~112px desktop, 64px mobile. Hero is split (copy left, cinematic visual right) — never a centered stack on desktop. Collapse to single column under 768px.

## Elevation & Depth
No drop shadows on dark. Depth comes from surface steps (base → surface → elevated) and 1px borders at white/5–8%. Optional inner highlight on glass overlays: `inset 0 1px 0 rgba(255,255,255,0.08)`.

## Shapes
Cards and images: 16px (`rounded-lg`). Buttons and filter pills: full pill. Inputs: 12px. Do not mix sharp corners with pills except this documented split.

## Components
- **Primary button:** Violet fill, white label, pill, 16px vertical padding. Hover → accent-bright. Active → scale 0.98.
- **Secondary button:** Transparent, 1px white/15 border, pill.
- **Game card:** 2:3 poster, title + genre below, hover lifts 4px and reveals a Play overlay.
- **Pricing card:** Surface bg. Pro card gets a 1px accent border, not a glow.

## Do's and Don'ts
- Do keep one accent. Violet is the only saturated color on the page besides status dots.
- Don't add outer neon glows, mesh-gradient blobs, or purple-to-blue AI gradients.
- Don't put an eyebrow on every section. Max one per three sections.
- Don't center the hero on desktop.
- Don't use Inter, Fraunces, or Instrument Serif.
- Do honor `prefers-reduced-motion`.
- Do keep nav on one line at `lg`. Height ≤ 72px.
- Do write Turkish copy that a person would actually say.
