# Kutirchar EcoFarm — Full Digital System

**Official English Name:** Kutirchar EcoFarm  
**Official Bengali Name:** কুটিরচর ইকোফার্ম  
**Owner / Project Lead:** EMON HOSSAIN  
**Status:** FINAL / FIXED — 21 June 2026  
**Location:** Kutirchar, Bhadraghat, Kamarkhanda, Sirajganj, Bangladesh  
**Website:** kutircharecofarm.com · kutircharecofarm.bd  
**Contact:** info@kutircharecofarm.com  

---

## What This Is

A **complete digital system** for Kutirchar EcoFarm — combining a full public-facing website (8 pages) with a comprehensive brand identity guide (14 sections) and a complete asset download system. Both are accessible within the same React application.

---

## System Architecture

```
/ (Home)                    ← Website: 8 pages
├── /project                ← The Project Overview
├── /proof                  ← Proof & Governance (bank-ready)
├── /ecosystem              ← Circular Ecosystem
├── /products               ← Products & Services (phase-gated)
├── /digital                ← Digital Infrastructure
├── /updates                ← Updates / Reports
├── /contact                ← Contact & Partnership
│
└── /brand-guide            ← Brand Identity Guide: 14 sections
    ├── 00 Master Logo Source
    ├── 01 Logo System
    ├── 02 Logo Lockups
    ├── 03 Icon System
    ├── 04 Seal + Stamp System
    ├── 05 Monochrome + Reverse
    ├── 06 Clear Space & Sizing
    ├── 07 Color System
    ├── 08 Typography System
    ├── 09 Usage Examples
    ├── 10 Incorrect Usage
    ├── 11 Export Assets ← 43 download buttons
    ├── 12 Developer Notes
    └── 13 AI Agent Tokens

/ (Root AI Guidelines)      ← Mandatory AI Rules
├── AI_BRAND_GUIDELINES.md  ← Full AI system prompt
└── .cursorrules            ← IDE-specific constraints
```

---

## 🤖 Built for the AI Era (AI Developer Instructions)

This repository is specifically architected to be maintained, scaled, and built upon by AI developers, agents, and LLMs (like Cursor, Windsurf, GitHub Copilot, and Claude).

**If you are an AI reading this repository, you MUST follow these steps:**
1. Open and ingest `AI_BRAND_GUIDELINES.md` located at the root of the repository.
2. Adhere strictly to the `.cursorrules` file.
3. Understand the **Zero Fake Data Policy**: You are strictly forbidden from generating dummy text, fake numbers, or placeholder content.
4. Apply the **Bilingual Optical Scaling Rule**: All Bengali text must be sized ~14% larger than its English sibling to achieve optical balance.
5. All brand variables, URLs, and global state must be read from `src/app/brand.ts`.

---

## Quick Start

```bash
pnpm install
pnpm run dev
```

> Uses pnpm. Do not use npm or yarn.

---

## The Website — 8 Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Hero, trust strip, ecosystem preview, partnership CTA |
| **Project** | `/project` | What/why, phases 0–5 roadmap, location, governance |
| **Proof & Governance** | `/proof` | Audit ledger, stop rules, Zone A/B explained, evidence pack |
| **Ecosystem** | `/ecosystem` | Circular flow: cattle→biogas→slurry→fodder→cattle loop |
| **Products & Services** | `/products` | Phase-gated: Now / Next / Later — no over-promise |
| **Digital Infrastructure** | `/digital` | Starlink, CCTV, UPS — with verification gates |
| **Updates / Reports** | `/updates` | Filterable trust reports with evidence + open gaps |
| **Contact** | `/contact` | Inquiry form (validation + success/error), WhatsApp, email |

### Key website features
- Evidence-first language — no hype, no fake numbers
- Phase labels (Now / Next / Later) on every product/service
- Stop rules in red callouts where verification is required
- Contact form with validation, success state, mailto fallback
- Bilingual (Bengali + English) throughout
- Mobile responsive with hamburger menu
- Sticky navbar, smooth scroll-to-top on navigation

---

## The Brand Guide — 14 Sections at `/brand-guide`

Navigate to `/brand-guide` from the navbar ("🎨 Brand Guide" button) or homepage.

| Section | Content |
|---------|---------|
| 00 | Master logo source, icon anatomy, size previews |
| 01 | Complete logo system — 10 variants |
| 02 | Logo lockups — horizontal, stacked, signboard |
| 03 | Icon system — all modes, favicon to app icon |
| 04 | Seal + stamp — expert proportions, Playfair Display arc |
| 05 | Monochrome + reverse — all 7 color modes |
| 06 | Clear space + sizing rules |
| 07 | Color system — 12 brand tokens |
| 08 | Typography — English + Bengali paired scale |
| 09 | Usage examples — website, bank doc, business card |
| 10 | Incorrect usage — 9 visual examples + 18 rules |
| 11 | **Export Assets** — 43 download buttons |
| 12 | Developer notes — owner, location, sub-brands, phase system |
| 13 | AI Agent Tokens — copyable JSON for all AI tools |

---

## Asset Downloads — Section 11

Direct link: `/brand-guide?section=11`

| Category | Files |
|----------|-------|
| **Icon Pack** | Full color, Black, White, Dark Green, Watermark at 8 sizes (16–1024px) |
| **Logo Lockups** | 15 variants: English/Bilingual/Bengali-First × Horizontal/Stacked × Color/Black/White |
| **Seal / Stamp** | 4 modes × SVG + PNG at 200/400/800/1200px |
| **Favicon Pack** | 16, 32, 48, 64, 96, 128, 180, 512px |
| **Social Media** | YouTube, Facebook, Instagram, Twitter/X, LinkedIn, WhatsApp, TikTok, Telegram — all platform sizes |
| **Watermark** | 10% opacity logo at 128–1024px for document backgrounds |

---

## AI Agent Tokens — Section 13

Navigate to `/brand-guide?section=13` for the copyable JSON brand token object.

Compatible with: **Claude, GPT-4, Gemini, Midjourney, DALL-E, Stable Diffusion, Adobe Firefly, Ideogram, Canva AI**

The JSON includes: official names (both languages) · all 12 color hex codes · typography font stack · 6 sub-brand names · phase labels · content rules · forbidden name variants · social media image sizes · logo minimum sizes.

---

## Brand Rules (Quick Reference)

| Rule | Value |
|------|-------|
| Official English name | `Kutirchar EcoFarm` — never split |
| Official Bengali name | `কুটিরচর ইকোফার্ম` |
| Primary brand color | `#1F6B3A` Kutirchar Green |
| Page background | `#FAF7EF` Document Ivory |
| English wordmark font | Playfair Display 600 |
| Bengali font | Noto Sans Bengali 500 |
| Tone | Evidence-first · Auditor · No hype |
| Tagline | Smart Cattle & Circular Energy Ecosystem |

**Never write:** Kutir Char, Eco Farm, Kutirchar Smart Farm, Prangan Farm, Emon Farm

---

## Sub-Brand Naming

- Kutirchar EcoFarm **Dairy**
- Kutirchar EcoFarm **Energy**
- Kutirchar EcoFarm **Biogas**
- Kutirchar EcoFarm **Silage**
- Kutirchar EcoFarm **Training**
- Kutirchar EcoFarm **Dashboard**

---

## Tech Stack

- **React 18** + TypeScript
- **React Router v7** (`createBrowserRouter` / `RouterProvider`)
- **Tailwind CSS v4** (via @tailwindcss/vite)
- **Vite 6**
- **Google Fonts:** Playfair Display, Inter, Manrope, Noto Sans Bengali, Noto Serif Bengali

---

## File Structure

```
src/
├── app/
│   ├── App.tsx                         # RouterProvider entry
│   ├── routes.tsx                      # All routes (website + brand guide)
│   ├── brand.ts                        # Single source of truth: colors, fonts, contact
│   ├── components/
│   │   ├── layout/
│   │   │   └── Root.tsx                # Navbar + Footer + mobile menu
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProjectPage.tsx
│   │   │   ├── ProofPage.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── EcosystemPage.tsx
│   │   │   ├── DigitalPage.tsx
│   │   │   ├── UpdatesPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── BrandGuidePage.tsx      # Brand guide with sidebar (sections 00–13)
│   │   │   └── NotFound.tsx
│   │   ├── sections/
│   │   │   ├── Section00MasterLogo.tsx
│   │   │   ├── ...                     # Sections 01–12
│   │   │   └── Section13AIAgentTokens.tsx
│   │   └── shared/
│   │       ├── PhaseChip.tsx           # Now / Next / Later badges
│   │       └── Shared.tsx              # PageSection, Card, StopRule, CtaButton...
├── imports/
│   └── image.png                       # Master logo (486KB) — DO NOT MODIFY
└── styles/
    ├── fonts.css                       # Google Fonts
    ├── globals.css                     # Base resets
    └── theme.css                       # Design tokens
```

---

## GitHub Usage Notes

- `src/imports/image.png` is the master logo — commit as-is
- Never commit: `node_modules/`, `.env`, `private-docs/`, `nid/`, `legal-private/`
- No NID, PIN, bank account numbers, or sensitive identifiers ever in this repo
- The `__figma__entrypoint__.ts` is auto-generated — do not modify

---

## Brand Custodian

**Owner:** EMON HOSSAIN  
**Decision locked:** 21 June 2026  
**Contact:** info@kutircharecofarm.com  

This brand and website system is the official reference for all Kutirchar EcoFarm communications. The master logo icon is locked — it must not be modified without formal brand review.
