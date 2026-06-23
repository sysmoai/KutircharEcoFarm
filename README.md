# Kutirchar EcoFarm — Brand Identity Guide

**Official English Name:** Kutirchar EcoFarm  
**Official Bengali Name:** কুটিরচর ইকোফার্ম  
**Owner / Project Lead:** EMON HOSSAIN  
**Status:** FINAL / FIXED — 21 June 2026  
**Location:** Kutirchar, Bhadraghat, Kamarkhanda, Sirajganj, Bangladesh  
**Website:** kutircharecofarm.com  

---

## What This Is

A complete, interactive **Brand Identity Guide** built with React + Tailwind CSS. It serves as the official single source of truth for all brand assets, design tokens, logo usage rules, and AI agent instructions for **Kutirchar EcoFarm** — a smart cattle, biogas, solar, silage, and circular profit ecosystem in rural Bangladesh.

---

## 14 Sections

| Section | Title | Purpose |
|---------|-------|---------|
| 00 | Master Logo Source | Original icon, size previews, icon structure notes |
| 01 | Logo System | All 10 logo variants (English, bilingual, Bengali-first, icon-only, etc.) |
| 02 | Logo Lockups | Horizontal, stacked, document header, signboard, premium centered |
| 03 | Icon System | Full-color, monochrome, white, favicons (16–64px), app icons |
| 04 | Seal + Stamp System | SVG circular seal with bilingual arc text, bank document mock |
| 05 | Monochrome + Reverse | All 7 color modes with usage table |
| 06 | Clear Space & Sizing | Spacing unit X = icon radius, minimum sizes for all contexts |
| 07 | Color System | 12 brand colors with hex values, usage rules, contrast ratings |
| 08 | Typography System | English + Bengali type scale, font stack guide |
| 09 | Usage Examples | Website header, hero, bank report, business card, social, govt letter |
| 10 | Incorrect Usage | 9 visual wrong-use examples + 18-item prohibition list |
| 11 | Export Assets | Full export spec (SVG, PNG, favicon, social, documents) |
| 12 | Developer Notes | Owner, location, sub-brands, phase system, design tokens |
| 13 | AI Agent Tokens | **Copyable JSON brand tokens for AI agents** + image prompt templates |

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (Vite)
pnpm run dev
```

> **Note:** This project uses pnpm. Do not use npm or yarn.

---

## Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS v4** (via @tailwindcss/vite)
- **Vite 6**
- **Google Fonts:** Playfair Display, Inter, Manrope, Noto Sans Bengali, Noto Serif Bengali

---

## Brand Token JSON (for AI Agents)

Navigate to **Section 13 — AI Agent Tokens** in the app and click **"Copy JSON"** to get the complete machine-readable brand token object. Paste it into any AI system prompt to ensure on-brand output.

The JSON includes:
- Official names (English + Bengali)
- All 12 brand color hex codes
- Typography font stack
- 6 sub-brand names
- Phase labels (NOW / NEXT / LATER)
- Content rules
- Forbidden name variants
- Contact + location data

Compatible with: **Claude, GPT-4, Gemini, Midjourney, DALL-E, Stable Diffusion, Adobe Firefly, Ideogram, Canva AI**

---

## Brand Rules (Quick Reference)

| Rule | Value |
|------|-------|
| Official English name | `Kutirchar EcoFarm` (one word each) |
| Official Bengali name | `কুটিরচর ইকোফার্ম` |
| Primary color | `#1F6B3A` Kutirchar Green |
| Background | `#FAF7EF` Document Ivory |
| Primary font | Playfair Display (English wordmark) |
| Bengali font | Noto Sans Bengali |
| Tone | Evidence-first · Auditor · No hype |
| Tagline | Smart Cattle & Circular Energy Ecosystem |

**Never write:** Kutir Char, Eco Farm, Kutirchar Smart Farm, Prangan Farm, or Emon Farm.

---

## Sub-Brand Naming

All future modules follow this pattern:

- Kutirchar EcoFarm **Dairy**
- Kutirchar EcoFarm **Energy**
- Kutirchar EcoFarm **Biogas**
- Kutirchar EcoFarm **Silage**
- Kutirchar EcoFarm **Training**
- Kutirchar EcoFarm **Dashboard**

---

## File Structure

```
src/
├── app/
│   ├── App.tsx                    # Main app + sidebar navigation
│   └── components/
│       ├── BrandLogo.tsx          # Reusable logo component (all variants/modes)
│       ├── SealLogo.tsx           # SVG circular seal component
│       └── sections/
│           ├── Section00MasterLogo.tsx
│           ├── Section01LogoSystem.tsx
│           ├── Section02LogoLockups.tsx
│           ├── Section03IconSystem.tsx
│           ├── Section04SealSystem.tsx
│           ├── Section05Monochrome.tsx
│           ├── Section06ClearSpace.tsx
│           ├── Section07ColorSystem.tsx
│           ├── Section08Typography.tsx
│           ├── Section09UsageExamples.tsx
│           ├── Section10IncorrectUsage.tsx
│           ├── Section11ExportAssets.tsx
│           ├── Section12DeveloperNotes.tsx
│           └── Section13AIAgentTokens.tsx   # AI agent JSON tokens
├── imports/
│   └── image.png                  # Master logo icon (DO NOT MODIFY)
└── styles/
    ├── fonts.css                  # Google Fonts imports
    ├── theme.css                  # Design tokens
    └── globals.css
```

---

## GitHub Usage Notes

- The `src/imports/image.png` is the **master logo icon** — commit it as-is
- Do not commit `node_modules/`, `.env`, or any private documents
- The `__figma__entrypoint__.ts` file is auto-generated by Figma Make — do not modify
- For production build: `pnpm run build` (outputs to `dist/`)

---

## Brand Custodian

**Owner:** EMON HOSSAIN  
**Decision locked:** 21 June 2026  
**Contact:** info@kutircharecofarm.com  

This brand identity guide is the official reference for all Kutirchar EcoFarm communications. The master logo icon is locked — it must not be modified, recreated, or replaced without formal brand review.
