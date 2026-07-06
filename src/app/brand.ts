// ─── Kutirchar EcoFarm — Brand Constants ─────────────────────────────────────
// Single source of truth. All components read from here.

export const BRAND = {
  nameEn:    "Kutirchar EcoFarm",
  nameBn:    "কুটিরচর ইকোফার্ম",
  owner:     "Emon Hossain",
  tagline:   "Smart Cattle & Circular Energy Ecosystem",
  shortDesc: "Dairy · Biogas · Solar · Silage",
  phase:     "Verification & Foundation Phase",
  location: {
    village:  "Kutirchar",
    union:    "Bhadraghat",
    upazila:  "Kamarkhanda",
    district: "Sirajganj",
    country:  "Bangladesh",
    full:     "Kutirchar, Bhadraghat, Kamarkhanda, Sirajganj, Bangladesh",
  },
  contact: {
    email:    "info@kutircharecofarm.com",
    website:  "kutircharecofarm.com",
    whatsapp: "+8801700000000",
    phone:    "+8801700000000",
  },
  zoneA: "10 decimal private/core land",
  zoneB: "12 decimal non-private/ejmali — removable use only",
} as const;

export const COLORS = {
  kutircharGreen: "#1F6B3A",
  deepFarmGreen:  "#0B4F2A",
  fieldGreen:     "#4F9A3D",
  fieldMist:      "#EEF5EA",
  documentIvory:  "#FAF7EF",
  charcoalText:   "#1E2420",
  solarGold:      "#F2B544",
  riverBlue:      "#2E6F8E",
  soilBrown:      "#4A2F1B",
  bioOlive:       "#708238",
  riskRed:        "#B42318",
  govGray:        "#4B5563",
} as const;

export const FONTS = {
  serif:   "'Playfair Display', Georgia, serif",
  sans:    "'Inter', 'Manrope', sans-serif",
  bengali: "'Noto Sans Bengali', 'Noto Serif Bengali', sans-serif",
  mono:    "'Inter', monospace",
} as const;

// Phase chip colours
export const PHASE_COLORS = {
  Now:   { bg: "#f0f9f3", text: COLORS.kutircharGreen, border: "#c0ddc8", dot: COLORS.kutircharGreen },
  Next:  { bg: "#eff6fb", text: COLORS.riverBlue,      border: "#b8d4e0", dot: COLORS.riverBlue },
  Later: { bg: "#f5f6ee", text: COLORS.bioOlive,       border: "#cdd4a8", dot: COLORS.bioOlive },
} as const;
