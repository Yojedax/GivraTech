# Givra Tech — Logo System Specification

> Version 1.0 — March 2026

---

## Brand Overview

**Name:** Givra Tech
**Tagline:** Data · AI · Growth Intelligence
**Personality:** Intelligent, Precise, Analytical, High-end, Trustworthy
**Market:** B2B — E-commerce, Retail, Distribution — LatAm + International

---

## The Symbol: G-Node

### Concept
The G-Node mark is a geometric letterform — the letter **G** — constructed from data node junction points connected by a clean stroke path. The G shape is composed of:
- A large counterclockwise arc (the C-body of the G)
- An inner L-structure (the crossbar and right-side arm of the G)
- **4–6 data node circles** placed at each structural junction

The result reads simultaneously as a lettermark (G for Givra) and a data network graph — nodes connected by edges, suggesting data intelligence, precision, and structured analysis.

**What it is NOT:** No brains, no robots, no WiFi arcs, no generic startup spark.

---

## Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Near Black | `#08090E` | All logo backgrounds |
| Symbol / Accent | Neon Cyan | `#00C8FF` | Symbol, "TECH" text, highlights |
| Primary Text | Pure White | `#FFFFFF` | "GIVRA" text |
| Secondary Text | Steel Gray | `#CBD5E1` | Tagline, captions |
| Muted | Dark Slate | `#334155` | Tagline in horizontal logo |
| Border / Divider | Deep Slate | `#1E293B` | Divider lines |

### Glow System
The neon glow effect is achieved with 3 layered circles/paths per element:
1. **Outer glow:** opacity 6–8%, radius 2× main size
2. **Mid glow:** opacity 14–18%, radius 1.5× main size
3. **Inner sharp:** opacity 100%, exact size — the visible element

This creates a natural luminous effect without SVG filters (cross-platform compatible).

---

## Typography

| Element | Font | Weight | Size | Tracking |
|---------|------|--------|------|---------|
| "GIVRA" | Inter | 700 (Bold) | Variable | +3–6px |
| "TECH" | Inter | 300 (Light) | Same as GIVRA | +5–7px |
| Tagline | Inter | 400 | ~30% of logo size | +2–3px |

**Font stack:** `'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif`

**Note for production:** Convert all text elements to outlines/paths in Inkscape, Illustrator, or Figma before using in presentations, print, or as a standalone asset. This eliminates font dependency.

---

## Logo Versions

### 1. Icon / Favicon (`logo-icon.svg` — 48×48)

**Use for:** Browser favicon, app icon, LinkedIn profile image, social media avatar, small UI placements.

**Structure:**
- Dark background with `rx=10` rounded corners (app icon style)
- G-Node symbol centered in 48×48 canvas
- 4 data nodes (top-right, left, bottom-right, crossbar-end)
- Symbol occupies ~83% of the canvas (comfortable padding)

**At what sizes:** Works at 16px, 32px, 48px, 64px, 128px, 256px.

---

### 2. Horizontal Wordmark (`logo-horizontal.svg` — 296×72)

**Use for:** Website header, LinkedIn banner, email signatures, document headers, slide decks.

**Structure:**
- Symbol on left (~54×54, scaled 1.125×)
- Thin vertical divider line
- "GIVRA" in white, weight 700, letter-spacing 3
- "TECH" in neon cyan, weight 300, letter-spacing 5
- Optional: sub-tagline "DATA · AI · GROWTH INTELLIGENCE" in dark muted gray

**Clearspace:** Minimum padding = height × 0.25 on all sides

---

### 3. Square Lockup (`logo-square.svg` — 200×200)

**Use for:** LinkedIn company page logo, OG image component, profile thumbnails, stickers, profile picture (cropped), business card.

**Structure:**
- G-Node symbol at 2.25× scale (108×108 effective), centered
- Full 6-node version (primary + secondary arc midpoints)
- Thin horizontal rule separator
- "GIVRA" below in white, weight 700, letter-spacing 6
- "TECH" smaller in neon cyan, weight 300, letter-spacing 7

---

## Usage Guidelines

### ✅ Correct usage
- Always on dark background (#08090E or equivalent dark navy/black)
- Maintain aspect ratio — never stretch or distort
- Minimum safe size: icon at 16px, horizontal at 120px width
- Keep clear space equal to the height of the "G" node circle around the logo

### ❌ Incorrect usage
- Never place on white or light backgrounds (breaks the glow aesthetic)
- Never change the cyan color to any other color
- Never add drop shadows (the glow is the shadow)
- Never rotate or flip the logo
- Never remove the data nodes (they are part of the identity)
- Never use outline/stroke style for the wordmark text

---

## Light Background Version

For contexts requiring a light background (e.g., printed documents, white slide templates):

- **Background:** White `#FFFFFF`
- **Symbol / TECH:** Deep Navy `#0A1628` (replace cyan)
- **GIVRA text:** Deep Navy `#0A1628`
- Remove glow layers (replace with a single sharp path)

*This version is secondary — prioritize dark versions always.*

---

## AI Image Generation Prompts

Use these prompts in Midjourney, DALL-E 3, or Stable Diffusion to generate supporting brand visuals:

### Hero / OG Image
```
A premium dark-themed data dashboard interface for an AI consulting company called Givra Tech.
Deep black background (#08090E), glowing neon cyan data visualizations, RFM customer segments,
node-graph network connections, clean geometric UI elements. No text except subtle "GIVRA TECH" watermark.
Corporate, precise, analytical aesthetic. Cinematic lighting. 16:9 ratio.
```

### Social Media Background
```
Abstract dark tech background: interconnected data nodes and graph edges glowing in neon cyan (#00C8FF)
on near-black surface. Minimal, geometric, premium B2B aesthetic. Subtle gradient depth.
No faces, no people, no generic AI clichés. Clean and architectural. 1:1 square format.
```

### LinkedIn Banner
```
Ultra-minimal horizontal banner for an AI data consultancy. Deep navy background,
three connected neon cyan data nodes on the left, company name "GIVRA TECH" in clean white bold font.
Right side: subtle abstract node network fading into background. Professional, high-end,
Fortune 500 aesthetic. 1584×396px.
```

### Icon Illustration (Midjourney)
```
Logo design for "GIVRA TECH" — a geometric letter G letterform made of connected data network nodes.
Neon cyan (#00C8FF) on deep black background. Glowing nodes at junction points. Minimalist, precise,
clean vector aesthetic. No text. Dark theme. Premium AI consultancy brand identity. --ar 1:1 --style raw
```

---

## Files

| File | Format | Size | Usage |
|------|--------|------|-------|
| `logo-icon.svg` | SVG | 48×48 | Favicon, app icon, social avatar |
| `logo-horizontal.svg` | SVG | 296×72 | Website header, email, docs |
| `logo-square.svg` | SVG | 200×200 | LinkedIn, OG image, profile |
| `logo-spec.md` | MD | — | This file — design system reference |

**To export PNG versions:**
Open each SVG in a browser (Chrome/Firefox), right-click → "Save image as", or use:
```bash
# Install svgexport: npm install -g svgexport
svgexport logo-icon.svg logo-icon@2x.png 96:96
svgexport logo-horizontal.svg logo-horizontal@2x.png 592:144
svgexport logo-square.svg logo-square@2x.png 400:400
```

**To convert text to paths (for production):**
Open in Inkscape → Select all text → Path > Object to Path → Save.

---

*Givra Tech Brand System — Version 1.0*
