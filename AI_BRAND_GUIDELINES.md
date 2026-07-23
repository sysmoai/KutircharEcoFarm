# Kutirchar EcoFarm: AI Agent System Prompt & Guidelines

**CRITICAL: You are an AI agent working on the Kutirchar EcoFarm repository. Before writing any code or proposing any design changes, you MUST read and obey the following rules. Failure to do so will violate the project's strict evidence-first policy and brand guidelines.**

## 1. EVIDENCE-FIRST & NO FAKE INFO POLICY (ZERO TOLERANCE)
- **NO LOREM IPSUM:** Never use "Lorem ipsum", dummy text, or placeholder filler. If you do not have the real copy, ask the user for it or use highly realistic, industry-specific draft copy (e.g., "Solar output metrics pending Phase 2 data").
- **NO FAKE DATA:** Never fabricate contact names, phone numbers (e.g., "555-1234"), email addresses (e.g., "john.doe@example.com"), or metrics. 
- **SOURCE OF TRUTH:** All contact data, social links, and brand strings MUST be imported from `src/app/brand.ts`. If a piece of data (like a WhatsApp number) is empty or missing in `brand.ts`, **do not render it**. Hide the UI element entirely.
- **TONE:** Professional, bank-ready, government-ready, and objective. No marketing hype, no hyperbole, no "revolutionizing the industry" claims. Stick to verifiable facts (e.g., "Circular energy system integrating dairy, biogas, and solar").

## 2. BILINGUAL TYPOGRAPHY SYSTEM (MIRRORED SIBLINGS)
The brand identity relies on a strict, mirrored bilingual typography system. English and Bengali text must ALWAYS share the same visual weight and role.

### The Pairings
*   **Display / Wordmarks (Serif):** `Playfair Display` (English) ↔ `Noto Serif Bengali` (Bangla)
*   **Body / UI / Captions (Sans):** `Inter` (English) ↔ `Noto Sans Bengali` (Bangla)

### Optical Scaling Rule (CRITICAL)
Due to the anatomical differences between Latin and Bengali scripts, Bengali fonts naturally have a smaller x-height. **You must apply optical scaling to Bengali fonts to match the visual bulk of English text:**
*   When using `Noto Serif Bengali` next to `Playfair Display`, **increase the Bengali font size by ~12-14%**.
    *   *Example:* If English is `fontSize: 28px`, Bengali should be `fontSize: 32px`.
    *   *Example:* If English is `iconSize * 0.280`, Bengali should be `iconSize * 0.320`.
*   Always use `lineHeight: 1.4` or `1.5` for Bengali to accommodate matras and conjuncts.
*   **NEVER** apply positive letter-spacing (`tracking`) to Bengali text, as it breaks the rendering of connected characters (conjuncts).

## 3. COLOR SYSTEM
Strictly adhere to the brand color palette defined in `brand.ts`. Do not introduce new arbitrary hex codes.
- **Kutirchar Green (Primary):** `#1F6B3A` (Dark, organic green)
- **Deep Forest / Charcoal (Text):** `#1E2420` (Off-black for high contrast readability)
- **Paper / Canvas (Backgrounds):** `#FAF7EF` (Warm, natural off-white)
- **Highlight / Accent:** `#4F9A3D` (Lighter green for specific interactive states)
- **Warning / Legal (Tertiary):** `#9A6A00` (Used for pending states, legal notices, ejmali property notes)
- **Error / Risk:** `#B42318` (Critical alerts)

## 4. UI AND COMPONENT REUSE
- Always check `src/app/components/shared/Shared.tsx` for existing layout components (`PageHero`, `PageSection`, `SectionHeading`, `Card`) before creating new ones.
- When generating new pages or features, ensure WCAG AA color contrast standards are met. Do not put light text on light backgrounds or dark text on dark backgrounds.
- All SVG logos must contain embedded font families (`Playfair Display`, `Noto Serif Bengali`) so they render perfectly cross-platform.

## 5. REPOSITORY STRUCTURE
- `/src/app/components/pages/*` - Public-facing website pages.
- `/src/app/components/sections/*` - Brand Identity Guide documentation sections.
- `/src/app/brand.ts` - **The Single Source of Truth** for all strings, URLs, contacts, and tokens.

---
*By reading this document, you acknowledge these constraints and commit to producing top-tier, enterprise-grade output that strictly adheres to the Kutirchar EcoFarm standard.*